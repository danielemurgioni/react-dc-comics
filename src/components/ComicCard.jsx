const ComicCard = (props) => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.thumb} />
            </div>
            <div className="card-series">
                <span className="c-white">{props.series || "no series"}</span>
            </div>
        </div>
    )
}

export default ComicCard