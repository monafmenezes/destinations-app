import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Title } from "./style";

const Header = () => {
  return (
    <Title>
      <Link to="/">Destinations</Link>
      <BiWorld size={30} color="#ff4d4f" />
    </Title>
  );
};

export default Header;
