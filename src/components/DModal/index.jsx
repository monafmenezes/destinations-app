import { Button, Image, Modal } from "antd";
import { useContext } from "react";
import { PhotoContext } from "../../providers/photo";

const DModal = ({ title, open, setOpen }) => {
  const { photo } = useContext(PhotoContext);
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={[]}
      title={title}
      centered
    >
      <Image
        width={200}
        src={photo.url}
        alt={photo.alt}
        style={{ marginBottom: "5px" }}
      />
      <p>{photo.alt}</p>
    </Modal>
  );
};

export default DModal;
