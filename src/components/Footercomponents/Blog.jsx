import React, { useState } from 'react';

// Define the full content for the Height Veda post, which will now be duplicated for all posts
const heightVedaFullContent = `
  <p class="text-lg text-gray-700 mb-4">
    While growing up, height became an essential factor of overall growth. It mostly depends on your genes, but diet, exercise, and lifestyle also play a big role. In this article, we'll explore how Height Veda can help you grow your height.
  </p>
  <h2 class="text-2xl font-bold text-gray-900 mb-3">What is Height Veda?</h2>
  <p class="text-lg text-gray-700 mb-4">
    Height Veda is an Ayurvedic supplement for supporting natural height growth and overall body development. It is made of carefully selected natural ingredients and helps stimulate the body's growth processes without any side effects.
  </p>
  <h2 class="text-2xl font-bold text-gray-900 mb-3">How Does Height Veda Work?</h2>
  <p class="text-lg text-gray-700 mb-4">
    Height Veda contains rare super herbs that activate the body's natural growth hormone in the pituitary gland. Hormones produced by the pituitary gland are critical to growth regulation. In doing so, this supplement helps activate growth hormones and promotes the natural body's height growth process.
  </p>
  <p class="text-lg text-gray-700 mb-4">
    It also aids in strengthening bones, speeding up metabolism and enhancing overall body development. This is most effective when it combines with a balanced diet and regular exercise.
  </p>
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Key Ingredients in Height Veda</h2>
  <p class="text-lg text-gray-700 mb-4">
    Height Veda is formulated with 15 Ayurvedic herbs known for their growth-enhancing properties and ability to improve nutrient absorption. The key ingredients include:
  </p>
  <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
    <li><strong>Ashwagandha</strong> - Enhances bone strength and supports growth hormone production.</li>
    <li><strong>Punarnava</strong> - Aids bone formation and regeneration.</li>
    <li><strong>Gokhru</strong> - Boosts stamina and metabolism.</li>
    <li><strong>Vidhara</strong> - Promotes bone development.</li>
    <li><strong>Harad</strong> - Improves nutrient absorption for better growth.</li>
    <li><strong>Halo</strong> - Supports bone health.</li>
    <li><strong>Vidharikand</strong> - Encourages height growth and overall body development.</li>
    <li><strong>Pippali</strong> - Aids digestion and respiratory health.</li>
    <li><strong>Kali Mirch</strong> - Rich in antioxidants, contributes to overall well-being.</li>
    <li><strong>Harar</strong> - Strengthens bones and muscles.</li>
    <li><strong>Mishri</strong> - Enhances energy levels.</li>
    <li><strong>Amla</strong> - High in Vitamin C, supports bone health.</li>
    <li><strong>Semalkand</strong> - Known for improving bone growth and strength.</li>
    <li><strong>Piplamool</strong> - Supports digestion and nutrient absorption.</li>
    <li><strong>Sonth</strong> - Boosts metabolism and promotes healthy body development.</li>
  </ul>
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Benefits of Height Veda</h2>
  <p class="text-lg text-gray-700 mb-4">
    Height Veda provides numerous benefits, promoting natural height growth while strengthening muscles and bones. It also boosts energy levels, contributing to overall well-being. Let's explore these advantages in detail:
  </p>
  <img
    src="https://placehold.co/600x400/D1FAE5/065F46?text=Benefits+of+Height+Veda"
    alt="Benefits of Height Veda"
    class="w-full h-auto object-cover rounded-lg mb-8"
    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/D1FAE5/065F46?text=Image+Not+Found"; }}
  />
  <ul class="list-decimal list-inside text-lg text-gray-700 mb-4">
    <li><strong>Promotes Natural Growth:</strong> Helps in increasing height naturally by stimulating growth hormones.</li>
    <li><strong>Strengthens Bones:</strong> Enriched with calcium and other nutrients, it improves bone density and overall strength.</li>
    <li><strong>Improves Posture:</strong> Supports spinal health and corrects posture for a taller appearance.</li>
    <li><strong>Boosts Energy Levels:</strong> Provides essential vitamins and minerals that enhance energy and stamina.</li>
    <li><strong>Enhances Immunity:</strong> Strengthens the immune system.</li>
    <li><strong>Improves Digestion:</strong> Supports better digestion and nutrient absorption for healthy growth.</li>
    <li><strong>Safe and Herbal:</strong> Made with natural ingredients, it is free from harmful chemicals and has no side effects.</li>
    <li><strong>Supports Overall Health:</strong> Promotes healthy body development and increases confidence with improved height.</li>
  </ul>
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Is Height Veda real or fake?</h2>
  <p class="text-lg text-gray-700 mb-4">
    The authenticity of the product is debated because many duplicate products are being sold. Consumers have been scammed by fake products, ending up with no results.
  </p>
  <p class="text-lg text-gray-700 mb-4">
    To avoid scams, buyers should research well and buy from the official website to get a genuine product and positive results.
  </p>
  <img
    src="https://placehold.co/600x400/D1FAE5/065F46?text=Fake+vs+Original+Height+Veda"
    alt="Fake vs Original Height Veda"
    class="w-full h-auto object-cover rounded-lg mb-8"
    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/D1FAE5/065F46?text=Image+Not+Found"; }}
  />
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Conclusion</h2>
  <p class="text-lg text-gray-700 mb-4">
    It is a natural ayurvedic formula designed to support height growth and overall body development. With its unique formula and superherbs, it helps to activate growth hormones, strengthens bones and boosts energy levels. However, due to the presence of fake duplicate products in the market, buyers must ensure they buy only from the official website. For best results, add Height Veda into your daily routine with a balanced diet and regular exercise.
  </p>
  <p class="text-lg text-gray-700">
    Stay connected with us on Instagram for daily wellness tips!
  </p>
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions (FAQs) About Height Veda</h2>
  <ul class="list-decimal list-inside text-lg text-gray-700 mb-4">
    <li><strong>Does Height Veda help with height growth?</strong><br/>Yes, Height Veda is formulated to naturally support height growth by stimulating growth hormones.</li>
    <li><strong>Is Height Veda safe to use?</strong><br/>Yes, it is 100% herbal and free from harmful chemicals, making it safe for regular use.</li>
    <li><strong>How long does it take to see results?</strong><br/>With consistent use and a healthy lifestyle, noticeable improvements in height can be observed over time.</li>
  </ul>
  <div class="flex space-x-4 mb-4">
    <span class="text-lg text-gray-700">Share:</span>
    <a href="#" class="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition-colors duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    </a>
    <a href="#" class="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.1 5.4 7.57 3.56 5.1c-.37.63-.58 1.37-.58 2.18 0 1.49.75 2.81 1.91 3.56-.7-.02-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.95 4.03 2.98-1.48 1.16-3.34 1.85-5.36 1.85-.35 0-.69-.02-1.03-.06C2.8 20.3 4.93 21 7.2 21c8.64 0 13.36-7.14 13.36-13.36 0-.2-.01-.4-.02-.6.92-.66 1.72-1.48 2.35-2.42z"/></svg>
    </a>
    <a href="#" class="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    </a>
  </div>
`;

