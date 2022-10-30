import RoutesPages from "./routes";
import GlobalStyle from "./styles/global";
import "antd/dist/antd.css";
import { DestinationsProvider } from "./providers/destinations";
import { UserProvider } from "./providers/user";
import { SearchProvider } from "./providers/search";
import { PhotoProvider } from "./providers/photo";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <DestinationsProvider>
        <SearchProvider>
          <UserProvider>
            <PhotoProvider>
              <Header/>
              <GlobalStyle />
              <RoutesPages />
              <Footer/>
            </PhotoProvider>
          </UserProvider>
        </SearchProvider>
      </DestinationsProvider>
    </>
  );
}

export default App;
