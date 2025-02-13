// src/App.jsx or wherever your routing is defined
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero"; // Import Hero component
import Finished from "./components/Finished"; // Import Finished component

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hero />} /> 
                <Route path="/finished" element={<Finished />} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default App;