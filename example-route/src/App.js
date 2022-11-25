import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './pages/Layout.js'
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blogs';
import Contact from './pages/Contact';
import Nopage from './pages/Nopage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='blogs' element={<Blog/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<Nopage/>}/>
      
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
