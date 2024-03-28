import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">Ifshad</Link>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal text-base-100 font-medium text-base px-1">
            <li className="hover:text-teal">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-teal">
              <Link href="/about">About Me</Link>
            </li>
            <li className="hover:text-teal">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
