import { TextField } from "@mui/material";
import React from "react";
import "./App.css";
import DataTable from "./components/table";
import { FetchCountriesData } from "./helpers/FetchCountriesData";

function App() {
  const [filter, setFilter] = React.useState<string>("");
  const [data, setData] = React.useState<Object>();

  React.useEffect(() => {
    (async function getData() {
      const response = await FetchCountriesData(filter);
      setData(response);
    })();
  }, [filter]);
  return (
    <div className="App">
      <h3>Country Search App</h3>
      <TextField
        id="standard-basic"
        label="Country Code"
        variant="standard"
        type="text"
        placeholder="Search Code"
        data-testid="searchInput"
        inputProps={{
          maxLength: 2,
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFilter(e.target.value.toUpperCase());
        }}
      />
      {data && <DataTable countries={data} />}
    </div>
  );
}

export default App;
