import React from "react";
import Link from "next/link";
import { BackgroundGradient } from "../ui/background-gradient";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  name: string;
  navItems: NavItem[];
};

const NavBar: React.FC<NavbarProps> = ({ name, navItems }) => {
  return (
    <BackgroundGradient containerClassName="fixed top-0 left-0 right-0 z-50 mx-5 mt-5"> {/* Made BackgroundGradient fixed */}
      <nav className="bg-transparent top-0 rounded m-0 text-black px-4 py-2 shadow-lg"> {/* Adjusted styles */}
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold my-3">{name}</div>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </BackgroundGradient>
  );
};

export default NavBar;
