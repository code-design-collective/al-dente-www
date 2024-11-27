import '@/assets/css/index.css'

import { Routes, Route } from "react-router-dom"

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import DashboardPage from '@/pages/DashboardPage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';

const App = () => {
  return (
    <div id="react-app" className='relative h-screen flex justify-between flex-col'>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
