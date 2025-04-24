"use client"
import React, { useState } from 'react'
import Modal from './Modal';
import Navbar from './Navbar';
import Footer from './Footer';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';

const AppSkeleton = ({ children }: { children: React.ReactNode }) => {
    const [authMode, setAuthMode] = useState<"sign-in" | "sign-up" | "forgot-password" | null>(null);
  
    return (
      <>
        <Navbar 
          onSignIn={() => setAuthMode("sign-in")}
          onSignUp={() => setAuthMode("sign-up")}
        />

        <Modal isOpen={authMode !== null} onClose={() => setAuthMode(null)}>
          {authMode === "sign-in" && (
            <SignIn setAuthMode={setAuthMode}/>
          )}

          {authMode === "sign-up" && (
            <SignUp setAuthMode={setAuthMode}/>
          )}

          {authMode === "forgot-password" && (
            <ForgotPassword onBack={() => setAuthMode("sign-in")} />
          )}
        </Modal>
        {children}
        <Footer />
      </>
    );
}

export default AppSkeleton