import './CSS/AnimePost.css';

function AnimePost(props) {
    const { anime, onBgClick } = props;
    return (
        <div className="anime-post">
            <div className="anime-post-bg" onClick={onBgClick} />
            <div className="anime-post-content">
                <div className="container">
                    <div className="left-panel">
                        <h1>{anime.title}</h1>
                        <p>{anime.discription}</p>
                        <h3>วีดีโอตัวอย่าง</h3>
                        <div className="video-responsive">
                            <iframe
                                width="853"
                                height="480"
                                src={anime.vdoUrl.replace('youtu.be', 'www.youtube.com/embed')}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    <img src={anime.thumbnailUrl} />
                </div>
            </div>
        </div>
    )
}

export default AnimePost;