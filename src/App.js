// import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Product from './components/products';
import ActiveCategory from './components/activeCategory';

function App() {
  return (
    <>
    <Header/>
       <Categories/>
        <ActiveCategory/>
        <Product/>
    <Footer/>
    </>
  );
}

export default App;