import React from "react";
import animationData from "../objects/contact.json";
import Lottie from "react-lottie";

const defaultOptions = () => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

export default defaultOptions;
