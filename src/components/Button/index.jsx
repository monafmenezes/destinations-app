import { Button } from "antd";

const DButton = ({ name, onClick }) => {
  return (
    <Button
      type="primary"
      block
      danger
      style={{ marginTop: "10px" }}
      htmlType="submit"
    >
      {name}
    </Button>
  );
};

export default DButton;
