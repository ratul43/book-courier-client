import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DashBoardLayout from "../layouts/DashBoardLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/Home/HomePage";
import AllBooksPage from './../pages/AllBooksPage';
import BookDetailsPage from "../pages/BookDetailsPage";
import MyOrders from "../pages/User/MyOrders";
import MyProfile from "../pages/User/MyProfile";
import UpdateProfile from "../pages/User/UpdateProfile";
import Invoices from "../pages/User/Invoices";
import AddBookPage from "../pages/Librarian/AddBookPage";
import MyBooks from "../pages/Librarian/MyBooks";
import OrdersPage from './../pages/Librarian/OrdersPage';
import AllUsers from "../pages/AdminDashboard/AllUsers";
import Test from "../test";
import BooksEdit from "../pages/Librarian/BooksEdit";
import ManageBooksPage from "../pages/AdminDashboard/ManageBooksPage";
import MyWishList from "../pages/User/MyWishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/allBooks",
        Component: AllBooksPage
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetailsPage></BookDetailsPage>,
      }
    ]
  },
  {
    path:"/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path:"/dashboard/my-orders",
        element: <MyOrders></MyOrders>
      },
      {
        path:"/dashboard/my-profile",
        element: <MyProfile></MyProfile>
      },
      {
        path:"/dashboard/my-profile/update",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path:"/dashboard/myWishList",
        element: <MyWishList></MyWishList>
      },
      {
        path:"/dashboard/invoices",
        element: <Invoices></Invoices>
      },
      {
        path:"/dashboard/librarian/add-book",
        element: <AddBookPage></AddBookPage>
      },
      {
        path:"/dashboard/librarian/added-books",
        element: <MyBooks></MyBooks>
      },
      {
        path:"/dashboard/librarian/orders",
        element: <OrdersPage></OrdersPage>
      },
      {
        path:"/dashboard/admin/users-management",
        element: <AllUsers></AllUsers>
      },
      {
        path:"/dashboard/librarian/added-books/edit",
        element: <BooksEdit></BooksEdit>
      },
      {
        path: "/dashboard/admin/manage-books",
        element: <ManageBooksPage></ManageBooksPage>
      }
    ]
  },
  // {
  //   path: "/test",
  //   Component: Test
  // },
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