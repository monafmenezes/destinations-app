import { Input } from "antd";
import { Container } from "./style";

const DInput = ({ label, placeholder, error = null }) => {
  return (
    <Container>
      <Input
        status={error && error}
        placeholder={error ? error : placeholder}
      />
    </Container>
  );
};

export default DInput;
