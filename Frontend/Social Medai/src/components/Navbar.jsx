
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#1a1a1a] border-b border-[#333] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500">
              SOCIAL PULSE
            </h1>
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1e1e1e] border-t border-[#333]">
          <NavLink 
            to="/top-users" 
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive 
                  ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
              }`
            }
          >
            TOP USERS
          </NavLink>
          <NavLink 
            to="/trending-posts" 
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive 
                  ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
              }`
            }
          >
            TRENDING
          </NavLink>
          <NavLink 
            to="/feed" 
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive 
                  ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
              }`
            }
          >
            LIVE FEED
          </NavLink>
        </div>
      </div>
    </nav>
  )
}