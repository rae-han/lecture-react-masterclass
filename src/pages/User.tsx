import {Link, Outlet, useParams} from "react-router-dom";
import {users} from "../db/users";

const User = () => {
  const { userId } = useParams();
  console.log(userId)

  return (
    <div>
      {/*{users.find(user => user.id === parseInt(params.userId, 10)).name}*/}
      <p>user id is {userId}, name is {users[Number(userId)].name}</p>
      {/*<p>user id is {userId}, name is {users[parseInt(userId)].name}</p>*/}
      <hr />
      <Link to="followers">See followers</Link>
      {/* / 를 사용하지 않았기 때문에 현재 경로에서 뒤로 추가된다. */}
      <Outlet context={{
        nameOfUser: users[Number(userId)].name
      }} />
    </div>
  )
}

export default User;