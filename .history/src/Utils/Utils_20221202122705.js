/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const MyFunc = (data) => {
  const navigate = useNavigate();
  return(
    navigate('/allProduct')
  )
};

export default MyFunc;