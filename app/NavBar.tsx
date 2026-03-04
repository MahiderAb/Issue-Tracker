"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";
import { Box } from "@radix-ui/themes";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const currentpath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "text-zinc-900": currentpath === link.href,
                "text-zinc-500": currentpath !== link.href,
                "hover-text-zinc-900 transition-color": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status == "authenticated" && (
          <Link href="/api/auth/signout">logout</Link>
        )}
        {status == "unauthenticated" && (
          <Link href="/api/auth/signin">login</Link>
        )}
      </Box>
    </nav>
  );
};

export default NavBar;
