import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiEye, FiCalendar, FiArrowRight } from 'react-icons/fi';

const BlogCard = ({ post, viewMode = 'grid' }) => {
  const theme = useSelector((state) => state.theme.mode);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Technical Tutorial': 'bg-gradient-to-r from-blue-500 to-purple-500',
      'Industry Insights': 'bg-gradient-to-r from-purple-500 to-pink-500',
      'Best Practices': 'bg-gradient-to-r from-green-500 to-teal-500',
      'Career & Learning': 'bg-gradient-to-r from-orange-500 to-red-500'
    };
    return colors[category] || 'bg-gradient-to-r from-cyan to-blue-500';
  };

  if (viewMode === 'list') {
    return (
      <motion.article
        whileHover={{ x: 8 }}
        transition={{ duration: 0.3 }}
        className={`group relative w-full rounded-2xl border backdrop-blur-md transition-all duration-500 overflow-hidden ${
          theme === 'light' 
            ? 'bg-white/95 border-gray-200/60 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/80' 
            : 'bg-dark-card/90 border-primary-500/30 shadow-glow-sm hover:shadow-glow-lg hover:border-primary-400/50'
        }`}
      >
        <div className="flex h-48">
          {/* Cover Image */}
          <div className={`w-48 bg-gradient-to-br ${getCategoryColor(post.category)} relative overflow-hidden flex-shrink-0`}>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 text-gray-900 text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              {/* Meta Information */}
              <div className={`flex items-center gap-4 text-sm mb-3 ${
                theme === 'light' ? 'text-gray-500' : 'text-gray-400'
              }`}>
                <div className="flex items-center gap-1">
                  <FiCalendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiClock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiEye className="w-4 h-4" />
                  <span>{post.views.toLocaleString()}</span>
                </div>
              </div>

              {/* Title */}
              <Link to={`/blog/${post.slug}`} className="block mb-3">
                <h3 className={`text-xl font-bold leading-tight transition-colors duration-300 line-clamp-2 ${
                  theme === 'light' 
                    ? 'text-gray-900 group-hover:text-blue-600' 
                    : 'text-white group-hover:text-cyan'
                }`}>
                  {post.title}
                </h3>
              </Link>

              {/* Excerpt */}
              <p className={`text-base leading-relaxed mb-4 line-clamp-2 ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 text-xs font-medium rounded-md ${
                      theme === 'light'
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-dark-surface text-gray-300'
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
                {post.tags.length > 2 && (
                  <span className={`px-2 py-1 text-xs font-medium rounded-md ${
                    theme === 'light'
                      ? 'bg-gray-100 text-gray-500'
                      : 'bg-dark-surface text-gray-400'
                  }`}>
                    +{post.tags.length - 2}
                  </span>
                )}
              </div>

              {/* Read More Link */}
              <Link
                to={`/blog/${post.slug}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  theme === 'light'
                    ? 'text-blue-600 hover:bg-blue-50'
                    : 'text-cyan hover:bg-cyan/10'
                }`}
              >
                Read More
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`group relative h-full rounded-2xl border backdrop-blur-md transition-all duration-500 overflow-hidden ${
        theme === 'light' 
          ? 'bg-white/95 border-gray-200/60 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/80' 
          : 'bg-dark-card/90 border-primary-500/30 shadow-glow-sm hover:shadow-glow-lg hover:border-primary-400/50'
      }`}
    >
      {/* Cover Image Placeholder */}
      <div className={`h-48 bg-gradient-to-br ${getCategoryColor(post.category)} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 text-gray-900 text-sm font-medium rounded-full">
            {post.category}
          </span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Read More Button - appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Read Article
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className={`flex items-center gap-4 text-sm mb-4 ${
          theme === 'light' ? 'text-gray-500' : 'text-gray-400'
        }`}>
          <div className="flex items-center gap-1">
            <FiCalendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <FiEye className="w-4 h-4" />
            <span>{post.views.toLocaleString()}</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`} className="block mb-3">
          <h3 className={`text-xl font-bold leading-tight transition-colors duration-300 line-clamp-2 ${
            theme === 'light' 
              ? 'text-gray-900 group-hover:text-blue-600' 
              : 'text-white group-hover:text-cyan'
          }`}>
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className={`text-base leading-relaxed mb-4 line-clamp-3 ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs font-medium rounded-md ${
                theme === 'light'
                  ? 'bg-gray-100 text-gray-700'
                  : 'bg-dark-surface text-gray-300'
              }`}
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className={`px-2 py-1 text-xs font-medium rounded-md ${
              theme === 'light'
                ? 'bg-gray-100 text-gray-500'
                : 'bg-dark-surface text-gray-400'
            }`}>
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Author and Read More */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              getCategoryColor(post.category)
            } text-white`}>
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <span className={`text-sm font-medium ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              {post.author}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className={`inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:gap-2 ${
              theme === 'light' 
                ? 'text-blue-600 hover:text-blue-700' 
                : 'text-cyan hover:text-cyan-400'
            }`}
          >
            Read More
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Hover Effect Gradient */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none ${
        getCategoryColor(post.category)
      }`} />
    </motion.article>
  );
};

export default BlogCard;