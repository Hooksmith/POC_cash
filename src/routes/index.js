import { Routes, Route } from "react-router-dom";
import LoginForm from "../views/auth/Login";
import WelcomePage from "../views/WelcomePage";
import CreateAccount from "../views/auth/CreateAccount";
import NewPassword from "../views/auth/NewPassword";
import ResetPassword from "../views/auth/ResetPassword";
import VerifyCode from "../views/auth/VerifyCode";
import DashboardLayout from "../layout/DashboardLayout";
import EditProfile from "../views/setting/EditProfile";
import CategoryManagement from "../views/setting/Category";
import BudgetComplete from "../views/home/BudgetComplete";
import BudgetProgress from "../views/home/BudgetProgress";
import CreateBudget from "../views/home/CreateBudget";
import SaveBudget from "../views/home/SaveBudget";
import Dashboard from "../views/dashboard";
import Income from "../views/income";
import Expense from "../views/expense";
import Budget from "../views/budget";

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
        <Route path="home" element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="expense" element={<Expense />} />
        <Route path="budget" element={<Budget />} />
        <Route path="budget-complete" element={<BudgetComplete />} />
        <Route path="budget-progress" element={<BudgetProgress />} />
        <Route path="create-budget" element={<CreateBudget />} />
        <Route path="save-budget" element={<SaveBudget />} />
      </Route>
      <Route path="/">
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="category" element={<CategoryManagement />} />
      </Route>
    </Routes>
  );
}
