import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ImagePage from '../pages/ImagePage';
import VideoPage from '../pages/VideoPage';


// This page does not have any FRONT-END code;
// All it has is: calling various pages;
function App() {
  return (
    <>
    <BrowserRouter>
      <Link to="/HomePage">Home</Link>
      <h1 className='Title-text'>API-IMG-Dk</h1>
      <Routes>
          <Route path = "/HomePage" element = {<HomePage />} />
          <Route path='/ImagePage' element = {<ImagePage/>} />
          <Route path = "/VideoPage" element = {<VideoPage />}/>
      </Routes>

    </BrowserRouter>
    </>
    
  )
}

export default App