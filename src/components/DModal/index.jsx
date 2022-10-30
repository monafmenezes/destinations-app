import { Image, Modal } from "antd";
import { useContext } from "react";
import { PhotoContext } from "../../providers/photo";
import { Text } from "./style";

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
      <>
        <Image
          width={200}
          src={photo.url}
          alt={photo.alt}
          style={{ marginBottom: "5px" }}
        />
        <Text>{photo.title}</Text>
      </>
    </Modal>
  );
};

export default DModal;
