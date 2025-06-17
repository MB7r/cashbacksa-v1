'use client';
import { useRouter } from 'next/navigation';
import { Store, User } from 'lucide-react';

export default function EntryPage() {
  const router = useRouter();

  const goTo = (type: string) => {
    if (type === 'store') router.push('/merchant/login');
    else if (type === 'user') router.push('/login');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#DFF5E3] p-6 text-center">
      {/* الشعار */}
      <img
        src="/logo.png"
        alt="Cashbacksa Logo"
        className="w-[250px] h-[250px] mb-4 mt-6"
      />


      {/* الأزرار بدون تنسيق، فقط نص وأيقونة */}
      <div className="flex gap-12 w-full max-w-sm mb-12 justify-center">
        <button
          onClick={() => goTo('user')}
          className="flex flex-col items-center justify-center text-green-700 hover:text-green-800 transition"
        >
          <User size={36} strokeWidth={1.5} />
          <span className="mt-2 text-lg font-medium">مستخدم</span>
        </button>

        <button
          onClick={() => goTo('store')}
          className="flex flex-col items-center justify-center text-orange-600 hover:text-orange-700 transition"
        >
          <Store size={36} strokeWidth={1.5} />
          <span className="mt-2 text-lg font-medium">متجر</span>
        </button>
      </div>

      {/* روابط أسفل الصفحة */}
      <footer className="text-sm text-gray-600">
        <div className="flex gap-6 justify-center">
          <a href="/about" className="hover:text-black transition">من نحن</a>
          <a href="/contact" className="hover:text-black transition">اتصل بنا</a>
          <a href="/terms" className="hover:text-black transition">الشروط</a>
        </div>
      </footer>
    </main>
  );
}
