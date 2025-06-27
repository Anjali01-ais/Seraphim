import { Helmet } from "react-helmet-async";
import "../../CSS/Future.css";

function FuturePlansHeader() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Future plans</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="CSS/Future.css" />
        <link rel="shortcut icon" href="images/future.ico" type="image/x-icon" />
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

export default FuturePlansHeader;