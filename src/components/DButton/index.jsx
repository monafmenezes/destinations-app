import { Button } from "antd";

const DButton = ({ name }) => {
  return (
    <Button
      type="primary"
      block
      danger
      style={{ marginTop: "5px", marginBottom: '10px' }}
      htmlType="submit"
    >
      {name}
    </Button>
  );
};

export default DButton;
