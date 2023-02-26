import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Info from "./components/Info/Info";
import Logo from "./assets/Logo.png";
import Map from "./components/Map/Map";
function App() {
  //************************* APP STATE    *********************** */

  const [info, setInfo] = useState();
  const [error, setError] = useState("");

  //************************* FETCHING DATA *********************** */
  const fetchIssInfoHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://api.wheretheiss.at/v1/satellites/25544"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      // console.log(data);
      setInfo(data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  //******************** FETCHING DATA AUTOMATICALLY ************ */
  useEffect(() => {
    fetchIssInfoHandler();
    const interval = setInterval(() => {
      fetchIssInfoHandler();
    }, 5000);
    return () => clearInterval(interval);
  }, [fetchIssInfoHandler]);

  let content = "No information! Something went wrong!";
  if (error) {
    content = { error };
  } else if (info) {
    content = "";
  }

  return (
    <div className="App">
      <p className="error_message">{content}</p>
      {info && (
        <div className="card">
          <h1 className="title">{info.name.toUpperCase()}</h1>
          <div className="card__top">
            <Info info={info} fetchData={fetchIssInfoHandler} />
            <img src={Logo} alt="Iss" className="image" />
          </div>
          <div className="card__bottom">
            <Map info={info} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
