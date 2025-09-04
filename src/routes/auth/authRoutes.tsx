import { Login } from "@/pages/auth/login";
import { Register } from "@/pages/auth/register";
import { AuthLayout } from "@/pages/layout/authLayout";

export const AuthRoutes: IRouteProps = {
    path: "/auth",
    element: AuthLayout,
    visibility: "auth",
    children: [
      {
        path: "/auth/login",
        element: Login,
        visibility: "auth",
      },
      {
        path: "/auth/register",
        element: Register,
        visibility: "auth",
      },
    ],
}