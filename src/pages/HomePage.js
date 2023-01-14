import "../styles/home/HomePage.css";
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-container-heading">
          <h1>JOHN DOE</h1>
        </div>

        <div className="home-container-info">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora explicabo quae quod deserunt eius sapiente solutions for complex problems.
          </p>
        </div>

        <div className="home-container-btn">
          <Link to = '/work'><button>check my work</button></Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
