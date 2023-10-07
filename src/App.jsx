import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/Adminlayout/AdminLayout'
import DashboardPage from './pages/Admin/dashboard/DashboardPage';
import SkillsPage from './pages/Admin/skills/SkillsPage';
import LoginPage from './pages/public/Login/LoginPage';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/" element={<AdminLayout />}>
          <Route path='dashboard' element={<DashboardPage />}/>
          <Route path='skills' element={<SkillsPage />} />
          {/* <Route path=''/>
          <Route path=''/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
