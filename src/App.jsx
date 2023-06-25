import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RepoList from "./components/RepoList.jsx";
import RepoDetails from "./components/RepoDetails.jsx";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RepoList />} />
                <Route path="/details/:id" element={<RepoDetails />} />
            </Routes>
        </BrowserRouter>
    )
}
