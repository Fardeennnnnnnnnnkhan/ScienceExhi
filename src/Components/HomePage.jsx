import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Engineer from '../assets/engineer.png'
import image from '../assets/image.png'
import logo from '../assets/logo.webp'
export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-5 md:px-10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#5037df] via-black to-black opacity-60"></div>

      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-5 text-lg font-semibold z-20">
        <h1 className="text-2xl text-white font-bold">
         <span className="text-[#5037df]">Physics</span> Playground
        </h1>
        <div className="md:hidden z-30" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={30} className="text-white" /> : <HiOutlineMenuAlt3 size={30} className="text-white" />}
        </div>
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-[#5037df] cursor-pointer">Home</li>
          <li className="hover:text-[#5037df] cursor-pointer">Simulations</li>
          <li className="hover:text-[#5037df] cursor-pointer">Concepts</li>
          <li className="hover:text-[#5037df] cursor-pointer">About</li>
          <li className="hover:text-[#5037df] cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
          <motion.div
          initial={{ opacity: 0, x: 0, scale: 0.9 }}
          animate={{ opacity: 1, x: -20, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          className="absolute top-16 right-5 w-60 h-56 bg-black bg-opacity-80 backdrop-blur-md flex flex-col justify-center items-center space-y-4 rounded-lg shadow-lg z-20 p-5"
        >
          <ul className="text-lg">
            <li className="hover:text-[#5037df] cursor-pointer" onClick={() => setIsOpen(false)}>Home</li>
            <li className="hover:text-[#5037df] cursor-pointer" onClick={() => setIsOpen(false)}>Simulations</li>
            <li className="hover:text-[#5037df] cursor-pointer" onClick={() => setIsOpen(false)}>Concepts</li>
            <li className="hover:text-[#5037df] cursor-pointer" onClick={() => setIsOpen(false)}>About</li>
            <li className="hover:text-[#5037df] cursor-pointer" onClick={() => setIsOpen(false)}>Contact</li>
          </ul>
        </motion.div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl z-10 text-center md:text-left">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to <span className="text-[#5037df]">Physics Playground</span>
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            A software where you can experiment with physics in real time and explore scientific concepts interactively!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 text-lg text-white bg-[#5037df] rounded-lg shadow-md transition"
          >
            Start Experimenting →
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.img
        src={Engineer}
          alt="Scientist holding glowing cubes"
          className="w-2/3  md:w-1/3 max-w-sm mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}
