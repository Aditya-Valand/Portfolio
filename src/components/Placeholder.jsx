import React from 'react';

function PhotoPlaceholder() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
        
        {/* Photo Grid Container */}
        <div className="relative w-full h-full">
          
          {/* Main large photo - bottom center */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg border-4 border-white overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-700/20">
              <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Top left photo */}
          <div className="absolute top-0 left-8 w-32 h-40 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl shadow-lg border-3 border-white overflow-hidden transform rotate-3">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-500/20 to-gray-700/20">
              <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Top right photo */}
          <div className="absolute top-8 right-4 w-36 h-44 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg border-3 border-white overflow-hidden transform -rotate-2">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/20 to-green-700/20">
              <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Bottom left photo */}
          <div className="absolute bottom-12 left-0 w-28 h-36 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg border-3 border-white overflow-hidden transform rotate-6">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-purple-700/20">
              <svg className="w-10 h-10 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Right side photo */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-24 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg border-3 border-white overflow-hidden transform -rotate-12">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-500/20 to-orange-600/20">
              <svg className="w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Small floating photo */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-lg border-2 border-white overflow-hidden transform rotate-12">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-500/20 to-pink-700/20">
              <svg className="w-6 h-6 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
        </div>
        
        {/* You can replace the placeholder divs above with actual images like this:
        <img 
          src="/path-to-your-photo1.jpg" 
          alt="Photo 1" 
          className="w-full h-full object-cover"
        />
        */}
      </div>
    </div>
  );
}

export default PhotoPlaceholder;