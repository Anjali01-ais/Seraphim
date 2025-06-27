 const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user'); 

const app = express();
const PORT = 5000;

//  Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(bodyParser.json());

//  MongoDB Connect
mongoose.connect('mongodb://127.0.0.1:27017/seraphim-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(' MongoDB Connected'))
.catch((err) => console.error(' MongoDB Error:', err));

//  Default Route
app.get('/', (req, res) => {
  res.send(' Backend is running!');
});

//  Register Route
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(' Register hit:', req.body);

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    return res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error(' Error during registration:', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

//  Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(' Login hit:', req.body);

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(' Error during login:', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

//  Start Server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});

