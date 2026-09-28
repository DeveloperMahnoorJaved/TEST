import "./globals.css";

export const metadata = {
  title: "Frontend Development Test",
  description: "Frontend Development test: HTML, CSS, JavaScript, Bootstrap 5, Netlify, Vercel, LinkedIn and Firebase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
