import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css'
import Header from './Component/Header'
import Home from "./Component/Home";
import DetailsPage from './Component/DetailsPage';
import Bookmark from './Bookmark';

function App() {
 

  return (
    <>
      <Toaster/>
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route path='/news/:id' element={<><Header/><DetailsPage/></>}/>
          <Route path='/bookmark' element={<><Header/><Bookmark/></>}/>

        </Routes>
      </Router>
  
    </>
  )
}

export default App
