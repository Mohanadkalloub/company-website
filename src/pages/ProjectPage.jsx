import { Fragment } from "react";
import ImageThree from "../assets/images/3.jpg";
import ImageTwo from "../assets/images/2.jpg";
import MainImage from "../assets/images/main-cover.png";
import ImageOne from "../assets/images/1.jpg";
import ImageFive from "../assets/images/5.jpg";
import ProjectItem from "../components/Project/ProjectItem";
import CoverPage from "../components/Cover/CoverPage";
const ProjectPage = (props) => {
  return (
    <Fragment>
      <CoverPage title="project" />
      <section id="project">
        <div className="flex project pt-30">
          <ProjectItem img={ImageTwo} />
          <ProjectItem img={ImageThree} />
          <ProjectItem img={MainImage} />
        </div>
        <div className="flex project pt-30">
          <ProjectItem img={ImageTwo} />
          <ProjectItem img={ImageThree} />
          <ProjectItem img={MainImage} />
        </div>
        <div className="flex project pt-30">
          <ProjectItem img={ImageTwo} />
          <ProjectItem img={ImageThree} />
          <ProjectItem img={MainImage} />
        </div>
        <div className="flex project pt-30">
          <ProjectItem img={ImageTwo} />
          <ProjectItem img={ImageThree} />
          <ProjectItem img={MainImage} />
        </div>
        <div className="flex project">
          <ProjectItem img={ImageOne} />
          <ProjectItem img={ImageFive} />
          <ProjectItem img={ImageThree} />
        </div>
      </section>
    </Fragment>
  );
};
export default ProjectPage;
