import type { Metadata } from "next";
import { DM_Sans, Oswald, Sue_Ellen_Francisco } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { restaurant } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const script = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: {
    default: `${restaurant.name} | Moweaqua, IL`,
    template: `%s | ${restaurant.name}`,
  },
  description:
    "Pizza, pub favorites, and bowling at Crawfords Pizza Pub & Pins, 200 S Main St, Moweaqua, Illinois. See the menu, hours, photos, and how to visit.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${dmSans.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-muted">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
