import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../providers/search";
import { UserContext } from "../../providers/user";
import Card from "../../components/Card";

import pexels from "../../services/pexels";
import { Container } from "./style";

const Destinations = () => {
  const { user } = useContext(UserContext);
  const { searchCities, searchCountries } = useContext(SearchContext);
  return (
    <Container>
      <Card
        name={user.name}
        email={user.email}
        phone={user.phone}
        cpf={user.cpf}
        cities={searchCities}
        countries={searchCountries}
      />
    </Container>
  );
};

export default Destinations;
