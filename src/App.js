import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import request from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchurl={request.fetchNetflixOriginals} />
      <Row title="NetflixOrginals" fetchurl={request.fetchNetflixOriginals}/>
      <Row title="TopRated" fetchurl={request.fetchTopRated}/>
      <Row title="Trending" fetchurl={request.fetchTrending}/>
      <Row title="ComedyMovies" fetchurl={request.fetchComedyMovies}/>
      <Row title="ActionMovies" fetchurl={request.fetchActionMovies}/>
      <Row title="RomanceMovies" fetchurl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchurl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;