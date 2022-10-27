import { Input } from "antd";
import { Container } from "./style";

const DInput = ({ placeholder, error = null, onChange }) => {
  return (
    <Container>
      <Input
        status={error && error}
        placeholder={error ? error : placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

export default DInput;
