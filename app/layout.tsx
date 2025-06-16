export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body style={{ fontFamily: 'sans-serif', backgroundColor: '#DFF5E3' }}>{children}</body>
    </html>
  );
}
