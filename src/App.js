import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App;
