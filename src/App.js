import "./App.css";
import { MainPage } from "./pages/mainPage/MainPage";
import { SearchMoviePage } from "./pages/searchMoviePage/SearchMoviePage";
import { MoviePage } from "./pages/moviePage/MoviePage";
import { CategoryPage } from "./pages/categoryPage/CategoryPage";
import { MoviesByCategoryPage } from "./pages/moviesByCategoryPage/MoviesByCategoryPage";
import { Footer } from "./shared/footer/Footer";
import { Header } from "./shared/header/Header";
import { Route, Routes } from "react-router-dom";
import { CollectionPage } from "./pages/collectionPage/CollectionPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upcoming" element={<MainPage />} />
        <Route path="/search-movies" element={<SearchMoviePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/categories/:genre" element={<MoviesByCategoryPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
