import { Open_Sans } from "next/font/google";
import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Affaldsguiden",
  description: "Sortering af affald",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={opensans.className}>{children}</body>
    </html>
  );
}
