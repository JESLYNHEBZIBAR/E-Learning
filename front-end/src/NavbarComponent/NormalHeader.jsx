import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NormalHeader = () => {
  let navigate = useNavigate();

  const navigateToForgetPasswordPage = () => {
    navigate("/customer/forgetPassword");
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link
          to="/user/mentor/register"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Register Mentor</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/customer/register"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Register Customer</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link to="/user/login" class="nav-link active" aria-current="page">
          <b className="text-color">Login User</b>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
