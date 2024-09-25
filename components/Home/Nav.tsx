import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from "@/public/images/logo.png";
import Searchbox from '../Helper/Searchbox';
import { HeartIcon, LucideUnlockKeyhole, User2Icon } from 'lucide-react';
import ShoppingCartButton from '../Helper/ShoppingCartButton';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Nav = () => {
  return (
    <>
    <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        
        {/* logo */}
        <Link href="/">
          <Image src={Logo} width={128} height={32} alt="Logo" />
        </Link>
        
        {/* icons */}
        <div className="flex items-center space-x-6">

          {/* searchbox */}
          <Searchbox />

          {/* whishlist */}
          <HeartIcon size={26} cursor={"pointer"}/>

          {/* shopping cart */}
          <ShoppingCartButton/>

         
          
  {/* signIn */}
          <SignedIn>
            <UserButton/>
          </SignedIn>

            {/* signOut */}
            <SignedOut>
              <SignInButton>
              <User2Icon size={26} cursor={"pointer"}/>
              </SignInButton>
            </SignedOut>
           

    
          



     
        </div>
      </div>
    </div>
  </>
)
}

export default Nav