// Data for blog posts
const posts = [
  {
    id: '1',
    title: 'Can You Increase Your Height After a Certain Age?',
    author: 'Shubham2',
    date: 'April 4, 2025',
    imageUrl: 'https://placehold.co/600x400/D1FAE5/065F46?text=Can+You+Increase+Your+Height+After+a+Certain+Age%3F',
    fullContent: heightVedaFullContent, // Duplicated content
  },
  {
    id: '2',
    title: 'Height Veda: Natural Height Growth Ayurvedic Formula',
    author: 'Shubham2',
    date: 'March 8, 2025',
    imageUrl: 'https://placehold.co/600x400/D1FAE5/065F46?text=Height+Veda%3A+Natural+Height+Growth+Ayurvedic+Formula',
    fullContent: heightVedaFullContent, // Original content
  },
  {
    id: '3',
    title: 'Exploring New Horizons in Wellness',
    author: 'Admin',
    date: 'May 27, 2025',
    imageUrl: 'https://placehold.co/600x400/D1FAE5/065F46?text=New+Blog+Post+Example',
    fullContent: heightVedaFullContent, // Duplicated content
  },
  {
    id: '4',
    title: 'The Benefits of Mindful Eating',
    author: 'Nutrition Expert',
    date: 'April 15, 2025',
    imageUrl: 'https://placehold.co/600x400/D1FAE5/065F46?text=Mindful+Eating',
    fullContent: heightVedaFullContent, // Duplicated content
  },
  {
    id: '5',
    title: 'Simple Yoga Poses for Beginners',
    author: 'Yoga Guru',
    date: 'March 20, 2025',
    imageUrl: 'https://placehold.co/600x400/D1FAE5/065F46?text=Yoga+Poses',
    fullContent: heightVedaFullContent, // Duplicated content
  },
  {
    id: '6',
    title: 'The Importance of Quality Sleep',
    author: 'Sleep Expert',
    date: 'February 10, 2025',
    imageUrl: 'https://placehold.co/600x400/D1FAE5/065F46?text=Quality+Sleep',
    fullContent: heightVedaFullContent, // Duplicated content
  },
];

