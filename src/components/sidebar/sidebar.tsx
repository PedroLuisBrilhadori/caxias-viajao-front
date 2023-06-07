import { DetailsOptions, Option, SideBarOption } from "./options";

const option: Option = {
  name: "test",
  onClick() {
    console.log("click");
  },
  details: [
    {
      name: "test",
      onClick() {
        console.log("click in detail");
      },
    },
  ],
};

export const SideBar = () => {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span>

        <ul className="mt-6 space-y-1">
          <SideBarOption name="Pedro" onClick={() => console.log("test")} />
          <DetailsOptions option={option} />
        </ul>
      </div>
    </div>
  );
};
