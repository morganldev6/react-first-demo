import React from "react";
import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import Movie from "./components/Movie";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const dataURL = "http://localhost/wordpress-demo/wp-json/wp/v2/movies";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res
        });
      });
  }

  render() {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie movie={movie} index={index} />;
    });

    return (
      <div>
        <h2>Star Wars Movies</h2>
        {movies}
      </div>
    );
  }
}

export default App;
