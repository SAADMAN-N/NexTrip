import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignIn, SignInButton } from "@clerk/nextjs";

const menuOptions = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Contact us",
    path: "/contact-us",
  },
];

function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        <h2 className="text-2xl font-bold">AI Trip Planner</h2>
      </div>

      {/* Menu options */}
      <div className="flex items-center gap-8">
        {menuOptions.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2 className="text-lg hover:scale-105 hover:text-primary transition-all">
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <SignInButton mode="modal">
        <Button className="text-black">Get Started</Button>
      </SignInButton>
    </div>
  );
}

export default Header;
