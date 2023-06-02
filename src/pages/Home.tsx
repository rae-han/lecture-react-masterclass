import {Link, useSearchParams} from "react-router-dom";
import { users } from "../db/users";


const HomePage = () => {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log(readSearchParams.get('value'))

  // setSearchParams({
  //   value: '123'
  // })

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage;