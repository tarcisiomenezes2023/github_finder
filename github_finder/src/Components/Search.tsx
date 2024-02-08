type SearchProps = {
    loadUser: (userName: string) => Promise<void>
};

import classes from './Search.module.css';
import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs"

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName)
        }
    }; 

  return (
    <div className={classes.search}>
      <h2>Search for user:</h2>
      <div className={classes.search_container}>
        <input type='text' placeholder='Writte the user name'
         onChange={(e) => setUserName(e.target.value)}
         onKeyDown={handleKeyDown}
         />
        <button onClick={() => loadUser(userName)}>
            <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search
