import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DashBoardLayout from "../layouts/DashBoardLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/Home/HomePage";
import AllBooksPage from "./../pages/AllBooksPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import MyOrders from "../pages/User/MyOrders";
import MyProfile from "../pages/User/MyProfile";
import Invoices from "../pages/User/Invoices";
import AddBookPage from "../pages/Librarian/AddBookPage";
import MyBooks from "../pages/Librarian/MyBooks";
import OrdersPage from "./../pages/Librarian/OrdersPage";
import AllUsers from "../pages/AdminDashboard/AllUsers";
import Test from "../test";
import BooksEdit from "../pages/Librarian/BooksEdit";
import ManageBooksPage from "../pages/AdminDashboard/ManageBooksPage";
import MyWishList from "../pages/User/MyWishList";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import PaymentCancel from "../pages/Payment/PaymentCancel";
import PrivateRoute from "./PrivateRoute";
import LibrarianRoute from "./LibrarianRoute";
import AdminRoute from "./AdminRoute";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/allBooks",
        Component: AllBooksPage,
      },
      {
        path: "/bookDetails/:id",
        element: (
          <PrivateRoute>
            {" "}
            <BookDetailsPage></BookDetailsPage>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashBoardLayout></DashBoardLayout>{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/my-orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/my-profile",
        element: <MyProfile></MyProfile>,
      },

      {
        path: "/dashboard/payment-success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/dashboard/payment-cancelled",
        element: <PaymentCancel></PaymentCancel>,
      },

      {
        path: "/dashboard/myWishList",
        element: <MyWishList></MyWishList>,
      },
      {
        path: "/dashboard/invoices",
        element: <Invoices></Invoices>,
      },
      {
        path: "/dashboard/librarian/add-book",
        element: (
          <LibrarianRoute>
            {" "}
            <AddBookPage></AddBookPage>{" "}
          </LibrarianRoute>
        ),
      },
      {
        path: "/dashboard/librarian/added-books",
        element: (
          <LibrarianRoute>
            {" "}
            <MyBooks></MyBooks>{" "}
          </LibrarianRoute>
        ),
      },
      {
        path: "/dashboard/librarian/orders",
        element: (
          <LibrarianRoute>
            {" "}
            <OrdersPage></OrdersPage>{" "}
          </LibrarianRoute>
        ),
      },
      {
        path: "/dashboard/admin/users-management",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers></AllUsers>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/librarian/added-books/edit/:id",
        element: (
          <LibrarianRoute>
            {" "}
            <BooksEdit></BooksEdit>{" "}
          </LibrarianRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-books",
        element: (
          <AdminRoute>
            {" "}
            <ManageBooksPage></ManageBooksPage>{" "}
          </AdminRoute>
        ),
      },
    ],
  },
  // {
  //   path: "/test",
  //   Component: Test
  // },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);
