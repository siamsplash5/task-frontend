import { useEffect, useState } from 'react';

function ViewUser() {
    const [users, setUsers] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const userList = JSON.parse(localStorage.getItem("users"));
        if (userList && userList.length > 0) {
            setUsers(userList);
        }
    }, [users]);
    
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
                  {users.map((user) => (
                      <tr key={user.email}>
                          <td>{`${user.firstName} ${user.lastName}`}</td>
                          <td>
                              <button
                                  type="button"
                                  onClick={() =>
                                      setShowDetails((prevState) => !prevState)
                                  }
                              >
                                  Details
                              </button>
                              {showDetails && (
                                  <div>
                                      <p>
                                          {`${user.firstName} ${user.lastName}`}
                                      </p>
                                      <p>
                                        {user.email}
                                      </p>
                                      <p>
                                        {user.phone}
                                      </p>
                                  </div>
                              )}
                              <button>Block</button>
                              <button>Delete</button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
}

export default ViewUser