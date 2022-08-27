import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header>Aqui va el Header</header>
      <nav>Aqui va el Navbar</nav>
      <section className="h-full w-full flex">{children}</section>
      <footer>Aqui va el Footer</footer>
    </Fragment>
  );
};

export default Layout;
