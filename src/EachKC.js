import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';
import { GoComment } from 'react-icons/go';
import {FaWhatsapp, FaFacebook} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const EachKC = (props) => {

    const eachKCBLog = props.eachKC;
    // console.log(eachKCBLog);
    // Link to={`/blogs/${blog.id}`}

    const [like,setLike] = useState(false);
    

    function likeOnClick(type) {
        
        if(type){
            setLike(true);
        }else{
            setLike(false);
        }

    }
    const baseURL = "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=";
    var url = "http://localhost:3000/krishiCharcha/" + eachKCBLog.id;
    const baseEndURL = "%2Fposts&display=popup&ref=plugin&src=share_button";


    const whatsAppBase = "whatsapp://send?text=";
    const text = "A post about '"+ eachKCBLog.title + "' by "+ eachKCBLog.author + " from "+eachKCBLog.location + ". - ";
    
    const linkShare = "http://localhost:3000/krishiCharcha/" + eachKCBLog.id;

    const linkFinal = whatsAppBase + text  + linkShare;



    return ( 
        <>
            <div className="eachKB">
                        <div className="profileImage">
                            <img src={eachKCBLog.profileImage} alt="profile picture" />
                        </div>                
                        <div className="authorKB">
                            <p>{eachKCBLog.author}</p>
                            <span>{eachKCBLog.location}</span><br />
                            <span>{eachKCBLog.time}</span>
                        </div>
                        <div className="tagKB">

                            {eachKCBLog.tag.map((tags) =>(
                                <div>{tags}</div>
                            ))}
                        </div>
                        <Link to={`/KrishiCharcha/${eachKCBLog.id}`}>
                            <div className="issueImage">
                                <img src={eachKCBLog.issueImage} alt="issue Image" />
                            </div>
                        </Link>
                            <div className="titleKB">
                                <h3>{eachKCBLog.title}</h3>
                            </div>
                            <div className="detailKB">
                                <p>{eachKCBLog.body}
                                </p>
                            </div>
                        
                    
                        <div className="utilityKB">

                            <div>
                                {like && <FcLike size="2em" onClick={() => likeOnClick(0)}/>}
                                {!like && <FcLikePlaceholder size="2em"  onClick={() => likeOnClick(1)}/>}
                                <span>150</span>
                            </div>
                            <div>
                                <Link to={`/KrishiCharcha/${eachKCBLog.id}`}>
                                    
                                    <GoComment size="2em"/>
                                    <span>50</span>
                                
                                </Link>
                            </div>
                            
                            
                            <div>
                            <a  href={linkFinal} 		
                                data-action="share/whatsapp/share"
                                target="_blank">
                                <FaWhatsapp  size="2em"/>
                            </a> 
                                <span>10</span>
                            </div>
                            <div>
                                
                                <a href={baseURL + url + baseEndURL}><FaFacebook  size="2em"/></a>
                                
                                <span>9</span>
                            </div>

                        </div>
                    </div>
                    <hr />
                </>
    );
}
 
export default EachKC;