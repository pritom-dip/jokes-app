import Input from "../Common/Input";
import SearchIcon from "../../assets/images/search.png";
import { useState } from "react";

const Search = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="wrapper">
      <Input
        name="search"
        value={inputText}
        handleChange={setInputText}
        icon={SearchIcon}
        type="text"
        placeholder="Enter Text"
      />
    </div>
  );
};

export default Search;
