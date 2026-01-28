import { Routes, Route } from 'react-router-dom';
import { Welcome } from './views/Welcome/Welcome';
import { Dashboard } from './views/Dashboard/Dashboard';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App;
