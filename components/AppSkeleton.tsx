"use client"
import React, { useState } from 'react'
import Modal from './Modal';
import Navbar from './Navbar';
import Footer from './Footer';
import SignUp from './SignUp';
import SignIn from './SignIn';

const AppSkeleton = ({ children }: { children: React.ReactNode }) => {
    const [authMode, setAuthmode] = useState<"sign-in" | "sign-up" | null>(null);
  
    return (
      <>
        <Navbar 
          onSignIn={() => setAuthmode("sign-in")}
          onSignUp={() => setAuthmode("sign-up")}
        />

        <Modal isOpen={authMode !== null} onClose={() => setAuthmode(null)}>
          {authMode === "sign-in" && (
            <SignIn setAuthMode={setAuthmode}/>
          )}

          {authMode === "sign-up" && (
            <SignUp setAuthMode={setAuthmode}/>
          )}
        </Modal>
        {children}
        <Footer />
      </>
    );
}

export default AppSkeleton