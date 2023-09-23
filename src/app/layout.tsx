import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "./components/home/NavBar";
import Footer from "./components/home/Footer";
import Provider from "./provider";
import ScrolToTop from "./components/home/ScrollToTop";

const iransens = localFont({
  src: "../../public/fonts/Sans a4fran3.ttf",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "منوگراف | طراحی سایت در کرمان",
  description:
    "منوگراف یک ابزار قدرتمند برای طراحی وبسایت ها و بهینه سازی برای رتبه بالا در گوگل است",
  keywords: "منوگراف, طراحی سایت, کرمان, رتبه بالا در گوگل",
  icons: [{ rel: "icon", url: "@/public/logo/logo.png" }],
  verification: {
    google: "zWi0UqyvNRVWh4mYYyDnQcLLFUbCF_4CS4W_CeBRip0",
  },
  locale: "fa_IR",
  type: "website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ThemeProvider enableSystem={true} attribute='class'>
    <html className=" dark bg-fixed" lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={`${iransens.className} duration-500  bg-light-them   dark:bg-dark-them`}
      >
        <Provider>
          <NavBar />
          {children}
          <Footer />
        </Provider>
        <ScrolToTop />
      </body>
    </html>
    // </ThemeProvider>
  );
}
