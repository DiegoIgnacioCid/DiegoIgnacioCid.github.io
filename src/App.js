import logo from './logo.svg';
import './App.css';
import Rutas from './Routes/Rutas';
import GlobalContextProvider from './Context/GlobalContextProvider';


function App() {
  return (
    <>
    <GlobalContextProvider>
        <Rutas/>
    </GlobalContextProvider>
    </>
  );
}

export default App;
