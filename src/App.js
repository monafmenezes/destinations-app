import RoutesPages from "./routes";
import GlobalStyle from "./styles/global";
import "antd/dist/antd.css";
import { DestinationsProvider } from "./providers/destinations";
import { DataProvider } from "./providers/data";

function App() {
  return (
    <>
      <DestinationsProvider>
        <DataProvider>
          <GlobalStyle />
          <RoutesPages />
        </DataProvider>
      </DestinationsProvider>
    </>
  );
}

export default App;
