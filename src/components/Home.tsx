import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();

    const handleCreateNewUser = ()=>{
        navigate('/adduser')
    }

    const handleViewUser = ()=>{
        navigate('/view');
    }

    return (
        <div>
            <button onClick={handleCreateNewUser}>Create New User</button>
            <button onClick={handleViewUser}>View User List</button>
        </div>
    );
}

export default Home;
