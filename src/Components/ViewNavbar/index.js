import NavbarDash from "../../Components/NavbarDash";
import MenuBurger from "../../Components/MenuBurger";
import { useState } from "react";

const ViewNavbar = () => {
const [viewNavbar, setViewNavbar] = useState(false);

  return (
    <>
      {window.innerWidth >= 1024 || viewNavbar === true ? (
        <NavbarDash setViewNavbar={setViewNavbar} />
      ) : (
        <MenuBurger viewNavbar={viewNavbar} setViewNavbar={setViewNavbar} />
      )}
    </>
  );
};

export default ViewNavbar;