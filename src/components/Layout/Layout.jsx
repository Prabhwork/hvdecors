import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  const location = useLocation();

  // Check if the current path starts with "/admin"
  const isAdminPath = location.pathname.startsWith("/seller-login") || location.pathname.startsWith("/admin");
 
  const isAdminPath2 = location.pathname.startsWith("/seller/add-product");
  const isAdminPath3 = location.pathname.startsWith("/seller/inventory");
  return (
    <Fragment>
      {!isAdminPath && !isAdminPath2 && !isAdminPath3 &&  <Header />}
      <div>
        <Routers />
      </div>
      {!isAdminPath  &&  !isAdminPath2 && !isAdminPath3 && <Footer />}
    </Fragment>
  );
};

export default Layout;
