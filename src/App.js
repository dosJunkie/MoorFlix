import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Adventure" fetchUrl={requests.fetchAdventure} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Family" fetchUrl={requests.fetchFamily} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy} />
      <Row title="History" fetchUrl={requests.fetchHistory} />
      <Row title="Music" fetchUrl={requests.fetchMusic} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery} />
      <Row title="Sci-Fi" fetchUrl={requests.fetchSciFi} />
      <Row title="Thrillers" fetchUrl={requests.fetchThriller} />
      <Row title="War" fetchUrl={requests.fetchWar} />
      <Row title="Western" fetchUrl={requests.fetchWestern} />
    </div>
  );
}

export default App;
