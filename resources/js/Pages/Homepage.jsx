import React, {useState, useEffect} from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props){

    useEffect(() => {
        console.log(props.news)
    },[]);

    return(
        <div className='flex justify-center items-center min-h-screen bg-neutral-800 text-white'>
            <div>
                {props.news ? props.news.map((data, i) => {
                    return (
                        <div key={i}>
                            <div className="p-4 m-4 bg-white text-neutral-800 max-w-xl shadow-md rounded-md">
                                <p className='text-2xl'>{data.title}</p>
                                <p>{data.description}</p>
                                <i>{data.category}</i>
                                <i>{data.author}</i>
                            </div>
                        </div>
                    )
                }): <p>Saat ini berita belum tersedia</p>}
            </div>
        </div>
    )
}
