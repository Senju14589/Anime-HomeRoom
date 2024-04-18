import './App.css';
import AnimeItem from './components/AnimeItem';
import AnimePost from './components/AnimePost';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import AppTitle from './components/AppTitle';
import animes from './data/Animes';
import React, { useState } from 'react';



function App() {
    const [seletedAnime, setSelectedAnime] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onAnimeOpenClick(theAnime) {
        setSelectedAnime(theAnime);
    }

    function onAnimeCloseClick() {
        setSelectedAnime(null);
    }

    const animeElements = animes.filter((anime) => {
        return anime.title.includes(searchText);
    }).map((anime, index) => {
        return <AnimeItem key={index} anime={anime} onAnimeOpenClick={onAnimeOpenClick} />;
    });

    let animePost = null
    if (!!seletedAnime) {
        animePost = <AnimePost anime={seletedAnime} onBgClick={onAnimeCloseClick} />
    }
    return (
        <div className="App">
            <AppHeader />
            <AppTitle />
            <section className='app-section'>
                <div className='app-container'>
                    <AppSearch value={searchText} onValueChang={setSearchText} />
                    <div className="app-grid">
                        {animeElements}
                    </div>
                </div>
            </section>
            {animePost}
        </div>
    );
}

export default App;
