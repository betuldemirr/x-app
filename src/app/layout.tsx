import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "X App",
  description: "Next.js and Twitter API integration app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={headerStyle}>
          <h1>X App</h1>
        </header>
        <main style={mainStyle}>{children}</main>
        <footer style={footerStyle}>
          <p>Powered by Next.js and X API</p>
        </footer>
      </body>
    </html>
  );
}

const headerStyle = {
  padding: "1rem",
  backgroundColor: "#1DA1F2",
  color: "white",
  textAlign: "center" as const,
};

const mainStyle = {
  padding: "1rem",
  minHeight: "80vh",
};

const footerStyle = {
  padding: "1rem",
  backgroundColor: "#f1f1f1",
  textAlign: "center" as const,
};
