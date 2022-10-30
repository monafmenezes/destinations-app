import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  svg {
    margin-right: 5px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      margin: 5px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  align-self: flex-start;

  svg {
    margin-left: 5px;
  }
`;
