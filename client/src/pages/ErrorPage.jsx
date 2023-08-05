import React, { useEffect, useRef } from "react";
import "./style/ErrorPage.css";
// import notFound from "../../images/404.png";
import lottie from "lottie-web"
import Layout from "../components/Layout/Layout";


export default function ErrorPage() {

  const imgContainer = useRef(null)

  useEffect(() => {
    const container = imgContainer.current;
    if (!container) return;

    const anim = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require("../Images/404.json"),
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    // <div className="text-center mx-auto w-input err-height pt-5 d-flex align-items-center justify-content-center">
    <Layout>
    <div className="erorr-main-page">
      <div ref={imgContainer} className="main-error" ></div>
    </div>
    </Layout>
  );
}
