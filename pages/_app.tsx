import "@/styles/globals.css";
import '@/styles/fonts.css';
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <Analytics />
    <Component {...pageProps} />
  </ThemeProvider>);
}
