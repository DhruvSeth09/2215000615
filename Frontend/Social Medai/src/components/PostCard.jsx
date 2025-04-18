// src/components/PostCard.jsx
export default function PostCard({ post, isTrending = false }) {
    return (
      <div className="cyber-card p-0 overflow-hidden relative group">
        <div className="data-burst"></div>
        <div className="p-5">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <img 
                src={`https://i.pravatar.cc/150?img=${post.userId}`} 
                alt={post.author} 
                className="w-10 h-10 rounded-full object-cover border-2 border-[#333] mr-3"
              />
              <div>
                <h4 className="font-bold text-white">{post.author}</h4>
                <p className="text-xs text-gray-400">{post.time}</p>
              </div>
            </div>
            {isTrending && (
              <span className="flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-white">
                <span className="pulse-dot mr-2"></span>
                TRENDING
              </span>
            )}
          </div>
          
          <h3 className="font-bold text-xl text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 to-red-400 transition-all duration-300">
            {post.title}
          </h3>
          <p className="text-gray-300 mb-5">{post.content}</p>
          
          <div className="flex justify-between items-center pt-3 border-t border-[#333]">
            <div className="flex space-x-4">
              <span className="flex items-center text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-mono">{post.comments}</span>
              </span>
              <span className="flex items-center text-gray-400 hover:text-red-400 cursor-pointer transition-colors duration-300">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span className="font-mono">{post.likes}</span>
              </span>
            </div>
            <span className="text-xs text-gray-500 font-mono">#{post.id.toString().slice(-4)}</span>
          </div>
        </div>
      </div>
    )
  }