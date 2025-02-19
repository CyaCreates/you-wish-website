const WishmakersProgramPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Join the Wishmakers Circle</h1>
        <p className="text-xl text-gray-600 mb-6">Be part of our story and help create magical moments</p>
        <p className="text-lg text-gray-600">Get exclusive merch and early access to paid collaborations</p>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                📸
              </div>
              <h3 className="font-semibold mb-2">Share Your Moments</h3>
              <p className="text-gray-600">Send us your unedited gameplay videos and photos</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                🎁
              </div>
              <h3 className="font-semibold mb-2">Get Exclusive Merch</h3>
              <p className="text-gray-600">Earn You Wish merchandise as you complete missions</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                ⭐
              </div>
              <h3 className="font-semibold mb-2">Priority for Paid Collabs</h3>
              <p className="text-gray-600">Get first access to paid collaboration opportunities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Examples */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Example Missions</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                📤
              </div>
              <div>
                <h3 className="font-semibold mb-1">Send Us Your Game Night</h3>
                <p className="text-gray-600">Share an unedited video of your family playing You Wish</p>
                <p className="text-sm text-blue-600 mt-1">Reward: Exclusive You Wish t-shirt</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                📸
              </div>
              <div>
                <h3 className="font-semibold mb-1">Show Off Your Merch</h3>
                <p className="text-gray-600">Take a photo with your new You Wish t-shirt</p>
                <p className="text-sm text-purple-600 mt-1">Reward: Custom You Wish playmat</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                👑
              </div>
              <div>
                <h3 className="font-semibold mb-1">Create a Special Moment</h3>
                <p className="text-gray-600">Share a video of teaching someone new to play You Wish</p>
                <p className="text-sm text-green-600 mt-1">Reward: Limited edition You Wish deck</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join CTA */}
      <div className="text-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Join Our Story?</h2>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700">
          Become a Wishmaker
        </button>
      </div>
    </div>
  );
};

export default WishmakersProgramPage;