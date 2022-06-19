import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [session, setSession] = useState("");
  const router = useRouter();
  const loginUrl =
    "https://evangelion01msapac.b2clogin.com/evangelion01msapac.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signupsignin&client_id=925790c8-225b-45ef-831f-c3e0a02f6030&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth_callback&scope=openid&response_type=id_token&prompt=login";
  const handleLogout = () => {
    localStorage.removeItem("token");
    setSession("");
  };

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    setSession(authToken || "");

    if (authToken) {
      router.push("/input-user");
    } else {
      router.push(loginUrl);
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>SNMPTN Prediction</title>
        <meta
          name="description"
          content="SNMPTN Prediction by Evangelion01 Team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href={router.pathname}>SNMPTN Prediction!</a>
        </h1>

        {session ? (
          <>
            <p className={styles.description}>
              Already <code className={styles.code}>logged in</code>
            </p>

            <div className={styles.grid}>
              <a href="#" onClick={handleLogout} className={styles.card}>
                <h2>Logout &rarr;</h2>
                <p>Go to authentication page.</p>
              </a>
            </div>
          </>
        ) : (
          <>
            <p className={styles.description}>
              Get started by <code className={styles.code}>login</code>
            </p>

            <div className={styles.grid}>
              <a href={loginUrl} className={styles.card}>
                <h2>Login &rarr;</h2>
                <p>Go to authentication page.</p>
              </a>
            </div>
          </>
        )}
      </main>

      <footer className={styles.footer}>
        <a href={router.pathname} target="_blank" rel="noopener noreferrer">
          Powered by <span className={styles.logo}>Evangelion01 Team</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
