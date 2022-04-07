import { Link, useParams } from "react-router-dom";
import { apiKey } from "../../config/key";
import { useState, useEffect } from "react";
import { Container } from "./styles";

//vamos usar o parametro vindo da url para fazer uma requisição para api de detalhes do filme
//que tem como parâmetro o id do filme  

function Details() {
    
    const { id } = useParams();
    const urlDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    const all_image_path = "https://image.tmdb.org/t/p/w500";

    //criando mestado para receber e definir movie através da api
    const [ movie, setMovie ] = useState({});

    //useEffect lida com os efeitos da chamada da api
    //na página home o 2 param é um array vazio porque não há depedencias
    //a api vai ser consumida sempre que a página recarregar
    //agoara aqui na páginba de detalhes, temos o id com dependencia
    //e só queremos um nova busca na api quando o id da url for alterado
    useEffect(() => {
        //consumir api
        fetch(urlDetails)
            .then(response => response.json())
            .then(data => {
                //destructuring data
                const { title, overview, poster_path, release_date } = data;

                const movie = {
                    id,
                    title,
                    overview,
                    image: `${all_image_path}${poster_path}`,
                    release_date
                };
                
                setMovie(movie);
            })
    }, [id]);


    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.title} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Overview: {movie.overview}</span>
                    <span className="release-date">Release date: {movie.release_date}</span>
                    <Link to="/">
                    <button>Go back</button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Details;