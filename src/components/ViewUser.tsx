import { useEffect, useState } from "react";
import ViewDetails from "./ViewDetails";

function ViewUser() {
    const [users, setUsers] = useState([]);
    const [selectedUserIndex, setSelectedUserIndex] = useState(null);

    useEffect(() => {
        const userList = JSON.parse(localStorage.getItem("users"));
        if (userList && userList.length > 0) {
            setUsers(userList);
        }
    }, []);

    const handleDetailsClick = (index) => {
        setSelectedUserIndex(index === selectedUserIndex ? null : index);
    };

    const handleBlock = (index) => {
        const updatedUsers = [...users];

        updatedUsers[index] = {
            ...updatedUsers[index],
            isBlocked: !updatedUsers[index].isBlocked,
        };

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        setUsers(updatedUsers);
    };

    const handleDelete = (index) => {
        const updatedUsers = users.filter((user, idx) => idx !== index);

        localStorage.setItem("users", JSON.stringify(updatedUsers));
        
        setUsers(updatedUsers);
    };

    const updateUser = (index, updatedUserData) => {
        const updatedUsers = [...users];
        updatedUsers[index] = updatedUserData;
        setUsers(updatedUsers);
    };



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.email}>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => handleDetailsClick(index)}
                                >
                                    Details
                                </button>
                                {selectedUserIndex === index && (
                                    <ViewDetails
                                        user={user}
                                        index={index}
                                        updateUser={updateUser}
                                    />
                                )}
                                <button onClick={() => handleBlock(index)}>
                                    {user.isBlocked ? "Unblock" : "Block"}
                                </button>
                                <button onClick={() => handleDelete(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewUser;
