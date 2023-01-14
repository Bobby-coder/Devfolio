import '../styles/work/WorkPage.css';
import SingleProject from '../components/Work/SingleProject';
import projectApi from '../api/projectApi';

const WorkPage = () =>{
    return(
        <>
        <div className='work-container'>
        {
            projectApi.map(currObj =>{
                return <SingleProject title={currObj.title} liveLink={currObj.liveLink} githubLink={currObj.githubLink} imgSrc = {currObj.imgSrc}/>
            })
        }
        </div>
        </>
    )
}

export default WorkPage;