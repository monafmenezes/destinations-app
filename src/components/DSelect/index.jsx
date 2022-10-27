import { Select } from "antd";

const DSelect = ({ options, placeholder, onChange }) => {
  const changes = (value) => {
    if (value) {
      onChange(value);
    }
  };
  return (
    <Select mode="multiple" placeholder={placeholder} onChange={changes}>
      {options.map((option) => (
        <Select.Option key={option.code} value={option.name}>
          {option.name_ptbr}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DSelect;
