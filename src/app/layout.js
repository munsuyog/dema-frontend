import { Open_Sans, Montserrat, Architects_Daughter, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import './animations.css'

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const demaFont = localFont({
  src: "../../public/fonts/dema/bold.ttf",
  variable: "--font-dema",
});

const ArchitectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  variable: "--font-architects-daughter",
  weight: ['400']
})

export const metadata = {
  title: "Dema",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${demaFont.variable} ${montserrat.variable} ${ArchitectsDaughter.variable} ${interFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
