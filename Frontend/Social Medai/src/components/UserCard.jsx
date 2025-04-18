// src/components/UserCard.jsx
export default function UserCard({ user, rank }) {
    const rankColors = [
      'from-yellow-400 to-yellow-600', // 1st
      'from-gray-400 to-gray-600',     // 2nd
      'from-amber-600 to-amber-800',   // 3rd
      'from-purple-500 to-purple-700', // 4th
      'from-red-500 to-red-700'        // 5th
    ]
  
    return (
      <div className="cyber-card p-0 overflow-hidden relative">
        <div className="data-burst"></div>
        <div className="flex items-center p-5">
          <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${rankColors[rank - 1]} font-bold text-white mr-4 shadow-lg`}>
            #{rank}
          </div>
          <img 
            src={`https://i.pravatar.cc/150?img=${user.id}`} 
            alt={user.name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-[#333] mr-4 shadow-md"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-white truncate">{user.name}</h3>
            <p className="text-sm text-gray-400 truncate">@{user.username}</p>
          </div>
          <div className="ml-4 flex flex-col items-end">
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400">
              {user.posts}
            </span>
            <span className="text-xs text-gray-500">POSTS</span>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-purple-500 to-red-500"></div>
      </div>
    )
  }