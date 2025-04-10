import requests from "./api/requests";
import './App.css';
import Nav from "./components/Nav";
import Banner from './components/Banner';
import Row from "./components/Row";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>

      <Row
        title="Trending Now"
        id="TN"
        fetchUrl={requests.fetchTrending}
      ></Row>
      
      <Row
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      ></Row>

      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      ></Row>

      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      ></Row>
      <Footer></Footer>
    </div>
  );
};

export default App;
