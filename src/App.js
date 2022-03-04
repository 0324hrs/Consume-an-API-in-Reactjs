import './App.css';
import Navbar from './Navbar';
import HomeScreen from './Body';
import Footer from './Footer';
import {BrowserRouter,Route, Routes} from 'react-router-dom'

import OrderScreen from './screens/OrderScreen'
import ContactUs from './screens/ContactUs'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <hr/>
      <Routes>
      <Route path='/' element={<HomeScreen/>} exact/>
      <Route path='/orders' element={<OrderScreen/>} />
      <Route path='/contacts' element={<ContactUs/>} />
      </Routes>
      <hr/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
