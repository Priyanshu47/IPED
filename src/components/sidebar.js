"use client";

import { useContext } from "react";
import { GlobalContext } from "@/context";
import { usePathname} from "next/navigation";
import Link from "next/link";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <a size={25} />,
  },
  {
    id: "eventsannouncements",
    label: "Events/Announcements",
    path: "/eventsannouncements",
    icon: <a size={24} />,
  },
  {
    id: "employees",
    label: "Employees",
    path: "/employees",
    icon: <a size={24} />,
  },
  {
    id: "leaves",
    label: "Leaves",
    path: "/leaves",
    icon: <a size={24} />,
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
    icon: <a size={24} />,
  },
];

export default function Sidebar() {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);


  const pathName = usePathname();



  return (
    <aside
      className={`absolute left-0 shadow-md top-0 z-9999 flex h-screen w-[350px] flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 pl-10 lg:pl-10
    ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <div className="flex pt-5 ">
        <img src="/LOGO.png" width={81} height={60} alt="LOGO" />
      </div>
      <div className="flex flex-row text-base text-custom-black items-center font-medium h-5 pt-10 ">
      <h6>Main Menu</h6></div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="flex flex-col py-5 ">
          <div>
            <ul>
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  <label 
                    className={`font-normal flex flex-row items-center py-6 h-6 text-custom-black hover:text-custom-blue
                             ${pathName.includes(menuItem.id) && ""}
                            `}
                  >
                    
                    {menuItem.icon}
                    {menuItem.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
