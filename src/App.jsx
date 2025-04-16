import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="teams" element={<div>Teams page coming soon...</div>} />
        <Route path="analytics" element={<div>Analytics page coming soon...</div>} />
        <Route path="messages" element={<div>Messages page coming soon...</div>} />
        <Route path="integrations" element={<div>Integrations page coming soon...</div>} />
      </Route>
    </Routes>
  )
}

export default App
