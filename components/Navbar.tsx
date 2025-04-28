"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type NavbarProps = {
  onSignIn: () => void;
  onSignUp: () => void;
};

const Navbar = ({ onSignIn, onSignUp }: NavbarProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const name = localStorage.getItem("userName");
  
    if (accessToken) {
      setIsLoggedIn(true);
      if (name) setUserName(name);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <header className="w-full">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-2">
        <Link href="/" className="flex items-center h-16">
          <Image
            src="/GatherWiseLogo/GatherWiseLogo.svg"
            alt="GatherWise Logo"
            width={130}
            height={150}
            className="object-contain h-full w-auto"
          />
        </Link>

        {isLoggedIn ? (
          <div className="flex items-center space-x-5">
            <p className="text-sm text-gray-700">Hi, {userName.split(" ")[0]}</p>
            <button
              onClick={() => {
                localStorage.clear();
                setIsLoggedIn(false);
              }}
              className="text-sm text-red-500 hover:underline"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-5">
            <button
              type="button"
              onClick={onSignIn}
              className="text-sm uppercase tracking-wider text-gray-800 hover:text-gray-600"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={onSignUp}
              className="px-3 py-1 bg-[#7C3AED] text-white hover:bg-[#6B21A8] rounded-lg"
            >
              <span className="text-sm uppercase tracking-wider">Sign up</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
