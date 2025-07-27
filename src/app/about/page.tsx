export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black-500 via-white-500 to-pink-500 text-white flex items-center justify-center">
      <div className="max-w-4xl px-6 py-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
          About Me
        </h1>
        <p className="text-lg text-gray-200 animate-slide-up">
          I'm <span className="font-bold text-white">Pritam Kumar</span>, a passionate **Full-Stack Developer** and **Competitive Programmer** with expertise in **React, Node.js, MongoDB, and problem-solving**.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Full-Stack Dev</h3>
            <p className="text-sm text-gray-200">Building scalable applications using **MERN Stack**.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Competitive Programming</h3>
            <p className="text-sm text-gray-200">Solving **Data Structures & Algorithms** problems on Leetcode & Codeforces.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Tech Enthusiast</h3>
            <p className="text-sm text-gray-200">Exploring **Next.js, AI models & Blockchain integration**.</p>
          </div>
        </div>
      </div>
    </div>
  );
}