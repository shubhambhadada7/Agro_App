import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';
import { GoComment } from 'react-icons/go';
import {FaWhatsapp, FaFacebook} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import KCList from './KCList';


const KrishiCharcha = () => {


    const {data: KCBlogs, isPending, error} = useFetch('http://localhost:8000/KCBlogs');
    // console.log(KCBlogs);

    return ( 
        <>
            <br /><br /><br />
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            { KCBlogs && <KCList KCBlogs = {KCBlogs} title="Krishi Charcha"/>}
            
        </>
     );
}
 
export default KrishiCharcha;