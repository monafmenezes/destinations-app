import { useContext } from "react";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import DSelect from "../../components/DSelect";
import DButton from "../../components/DButton";
import DInput from "../../components/DInput";
import Logo from "../../assets/Logo.jpg";
import { DestinationsContext } from "../../providers/destinations";
import { UserContext } from "../../providers/user";
import { SearchContext } from "../../providers/search";
import { Container, ContainerForm, ContainerImage, Content, Main } from "./style";


const Home = () => {
  const { countries, cities } = useContext(DestinationsContext);
  const { setUser } = useContext(UserContext);
  const { setSearchCities, setSearchCountries } =
    useContext(SearchContext);
 
  const navigate = useNavigate();

  const handleSubmit = async ({ name, email, phone, cpf, city, country }) => {
    const user = { name, email, phone, cpf };
    setUser(user);
    setSearchCities(city);
    setSearchCountries(country);
    navigate("/destinations");
  };

  return (
    <Container>
      

      <Main>
        <Content>
          <ContainerForm>
            <Form
              name="form"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinishFailed={(value) => console.log(value)}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              <DInput name="Nome" value="name" />
              <DInput name="Email" value="email" />

              <DInput name="Telefone" value="phone" />

              <DInput name="CPF" value="cpf" />

              <DSelect
                label="Países"
                name="country"
                placeholder="Selecione o país"
                options={countries}
              />

              <DSelect
                label="Cidades"
                name="city"
                placeholder="Selecione a cidade"
                options={cities}
              />
              <DButton name="Enviar" />
            </Form>
          </ContainerForm>
        </Content>

        <ContainerImage>
          <img src={Logo} alt="Mapa - destinos" />
        </ContainerImage>
      </Main>
      
    </Container>
  );
};

export default Home;
