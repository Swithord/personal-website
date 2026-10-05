import Head from "next/head";
import { useEffect } from "react";

const REDIRECT_TARGET = "https://arxiv.org/pdf/2609.03775";

export default function EmnlpRedirectPage() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace(REDIRECT_TARGET);
    }, 150);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
        <meta httpEquiv="refresh" content={`0;url=${REDIRECT_TARGET}`} />
      </Head>
      <main className="min-h-screen flex items-center justify-center p-6 text-center bg-background text-foreground">
        <p>
          Redirecting to the document...
          <br />
          <a className="underline" href={REDIRECT_TARGET}>
            Continue if you are not redirected.
          </a>
        </p>
      </main>
    </>
  );
}