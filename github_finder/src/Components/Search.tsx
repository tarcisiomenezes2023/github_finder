type SearchProps = {
    loadUser: (userName: string) => Promise<void>
};

import { useState } from "react";

import { BsSearch } from "react-icons/bs"

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

  return (
    <div>
      <h2>Search for user:</h2>
      <p>Know their best repositories</p>
      <div>
        <input type='text' placeholder='Writte the user name'
         onChange={(e) => setUserName(e.target.value)}/>
        <button onClick={() => loadUser(userName)}>
            <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search
