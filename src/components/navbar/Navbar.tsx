import React from "react";
import Link from "next/link";

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
    <nav className="bg-gray-300 top-20 rounded m-2.5 text-black px-2.5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold my-3">{name}</div>
        <ul className="flex space-x-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
