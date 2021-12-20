import './App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Product from './components/products';
import ActiveCategory from './components/activeCategory';
import Cart from './components/cart'

function App() {
  return (
    <>
      <Header />
      <Cart />
      <Categories />
      <ActiveCategory />
      <Product />
      <Footer />
    </>
  );
}

export default App;