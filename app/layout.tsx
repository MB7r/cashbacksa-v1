import "../styles/globals.css";

export const metadata = {
  title: "Cashbacksa – Coming Soon",
  description: "قريبًا على cashbacksa.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
