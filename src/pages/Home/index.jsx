import { Container, MovieList } from "./styles";

function Home() {
  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        <li>
          <a href="#">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_FMjpg_UX1000_.jpg"
              alt="Arrival"
            />
          </a>
          <span>Arrival</span>
        </li>
        <li>
          <a href="#">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_FMjpg_UX1000_.jpg"
              alt="Arrival"
            />
          </a>
          <span>Arrival</span>
        </li>
        <li>
          <a href="#">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_FMjpg_UX1000_.jpg"
              alt="Arrival"
            />
          </a>
          <span>Arrival</span>
        </li>
      </MovieList>
    </Container>
  );
}

export default Home;
