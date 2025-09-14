import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiEye, FiCalendar, FiShare2, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Container from '../common/Container';
import FooterMain from '../footer/FooterMain';
import { getBlogPost, getRelatedPosts } from '../../data/blogPosts';
import BlogCard from './BlogCard';

const BlogPost = () => {
  const theme = useSelector((state) => state.theme.mode);
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts or slug changes
    window.scrollTo(0, 0);
    
    const foundPost = getBlogPost(slug);
    if (foundPost) {
      setPost(foundPost);
      setRelatedPosts(getRelatedPosts(foundPost.id));
      
      // Update page title
      document.title = `${foundPost.title} | Suraj Murari Blog`;
    }
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const sharePost = (platform) => {
    const url = window.location.href;
    const title = post.title;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  if (!post) {
    return (
      <div className={`min-h-screen pt-20 flex items-center justify-center ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50' 
          : 'bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg'
      }`}>
        <div className="text-center">
          <h2 className={`text-2xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Article not found
          </h2>
          <Link 
            to="/blog" 
            className="text-cyan hover:text-cyan-400 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50' 
        : 'bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg'
    }`}>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan to-blue-500 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

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

      <article className="relative pt-20">
        <Container size="md">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              to="/blog"
              className={`inline-flex items-center justify-center gap-3 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:gap-4 cursor-pointer group border select-none ${
                theme === 'light' 
                  ? 'text-gray-700 hover:text-blue-600 bg-white/80 hover:bg-blue-50 border-gray-200/60 hover:border-blue-300 shadow-sm hover:shadow-md backdrop-blur-sm' 
                  : 'text-gray-300 hover:text-cyan bg-gray-900/80 hover:bg-cyan/10 border-gray-700/60 hover:border-cyan/50 shadow-glow-sm hover:shadow-glow-md backdrop-blur-sm'
              }`}
              style={{ 
                textDecoration: 'none',
                WebkitTapHighlightColor: 'transparent',
                userSelect: 'none'
              }}
            >
              <FiArrowLeft className={`w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 pointer-events-none ${
                theme === 'light' ? 'text-gray-500 group-hover:text-blue-500' : 'text-gray-400 group-hover:text-cyan'
              }`} />
              <span className="pointer-events-none">Back to Blog</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-white font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className={`text-lg md:text-xl leading-relaxed mb-8 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                  getCategoryColor(post.category)
                } text-white`}>
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className={`font-medium ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>
                    {post.author}
                  </div>
                  <div className={`text-sm ${
                    theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    ML Engineer & Technical Writer
                  </div>
                </div>
              </div>

              <div className={`flex items-center gap-6 text-sm ${
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
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <span className={`text-sm font-medium ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Share:
              </span>
              <button
                onClick={() => sharePost('twitter')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  theme === 'light' 
                    ? 'text-gray-600 hover:text-blue-500 hover:bg-blue-50' 
                    : 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/10'
                }`}
              >
                <FiTwitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => sharePost('linkedin')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  theme === 'light' 
                    ? 'text-gray-600 hover:text-blue-700 hover:bg-blue-50' 
                    : 'text-gray-400 hover:text-blue-500 hover:bg-blue-500/10'
                }`}
              >
                <FiLinkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  theme === 'light' 
                    ? 'text-gray-600 hover:text-cyan-600 hover:bg-cyan-50' 
                    : 'text-gray-400 hover:text-cyan hover:bg-cyan/10'
                }`}
                title="Copy link"
              >
                <FiShare2 className="w-5 h-5" />
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-sm font-medium rounded-md ${
                    theme === 'light'
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-dark-surface text-gray-300 hover:bg-dark-card'
                  } transition-colors duration-200 cursor-pointer`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`prose prose-lg max-w-none mb-16 ${
              theme === 'light' 
                ? 'prose-gray prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-code:text-gray-800 prose-pre:bg-gray-100' 
                : 'prose-invert prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-code:text-gray-200'
            }`}
            dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/\n/g, '<br/>').replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>') 
            }}
          />

          {/* Article Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`border-t pt-8 mb-16 ${
              theme === 'light' ? 'border-gray-200' : 'border-dark-border'
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className={`text-lg font-bold mb-2 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  Written by {post.author}
                </h3>
                <p className={`${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  ML Engineer passionate about building real-world AI solutions. 
                  Sharing insights from the trenches of production ML systems.
                </p>
              </div>
              
              <div className="flex gap-3">
                <a
                  href="https://github.com/surajmurari02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors duration-200 ${
                    theme === 'light' 
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' 
                      : 'text-gray-400 hover:text-white hover:bg-dark-surface'
                  }`}
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/suraj-murari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors duration-200 ${
                    theme === 'light' 
                      ? 'text-gray-600 hover:text-blue-700 hover:bg-blue-50' 
                      : 'text-gray-400 hover:text-blue-500 hover:bg-blue-500/10'
                  }`}
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.footer>
        </Container>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className={`py-16 ${
            theme === 'light' ? 'bg-gray-50/50' : 'bg-dark-surface/30'
          }`}>
            <Container size="lg">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  Related Articles
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <BlogCard post={relatedPost} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Container>
          </section>
        )}
      </article>
      
      {/* Footer */}
      <FooterMain />
    </div>
  );
};

export default BlogPost;