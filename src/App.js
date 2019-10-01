import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
    return (
      <div>
        <Header />
        <Main movies={this.state.movies} />
        <Footer />
      </div>
    );
  }
}

export default App;
