import React from 'react'

function Saved() {
  return (
    <div class="pt-10 pb-12 px-4 md:px-8 max-w-7xl ml-32 -mt-[620px]">
        <header class="bg-[#001529] shadow-lg z-50 w-full mb-4 rounded-3xl">
           <div class="max-w-7xl mx-auto px-4 md:px-8">
               <div class="flex justify-between items-center h-16">
                   
                   <div class="relative w-fit">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        class="py-1 pl-4 pr-10 rounded-full bg-white text-[#ff4d4d] placeholder-[#ff4d4d]/60 focus:outline-none focus:ring-2 focus:ring-[#ff4d4d]"
                    />
                    <i class="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-[#ff4d4d]/60"></i>
                </div>
       
                   <nav class="hidden md:flex items-center space-x-6">
                       <a href="#" class="text-white hover:text-[#ff4d4d] transition-colors flex items-center">
                           <i class="fas fa-home mr-1"></i> Repi
                       </a>
                       <a href="#" class="text-white hover:text-[#ff4d4d] transition-colors flex items-center">
                           <i class="fas fa-video mr-1"></i> Tutorials
                       </a>
                       <a href="#" class="text-white hover:text-[#ff4d4d] transition-colors flex items-center">
                           <i class="fas fa-users mr-1"></i> Community
                       </a>
                       <a href="#" class="text-white hover:text-[#ff4d4d] transition-colors flex items-center">
                           <i class="fas fa-shopping-basket mr-1"></i> Shop
                       </a>
                   </nav>
               </div>
           </div>
       </header>    
        <section class="mb-12">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold text-white flex items-center">
                    <i class="fas fa-film text-[#ff4d4d] mr-3"></i>
                    Your Saved Repi
                </h2>
                <div class="flex items-center space-x-2">
                    <button class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center">
                        <i class="fas fa-filter mr-2"></i> Filter
                    </button>
                    <button class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center">
                        <i class="fas fa-sort mr-2"></i> Sort
                    </button>
                </div>
            </div>
            <div class="flex space-x-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                <button class="bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0">
                    All Repi
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    Quick Tips
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    Plating
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    Food Hacks
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    Trending
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    Desserts
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    One-minute Recipes
                </button>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                <div class="bg-gradient-to-tr from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                    <div class="relative">
                        <img src="/api/placeholder/260/460" alt="Food reel" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
                        <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button class="bg-[#ff4d4d] text-white rounded-full w-12 h-12 flex items-center justify-center">
                                <i class="fas fa-play text-lg"></i>
                            </button>
                        </div>
                        <div class="absolute bottom-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
                            0:45
                        </div>
                        <button class="absolute top-3 right-3 text-white hover:text-[#ff4d4d] transition-colors">
                            <i class="fas fa-bookmark text-lg"></i>
                        </button>
                        <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent px-3 pb-3 flex flex-col justify-end">
                            <h3 class="text-white text-sm font-bold truncate">Perfect Avocado Toast in 30 seconds</h3>
                            <div class="flex items-center mt-1">
                                <span class="text-gray-300 text-xs mr-3">@QuickBites</span>
                                <span class="text-gray-300 text-xs flex items-center">
                                    <i class="fas fa-heart mr-1"></i> 45.2K
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 text-center">
                <button class="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-full flex items-center mx-auto">
                    <i class="fas fa-spinner mr-2"></i>
                    Load More Repi
                </button>
            </div>
        </section>

        <section class="mb-12">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold text-white flex items-center">
                    <i class="fas fa-bookmark text-[#ff4d4d] mr-3"></i>
                    Your Saved Recipes
                </h2>   
                <div class="flex items-center space-x-2">
                    <button class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center">
                        <i class="fas fa-filter mr-2"></i> Filter
                    </button>
                    <button class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center">
                        <i class="fas fa-sort mr-2"></i> Sort
                    </button>
                </div>
            </div>
            <div class="flex space-x-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                <button class="bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0">
                    All Saved
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    Main Dishes
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    Desserts
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    Quick Meals
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    Vegetarian
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    Baking
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    Keto
                </button>
                <button class="bg-gray-700 hover:bg-[#ff4d4d] text-white px-5 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors">
                    International
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-gradient-to-tr from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                    <div class="relative">
                        <img src="/api/placeholder/400/250" alt="Saved recipe" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button class="bg-[#ff4d4d] text-white rounded-full w-12 h-12 flex items-center justify-center">
                                <i class="fas fa-play text-lg"></i>
                            </button>
                        </div>
                        <div class="absolute bottom-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
                            18:45
                        </div>
                        <button class="absolute top-3 right-3 text-white hover:text-[#ff4d4d] transition-colors">
                            <i class="fas fa-bookmark text-lg"></i>
                        </button>
                        <div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                            <div class="bg-[#ff4d4d] h-full w-3/4"></div>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-white mb-1 group-hover:text-[#ff4d4d] transition-colors">Ultimate Beef Wellington Recipe</h3>
                        <div class="flex justify-between items-center mb-3">
                            <div class="flex items-center">
                                <span class="text-gray-400 text-sm">Chef Gordon</span>
                            </div>
                            <div class="flex items-center text-xs text-gray-400">
                                <i class="fas fa-eye mr-1"></i>
                                <span>28K views</span>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <span class="bg-gray-700 text-xs text-white px-2 py-1 rounded">
                                <i class="fas fa-clock mr-1"></i> Watched 2 days ago
                            </span>
                            <div class="flex space-x-2">
                                <button class="text-gray-400 hover:text-white">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button class="text-gray-400 hover:text-white">
                                    <i class="fas fa-ellipsis-v"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="mt-8 text-center">
                <button class="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-full flex items-center mx-auto">
                    <i class="fas fa-spinner mr-2"></i>
                    Load More Recipe
                </button>
            </div>
        </section>
        <section class="mb-12">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold text-white flex items-center">
                    <i class="fas fa-video text-[#ff4d4d] mr-3"></i>
                    Popular Video Tutorials
                </h2>
                <a href="#" class="text-[#ff4d4d] hover:text-white transition-colors flex items-center">
                    View All
                    <i class="fas fa-chevron-right ml-2"></i>
                </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-gradient-to-tr from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                    <div class="relative">
                        <img src="/api/placeholder/600/400" alt="Italian Pasta Tutorial" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button class="bg-[#ff4d4d] text-white rounded-full w-16 h-16 flex items-center justify-center">
                                <i class="fas fa-play text-xl"></i>
                            </button>
                        </div>
                        <div class="absolute bottom-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
                            12:45
                        </div>
                        <div class="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-lg uppercase">
                            Trending
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-[#ff4d4d] transition-colors">Italian Pasta Making: From Scratch to Plate</h3>
                        <div class="flex items-center mb-3">
                            <img src="/api/placeholder/40/40" alt="Chef profile" class="w-8 h-8 rounded-full mr-2" />
                            <div>
                                <p class="text-white text-sm">Chef Antonio</p>
                                <p class="text-gray-400 text-xs">210K subscribers</p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <span class="text-gray-400 text-sm flex items-center">
                                    <i class="fas fa-eye mr-1"></i> 1.2M views
                                </span>
                                <span class="text-gray-400 text-sm flex items-center">
                                    <i class="fas fa-thumbs-up mr-1"></i> 58K
                                </span>
                            </div>
                            <div class="flex space-x-2">
                                <button class="text-white hover:text-[#ff4d4d] transition-colors">
                                    <i class="fas fa-bookmark"></i>
                                </button>
                                <button class="text-white hover:text-[#ff4d4d] transition-colors">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </section>
        <section class="mb-12">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold text-white flex items-center">
                    <i class="fas fa-users text-[#ff4d4d] mr-3"></i>
                    Community Recipes
                </h2>
                <a href="#" class="text-[#ff4d4d] hover:text-white transition-colors flex items-center">
                    View All
                    <i class="fas fa-chevron-right ml-2"></i>
                </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-gradient-to-tr from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-2xl                       transition-shadow duration-300 group">
                <div class="relative">
                    <img src="/api/placeholder/400/300" alt="Community Recipe" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div class="absolute top-3 right-3">
                        <button class="text-white hover:text-[#ff4d4d] transition-colors">
                            <i class="fas fa-bookmark text-lg"></i>
                        </button>
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-lg font-bold text-white group-hover:text-[#ff4d4d] transition-colors">Homemade Sourdough Bread</h3>
                        <div class="flex items-center">
                            <i class="fas fa-star text-yellow-400 mr-1"></i>
                            <span class="text-white font-bold">4.8</span>
                        </div>
                    </div>
                    <div class="flex items-center mb-3">
                        <img src="/api/placeholder/40/40" alt="User profile" class="w-6 h-6 rounded-full mr-2" />
                        <span class="text-gray-400 text-sm">Sarah M.</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center text-gray-400 text-xs">
                            <i class="fas fa-utensils mr-1"></i>
                            <span>Baking</span>
                        </div>
                        <div class="flex items-center text-gray-400 text-xs">
                            <i class="fas fa-clock mr-1"></i>
                            <span>3h 20m</span>
                        </div>
                        <div class="flex items-center text-gray-400 text-xs">
                            <i class="fas fa-thumbs-up mr-1"></i>
                            <span>1.2K</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <footer class="bg-gradient-to-r from-black via-black/60 to-transparent] rounded-2xl shadow-xl p-6 mb-8 text-white">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="font-bold text-xl">Taste<span class="text-[#FF6B35]">'</span>nTalk</span>
                    </div>
                    <p class="text-white text-opacity-80 text-sm mb-4">Connect with food lovers around the world. Share recipes, join events,         and                           discover new culinary experiences.</p>
                    <div class="flex gap-3">
                        <a href="#" class="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-        [#FF6B35]                           transition-colors">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-        [#FF6B35]                           transition-colors">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-        [#FF6B35]                           transition-colors">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-        [#FF6B35]                           transition-colors">
                            <i class="fab fa-pinterest"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold text-lg mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-white text-opacity-80">
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">Home</a></li>
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">Food Groups</a></li>
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">Events</a></li>
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">Recipes</a></li>
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">About Us</a></li>
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-lg mb-4">Popular Categories</h4>
                    <ul class="space-y-2 text-white text-opacity-80">
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">Vegetarian</a></li>
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">Baking</a></li>
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">International Cuisine</a></li>
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">Desserts</a></li>
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">Healthy Eating</a></li>
                        <li><a href="#" class="hover:text-[#FF6B35] transition-colors">Seafood</a></li>
                    </ul>
                </div>
                <div >
                    <h4 class="text-lg font-bold text-white mb-4">Download Our App</h4>
                    <p class="text-gray-400 mb-4">Get the full experience on your mobile device</p>
                    <div class="flex gap-3">
                        <a href="#" class="bg-white/10 hover:bg-white/20 transition-all p-2 rounded-lg flex items-center gap-3">
                            <i class="fab fa-apple text-2xl text-white"></i>
                            <div>
                                <div class="text-xs text-gray-400">Download on the</div>
                                <div class="text-white font-semibold">App Store</div>
                            </div>
                        </a>
                        <a href="#" class="bg-white/10 hover:bg-white/20 transition-all p-2 rounded-lg flex items-center gap-3">
                            <i class="fab fa-google-play text-2xl text-white"></i>
                            <div>
                                <div class="text-xs text-gray-400">Get it on</div>
                                <div class="text-white font-semibold">Google Play</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="border-t border-white border-opacity-20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p class="text-white text-opacity-70 text-sm mb-4 md:mb-0">© 2025 <a href="#"><span class="text-[#ff6b35]">Taste'n Talk</span></        a>.                           All rights reserved.</p>
                <div class="flex gap-6 text-white text-opacity-70 text-sm">
                    <a href="#" class="hover:text-[#FF6B35] transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-[#FF6B35] transition-colors">Terms of Service</a>
                    <a href="#" class="hover:text-[#FF6B35] transition-colors">Cookie Policy</a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Saved