import { useEffect, useState } from "react";
import Subhead from "./Subhead";

const Head = ({getValuesFromHead}) => {
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   console.log(search);
  // }, [search]);

  return (
    <div>
      <div className="head">
        <div className="title">
          <h1>Search Properties to rent</h1>
        </div>

        <div className="search-bar">
          <form action="/" className="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search with Search Bar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>

      <div style={{padding: '0 5rem'}}>
        <Subhead searchValue={search} get={getValuesFromHead}/>
      </div>
    </div>
  );
};

export default Head;
