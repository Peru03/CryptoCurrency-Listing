import React from 'react'
import HomePage from './pages/HomePage'
import ViewPage from './pages/ViewPage'
import {
    Routes,
    Route,
} from "react-router-dom";
const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="view" element={<ViewPage />} />
            </Routes>
        </div>
    )
}

export default App