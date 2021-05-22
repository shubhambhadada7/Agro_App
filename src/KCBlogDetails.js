import useFetch from './useFetch';
import EachKC from './EachKC';
import EachKCDetail from './EachKCDetail';
import { useParams } from "react-router-dom";
import EachKCComment from './EachKCComment';


const KCBlogDetails = () => {

    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/KCBlogs/' + id);

    const temp = "./";

    return ( 
        
        <div className="outerKB">
            <br /><br /><br />
            {isPending && <div> Loading... </div>}
            {error && <div>{error} </div>}
            
            {blog && 
                <>
                    <EachKCDetail eachKC = {blog}/>
                    <hr />
                    <div>Comments</div>
                    <hr />
                    <EachKCComment/> 
                    <EachKCComment/>
                    <h1>Related Articles</h1>
                    {/* <EachKC eachKC = {blog}/>
                    <EachKC eachKC = {blog}/>
                    <EachKC eachKC = {blog}/>
                    <EachKC eachKC = {blog}/> */}
                </>
            }

            
        </div>          
    );
}
 
export default KCBlogDetails;