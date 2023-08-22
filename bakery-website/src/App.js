import cover from "./Components/assets/cover.jpg";
import './index.css';
import './App.css';
import Call from './Components/Call';
//import { BrowserRouter } from 'react-router-dom/dist/umd/react-router-dom.development';
//url="./Components/assets/cover.jpg";
function App() {
  /*const mystyle={
    backgroundImage: `url(${cover})`,
    height:'100%',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    
  }*/
  return (
    
      <div className="app" /*style={mystyle}*/>
        <nav className="nav">
            <Link to='/menu'><a href='menu'>products</a></Link>
            <Link to='/contact'><a href='contact'>contact</a></Link>
            
        </nav>
      
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/Feed" element={<Feed/>} />
          <Route path="/Call" element={<Call/>} />
          <Route path="/contact" element={<Contact/>} />
          
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
