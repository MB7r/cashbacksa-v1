// app/login/page.tsx

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">تسجيل الدخول برقم الجوال</h2>

      <form action="/fake-login" method="POST">
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
          رقم الجوال
        </label>

        <div className="flex items-center space-x-2">
          <div className="flex items-center px-3 py-2 bg-gray-100 rounded-md text-sm text-gray-800">
            🇸🇦 +966
          </div>

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="5xxxxxxxx"
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          التالي
        </button>
      </form>
    </div>
  );
}
