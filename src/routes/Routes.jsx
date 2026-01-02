import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DashBoardLayout from "../layouts/DashBoardLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    children: [
      {

      }
    ]
  },
  {
    path:"/dashboard",
    element: <DashBoardLayout></DashBoardLayout>
  },
  {
    path:"/",
    Component: AuthLayout,
    children: [
      {
        path:"/register",
        element: <RegisterPage></RegisterPage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      
    ]
  }
]);