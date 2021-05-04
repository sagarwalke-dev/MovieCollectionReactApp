import React from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import movieData from "./movieData";

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Card
          moviePoster={movieData[0].moviePoster}
          genre={movieData[0].genre}
          title={movieData[0].title}
          link={movieData[0].link}
        />
        <Card
          moviePoster={movieData[1].moviePoster}
          genre={movieData[1].genre}
          title={movieData[1].title}
          link={movieData[1].link}
        />
        <Card
          moviePoster={movieData[2].moviePoster}
          genre={movieData[2].genre}
          title={movieData[2].title}
          link={movieData[2].link}
        />
        <Card
          moviePoster={movieData[3].moviePoster}
          genre={movieData[3].genre}
          title={movieData[3].title}
          link={movieData[3].link}
        />
        <Card
          moviePoster={movieData[4].moviePoster}
          genre={movieData[4].genre}
          title={movieData[4].title}
          link={movieData[4].link}
        />
        <Card
          moviePoster={movieData[5].moviePoster}
          genre={movieData[5].genre}
          title={movieData[5].title}
          link={movieData[5].link}
        />
        <Card
          moviePoster={movieData[6].moviePoster}
          genre={movieData[6].genre}
          title={movieData[6].title}
          link={movieData[6].link}
        />
        <Card
          moviePoster={movieData[7].moviePoster}
          genre={movieData[7].genre}
          title={movieData[7].title}
          link={movieData[7].link}
        />
        <Card
          moviePoster={movieData[8].moviePoster}
          genre={movieData[8].genre}
          title={movieData[8].title}
          link={movieData[8].link}
        />
        <Card
          moviePoster={movieData[9].moviePoster}
          genre={movieData[9].genre}
          title={movieData[9].title}
          link={movieData[9].link}
        />
        <Card
          moviePoster={movieData[10].moviePoster}
          genre={movieData[10].genre}
          title={movieData[10].title}
          link={movieData[10].link}
        />
      </div>
      <Footer />
    </>
  );
}
export default App;
