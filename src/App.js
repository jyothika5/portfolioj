
import './App.css';
import styled, { ThemeProvider} from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./" 
import { darkTheme } from './util/utils';

const Body = styled.div`
   background-color: ${({ theme }) => theme.bg};
   width: 100%;
   height: 100%;
   overflow-x: hidden;
   `;

function App() {
  return (
   <ThemeProvider theme={darkTheme}>
    <Navbar/>
    <body>
      <Hero />
      <Skills/>
    </body>
   </ThemeProvider>
  );
}

export default App;
