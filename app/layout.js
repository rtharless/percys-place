import "./globals.css";

export const metadata = {
  title: "Percy's Place (Demo)",
  description: "Wireframe-driven demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
