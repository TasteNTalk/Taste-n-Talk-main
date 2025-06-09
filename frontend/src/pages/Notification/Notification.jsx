import React from 'react'

const Notification = () => {
  return (
    <div class="bg-[#002140] text-gray-800 font-sans">
    <div class="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
        <div class="w-full">
            <div class="mb-10 animate-fade-up">
                <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-4 relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-orange-400 after:mt-2">
                    Notifications <span class="text-orange-400">& Updates</span>
                </h1>
                <p class="text-gray-200 text-lg md:text-xl max-w-3xl">
                    Stay updated with your culinary journey and community interactions
                </p>
            </div>
            <div class="flex overflow-x-auto bg-gradient-to-tr from-black via-black/60 to-transparent rounded-t-2xl shadow-lg">
                <button class="px-6 py-4 font-bold text-orange-400 border-b-4 border-orange-400 whitespace-nowrap focus:outline-none transition-all duration-300">All</button>
                <button class="px-6 py-4 font-bold text-gray-400 border-b-4 border-transparent hover:text-orange-400 hover:border-orange-400/50 whitespace-nowrap transition-all duration-300 focus:outline-none">Interactions</button>
                <button class="px-6 py-4 font-bold text-gray-400 border-b-4 border-transparent hover:text-orange-400 hover:border-orange-400/50 whitespace-nowrap transition-all duration-300 focus:outline-none">Comments</button>
                <button class="px-6 py-4 font-bold text-gray-400 border-b-4 border-transparent hover:text-orange-400 hover:border-orange-400/50 whitespace-nowrap transition-all duration-300 focus:outline-none">Mentions</button>
                <button class="px-6 py-4 font-bold text-gray-400 border-b-4 border-transparent hover:text-orange-400 hover:border-orange-400/50 whitespace-nowrap transition-all duration-300 focus:outline-none">Orders</button>
                <button class="px-6 py-4 font-bold text-gray-400 border-b-4 border-transparent hover:text-orange-400 hover:border-orange-400/50 whitespace-nowrap transition-all duration-300 focus:outline-none">Classes</button>
                <button class="px-6 py-4 font-bold text-gray-400 border-b-4 border-transparent hover:text-orange-400 hover:border-orange-400/50 whitespace-nowrap transition-all duration-300 focus:outline-none">Messages</button>
                <button class="px-6 py-4 font-bold text-gray-400 border-b-4 border-transparent hover:text-orange-400 hover:border-orange-400/50 whitespace-nowrap transition-all duration-300 focus:outline-none">System</button>
            </div>
            <div class="bg-gradient-to-tr from-black via-black/60 to-transparent rounded-b-2xl p-6 md:p-8 shadow-2xl">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <h2 class="text-2xl md:text-3xl font-bold text-white/90">Recent Notifications</h2>
                    <div class="flex items-center gap-4">
                        <button class="bg-[#ff4d4d] hover:bg-white text-white hover:text-[#ff4d4d] px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1">
                            <i class="fas fa-check-double mr-2"></i> Mark all as read
                        </button>
                        <div class="relative">
                            <button class="bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition-all duration-300 focus:outline-none transform hover:rotate-90">
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mb-10">
                    <h3 class="text-orange-400 text-sm mb-4 font-bold tracking-wider">TODAY</h3>
                    <div class="mb-5 rounded-xl bg-gradient-to-r from-[#002140]/90 via-[#002140]/60 to-transparent p-5 md:p-6 flex items-start border-l-4 border-[#ff4d4d] shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
                        <div class="w-12 h-12 flex-shrink-0 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-heart text-lg"></i>
                        </div>
                        <div class="ml-4 flex-grow">
                            <div class="flex justify-between items-start">
                                <p class="text-gray-200 font-medium">
                                    <span class="font-bold text-white">Chef Amanda</span> liked your Butter Chicken recipe
                                </p>
                                <span class="text-xs text-gray-400 whitespace-nowrap ml-2">10 min ago</span>
                            </div>
                            <p class="text-gray-400 text-sm mt-2">Your recipe has received 25 likes in the last 24 hours!</p>
                            <div class="mt-4 flex items-center gap-4">
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-eye mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> View Recipe
                                </button>
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-user mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 rounded-xl bg-gradient-to-r from-[#002140]/90 via-[#002140]/60 to-transparent p-5 md:p-6 flex items-start border-l-4 border-[#ff4d4d] shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
                        <div class="w-12 h-12 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-comment text-lg"></i>
                        </div>
                        <div class="ml-4 flex-grow">
                            <div class="flex justify-between items-start">
                                <p class="text-gray-200 font-medium">
                                    <span class="font-bold text-white">Michael S.</span> commented on your Pasta Carbonara video
                                </p>
                                <span class="text-xs text-gray-400 whitespace-nowrap ml-2">45 min ago</span>
                            </div>
                            <div class="mt-3 p-4 bg-black/30 rounded-lg italic text-gray-300 text-sm border-l-2 border-blue-400 shadow-inner">
                                "This is the best carbonara recipe I've tried! The technique for the egg sauce is perfect."
                            </div>
                            <div class="mt-4 flex items-center gap-4">
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-reply mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> Reply
                                </button>
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-comment-dots mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> View Comment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 rounded-xl bg-gradient-to-r from-[#002140]/90 via-[#002140]/60 to-transparent p-5 md:p-6 flex items-start border-l-4 border-[#ff4d4d] shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
                        <div class="w-12 h-12 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-shopping-bag text-lg"></i>
                        </div>
                        <div class="ml-4 flex-grow">
                            <div class="flex justify-between items-start">
                                <p class="text-gray-200 font-medium">Your grocery order #TT28745 has been dispatched</p>
                                <span class="text-xs text-gray-400 whitespace-nowrap ml-2">1 hour ago</span>
                            </div>
                            <p class="text-gray-400 text-sm mt-2">Your fresh ingredients will be delivered within 30-45 minutes</p>
                            <div class="mt-4 flex items-center gap-4">
                                <button class="bg-green-100 hover:bg-green-200 text-green-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1">
                                    <i class="fas fa-map-marker-alt mr-2"></i> Track Order
                                </button>
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-info-circle mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-10">
                    <h3 class="text-orange-400 text-sm mb-4 font-bold tracking-wider">YESTERDAY</h3>
                    <div class="mb-5 rounded-xl bg-gradient-to-r from-black/40 via-black/25 to-transparent p-5 md:p-6 flex items-start border-l-4 border-transparent shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
                        <div class="w-12 h-12 flex-shrink-0 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-graduation-cap text-lg"></i>
                        </div>
                        <div class="ml-4 flex-grow">
                            <div class="flex justify-between items-start">
                                <p class="text-gray-200 font-medium">Your Italian Basics cooking class starts in 2 hours</p>
                                <span class="text-xs text-gray-400 whitespace-nowrap ml-2">Yesterday, 4:15 PM</span>
                            </div>
                            <div class="flex items-center mt-3">
                                <div class="flex -space-x-2 mr-3">
                                    <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs border-2 border-black shadow-lg">JD</div>
                                    <div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs border-2 border-black shadow-lg">SK</div>
                                    <div class="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs border-2 border-black shadow-lg">RS</div>
                                </div>
                                <p class="text-gray-400 text-sm">7 students have enrolled in your class</p>
                            </div>
                            <div class="mt-4 flex items-center gap-4">
                                <button class="bg-[#ff4d4d] hover:bg-white text-white hover:text-[#ff4d4d] px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1">
                                    <i class="fas fa-video mr-2"></i> Start Class
                                </button>
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-users mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> View Enrollments
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 rounded-xl bg-gradient-to-r from-black/40 via-black/25 to-transparent p-5 md:p-6 flex items-start border-l-4 border-transparent shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
                        <div class="w-12 h-12 flex-shrink-0 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-user-plus text-lg"></i>
                        </div>
                        <div class="ml-4 flex-grow">
                            <div class="flex justify-between items-start">
                                <p class="text-gray-200 font-medium">
                                    <span class="font-bold text-white">5 new chefs</span> started following you
                                </p>
                                <span class="text-xs text-gray-400 whitespace-nowrap ml-2">Yesterday, 2:30 PM</span>
                            </div>
                            <p class="text-gray-400 text-sm mt-2">Professional Chef John, Sara, and 3 others started following your recipes</p>
                            <div class="mt-4 flex items-center gap-4">
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-users mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> View Followers
                                </button>
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-user-plus mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> Follow Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="text-orange-400 text-sm mb-4 font-bold tracking-wider">THIS WEEK</h3>
                    <div class="mb-5 rounded-xl bg-gradient-to-r from-black/40 via-black/25 to-transparent p-5 md:p-6 flex items-start border-l-4 border-transparent shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
                        <div class="w-12 h-12 flex-shrink-0 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-utensils text-lg"></i>
                        </div>
                        <div class="ml-4 flex-grow">
                            <div class="flex justify-between items-start">
                                <div>
                                    <p class="text-gray-200 font-medium">Your recipe was featured in "Weekly Favorites"</p>
                                    <div class="mt-2 inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold shadow-md">
                                        <i class="fas fa-star mr-1"></i> Featured
                                    </div>
                                </div>
                                <span class="text-xs text-gray-400 whitespace-nowrap ml-2">Monday, 10:00 AM</span>
                            </div>
                            <p class="text-gray-400 text-sm mt-3">Your "Thai Green Curry" recipe was selected as one of this week's best recipes!</p>
                            <div class="mt-4 flex items-center gap-4">
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-award mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> View Feature
                                </button>
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-share-alt mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> Share
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 rounded-xl bg-gradient-to-r from-black/40 via-black/25 to-transparent p-5 md:p-6 flex items-start border-l-4 border-transparent shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
                        <div class="w-12 h-12 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-bell text-lg"></i>
                        </div>
                        <div class="ml-4 flex-grow">
                            <div class="flex justify-between items-start">
                                <p class="text-gray-200 font-medium">Premium Chef membership renewed</p>
                                <span class="text-xs text-gray-400 whitespace-nowrap ml-2">Sunday, 11:35 PM</span>
                            </div>
                            <p class="text-gray-400 text-sm mt-2">Your Premium Chef subscription has been successfully renewed for another month. Next billing: April 17, 2025</p>
                            <div class="mt-4 flex items-center gap-4">
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-crown mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> View Subscription
                                </button>
                                <button class="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center group transition-all duration-300">
                                    <i class="fas fa-credit-card mr-1 group-hover:translate-x-1 transition-transform duration-300"></i> Manage Payment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-12">
                        <button class="group relative inline-flex items-center justify-center bg-[#ff4d4d] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden hover:bg-white hover:text-[#ff4d4d]">
                            <span class="relative z-10 flex items-center gap-2">
                                Load More Notifications
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <script>
        document.addEventListener('DOMContentLoaded', function() {
            const tabs = document.querySelectorAll('.flex.overflow-x-auto button');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(t => {
                        t.classList.remove('text-orange-400', 'border-orange-400');
                        t.classList.add('text-gray-400', 'border-transparent');
                    });
                    
                    this.classList.remove('text-gray-400', 'border-transparent');
                    this.classList.add('text-orange-400', 'border-orange-400');
                });
            });
        });
    </script> */}
</div>
  )
}

export default Notification