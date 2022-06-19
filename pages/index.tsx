import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LOGIN_REDIRECT, LOGIN_URL } from "../constant";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [session, setSession] = useState("");
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setSession("");
  };

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    setSession(authToken || "");

    if (authToken) {
      router.push(LOGIN_REDIRECT);
    } else {
      router.push(LOGIN_URL);
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
              <a onClick={handleLogout} className={styles.card}>
                <h2>Logout &rarr;</h2>
                <p>Log out from current session.</p>
              </a>

              <a href="#" onClick={handleLogout} className={styles.card}>
                <h2>Upload Data &rarr;</h2>
                <p>Upload student and grade data.</p>
              </a>

              <a href="#" onClick={handleLogout} className={styles.card}>
                <h2>Result &rarr;</h2>
                <p>Get current prediction result.</p>
              </a>
            </div>
          </>
        ) : (
          <>
            <p className={styles.description}>
              Get started by <code className={styles.code}>login</code>
            </p>

            <div className={styles.grid}>
              <a href={LOGIN_URL} className={styles.card}>
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
