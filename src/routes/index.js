
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../views/auth/Login';
import Home from '../Home';
import WelcomePage from '../views/WelcomePage';
import CreateAccount from '../views/auth/CreateAccount';
import NewPassword from '../views/auth/NewPassword';
import ResetPassword from '../views/auth/ResetPassword';
import VerifyCode from '../views/auth/VerifyCode';
import DashboardLayout from '../layout/DashboardLayout';
import SettingLayout from '../layout/SettingLayout';
import EditProfile from '../views/setting/EditProfile';

export function renderRoutes() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<CreateAccount />} />
                <Route path="/new-password" element={<NewPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/verify-code" element={<VerifyCode />} />
            </Route>
            <Route path="/" element={<DashboardLayout />}>
                <Route path="home" element={<Home />} />
                {/* <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} /> */}
            </Route>
            <Route path="/" element={<SettingLayout />}>
                <Route path="edit-profile" element={<EditProfile />} />
            </Route>
        </Routes>
        
    );
}