import './App.css';
import { createContext, useState } from "react";
import Layout from './components/Layout';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import useFetch from './hooks/useFetch';

export const Context = createContext();

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [data] = useFetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')

  function addItem(item) {
    setCartItems([...cartItems, item])
  }

  function deleteItem(id) {
    const updatedCartItems = cartItems.filter(item => item.id !== id)
    setCartItems(updatedCartItems)
  }

  const values = {
    images: data,
    cartItems,
    addItem,
    deleteItem,
  }

  return (
    <Context.Provider value={values}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App;
