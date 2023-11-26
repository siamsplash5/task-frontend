import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUserForm from "./components/AddUserForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ViewUser from "./components/ViewUser";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adduser" element={<AddUserForm />} />
                    <Route path="/view" element={<ViewUser />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
