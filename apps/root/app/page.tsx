import Image from "next/image";


export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome</h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our micro-frontend platform built with modern technologies
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
