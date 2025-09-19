import { AuthRoutes } from "./auth/authRoutes";
import { HomesRoutes } from "./auth/homeRoutes";
import { DashRoutes } from "./dash";

export const WrapperRoutes = () => {
  return [AuthRoutes, DashRoutes, HomesRoutes];
};
