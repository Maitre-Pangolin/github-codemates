import { useEffect, useState } from "react";

const RateAPI = () => {
  const [searchRate, setSearchRate] = useState({});
  const [coreRate, setCoreRate] = useState({});
  const [error, setError] = useState(undefined);

  useEffect(() => {
    fetch("https://api.github.com/rate_limit?")
      .then((response) => response.json())
      .then((data) => {
        setSearchRate(data);
      })
      .catch((err) => setError(err.message));

    fetch("https://github-project-backend.herokuapp.com/rate")
      .then((response) => response.json())
      .then((data) => {
        setCoreRate(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (searchRate.resources && coreRate.resources)
    return (
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        <h2>API Stats</h2>
        <h2>CORE (From server API token)</h2>
        <p>Limit : {coreRate.resources.core.limit}</p>
        <p>Remaining : {coreRate.resources.core.remaining}</p>
        <h2>SEARCH</h2>
        <p>Limit : {searchRate.resources.search.limit}</p>
        <p>Remaining : {searchRate.resources.search.remaining}</p>
        <h1>{error}</h1>
      </div>
    );
  return <h1>{error}</h1>;
};

export default RateAPI;
