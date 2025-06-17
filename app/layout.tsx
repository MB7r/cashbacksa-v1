import '../styles/globals.css'; // ✅ عدّل المسار حسب موقع ملف globals.css
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cashbacksa',
  description: 'منصة الكاش باك الذكية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans bg-[#DFF5E3] text-[#111827]">
        <main className="min-h-screen flex flex-col">
          <div className="flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
