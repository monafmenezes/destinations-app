import { Container, ContainerForm, Content, Main } from "./style";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import { cpfValid, phoneValid } from "../../services/regex";
import DInput from "../../components/DInput";
import Logo from "../../assets/Logo.jpg";
import DSelect from "../../components/DSelect";
import DButton from "../../components/Button";
import { Form } from "antd";
import { DestinationsContext } from "../../providers/destinations";

const Home = () => {
  const { countries, city } = useContext(DestinationsContext);

  return (
    <Container>
      <h1>Destinations</h1>

      <Main>
        <Content>
          <ContainerForm>
            <Form layout="vertical">
              <Form.Item
                label="Nome"
                name="name"
                rules={[{ required: true, message: "Campo obrigatório" }]}
                style={{ width: "100%" }}
              >
                <DInput label="Nome" placeholder="Digite seu nome" />
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
                />
              </Form.Item>

              <Form.Item
                label="CPF"
                name="cpf"
                rules={[{ required: true, message: "Campo obrigatório" }]}
                style={{ width: "100%" }}
              >
                <DInput label="CPF" placeholder="Digite seu CPF" />
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
                  label="Países"
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
                  label="Cidades"
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
