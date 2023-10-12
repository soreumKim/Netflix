import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Navigation from './component/Navigation';
import TvSeries from './pages/TvSeries';
import TvDetail from './pages/TvDetail';
import LoginPage from './pages/LoginPage';

// 1. 3개의 페이지를 생성
// 2. 홈페이지에서는 대표 배너를 볼 수 있다
// 3. 3가지 섹션의 영화를 확인 가능. (popular/ top lated/ upcoming)
// 4. 각 영화에 마우스를 올리면 제목/장르/점수/인기도/청불여부 정보 제공
// 5. 영화를 슬라이드로 넘길 수 있다

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvs' element={<TvSeries />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
        <Route path='/tvs/:id' element={<TvDetail />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
