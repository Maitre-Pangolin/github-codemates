import { useEffect, useState } from "react";

const RateAPI = () => {
  const [rate, setRate] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/rate_limit?")
      .then((response) => response.json())
      .then((data) => {
        setRate(data);
        console.log(data);
      });
  }, []);

  if (rate.resources)
    return (
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        <h2>API Stats</h2>
        <h2>CORE</h2>
        <p>Limit : {rate.resources.core.limit}</p>
        <p>Remaining : {rate.resources.core.remaining}</p>
        <h2>SEARCH</h2>
        <p>Limit : {rate.resources.search.limit}</p>
        <p>Remaining : {rate.resources.search.remaining}</p>
      </div>
    );
  return null;
};

export default RateAPI;
