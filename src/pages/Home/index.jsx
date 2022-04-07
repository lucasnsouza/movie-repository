import { Container, Movie, MovieList } from "./styles";
import { useState, useEffect } from "react";
import { apiKey } from "../../config/key";
import { Link } from "react-router-dom";

//vamos usar Link do router para enviar o id como parametro na url da proxima pagina

function Home() {
  const [movies, setMovies] = useState([]);
  const all_image_path = "https://image.tmdb.org/t/p/w500";

  //vai consumir a api sempre que a página for recarregada
  useEffect(() => {
    //consumir api...
    const urlApi = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {/* 
        usamos map e não foreach porque precisamos de um return para cada iteração no array movies
        no caso do foreach não haveria nenhum retorno         
         */}
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${all_image_path}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;
