import { SideBar } from "../sidebar";

type Props = {
  children: React.ReactNode;
};

export const Page = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-64">
        <SideBar></SideBar>
      </div>

      <main>{children}</main>
    </div>
  );
};
