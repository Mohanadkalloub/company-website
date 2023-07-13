import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PageContainer = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};
export default PageContainer;
