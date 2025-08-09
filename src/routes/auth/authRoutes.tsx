import { Login } from "@/pages/auth/login";
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
    //   {
    //     path: "register",
    //     element: Register,
    //     visibility: "auth",
    //   },
    ],
}