import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUserForm() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        const updatedUsers = [...existingUsers, user];

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        setUser({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        });
    }

    const navigateToHomePage = () => {
        navigate("/");
    };

    const navigateToViewUserPage = () => {
        navigate("/view");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    required
                    value={user.firstName}
                    onChange={(e) => {
                        setUser({
                            ...user,
                            firstName: e.target.value,
                        });
                    }}
                />
                <br />
                <br />
                <label htmlFor="lastName">Last Name: </label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    value={user.lastName}
                    onChange={(e) => {
                        setUser({
                            ...user,
                            lastName: e.target.value,
                        });
                    }}
                />
                <br />
                <br />
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    value={user.email}
                    onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value,
                        });
                    }}
                />
                <br />
                <br />
                <label htmlFor="phone">Phone Number: </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    required
                    value={user.phone}
                    onChange={(e) => {
                        setUser({
                            ...user,
                            phone: e.target.value,
                        });
                    }}
                />

                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <button type="button" onClick={navigateToHomePage}>Go to Home </button>
            <button type="button" onClick={navigateToViewUserPage}>View Users</button>
        </div>
    );
}

export default AddUserForm;
