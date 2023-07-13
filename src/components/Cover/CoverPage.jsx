import { NavLink } from "react-router-dom";

const CoverPage = (props) => {
  return (
    <div className="cover-page">
      <div className="tit">
        <h1>about us</h1>
        <ul className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#" className="active">
              {props.title}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CoverPage;
