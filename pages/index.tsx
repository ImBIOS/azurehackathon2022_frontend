import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const loginUrl =
    "https://evangelion01msapac.b2clogin.com/evangelion01msapac.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signupsignin&client_id=925790c8-225b-45ef-831f-c3e0a02f6030&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth_callback&scope=openid&response_type=id_token&prompt=login";

  useEffect(() => {
    const authToken = localStorage.getItem("token");

    if (authToken) {
      router.push("/input-user");
    } else {
      router.push(loginUrl);
    }
  }, [router]);

  return null;
};

export default Home;
