import { Fragment } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header className="w-full h-14 flex justify-between items-center py-2 px-52 fixed">
        <span>Mi logo</span>
        <Navbar />
      </header>
      <section>{children}</section>
      <footer className="text-justify py-2 px-10 bg-zinc-800">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem
        assumenda sed eius ullam, rem dolorem animi earum. Nesciunt odit ipsum
        doloremque unde aliquid! Aliquam, unde velit. Velit, minima
        perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </footer>
    </Fragment>
  );
};

export default Layout;
