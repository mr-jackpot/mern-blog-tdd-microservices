import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage/home';
import BlogPage from './pages/BlogPage/blogs';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
