import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import loader1 from "./imgs//Spinner-1s-200px.gif";
import loader2 from "./imgs/chargement.gif";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = () => {
      // fin du loading
      setLoading(false);
    };

    window.addEventListener("load", loader);

    return () => {
      window.removeEventListener("load", loader);
    };
  }, []);

  if (!loading) {
    // const navbar = document.getElementById('navbar');
    const loader = document.getElementById("loader");
    const app = document.querySelector(".App");

    // navbar?.classList.add('show');
    // eslint-disable-next-line no-unused-expressions
    app?.classList.add("show");
    // eslint-disable-next-line no-unused-expressions
    loader?.classList.add("finished");
  }

  return createPortal(
    <div className='loader' id='loader'>
      <div>
        <img src={loader1} className='img1' alt='' />
        <img src={loader2} alt='' />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default PageLoader;
