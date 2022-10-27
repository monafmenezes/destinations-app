import { Container, ContainerForm, Content, Main } from "./style";
import { useContext, useState } from "react";
import DInput from "../../components/DInput";
import Logo from "../../assets/Logo.jpg";
import DSelect from "../../components/DSelect";
import DButton from "../../components/Button";
import { Form } from "antd";
import { DestinationsContext } from "../../providers/destinations";
import { UserContext } from "../../providers/user";
import { DataContext } from "../../providers/data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { countries, city } = useContext(DestinationsContext);
  const { addToUser } = useContext(UserContext);
  const { addToData } = useContext(DataContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [myCountries, setMyCountries] = useState([]);
  const [myCities, setMyCities] = useState([]);

  const navigate = useNavigate();

  console.log(myCountries);

  const handleSubmit = () => {
    addToUser({ name, email, phone, cpf });
    addToData({myCountries, myCities})
    navigate("/destinations")
  };

  return (
    <Container>
      <h1>Destinations</h1>

      <Main>
        <Content>
          <ContainerForm>
            <Form layout="vertical" submit={() => handleSubmit} >
              <Form.Item
                label="Nome"
                name="name"
                rules={[{ required: true, message: "Campo obrigatório" }]}
                style={{ width: "100%" }}
              >
                <DInput
                  label="Nome"
                  placeholder="Digite seu nome"
                  onChanges={setName}
                />
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
                <DInput
                  label="Email"
                  type="email"
                  placeholder="Digite seu email"
                  onChanges={setEmail}
                />
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
                <DInput
                  label="Telefone"
                  type="phone"
                  placeholder="Digite seu telefone"
                  onChanges={setPhone}
                />
              </Form.Item>

              <Form.Item
                label="CPF"
                name="cpf"
                rules={[{ required: true, message: "Campo obrigatório" }]}
                style={{ width: "100%" }}
              >
                <DInput
                  label="CPF"
                  placeholder="Digite seu CPF"
                  onChanges={setCpf}
                />
              </Form.Item>

              <Form.Item
                label="Países"
                name="country"
                style={{ width: "100%" }}
                rules={[
                  {
                    required: true,
                    message: "Campo obrigatório",
                  },
                ]}
              >
                <DSelect
                  placeholder="Selecione o país"
                  options={countries}
                  onChanges={setMyCountries}
                  data={myCountries}
                />
              </Form.Item>

              <Form.Item
                label="Cidades"
                name="city"
                rules={[{ required: true, message: "Campo obrigatório" }]}
                style={{ width: "100%" }}
              >
                <DSelect
                  placeholder="Selecione a cidade"
                  options={city}
                  onChanges={setMyCities}
                  data={myCities}
                />
              </Form.Item>

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
