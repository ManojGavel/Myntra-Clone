// this is the main file of the project
import { useEffect, useState } from 'react';
import './App.css';
import NavHamburger from './Componetns/Header/Hamburger/NavHamburger';
import Header from './Componetns/Header/Header';
import { useContextReducer } from './context/Context';


function App() {
  const [state,] = useContextReducer();
  const  [isHamburgerOpen,setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    console.log(state);
    setIsHamburgerOpen(state.isHamburgerOpen);
  }, [state]);
  return (
    <div className="App">
     {isHamburgerOpen&& <NavHamburger />}
      <Header />
    </div>
  );
}

export default App;
