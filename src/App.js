import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Rotas from './Rotas/Rotas';
import { useState } from 'react';
import Header1 from './components/Header1/Header1';


// GABRIELA GEORG, EDUARDA, JÚLIA, MARIANA E PEDRO - 3AM

function App() {
  const [news, setNews] = useState([])


  return (
    <>
    {/* <Header1/> */}
    <ChakraProvider>
      <Rotas news={news} setNews={setNews}/> 
    </ChakraProvider>

    </>
  );
}

export default App;
