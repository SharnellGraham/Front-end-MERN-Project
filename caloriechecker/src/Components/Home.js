import React, { useState } from "react";
import Title from "../Modules/Title";
import Tabs from "../Modules/Tabs";
import SearchBar from "../Modules/Home/SearchBar";
import SearchResult from "../Modules/Home/SearchResult";
import NutritionTitle from "../Modules/Home/NutritionTitle";
import axios from "axios";
import "../css/Home.css";

function Home(props) {
  const handleInput = props.handleInput
  const handleLogIn = props.handleLogIn
  const handleSignUp = props.handleSignUp
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchQuery = async (searchText) => {
    // TODO: Implement search functionality here and update searchResult state
    /* setSearchResult([{food_id: 1, brand_type: 'Brand A'}, {food_id: 2, brand_type: 'Brand B'}]); */
    await axios.get("http://localhost:4000/foods/searchFood?food=" + searchText)
      .then((res) => {
        console.log(res)
        setSearchResult(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Title />
      <Tabs handleInput={handleInput} handleLogIn={handleLogIn} handleSignUp={handleSignUp}/>
      <SearchBar handleSearchQuery={handleSearchQuery} />
      <SearchResult searchResult={searchResult} />
      <NutritionTitle />
    </div>
  );
}

export default Home;
