import Link from "next/link";

export default function Home() {
  return (
    <section className="p-4 flex flex-col items-center justify-center mx-auto min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 m-2">
        Milestone 01
      </h1>

      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 relative">
        Next.js Application
        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-lg rounded-lg"></span>
      </h1>

      <div className="border-collapse bg-gradient-to-r from-green-600 to-purple-900 w-80 h-80 flex items-center justify-center mt-6 rounded-xl shadow-xl">
        <h1 className="text-center text-5xl font-extrabold text-white m-6 animate-bounce">
          Hello World
        </h1>
      </div>

      <div className="mt-6 text-white font-bold rounded-lg flex flex-col items-center w-full p-6 bg-gradient-to-r from-gray-800 to-gray-700 shadow-md">
        <p className="p-5 text-lg">
          To learn about the Next.js application file structure, click the link below:
        </p>

        <Link
          href={
            "https://github.com/snowworldgithub/Milestone-1-Hello-World-Application-In-Next-js-/blob/main/README.md"
          }
        >
          <button className="text-xl bg-blue-600 p-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Click Here
          </button>
        </Link>
      </div>

      <div className="mt-8 text-white font-bold">
        <p className="text-lg p-5">Created by: Giaic Senior Student filza danish</p>
      </div>

    </section>
  );
}
