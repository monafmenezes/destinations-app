import { Container, ContainerForm, Content, Main } from "./style";
import { useContext, useState } from "react";
import DInput from "../../components/DInput";
import Logo from "../../assets/Logo.jpg";
import DSelect from "../../components/DSelect";
import DButton from "../../components/Button";
import { Form, Input } from "antd";
import { DestinationsContext } from "../../providers/destinations";
import { UserContext } from "../../providers/user";
import { DataContext } from "../../providers/data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { countries, city } = useContext(DestinationsContext);
  const { addToUser } = useContext(UserContext);
  const { addToData } = useContext(DataContext);

  const navigate = useNavigate();

  const handleSubmit = ({ name, email, phone, cpf, country, city }) => {
    
    addToUser({ name, email, phone, cpf });
    addToData({country, city})
    navigate("/destinations")
  };

  return (
    <Container>
      <h1>Destinations</h1>

      <Main>
        <Content>
          <ContainerForm>
            <Form layout="vertical" onFinish={handleSubmit} >
              <Form.Item
                label="Nome"
                name="name"
                rules={[{ required: true, message: "Campo obrigatório" }]}
                style={{ width: "100%" }}
              >
                <Input/>
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Campo obrigatório" },
                  { type: "email", message: "Email inválido" },
                ]}
                style={{ width: "100%" }}
              >
                <Input/>
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  { required: true, message: "Campo obrigatório" },
                  { type: "phone", message: "Telefone inválido" },
                ]}
                style={{ width: "100%" }}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                label="CPF"
                name="cpf"
                rules={[{ required: true, message: "Campo obrigatório" }]}
                style={{ width: "100%" }}
              >
                <Input/>
              </Form.Item>

              <DSelect label="Países"  name="country"  placeholder="Selecione o país" options={countries} />
              
              <DSelect label="Cidades"  name="city"  placeholder="Selecione a cidade" options={city} />
              

              <DButton name="Enviar" />
            </Form>
          </ContainerForm>
        </Content>

        <Content>
          <img src={Logo} alt="Mapa - destinos" />
        </Content>
      </Main>
    </Container>
  );
};

export default Home;
