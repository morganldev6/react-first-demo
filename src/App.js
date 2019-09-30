import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  fetchPostData() {
    fetch(`http://localhost/wordpress-demo/wp-json/wp/v2/movies?per_page=100`)
      .then(response => response.json())
      .then(myJSON => {
        // Logic goes here
        console.log(myJSON);
        console.log("it worked");
        this.setState({ movies: myJSON });
      });
  }

  componentDidMount() {
    console.log("component mounted");
    this.fetchPostData();
  }

  render() {
    return (
      <React.Fragment>
        <Header title="WordPress Headless CMS with a React Frontend WUT" />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
