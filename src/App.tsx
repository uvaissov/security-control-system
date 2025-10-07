import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Vehicles from './pages/Vehicles';
import Companies from './pages/Companies';
import Assets from './pages/Assets';
import Passes from './pages/Passes';
import Investigations from './pages/Investigations';
import EventLogs from './pages/EventLogs';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/passes" element={<Passes />} />
          <Route path="/investigations" element={<Investigations />} />
          <Route path="/event-logs" element={<EventLogs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
