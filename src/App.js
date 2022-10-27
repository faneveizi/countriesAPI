import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AllCountries from "./components/AllCountries/AllCountries";
import CountriesInfo from "./components/CountriesInfo/CountriesInfo";
import ChartBar from "./components/Charts/ChartBar";
import { useRef } from "react";
import Footer from "./components/Footer/Footer";
import FooterButton from "./components/Footer/FooterButton";
function App(props) {
  const [populationData, setPopulationData] = useState({
    labels: [
      "World",
      "China",
      "India",
      "USA",
      "Indonesia",
      "Pakistan",
      "Brazil",
      "Nigeria",
      "Bangladesh",
      "Russia",
      "Mexico",
    ],
    datasets: [
      {
        label: "Population",
        data: [
          7693165599, 1402112000, 1380004385, 329484123, 273523621, 220892331,
          212559409, 206139587, 164689383, 144104080, 128932753,
        ],
        backgroundColor: ["orange"],
      },
    ],
  });
  const [languagesData, setLanguagesData] = useState({
    labels: [
      "English",
      "French",
      "Arabic",
      "Spanish",
      "Portuguese",
      "Russian",
      "Dutch",
      "German",
      "Chinese",
      "Serbian",
    ],
    datasets: [
      {
        label: "Countries",
        data: [91, 45, 25, 24, 10, 8, 8, 7, 5, 4],
        backgroundColor: ["orange"],
      },
    ],
  });

  const ref = useRef(null);
  const [showPopulationChart, setShowPopulationChart] = useState(true);
  const populationIsShown = () => {
    setShowPopulationChart((current) => !current);
  };

  const Button = () => {
    const handleClick = () => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
      <div align="center" >
        <button id="scroll" type="button" onClick={handleClick}>
          Go to chart
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <h1 align="center">World Countries Data</h1>
          <Button />
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountriesInfo />} />
        </Routes>
        <div>
          <Footer />
          <FooterButton ref={ref} onClick={populationIsShown}>
            {props.children}
          </FooterButton>
        </div>
        <div style={{ width: 800, marginLeft: 100 }}>
          {showPopulationChart ? (
            <ChartBar chartData={populationData} />
          ) : (
            <ChartBar chartData={languagesData} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
