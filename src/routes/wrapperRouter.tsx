import { AuthRoutes } from "./auth/authRoutes";
import { HomesRoutes } from "./home";

export const WrapperRoutes = () => {
  return [AuthRoutes, HomesRoutes];
};
