import { Help } from "@/components/help";
import { Navbar } from "@/components/navbar";
import { Statistics } from "@/components/statistics";

export const DashLayout = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <Navbar />
      <Statistics />
      <Help />
    </section>
  );
};
