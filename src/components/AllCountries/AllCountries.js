import React, { useState, useEffect, useReducer } from "react";
import { apiURL } from "../Utils/Api";

import Search from "../Search/Search";

import { Link } from "react-router-dom";

const countriesReducer = (state, action) => {
  if (action.type === 'DATA'){
    return { value: action.val }
  }
}

const AllCountries = (props) => {

  const [countriesState, dispatchCountries] = useReducer(countriesReducer, {countriesState: []})
  // const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  console.log(countriesState, 'countries state')
  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiURL}/all`);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      dispatchCountries({type: 'DATA', val: data});
      console.log(data);
      // setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    } 
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);

      if (!res.ok) {
        throw new Error("The country was not found!");
      }
      const data =  await await res.json();
      dispatchCountries({type: 'DATA', val: data})
      // setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      <div className="all__country__wrapper">
        <div className="country__top">
          <div className="search">
            <Search onSearch={getCountryByName} />
          </div>
        </div>
        {/* <div>
          <Button />
        </div> */}

        <div className="country__bottom">
          {isLoading && !error && <h4>Loading...</h4>}
          {error && !isLoading && <h4>{error}</h4>}

          {countriesState.value?.map((country, index) => (
            <Link to={`/country/${country.name.common}`} key={index}>
              <div className="country__card">
                <div className="country__img">
                  <img src={country.flags.png} alt="" />
                </div>
                <div className="country__data">
                  <h3>{country.name.common}</h3>
                  <h6>
                    {" "}
                    Population:{" "}
                    {new Intl.NumberFormat().format(country.population)}
                  </h6>
                  <h6>Capital: {country.capital}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <div>
        <Footer />
        <FooterButton ref={ref}>{props.children}</FooterButton>
      </div> */}
    </>
  );
};

export default AllCountries;
