"use client";
import React from "react";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

const CPDashboard = () => {
  return (
    <div className="min-h-screen mx-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        COMPETITIVE PROGRAMMING
      </h1>
      <p className="text-center text-slate-300 mb-10">Journey to Excellence</p>

      {/* Contribution Heatmap */}
      <div className="bg-slate-950 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">📅 Submissions Activity</h2>
        <p>
          <b>1541</b> submissions | Max Streak: <b>69</b> | Current Streak:{" "}
          <b>4</b>
        </p>
        <div className="mt-4 w-full h-66 flex justify-center">
          <img
            src="./streak.png"
            alt="Streak"
            className="w-full h-full object-cover border border-gray-600 rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Contests */}
        <div className="bg-slate-950 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">🏆 Total Contests</h2>
          <p className="text-4xl font-bold mb-4">86</p>
          <ul className="text-slate-300 space-y-2">
            <li>LeetCode: 30</li>
            <li>CodeChef: 22</li>
            <li>CodeForces: 34</li>
          </ul>
        </div>

        {/* Rating */}
        <div className="bg-slate-950 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">📈 Rating Progress</h2>
          <p className="text-3xl font-bold text-orange-400">1868</p>
          <p className="text-sm text-slate-400">
            Biweekly Contest 163 (16 Aug 2025) | Rank: 2519
          </p>
          <div className="mt-4 flex justify-center">
            <img
              src="./problems.png"
              alt="Rating graph"
              className="w-full max-w-md h-auto object-contain border border-gray-600 rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Problems Solved */}
        <div className="bg-slate-950 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">🧩 Problems Solved</h2>
          <p className="font-bold text-2xl mb-2">Fundamentals: 23 (HackerRank)</p>
          <p className="font-bold text-2xl mb-2">DSA: 728</p>
          <ul className="text-slate-300 text-sm mb-2">
            <li>Easy: 334</li>
            <li>Medium: 343</li>
            <li>Hard: 51</li>
          </ul>
          <p className="font-bold text-2xl mb-2">Competitive: 334</p>
          <ul className="text-slate-300 text-sm">
            <li>CodeChef: 155</li>
            <li>CodeForces: 179</li>
          </ul>
        </div>
      </div>

      {/* Contest Rankings */}
      <div className="bg-slate-950 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">🏅 Contest Rankings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* LeetCode */}
          <div className="p-4 bg-slate-700/50 rounded-xl">
            <SiLeetcode className="mx-auto text-orange-400 text-4xl mb-2" />
            <p className="text-3xl font-bold">1868</p>
            <p className="text-slate-400">LeetCode Knight (Top 5.26%)</p>
            <a
              href="https://leetcode.com/u/code_xpr/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block px-4 py-2 text-sm font-medium bg-orange-500 hover:bg-orange-400 text-black rounded-lg shadow"
            >
              View Profile
            </a>
          </div>

          {/* CodeChef */}
          <div className="p-4 bg-slate-700/50 rounded-xl">
            <SiCodechef className="mx-auto text-yellow-500 text-4xl mb-2" />
            <p className="text-3xl font-bold">3★</p>
            <p className="text-slate-400">CodeChef (Max: 1769)</p>
            <a
              href="https://www.codechef.com/users/code_xpr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block px-4 py-2 text-sm font-medium bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg shadow"
            >
              View Profile
            </a>
          </div>

          {/* CodeForces */}
          <div className="p-4 bg-slate-700/50 rounded-xl">
            <SiCodeforces className="mx-auto text-blue-400 text-4xl mb-2" />
            <p className="text-3xl font-bold">Specialist</p>
            <p className="text-slate-400">CodeForces (1408)</p>
            <a
              href="https://codeforces.com/profile/pr_tam"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block px-4 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-lg shadow"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>

      {/* Awards & Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Awards */}
        <div className="bg-slate-950 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">🥇 Awards</h2>
          <p>Total Awards: 39</p>
          <div className="flex gap-4 mt-4 text-lg">
            <span className="bg-orange-500 px-3 py-2 rounded-xl">C</span>
            <span className="bg-yellow-500 px-3 py-2 rounded-xl">C++</span>
            <span className="bg-amber-400 px-3 py-2 rounded-xl">⭐</span>
            <span className="bg-yellow-300 px-3 py-2 rounded-xl">🏆</span>
          </div>
        </div>

        {/* Topic Analysis */}
        <div className="bg-slate-950 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">📊 DSA Topic Analysis</h2>
          <ul className="space-y-2 text-slate-300">
            <li>Arrays: 250</li>
            <li>Strings: 105</li>
            <li>HashMap & Set: 93</li>
            <li>Math: 77</li>
            <li>Sorting: 58</li>
            <li>Dynamic Programming: 56</li>
            <li>Matrix: 38</li>
            <li>Greedy: 38</li>
            <li>DFS: 36</li>
            <li>BFS: 34</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CPDashboard;