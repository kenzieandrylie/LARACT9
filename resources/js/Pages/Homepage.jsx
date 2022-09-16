import React, {useState, useEffect} from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsList from '@/Components/Homepage/NewsList';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(props){

    console.log('props: ', props);

    return(
        <div className='min-h-screen bg-slate-50'>
            <Navbar />
            <div className='flex justify-center items-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-5 bg-black'>
                <NewsList news={props.news.data}/>
            </div>
            <div className='flex justify-center items-center'>
                <Paginator meta={props.news.meta}/>
            </div>
        </div>
    )
}
