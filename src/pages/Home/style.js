import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      align-self: flex-start;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  img {
    width: 400px;
    height: 400px;
    max-width: 500px;
    border-radius: 50%;
    border: 2px solid var(--red);
  }
`;

export const ContainerForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  label {
    align-self: flex-start;
  }
`;
