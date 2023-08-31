import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Abir's Protfolio Website",
  description: "Portfolio Website Descripton",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
