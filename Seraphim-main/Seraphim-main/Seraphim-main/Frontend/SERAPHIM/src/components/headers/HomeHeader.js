import { Helmet } from "react-helmet-async";
import "../../CSS/index.css";

function HomeHeader() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Seraphim - Home</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="CSS/index.css" />
        <link rel="shortcut icon" href="images/home.ico" type="image/x-icon" />
      </Helmet>

      <div className="header">
        <div className="logo-container">
          <a href="#">
            <img src="images/logo.jpg" alt="Seraphim logo" className="logo" />
          </a>
        </div>
        <div className="text-container">
          <a id="A1" href="#">
            <h1 className="Header-title">Seraphim</h1>
            <h2 className="Header-title">A Social Awareness Club</h2>
          </a>
          <a id="A2" href="https://iiitl.ac.in/">
            <p>Indian Institute of Information Technology, Lucknow</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;