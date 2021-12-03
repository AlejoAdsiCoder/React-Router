import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/AboutPage'
import CategoriesPage from '../pages/CategoriesPage'
import Contact from '../pages/ContactPage'
import DashboardPage from '../pages/DashboardPage'
import Home from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import PaymentsPage from '../pages/PaymentsPage'
import ProfilePage from '../pages/ProfilePage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from './PrivateRoute'

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
                <Route exact path="/profile/:username" element={<ProfilePage />} />
                <Route exact path="/categories" element={<CategoriesPage />} />

                <Route exact path="/login" element={LoginPage} />
                <Route exact path="/register" element={RegisterPage} />

                <Route exact path="/" element={PrivateRoute} >
                    <Route exact path="/" element={DashboardPage} />
                </Route>
                <Route exact path="/payments" element={PaymentsPage} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>    
        </Router>
    )
}
