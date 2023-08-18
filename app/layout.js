import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Next.js boilerplate",
  description: "Build learning projects with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
