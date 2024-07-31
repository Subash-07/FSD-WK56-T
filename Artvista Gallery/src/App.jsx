import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import UserProfile from './pages/UserProfile';
import Cart from './pages/Cart';
import ProductInfo from './pages/ProductInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ProductListing} />
        <Route path="/profile" element={UserProfile} />
        <Route path="/cart" element={Cart} />
        <Route path="/:productSku" element={ProductInfo} />
      </Routes>
    </Router>
  );
}

export default App;



