import "./CSS/AnimeItem.css";
function AnimeItem(props) {
    const { anime, onAnimeOpenClick } = props;
    return (
        <div className="anime-item">
            <img src={anime.thumbnailUrl} onClick={() => { onAnimeOpenClick(anime) }} />
            <h4>{anime.title}</h4>
        </div>
    );
}

export default AnimeItem