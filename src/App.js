import RoutesPages from "./routes";
import GlobalStyle from "./styles/global";
import "antd/dist/antd.css";
import { DestinationsProvider } from "./providers/destinations";
import { DataProvider } from "./providers/data";
import { UserProvider } from "./providers/user";

function App() {
  return (
    <>
      <DestinationsProvider>
        <DataProvider>
          <UserProvider>
            <GlobalStyle />
            <RoutesPages />
          </UserProvider>
        </DataProvider>
      </DestinationsProvider>
    </>
  );
}

export default App;
