'use client';

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavUser from "./nav-user";
import LogoSvg from "../../svgs/logo";
import menuItems from "./nav-items";
import { useHandleResize } from "@/hooks/useHandleResize";

export default function Navbar() {
  const { isMobile } = useHandleResize()

  return (
    <nav className="bg-white w-auto h-[72px] mt-[18px] px-8 mx-[18px] shadow rounded-[72px] flex items-center">
      <Link href={'/'}>
        <LogoSvg />
      </Link>

      {
        isMobile ? (
          <Sheet>
            <div className="w-full flex items-center">
              <SheetTrigger className="w-full flex justify-end items-center">
                <Menu />
              </SheetTrigger>
            </div>
            <SheetContent>
              <NavUser />
              <div className="mt-5">
                <ul className="w-full flex flex-col gap-y-5 ">
                  {menuItems.map((item, index) => (
                    <div key={index} className={item.isActive ? 'bg-active rounded-[41px] px-4 py-[11px]' : ''}>
                      <li className="flex items-center gap-x-2 text-dark text-sm font-bold cursor-pointer">
                        <span>{item.icon}</span>
                        <p>
                          {item.label}
                        </p>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        )
          : (
            <>
              <ul className="h-[41px] mx-auto flex gap-x-10 justify-center items-center">
                {menuItems.map((item, index) => (
                  <div key={index} className={item.isActive ? 'bg-active rounded-[41px] px-4 py-[11px]' : ''}>
                    <li className="flex items-center gap-x-2 text-dark text-sm font-bold cursor-pointer">
                      <span>{item.icon}</span>
                      <p>
                        {item.label}
                      </p>
                    </li>
                  </div>
                ))}
              </ul>
              <NavUser />
            </>
          )
      }
    </nav>
  )
}
