"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Trophy,
  Target,
  CheckSquare,
  LayoutDashboard,
  Award,
  FileText,
  Map,
  ChartNoAxesColumn,
  File,
  Menu,
} from "lucide-react";
import { FaChartLine } from "react-icons/fa";
import { useState } from "react";
import { SiHtml5 } from "react-icons/si";

// Add this data array at the top of your file
const graphData = [
  { x: 0, y: 5 },
  { x: 10, y: 8 },
  { x: 20, y: 12 },
  { x: 25, y: 15 },
  { x: 30, y: 25 },
  { x: 35, y: 30 },
  { x: 40, y: 35 },
  { x: 45, y: 45 },
  { x: 50, y: 60 },
  { x: 55, y: 50 },
  { x: 60, y: 45 },
  { x: 70, y: 25 },
  { x: 80, y: 15 },
  { x: 90, y: 15 },
  { x: 100, y: 5 },
];

// Add this component for the progress bar
const ProgressBar = ({ color, percentage }) => {
  const bgColors = {
    blue: "bg-[#4F46E5]",
    orange: "bg-[#FF9142]",
    red: "bg-[#FF5A5A]",
    green: "bg-[#4EE5A6]",
  };

  const bgLightColors = {
    blue: "bg-[#4F46E5]/10",
    orange: "bg-[#FF9142]/10",
    red: "bg-[#FF5A5A]/10",
    green: "bg-[#4EE5A6]/10",
  };

  return (
    <div className={`h-2 w-full rounded-full ${bgLightColors[color]}`}>
      <div
        className={`h-full rounded-full ${bgColors[color]}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

// Update the Comparison Graph section in your component
const ComparisonGraph = ({ percentile }) => {
  return (
    <div className="bg-white rounded-lg p-4 2xl:p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[18px] font-bold text-[#1E1E1E]">
          Comparison Graph
        </h3>
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <FaChartLine className="text-gray-500" />
        </div>
      </div>
      <p className="text-gray-700 mb-8 text-base">
        <span className="font-bold">You scored {percentile}% percentile</span>{" "}
        which is lower than the average percentile{" "}
        <span className="font-semibold">72%</span> of all the engineers who took
        this assessment
      </p>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={graphData}
            margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="x"
              tickCount={6}
              domain={[0, 100]}
              type="number"
              label={{
                value: "",
                position: "bottom",
                offset: 15,
              }}
            />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="y"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ r: 3, fill: "#4F46E5" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Add this section after your Comparison Graph
const SyllabusAnalysis = () => {
  return (
    <div className="bg-white rounded-lg p-4 2xl:p-6 border border-gray-200 mb-6">
      <h3 className="text-[18px] font-bold text-[#1E1E1E] mb-6">
        Syllabus Wise Analysis
      </h3>

      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-[#1E1E1E] text-[16px]">
              HTML Tools, Forms, History
            </span>
            <span className="text-[#4F46E5] font-medium">80%</span>
          </div>
          <ProgressBar color="blue" percentage={80} />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-[#1E1E1E] text-[16px]">
              Tags & References in HTML
            </span>
            <span className="text-[#FF9142] font-medium">60%</span>
          </div>
          <ProgressBar color="orange" percentage={60} />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-[#1E1E1E] text-[16px]">
              Tables & References in HTML
            </span>
            <span className="text-[#FF5A5A] font-medium">24%</span>
          </div>
          <ProgressBar color="red" percentage={24} />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-[#1E1E1E] text-[16px]">
              Tables & CSS Basics
            </span>
            <span className="text-[#4EE5A6] font-medium">96%</span>
          </div>
          <ProgressBar color="green" percentage={96} />
        </div>
      </div>
    </div>
  );
};

const QuestionAnalysis = ({ scores }) => {
  const data = [
    { name: "Correct", value: 12 },
    { name: "Incorrect", value: 3 },
  ];

  const COLORS = ["#4F46E5", "#EEF0FF"];

  return (
    <div className="bg-white rounded-lg p-4 2xl:p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-[18px] font-bold text-[#1E1E1E]">
          Question Analysis
        </h3>
        <span className="text-[#4F46E5] font-medium">
          {scores.currentScore} / 15
        </span>
      </div>

      <p className="text-gray-700 text-[16px] mb-8">
        <span className="font-bold">
          You scored 12 question correct out of 15.
        </span>{" "}
        However it still needs some improvements
      </p>

      <div className="flex justify-center">
        <div className="relative w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <Target className="text-red-500 w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 md:hidden bg-[#142683] text-white p-3 rounded-full shadow-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed md:static
        top-[64px] bottom-0 left-0
        w-[220px] bg-white border-r border-gray-200
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        z-40
      `}
      >
        <div className="mb-16" />

        <nav className="space-y-2 px-4">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-r-[40px]"
            onClick={() => setIsOpen(false)}
          >
            <ChartNoAxesColumn className="w-5 h-5" />
            <span className="text-[15px] font-semibold">Dashboard</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-[#0d00ff] bg-[#F3F4FF] rounded-r-[40px]"
            onClick={() => setIsOpen(false)}
          >
            <Award className="w-5 h-5" />
            <span className="text-[15px] font-bold">Skill Test</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-r-[40px]"
            onClick={() => setIsOpen(false)}
          >
            <File className="w-5 h-5" />
            <span className="text-[15px] font-semibold">Internship</span>
          </a>
        </nav>
      </div>
    </>
  );
};

const QuickStatistics = ({ scores }) => {
  return (
    <div className="bg-white rounded-lg p-4 2xl:p-6 border border-gray-200 mb-6">
      <h3 className="text-[18px] font-bold text-[#1E1E1E] mb-6">
        Quick Statistics
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0">
        <div className="flex items-center gap-4 justify-between md:justify-start">
          <div className="p-3 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
            🏆
          </div>
          <div>
            <h3 className="text-2xl font-bold">{scores.rank}</h3>
            <p className="text-gray-500 text-xs font-medium">YOUR RANK</p>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-between md:justify-start">
          <div className="p-3 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
            📊
          </div>
          <div>
            <h3 className="text-2xl font-bold">{scores.percentile}%</h3>
            <p className="text-gray-500 text-xs font-medium">PERCENTILE</p>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-between md:justify-start">
          <div className="p-3 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
            ✅
          </div>
          <div>
            <h3 className="text-2xl font-bold">{scores.currentScore} / 15</h3>
            <p className="text-gray-500 text-xs font-medium whitespace-nowrap">
              CORRECT ANSWERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this Navbar component
const Navbar = () => {
  return (
    <nav className="h-16 bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center h-full px-4">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2">
          <div className="font-bold leadin text-[20px]">
            <Map />
          </div>
          <span className="font-bold text-[22px]">WhatBytes</span>
        </div>

        {/* Right side - Profile */}
        <div className="flex items-center gap-2 shadow border rounded p-1">
          <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-[13px] font-bold text-black">
            Rahil Siddique
          </span>
        </div>
      </div>
    </nav>
  );
};

// Add the Modal component before the main Home component
const UpdateScoresModal = ({ isOpen, onClose, onSave, initialScores }) => {
  const [rank, setRank] = useState(initialScores?.rank?.toString() || "");
  const [percentile, setPercentile] = useState(
    initialScores?.percentile?.toString() || ""
  );
  const [currentScore, setCurrentScore] = useState(
    initialScores?.currentScore?.toString() || ""
  );

  const handleSave = () => {
    if (parseInt(currentScore) > 15) {
      alert("Please enter valid scores. (out of 15)");
      return;
    } else if (parseInt(percentile) > 100) {
      alert("Please enter valid percentile");
      return;
    } else if (parseInt(rank) > 100) {
      alert("Please enter valid rank");
      return;
    }
    onSave({
      rank: parseInt(rank),
      percentile: parseInt(percentile),
      currentScore: parseInt(currentScore),
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-[567px]">
        <div className="flex items-center justify-between gap-3 mb-8">
          <h2 className="text-[28px] font-bold">Update scores</h2>
          <div className="flex flex-col items-center ">
            <span className="text-[10px] font-bold">HTML</span>
            <SiHtml5 className="text-[28px] font-semibold text-red-600" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-[#142683] text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </span>
              <label className="font-medium">
                Update your <span className="font-bold">Rank</span>
              </label>
            </div>
            <input
              type="number"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="w-full border focus:border-blue-500 focus-visible:outline-blue-500  border-gray-300 rounded-lg p-3 text-[15px] w-[120px]"
              placeholder="Enter rank"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-[#142683] text-white rounded-full flex items-center justify-center text-sm font-medium">
                2
              </span>
              <label className="font-medium">
                Update your <span className="font-bold">Percentile</span>
              </label>
            </div>
            <input
              type="number"
              max={100}
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              className="w-full border focus-visible:outline-blue-500 border-gray-300 rounded-lg p-3 text-[15px] w-[120px]"
              placeholder="Enter percentile"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-[#142683] text-white rounded-full flex items-center justify-center text-sm font-medium">
                3
              </span>
              <label className="font-medium">
                Update your <span className="font-bold">Current Score</span>{" "}
                (out of 15)
              </label>
            </div>
            <input
              type="number"
              max={15}
              value={currentScore}
              onChange={(e) => setCurrentScore(e.target.value)}
              className="w-full border focus-visible:outline-blue-500 border-gray-300 rounded-lg p-3 text-[15px] w-[120px]"
              placeholder="Enter current score"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-300 text-[#142683] font-medium rounded-lg hover:bg-gray-50"
          >
            cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-[#142683] text-white rounded-lg flex items-center gap-2 hover:bg-[#1e2875] font-medium"
          >
            save <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Update the main layout to include the navbar
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scores, setScores] = useState({
    rank: 1,
    percentile: 30,
    currentScore: 12,
  });

  const handleUpdateScores = (newScores) => {
    setScores(newScores);
  };

  return (
    <div>
      <Navbar />
      <div className="flex pt-16">
        {" "}
        {/* Added pt-16 to account for fixed navbar */}
        <Sidebar />
        <div className="flex-1 min-h-screen bg-[rgb(255,255,255)] p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-base font-medium text-gray-600 mb-6">
              Skill Test
            </h1>

            <div className="flex items-start gap-6 flex-col xl:flex-row">
              <section>
                {/* HTML Test Card */}
                <div className="bg-white rounded-lg p-4 2xl:p-6 border border-gray-200 mb-6">
                  <div className="flex md:items-center justify-between gap-3">
                    <div className="flex md:items-center gap-3">
                      <div className="flex flex-col items-start md:items-center ">
                        <span className="text-[13px] font-bold">HTML</span>
                        <SiHtml5 className="sm:text-[50px] text-[28px] font-semibold text-orange-600" />
                      </div>
                      <div>
                        <h2 className="text-[18px] font-bold text-[#1E1E1E] leading-tight">
                          Hyper Text Markup Language
                        </h2>
                        <p className="text-[15px] text-black mt-1.5 font-normal">
                          Questions: 08 | Duration: 15 mins | Submitted on 5
                          June 2021
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#142683] text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-[#1e2875] transition-colors"
                    >
                      Update
                    </button>
                  </div>
                </div>

                <QuickStatistics scores={scores} />
                <ComparisonGraph percentile={scores.percentile} />
              </section>
              <div className="space-y-6 w-full xl:w-auto">
                <SyllabusAnalysis />
                <QuestionAnalysis scores={scores} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateScoresModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleUpdateScores}
        initialScores={scores}
      />
    </div>
  );
}
