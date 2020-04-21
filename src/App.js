import React from "react";
import axios from "axios";
import Movie from "./Movie";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(this.state.movies);
  };
  componentDidMount() {
    this.getMovies();
  }
  // // Second Way
  // renderMovie() {
  //   const { movies } = this.state;
  //   return movies.map((movie) => {
  //     return <Movie title={movie.title} />;
  //   });
  // }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {
          isLoading
            ? "Loading..."
            : movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                  />
                );
              }) /*this.renderMovie()*/
        }
      </div>
    );
  }
}

export default App;
