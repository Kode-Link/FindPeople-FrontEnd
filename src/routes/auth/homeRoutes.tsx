import { Home } from "@/pages/home";
import { HomeLayout } from "@/pages/layout/homeLayout";

export const HomesRoutes: IRouteProps = {
  path: "/home",
  element: HomeLayout,
  visibility: "private",
  children: [
    {
      path: "/home",
      element: Home,
      visibility: "private",
    }
  ],
};
