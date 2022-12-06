/** @format */

import { useNavigate } from "react-router-dom";

export const NavigateAllPro = () => {
  const navigate = useNavigate();
  navigate("/allProduct");
};

const Utils = () => {
  return (
    <div>Utils</div>
  )
}

export default Utils