import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LOGIN_URL } from "../constant";

type Props = {
  children: JSX.Element;
};

const AuthLayout: NextPage<Props> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const authToken = localStorage.getItem("token");

    if (!authToken) {
      router.push(LOGIN_URL);
    }
  }, [router]);
  return children;
};

export default AuthLayout;
