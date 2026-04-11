import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePagePage from './pages/HomePagePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ToolAndSkillPage from './pages/ToolAndSkillPage';
import PortfolioPage from './pages/PortfolioPage';
import PortoWebPage from './pages/PortoWebPage';
import PortoLandingPagePage from './pages/PortoLandingPagePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePagePage />}></Route>
        <Route path='/service' element={<ServicePage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/portfolio' element={<PortfolioPage />}></Route>
        <Route path='/toolsandskills' element={<ToolAndSkillPage />}></Route>
        <Route path='/porto-web' element={<PortoWebPage />}></Route>
        <Route path='/porto-landingpage' element={<PortoLandingPagePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
