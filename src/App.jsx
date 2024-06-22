import { BrowserRouter } from "react-router-dom"
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => {
  return (
    <BrowserRouter>
      <PortfolioContainer />;
    </BrowserRouter>
  );
}

export default App;
