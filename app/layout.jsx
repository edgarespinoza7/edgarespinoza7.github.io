import { Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//Theme Providerj
import { ThemeProvider } from "@/components/ThemeProvider";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Edgar Espinoza",
  description: "Front-end Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}