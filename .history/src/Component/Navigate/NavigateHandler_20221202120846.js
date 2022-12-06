
import { useNavigate } from "react-router-dom";

const NavigateHandler = () => {
    const navigate = useNavigate();

    const allProductNavigation = () => {
      navigate("/allProduct");
    };
}

export default NavigateHandler