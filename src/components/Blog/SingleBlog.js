import "../../styles/blog/SingleBlog.css";

const SingleBlog = ({ imgSrc, title, liveLink, hashnodeLink }) => {
  return (
    <>
      <div className="blog">
        <div className="screenshot">
          <img src={imgSrc} alt="blog" />
        </div>

        <div className="title">
          <p>{title}</p>
        </div>

        <div className="live-link">
          <a href={liveLink} target="_blank">
            READ BLOG
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
