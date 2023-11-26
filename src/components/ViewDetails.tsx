import React, { useEffect, useState } from "react";

function ViewDetails({ user, index, updateUser }) {
    const [editing, setEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({ ...user });

    const handleEdit = () => {
        setEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    const handleSave = () => {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        existingUsers[index] = editedUser;

        localStorage.setItem("users", JSON.stringify(existingUsers));

        updateUser(index, editedUser);

        setEditing(false);
    };

    useEffect(() => {
        setEditedUser({ ...user });
    }, [user]);

    return (
        <div>
            {!editing ? (
                <div>
                    <p>{`${user.firstName} ${user.lastName}`}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <button type="button" onClick={handleEdit}>
                        Edit User
                    </button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        name="firstName"
                        value={editedUser.firstName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={editedUser.lastName}
                        onChange={handleInputChange}
                    />
                    <p>{user.email}</p>
                    <input
                        type="text"
                        name="phone"
                        value={editedUser.phone}
                        onChange={handleInputChange}
                    />
                    <button type="button" onClick={handleSave}>
                        Save
                    </button>
                </div>
            )}
        </div>
    );
}

export default ViewDetails;
