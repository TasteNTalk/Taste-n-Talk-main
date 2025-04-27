import React from "react";

const Blogs = () => {
  return (
    <div className="bg-[#002140]">
      <div className="bg-[#002140] text-gray-800 font-sans">
        <div className="container ml-[250px] -mt-[720px] py-12 px-4 md:px-6 w-fit ">
          <div className="w-full">
            <div className="mb-10 animate-fade-up">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-orange-400 after:mt-2">
                Latest{" "}
                <span className="text-orange-400">
                  Food Articles & Inspiration
                </span>
              </h1>
              <p className="text-gray-200 text-lg md:text-xl max-w-3xl">
                Discover recipes, cooking tips, and food stories from our
                community of passionate foodies
              </p>
            </div>

            <div className="bg-gradient-to-tr from-black via-black/60 to-transparent rounded-2xl overflow-hidden mb-12 shadow-2xl flex flex-col md:flex-row min-h-[350px] w-full relative group transform transition duration-500 hover:-translate-y-2">
              <div className="md:w-1/2 h-64 md:h-auto bg-cover bg-center transition-transform duration-700 ease-in-out transform group-hover:scale-105 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#002140]/70 to-transparent"></div>
              </div>
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <span className="bg-white text-[#ff4d4d] py-2 px-4 text-xs md:text-sm mb-4 inline-block font-bold rounded-full shadow-md transform transition hover:bg-[#ff4d4d] hover:text-white hover:scale-105">
                  FEATURED
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white/80 leading-tight transition-all duration-300">
                  What Your Music Preference Says About Your Food Personality
                </h2>
                <p className="text-gray-400 mb-6 text-base md:text-lg leading-relaxed">
                  Explore the fascinating connection between your playlist
                  favorites and your culinary preferences. We've analyzed data
                  from thousands of food enthusiasts to find surprising
                  correlations.
                </p>
                <div className="flex items-center text-gray-400 text-sm md:text-base mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg mr-3 transition-transform duration-300 hover:scale-110">
                    <img
                      src="/api/placeholder/40/40"
                      alt="Author"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium">
                    By John Doe • March 8, 2025 • 5 min read
                  </span>
                </div>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 bg-[#ff4d4d] text-white py-3 px-6 rounded-full font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:text-[#ff4d4d] overflow-hidden relative"
                >
                  <span>Read Article</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"

                    // stroke="currentColor"
                  >
                    <path
                    //  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-700 ease-in-out"

                  // style="background-image: url('/api/placeholder/400/200');"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#002140]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="bg-white text-[#ff4d4d] py-1 px-3 text-xs font-semibold rounded-full shadow-sm hover:bg-[#ff4d4d] hover:text-white">
                    RECIPE
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2 text-white/80 transition-colors duration-300">
                    Quick Weeknight Dinner Ideas
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    10 delicious meals you can prepare in under 30 minutes that
                    your family will love.
                  </p>
                  <div className="flex justify-between text-gray-400 text-xs pt-4 border-t border-gray-100">
                    <span>March 7, 2025</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-700 ease-in-out"

                  // style="background-image: url('/api/placeholder/400/200');"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#002140]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="bg-white text-[#ff4d4d] py-1 px-3 text-xs font-semibold rounded-full shadow-sm hover:bg-[#ff4d4d] hover:text-white">
                    GUIDE
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2 text-white/80 transition-colors duration-300">
                    Essential Kitchen Tools Every Home Chef Needs
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    Upgrade your cooking experience with these must-have tools
                    that professionals swear by.
                  </p>
                  <div className="flex justify-between text-gray-400 text-xs pt-4 border-t border-gray-100">
                    <span>March 6, 2025</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-700 ease-in-out"
                  // style="background-image: url('/api/placeholder/400/200');"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#002140]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="bg-white text-[#ff4d4d] py-1 px-3 text-xs font-semibold rounded-full shadow-sm hover:bg-[#ff4d4d] hover:text-white">
                    CULTURE
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2 text-white/80 transition-colors duration-300">
                    Exploring Mediterranean Food Traditions
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    Dive into the rich culinary heritage of Mediterranean
                    countries and their healthy eating habits.
                  </p>
                  <div className="flex justify-between text-gray-400 text-xs pt-4 border-t border-gray-100">
                    <span>March 5, 2025</span>
                    <span>8 min read</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-700 ease-in-out"
                  // style="background-image: url('/api/placeholder/400/200');"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#002140]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="bg-white text-[#ff4d4d] py-1 px-3 text-xs font-semibold rounded-full shadow-sm hover:bg-[#ff4d4d] hover:text-white">
                    TIPS
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2 text-white/80 transition-colors duration-300">
                    Food Photography: Capture Stunning Dishes
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    Learn how to take Instagram-worthy food photos with just
                    your smartphone and basic props.
                  </p>
                  <div className="flex justify-between text-gray-400 text-xs pt-4 border-t border-gray-100">
                    <span>March 4, 2025</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-700 ease-in-out"
                  // style="background-image: url('/api/placeholder/400/200');"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#002140]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="bg-white text-[#ff4d4d] py-1 px-3 text-xs font-semibold rounded-full shadow-sm hover:bg-[#ff4d4d] hover:text-white">
                    HEALTH
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2 text-white/80 transition-colors duration-300">
                    Superfoods You Should Add to Your Diet
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    Discover nutrient-packed foods that can boost your immunity
                    and overall wellness.
                  </p>
                  <div className="flex justify-between text-gray-400 text-xs pt-4 border-t border-gray-100">
                    <span>March 3, 2025</span>
                    <span>7 min read</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-700 ease-in-out"
                  // style="background-image: url('/api/placeholder/400/200');"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#002140]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="bg-white text-[#ff4d4d] py-1 px-3 text-xs font-semibold rounded-full shadow-sm hover:bg-[#ff4d4d] hover:text-white">
                    INTERVIEW
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2 text-white/80 transition-colors duration-300">
                    A Day in the Life of a Michelin Chef
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    We followed chef Maria Rodriguez for 24 hours to see what it
                    takes to run a top restaurant.
                  </p>
                  <div className="flex justify-between text-gray-400 text-xs pt-4 border-t border-gray-100">
                    <span>March 2, 2025</span>
                    <span>10 min read</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16 mb-8">
              <button className="group relative inline-flex items-center justify-center bg-[#ff4d4d] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1  overflow-hidden hover:bg-white hover:text-[#ff4d4d]">
                <span className="relative z-10 flex items-center gap-2">
                  Load More Articles
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                    // stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
