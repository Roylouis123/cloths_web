"use client"

import React from "react";
import Header from "../components/Login/Header";
import Login from "../components/Login/Login";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-1"> 
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </div>
  )
}
