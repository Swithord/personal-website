import Head from "next/head";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

const REDIRECT_TARGET = "https://aclanthology.org/2026.eacl-srw.8.pdf";

export default function EaclRedirectPage() {
  useEffect(() => {
    track("eacl_qr_visit", {
      path: "/eacl",
      referrer: document.referrer || "direct",
    });

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
      <main className="min-h-screen flex items-center justify-center p-6 text-center">
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