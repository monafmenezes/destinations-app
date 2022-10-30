import { Button } from "antd";
import { useContext, useState } from "react";
import DModal from "../DModal";
import pexels from "../../services/pexels";
import { PhotoContext } from "../../providers/photo";
import { Container, Title } from "./style";
import {
  BiFingerprint,
  BiMailSend,
  BiPhone,
  BiUser,
  BiWorld,
} from "react-icons/bi";

const Card = ({ name, email, phone, cpf, cities, countries }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { photo, setPhoto } = useContext(PhotoContext);
  const [title, setTitle] = useState("");

  const handlePhotos = (search) => {
    pexels
      .get("/v1/search", {
        params: {
          query: search,
          per_page: 10,
          page: 1,
        },
      })
      .then((res) => {
        const index = Math.floor(Math.random() * 9);
        console.log(res);
        const data = {
          alt: res.data.photos[index].alt,
          url: res.data.photos[index].src.original,
          id: res.data.photos[index].id,
        };
        setPhoto(data);
        setIsModalOpen(true);
        setTitle(search);
      });
  };

  return (
    <>
      <Container>
        <h3>
          <BiUser color="#ff4d4f" /> {name}
        </h3>
        <h4>
          <BiMailSend color="#ff4d4f" />
          {email}
        </h4>
        <h4>
          <BiPhone color="#ff4d4f" /> {phone}
        </h4>
        <h4>
          <BiFingerprint color="#ff4d4f" /> {cpf}
        </h4>

        <div>
          <Title>
            Países <BiWorld color="#ff4d4f" />
          </Title>
          <ul>
            {countries.map((country, index) => (
              <li key={index}>
                <Button
                danger
                  onClick={() => {
                    handlePhotos(country);
                  }}
                >
                  {country}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Title>
            Cidades <BiWorld color="#ff4d4f" />
          </Title>
          <ul>
            {cities.map((city, index) => (
              <li key={index}>
                <Button
                danger
                  onClick={() => {
                    handlePhotos(city);
                  }}
                >
                  {city}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      {photo && (
        <DModal title={title} open={isModalOpen} setOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default Card;
