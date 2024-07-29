import LogoSvg from "../Svgs/logo";
import menuItems from "./nav-items";
import NavUser from "./nav-user";

export default function Navbar() {
  return (
    <nav className="bg-white h-[72px] mt-[18px] px-8 mx-[18px] shadow rounded-[72px] flex items-center">
      <LogoSvg />
      <ul className="h-[41px] mx-auto flex gap-x-10 justify-center items-center">
        {menuItems.map((item, index) => (
          <div key={index} className={item.isActive ? 'bg-active rounded-[41px] px-4 py-[11px]' : ''}>
            <li className="flex items-center gap-2 text-dark text-sm font-bold cursor-pointer">
              <span>{item.icon}</span>
              {item.label}
            </li>
          </div>
        ))}
      </ul>
      <NavUser />
    </nav>
  )
}
