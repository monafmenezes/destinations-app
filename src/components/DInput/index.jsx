import { Input, Form } from "antd";
import { Container } from "./style";

const DInput = ({name, value }) => {
  return (
    <Container>
      <Form.Item
        label={name}
        name={value}
        rules={[{ required: true, message: "Campo obrigatório" }]}
        style={{ width: "100%" }}
      >
        <Input />
      </Form.Item>
    </Container>
  );
};

export default DInput;
