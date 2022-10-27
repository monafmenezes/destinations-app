import { useContext } from "react";
import { DataContext } from "../../providers/data";
import { UserContext } from "../../providers/user";

const Destinations = () => {
  const { user } = useContext(UserContext);
  const { data } = useContext(DataContext);

  console.log(user, data);
  return (
    <div>
      <h1>Dastinations</h1>
    </div>
  );
};

export default Destinations;
