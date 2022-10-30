import { Input, Form, message } from "antd";
import { Container } from "./style";

const DInput = ({
  name,
  value,
  validated = null,
  message = null,
  max = null,
}) => {
  return (
    <Container>
      <Form.Item
        label={name}
        name={value}
        min={max}
        rules={[
          {
            required: true,
            message: `Campo obrigatório, digite um ${name} válido`,
            max: max,
            min: max,
          },
          { type: validated, message: message },
        ]}
        style={{ width: "100%" }}
      >
        <Input />
      </Form.Item>
    </Container>
  );
};

export default DInput;
