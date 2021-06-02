import {FaMicrophone} from 'react-icons/fa'
import {FaMicrophoneSlash} from 'react-icons/fa'
import { Switch } from 'react-router';
import { useState, useEffect } from 'react/cjs/react.development';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


import AddImage from './AddImage';
import AddText from './AddText';
import AddTag from './AddTag';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined



const NewBlog = () => {

    const [progress,setProgress] = useState(0);
    // const [next,setNext] = useState("Next");
    // const [Issubmit,setIsSubmited] = useState("false");
    const history = useHistory();

    const [necessary,setNecessary] = useState(true);
    
    useEffect(() => {
        const parsedProgress = Number(localStorage.getItem("progress") || 0)
        setProgress(parsedProgress)
        // const parsedNecessary = Number(localStorage.getItem("necessary") || true)
        // setNecessary(parsedNecessary)
        
    }, []);


    

    useEffect(() => {
        localStorage.setItem("progress", progress);
    }, [progress]);


    function handleSubmit(){


        const issueImage = (localStorage.getItem("imageValue") || "")
        // setImage(parsedImageValue)
        var tag = (localStorage.getItem("tagsValue") || [])
        tag = JSON.parse(tag)
        // setTags(parsedTagsValue)
        const body = (localStorage.getItem("textValue") || "")
        // setTextValue(parsedTextValue)
        const title = (localStorage.getItem("titleValue") || "")
        // setTitleValue(parsedTitleValue)
        const author = "Shubham Bhadada";
        const location = "Sanand, Ahmedabad, Gujarat";
        const time = "02 June 2021, 07:01 PM";
        const profileImage = "http://localhost:3000/images/pic1.png";


        const blog = {title,body,author,location,time,profileImage,tag,issueImage};


        console.log(blog);

        fetch('http://localhost:8000/KCBlogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');     

            localStorage.clear();
            history.push('/KrishiCharcha');
        }).catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)));



    }


    function handleProgess(change) {
        if(progress===2 && change===1){
            setProgress(progress + change);
            console.log("Yes");
            handleSubmit();
        }else{
            setProgress(progress + change);
        }
    }

    return ( 
        <>
            <br /><br /><br />
            {progress===0 && <AddImage/>}
            {progress===1 && <AddText/>}
            {progress===2 && <AddTag/>}
            {progress===3 && <>Adding your blog...</>}
             
            {
                progress !== 3 &&

                <>
                    <div className="navNewBlog">
                        <button disabled={!progress}  onClick={() => handleProgess(-1)}>
                            Previous
                        </button>
                        <button  onClick={() => handleProgess(1)}>
                            {progress===2 ? "Submit" : "Next"}
                        </button>
                    </div>
                </>
            }
            
            {/* disabled={!necessary && progress===1} */}
        </>
     );
}

export default NewBlog;