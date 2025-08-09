import { Dashboard } from "@/pages/dashboard";
import { HomeLayout } from "@/pages/layout/homeLayout";

export const HomesRoutes: IRouteProps = {
  path: "/",
  element: HomeLayout,
  visibility: "private",
  children: [
    {
      path: "/",
      element: Dashboard,
      visibility: "private",
    },
    //   {
    //     path: "/profile",
    //     element: Profile,
    //     visibility: "private",
    //   },
  ],
};
