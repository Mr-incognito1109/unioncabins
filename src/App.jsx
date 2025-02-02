import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Whychooseus from './Components/Whychooseus/Whychooseus';
import Title from './Components/About/Title';
import Product from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import ContactPage from './Components/Contact/ContactPage';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import ProductList from './Components/ProductDetails/ProductList';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { products } from './data/productData';
import CAndW from './Components/CAndW/CAndW';
import NotFound from './Components/NotFound/NotFound';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import ClientSatisfaction from './Components/ClientSatisfaction/ClientSatisfaction';


const HomePage = () => (
  <>
    <Hero/>
    <div className='container'>
      <Title title='About us'/>
      <About/>
    </div>
    <Whychooseus/>
    <Product/>
    <ClientSatisfaction/>
    <Title subTitle='Get in Touch'/>
    <Contact/>
  </>
);

const App = () => {
  return (
    <Router>
    <ScrollTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CAndW/>
      <Footer/>
    </Router>
  );
}

export default App;