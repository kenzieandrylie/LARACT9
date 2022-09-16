import { Link } from "@inertiajs/inertia-react";

const Paginator = ({meta}) => {
    console.log("meta",meta);

    const prev = meta.links[0].url; //link url prev
    const next = meta.links[meta.links.length - 1].url; //link url next
    const current = meta.current_page;

    return (
            <div className="btn-group p-5">
                { //syntax dipakai saat tidak ada kondisi lain
                prev && <Link href={prev} className="btn btn-outline">«</Link> //jika ada prev (not null) maka render button <<
                }
                <Link className="btn">{current}</Link>
                {
                next && <Link href={next} className="btn btn-outline">»</Link> //jika ada next (not null) maka render button >>
                }
            </div>
    );
}

export default Paginator;
