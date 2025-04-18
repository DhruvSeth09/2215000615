// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-[#1a1a1a] border-b border-[#333] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500">
              SOCIAL PULSE
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-1 bg-[#222] p-1 rounded-full border border-[#333]">
            <NavLink 
              to="/top-users" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
                }`
              }
            >
              TOP USERS
            </NavLink>
            <NavLink 
              to="/trending-posts" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
                }`
              }
            >
              TRENDING
            </NavLink>
            <NavLink 
              to="/feed" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
                }`
              }
            >
              LIVE FEED
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}