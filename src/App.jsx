import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Products from './components/Products';
import Services from './components/Services';
import MyFooter from './components/MyFooter';

function App() {
  return (
      <div>
        <Navbar />
        <Home />
        <Services />
        <About />
        <Products />
        <Blog />
        <Newsletter />
        <MyFooter />
      </div>
  )
}

export default App
