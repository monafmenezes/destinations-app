import { Form, Select } from "antd";

const DSelect = ({ options, placeholder, label, name }) => {
  
  return (
    <Form.Item label={label} name={name} style={{ width: "100%" }} rules={[{required: true, message: "Campo obrigatório",}]}>

    <Select mode="multiple" placeholder={placeholder}>
      {options.map((option) => (
        <Select.Option key={option.code} value={option.name}>
          {option.name_ptbr}
        </Select.Option>
      ))}
    </Select>
    </Form.Item>
  );
};

export default DSelect;
