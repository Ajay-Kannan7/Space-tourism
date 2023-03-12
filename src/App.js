import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './home/home';
import CrewPage from './crew/crew';
import DestinationPage from './destination/destination';
import TechnologyPage from './technology/technology';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/destination" element={<DestinationPage/>}></Route>
          <Route path="/crew" element={<CrewPage/>}></Route>
          <Route path="/technology" element={<TechnologyPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
