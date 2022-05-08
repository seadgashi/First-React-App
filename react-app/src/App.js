import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import AnotherLajmePage from './pages/AnotherLajmePage/AnotherLajmePage';
import AnotherSportPage from './pages/AnotherSportPage/AnotherSportPage';
import ListLajmPage from './pages/ListLajmPage/ListLajmPage';
import ListSportPage from './pages/ListSportPage/ListSportPage';
import SportPage from './pages/SportPage/SportPage';
import LajmeListPage from './pages/LajmeListPage/LajmeListPage';
import LajmePage from './pages/LajmePage/LajmePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element= {<AnotherLajmePage/>} />
            <Route path="/lajme" element= {<LajmePage />} />
            <Route path="/sport" element= {<AnotherSportPage />} />
            <Route path="/ekonomi" element= {<ListLajmPage/>} />
            <Route path="/sport/basketboll" element= {<ListSportPage/>} />
            <Route path="sport/futboll/:title" element= {<SportPage/>} />
            <Route path="bote/:title" element= {<LajmeListPage />} />
            <Route path="sport/bote/:title" element= {<LajmeListPage />} />
            <Route path="lajme/:title" element= {<LajmePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
