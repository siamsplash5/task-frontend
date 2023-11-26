import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    const navigateToHomePage = () => {
        navigate("/");
    };

    const navigateToViewUserPage = () => {
        navigate("/view");
    };

    const navigateToAddUserPage = () => {
        navigate("/adduser");
    };

    
  return (
      <div>
          <button type="button" onClick={navigateToHomePage}>
              Home
          </button>
          <button type="button" onClick={navigateToViewUserPage}>
              View Users
          </button>
          <button type="button" onClick={navigateToAddUserPage}>
              Add User
          </button>
          <br />
          <br />
      </div>
  );
}

export default Navbar