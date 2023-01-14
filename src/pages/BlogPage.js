import SingleBlog from '../components/Blog/SingleBlog';
import '../styles/blog/BlogPage.css'
import blogApi from '../api/blogApi'

const BlogPage = () =>{
    return(
        <>
        <div className='blog-wrapper'>
        {
            blogApi.map((currObj) => {
                return <SingleBlog title = {currObj.title} liveLink = {currObj.liveLink} hashnodeLink = {currObj.hashnodeLink} imgSrc = {currObj.imgSrc} />
            })
        }
        </div>
        </>
    )
}

export default BlogPage;