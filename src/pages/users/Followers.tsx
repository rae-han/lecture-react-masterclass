import {useOutletContext} from "react-router-dom";

const Followers = () => {
  const { nameOfUser } = useOutletContext<{ nameOfUser: string }>();

  return <div>followers {nameOfUser}</div>
}

export default Followers;