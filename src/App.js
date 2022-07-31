import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Index from "./components/indexPage/Index";
import Home from "./pages/home/Home";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes} from 'react-router-dom';

const AppContainer = styled.div`

`;

function App() {
  return (
    <AppContainer className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
