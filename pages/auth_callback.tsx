import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LOGIN_REDIRECT } from "../constant";

const AuthCallbackPage: NextPage = () => {
  const router = useRouter();
  let authToken = "";
  if (typeof window !== "undefined") {
    authToken = window.location.hash.replace("#id_token=", "");
    localStorage.setItem("token", authToken);
  }

  useEffect(() => {
    router.push(LOGIN_REDIRECT);
  }, [router]);

  return null;
};

export default AuthCallbackPage;
