"use client"
import React, { useState } from 'react'
import Modal from './Modal';
import Navbar from './Navbar';
import Footer from './Footer';
import SignUp from './SignUp';
import SignIn from './SignIn';

const AppSkeleton = ({ children }: { children: React.ReactNode }) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
  
    return (
      <div className="relative font-sans">
        <Navbar onSignIn={() => setShowSignIn(true)} onSignUp={() => setShowSignUp(true)} />
  
        <Modal isOpen={showSignIn} onClose={() => setShowSignIn(false)}>
          <SignIn />
        </Modal>
  
        <Modal isOpen={showSignUp} onClose={() => setShowSignUp(false)}>
          <SignUp />
        </Modal>
  
        {children}
        <Footer />
      </div>
    );
}

export default AppSkeleton