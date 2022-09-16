const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-80 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-inline">{data.category}</div>
                        <div className="badge badge-inline">{data.author}</div>
                    </div>
                </div>
            </div>
        )
    })
}

const noNews = () => {
    return (
        <div>Saat ini belum ada berita!</div>
    )
}

const NewsList = ({news}) => {
    console.log('news',news);
    return !news ? noNews() : isNews(news);
}

export default NewsList;
