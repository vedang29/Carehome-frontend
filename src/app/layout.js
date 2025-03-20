
import "./globals.css";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include all weights
  variable: "--font-raleway", // Store in CSS variable
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
