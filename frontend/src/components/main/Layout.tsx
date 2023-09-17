import React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface OwnProps {
  children?: React.ReactElement;
}

const Layout: React.FC<OwnProps> = ({ children }) => {
  return (
    <div className={"page"}>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
