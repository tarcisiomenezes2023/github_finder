import Search from "../Components/Search"
import { UserProps } from "../types/user"; 

import { useState } from "react" 

const Home = () => {

    const [user, setUser] = useState<UserProps | null>(null);

    const loadUser = async(userName) => {

        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json();

        console.log(data)

    }
  return (
    <div>
      <Search loadUser={loadUser}/>
    </div>
  )
}

export default Home

