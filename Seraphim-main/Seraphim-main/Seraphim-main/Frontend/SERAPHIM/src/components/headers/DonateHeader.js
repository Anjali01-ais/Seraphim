
import { Helmet } from "react-helmet-async";
import "../../CSS/donate.css";

function DonateHeader() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Donate</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="stylesheet" href="CSS/donate.css" />
        <link rel="icon" href="images/donate.ico" type="image/x-icon" />
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

export default DonateHeader;