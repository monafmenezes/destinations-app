import { Select } from "antd";

const DSelect = ({ options, placeholder }) => {
  return (
    <Select mode="multiple" placeholder={placeholder}>
      {options.map((option) => (
        <Select.Option key={option.code} value={option.name}>
          {option.name_ptbr}
        </Select.Option>
      ))}
    </Select>
  );
};

export default DSelect;
