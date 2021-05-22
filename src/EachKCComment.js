import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';
import { useState, useEffect } from 'react';


const EachKCComment = () => {

    const [like,setLike] = useState(false);
    

    function likeOnClick(type) {
        
        if(type){
            setLike(true);
        }else{
            setLike(false);
        }

    }


    return ( 
        <>
            
            <div className="profileImage">
                <img src="http://localhost:3000/images/pic1.png" alt="profile picture" />
            </div>                
            <div className="authorKB">
                <p>Shubham Bhadada</p>
                <span>Sanand, Ahmedabad, Gujarat</span><br />
                <span>21 May 2021, 10:00 AM</span>
            </div>
            <div className="DetailedText">
                    I have a severe issue of mealy bug. Suggest me the best possible
                    solution for the same. I would be greatful to you for helping me.
                    I am new at farming. I have grown 50 acres of cotton. The seed I
                    used was Ajeet 155.
                
            </div>
            <div>
                {like && <FcLike size="2em" onClick={() => likeOnClick(0)}/>}
                {!like && <FcLikePlaceholder size="2em"  onClick={() => likeOnClick(1)}/>}
                <span>150</span>
            </div>
            <hr />
        </>
    );
}

export default EachKCComment;