import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import GTMInitializer from "./GTMInitializer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Cell GCOEK",
  description: "E-Cell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GTMInitializer />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={rubik.className}>
        {children}

        <script
          src="https://widget.galichat.com/gali-embeded.min.js"
          chat-hash="ogdt9ld90vatu9srltukjg"
          defer
        ></script>
      </body>
    </html>
  );
}

    