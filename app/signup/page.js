"use client";

import React from "react";
import Header from "../components/Login/Header";
import Signup from "../components/Login/Signup";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-1">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Signup />
    </div>
  );
};

export default SignUp;
