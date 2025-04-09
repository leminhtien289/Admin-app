import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Layout />
      <Dashboard />
    </>
  );
}

export default App;