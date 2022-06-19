import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const AuthCallbackPage: NextPage = () => {
  const router = useRouter();
  let authToken = "";
  if (typeof window !== "undefined") {
    authToken = window.location.hash.replace("#id_token=", "");
    localStorage.setItem("token", authToken);
  }

  useEffect(() => {
    router.push("/input-user");
  }, [router]);

  return <></>;
};

export default AuthCallbackPage;
