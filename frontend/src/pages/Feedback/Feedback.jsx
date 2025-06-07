import React from "react";

function Feedback() {
  return (
    <div
      id="feedback"
      className="bg-white rounded-xl shadow-md overflow-hidden w-[93%] mx-auto my-12 px-4 sm:px-6 lg:px-8 container ml-[85px] mr-0 -mt-[680px] py-14 md:px-6"
    >
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-black/90 via-[#002140]/90 to-[#003a6c] border-b flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">Feedback</h3>
        <a
          href="#feedback"
          className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
        >
          <i className="fas fa-comment-alt mr-2"></i>
        </a>
      </div>

      {/* Feedback Form */}
      <div className="p-6 space-y-6">
        <div>
          <h4 className="font-bold text-gray-700 mb-3">Share Your Thoughts</h4>
          <p className="text-gray-600 mb-4">
            We value your opinion and would love to hear your suggestions on how
            we can improve Taste'n Talk.
          </p>

          <div className="space-y-4">
            {/* Feedback Type */}
            <div>
              <label htmlFor="feedback-type" className="block text-sm font-bold text-gray-700 mb-2">
                Feedback Type
              </label>
              <select
                id="feedback-type"
                className="shadow border rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:shadow-outline"
              >
                <option>General Feedback</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>Content Suggestion</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="feedback-message" className="block text-sm font-bold text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="feedback-message"
                rows="5"
                placeholder="Share your thoughts here..."
                className="shadow border rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            {/* Rating */}
            <div>
              <label htmlFor="feedback-satisfaction" className="block text-sm font-bold text-gray-700 mb-2">
                Overall Satisfaction
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex text-2xl text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className="far fa-star cursor-pointer hover:text-yellow-500 transition-colors"
                      data-rating={star}
                    ></i>
                  ))}
                </div>
                <span className="text-gray-600" id="rating-text">
                  Select a rating
                </span>
              </div>
            </div>

            {/* Anonymous Checkbox */}
            <div className="flex items-center">
              <input
                id="anonymous-feedback"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="anonymous-feedback" className="ml-2 text-sm font-medium text-gray-700">
                Submit anonymously
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-medium py-2 px-6 rounded transition-colors">
                Submit Feedback
              </button>
            </div>
          </div>
        </div>

        {/* Previous Feedback */}
        <div className="border-t pt-6">
          <h4 className="font-bold text-gray-700 mb-3">Previous Feedback</h4>
          <div className="space-y-4">
            {/* Feedback 1 */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-800">Feature Request</p>
                  <p className="text-gray-600 text-sm mb-2">Submitted on March 27, 2025</p>
                </div>
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <p className="text-gray-700">
                Would love to see a dark mode option for the mobile app. It would be easier on the eyes when browsing recipes at night.
              </p>
              <div className="mt-2 text-sm">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Under Review
                </span>
              </div>
            </div>

            {/* Feedback 2 */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-800">Bug Report</p>
                  <p className="text-gray-600 text-sm mb-2">Submitted on February 15, 2025</p>
                </div>
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <p className="text-gray-700">
                Sometimes notifications don't appear properly on Android devices.
              </p>
              <div className="mt-2 text-sm">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Resolved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
