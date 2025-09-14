import { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiSearch, FiClock, FiEye, FiCalendar, FiFilter, FiTrendingUp, FiBookmark, FiGrid, FiList } from 'react-icons/fi';
import Container from '../common/Container';
import BlogCard from './BlogCard';
import BlogHeader from './BlogHeader';
import FooterMain from '../footer/FooterMain';
import { blogPosts, blogCategories, searchBlogs } from '../../data/blogPosts';

const BlogMain = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [sortBy, setSortBy] = useState('date'); // date, views, readTime, title
  const [viewMode, setViewMode] = useState('grid'); // grid, list
  const [showAllTags, setShowAllTags] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get all unique tags from blog posts
  const allTags = useMemo(() => {
    const tags = new Set();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags).sort()];
  }, []);

  // Filter and search posts with advanced sorting
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Apply search filter
    if (searchQuery.trim()) {
      posts = searchBlogs(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Apply tag filter
    if (selectedTag !== 'All') {
      posts = posts.filter(post => post.tags.includes(selectedTag));
    }

    // Apply sorting
    posts.sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return b.views - a.views;
        case 'readTime':
          return a.readTime - b.readTime;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'date':
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

    return posts;
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  return (
    <div className={`min-h-screen pt-20 ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50' 
        : 'bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg'
    }`}>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl animate-float ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-blue-200 to-indigo-200 opacity-20' 
            : 'bg-primary-500 opacity-20'
        }`} />
        <div className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl animate-float ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-violet-200 to-purple-200 opacity-15' 
            : 'bg-accent-500 opacity-15'
        }`} style={{ animationDelay: '3s' }} />
      </div>

      <Container size="lg" className="relative">
        {/* Blog Header */}
        <BlogHeader />

        {/* Enhanced Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-8"
        >
          {/* Search Bar with Advanced Controls */}
          <div className="relative">
            <div className={`relative max-w-2xl mx-auto ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-xl border transition-all duration-300 text-lg ${
                  theme === 'light'
                    ? 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    : 'bg-dark-card border-dark-border text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20'
                }`}
              />
            </div>
          </div>

          {/* Filter Controls Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                View:
              </span>
              <div className={`flex rounded-lg overflow-hidden border ${
                theme === 'light' ? 'border-gray-200' : 'border-dark-border'
              }`}>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-all duration-200 flex items-center gap-2 ${
                    viewMode === 'grid'
                      ? theme === 'light'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-primary-500 text-white shadow-md'
                      : theme === 'light'
                      ? 'bg-white text-gray-600 hover:bg-gray-50'
                      : 'bg-dark-card text-gray-400 hover:bg-dark-surface'
                  }`}
                  title="Grid View"
                >
                  <FiGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-all duration-200 flex items-center gap-2 ${
                    viewMode === 'list'
                      ? theme === 'light'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-primary-500 text-white shadow-md'
                      : theme === 'light'
                      ? 'bg-white text-gray-600 hover:bg-gray-50'
                      : 'bg-dark-card text-gray-400 hover:bg-dark-surface'
                  }`}
                  title="List View"
                >
                  <FiList className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 font-medium ${
                  theme === 'light'
                    ? 'bg-white border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    : 'bg-dark-card border-dark-border text-white focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20'
                } hover:border-blue-400`}
              >
                <option value="date">🕒 Latest</option>
                <option value="views">🔥 Most Popular</option>
                <option value="readTime">⚡ Quick Reads</option>
                <option value="title">📝 A-Z</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div>
            <h3 className={`text-sm font-semibold mb-3 ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? `${category.color} text-white shadow-lg transform scale-105`
                      : theme === 'light'
                      ? 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      : 'bg-dark-card text-gray-300 hover:bg-dark-surface border border-dark-border'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filters */}
          <div>
            <h3 className={`text-sm font-semibold mb-3 ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {(showAllTags ? allTags : allTags.slice(0, 6)).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 text-sm rounded-full font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-gradient-to-r from-cyan to-blue-500 text-white shadow-md'
                      : theme === 'light'
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-dark-surface text-gray-400 hover:bg-dark-card'
                  }`}
                >
                  #{tag}
                </button>
              ))}
              {allTags.length > 6 && (
                <button
                  onClick={() => setShowAllTags(!showAllTags)}
                  className={`px-3 py-1 text-sm rounded-full font-medium transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'
                      : 'bg-blue-500/10 text-cyan hover:bg-blue-500/20 border border-cyan/30'
                  }`}
                  title={showAllTags ? "Show less tags" : "Show all available tags"}
                >
                  {showAllTags ? 'Show Less' : `+${allTags.length - 6} more`}
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Results Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mb-8 text-center ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}
        >
          <p>
            {searchQuery || selectedCategory !== 'All' 
              ? `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
              : `${blogPosts.length} articles available`
            }
          </p>
        </motion.div>

        {/* Blog Posts Grid/List */}
        {currentPosts.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={viewMode === 'grid' 
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" 
                : "space-y-6 mb-12"
              }
            >
              {currentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={viewMode === 'list' ? "max-w-none" : ""}
                >
                  <BlogCard post={post} viewMode={viewMode} />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center items-center gap-2 mb-8"
              >
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === 1
                      ? 'opacity-50 cursor-not-allowed'
                      : theme === 'light'
                      ? 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      : 'bg-dark-card text-gray-300 hover:bg-dark-surface border border-dark-border'
                  }`}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-cyan to-blue-500 text-white shadow-lg'
                        : theme === 'light'
                        ? 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                        : 'bg-dark-card text-gray-300 hover:bg-dark-surface border border-dark-border'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === totalPages
                      ? 'opacity-50 cursor-not-allowed'
                      : theme === 'light'
                      ? 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      : 'bg-dark-card text-gray-300 hover:bg-dark-surface border border-dark-border'
                  }`}
                >
                  Next
                </button>
              </motion.div>
            )}
          </>
        ) : (
          // No Results State
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-center py-20 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}
          >
            <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
              theme === 'light' ? 'bg-gray-100' : 'bg-dark-card'
            }`}>
              <FiSearch className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">No articles found</h3>
            <p className="text-lg mb-6">
              {searchQuery 
                ? `No articles match "${searchQuery}"`
                : `No articles in "${selectedCategory}" category`
              }
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedTag('All');
                setSortBy('date');
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </Container>
      
      {/* Footer */}
      <FooterMain />
    </div>
  );
};

export default BlogMain;