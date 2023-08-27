import { Inter } from "next/font/google";
import Header from "./components/Header";
import { AppContextProvider } from "./context/AppContext";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Next.js boilerplate",
  description: "Build learning projects with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          <Header />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