// BlogCard component for displaying a single blog post summary
function BlogCard({ post, onClick }) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden w-full cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={() => onClick(post)} // Handle click on the entire card
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-xl"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/D1FAE5/065F46?text=Image+Not+Found"; }}
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{post.author} | {post.date}</p>
        {/* The 'Read More' link also triggers the onClick handler */}
        <a href="#" onClick={(e) => { e.preventDefault(); onClick(post); }} className="text-green-700 hover:text-green-900 font-medium transition-colors duration-200">Read More &raquo;</a>
      </div>
    </div>
  );
}

function YouMayAlsoLike({ currentPostId, allPosts, onCardClick }) {
  // Filter out the current post and select up to 3 other posts
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPostId)
    .sort(() => 0.5 - Math.random()) 
    .slice(0, 3); // Take the first 3

  if (relatedPosts.length === 0) {
    return null; // Don't render if no related posts are found
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {relatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} onClick={onCardClick} />
        ))}
      </div>
    </div>
  );
}

// BlogPostDetail component for displaying the full content of a blog post
function BlogPostDetail({ post, onBack, onCardClick }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      {/* Back button */}
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors duration-200 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Back to Blogs
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-md text-gray-600 mb-6">{post.author} | {post.date}</p>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-80 object-cover rounded-lg mb-8"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/D1FAE5/065F46?text=Image+Not+Found"; }}
      />

      <div
        className="prose max-w-none" 
        dangerouslySetInnerHTML={{ __html: post.fullContent }}
      ></div>

      {/* You May Also Like section */}
      <YouMayAlsoLike
        currentPostId={post.id}
        allPosts={posts} // Pass the entire posts array
        onCardClick={onCardClick}
      />
    </div>
  );
}

// Main App component
function Blog() {
  const [selectedPost, setSelectedPost] = useState(null); // State to hold the currently selected post

  // Function to handle clicking on a blog card
  const handleCardClick = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when a new post is selected
  };

  // Function to go back to the blog list
  const handleBackToBlogs = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when going back
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* Header section */}
      <header className="bg-green-800 py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center rounded-lg">Blogs</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {selectedPost ? (
          <BlogPostDetail
            post={selectedPost}
            onBack={handleBackToBlogs}
            onCardClick={handleCardClick} // Pass handleCardClick to BlogPostDetail
          />
        ) : (
          // Otherwise, show the grid of blog cards
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} onClick={handleCardClick} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Blog;
