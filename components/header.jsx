'use client';

import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton, SignIn } from "@clerk/nextjs";
import { Icon, LayoutDashboard, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className = "container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href = '/'>
          <Image src ={"/logo.png"}
          alt = "AIntBroke logo"
          height={60}
          width = {200}
          className = "h-12 w-auto object-contain"  
          />
        </Link>
       
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard" className = "text-gray-600 hover:text-blue-600 flex items-center gap-2">
              <Button variant="outline">Login
                <LayoutDashboard size={18}/>
                <span className="hidden md:inline">Dashboard</span>
              </Button>  
            </Link>
          </SignedIn>

          <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
