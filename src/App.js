import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allrest from './Components/AllRest/Allrest';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import View from './Components/ViewRest/View';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Routes>
          <Route path='/' element={<Allrest/>} />                    {/* localhost://3000 - view all resturants */}    
          <Route path='/view/:id' element={<View/>} />               {/* localhost://3000/view/1 - View Component */}
        </Routes>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
