const ProjectItem = (props) => {
  return (
    <div className="item">
      <div className="container">
        <img src={props.img} alt="Avatar" className="image" />
        <div className="overlay">
          <div className="text">project title can be here</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
