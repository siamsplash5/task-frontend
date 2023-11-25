import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUserForm from './components/AddUserForm';
import Home from "./components/Home";
import ViewUser from './components/ViewUser';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adduser" element={<AddUserForm />} />
                <Route path="/view" element={<ViewUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
