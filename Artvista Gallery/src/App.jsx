import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productlisting from './Pages/Productlisting';
import UserProfile from './pages/UserProfile';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={Productlisting} />
        <Route path="/profile" element={UserProfile} />
        <Route path="/cart" element={Cart} />
        <Route path="/:productSku" element={ProductDetail} />
      </Routes>
    </Router>
  );
}

export default App;
