import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setTheme } from './state/themeSlice';
import { FEATURE_FLAGS } from './config/features';
import NavbarMain from "./components/navbar/NavbarMain";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import Home from "./components/pages/Home";
import BlogMain from "./components/blog/BlogMain";
import BlogPost from "./components/blog/BlogPost";

function App() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Force dark theme if light theme is disabled
    let initialTheme;
    if (!FEATURE_FLAGS.ENABLE_LIGHT_THEME) {
      initialTheme = 'dark';
    } else {
      initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    }
    
    dispatch(setTheme(initialTheme));
    document.documentElement.classList.toggle('light', initialTheme === 'light');
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, [dispatch]);

  return (
    <Router>
      <main className={`font-body antialiased transition-all duration-500 relative min-h-screen ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 text-slate-900' 
          : 'bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg text-dark-text'
      }`}>
        {/* Navigation */}
        <div className="relative z-10">
          <NavbarMain />
          
          {/* Route Content */}
          <Routes>
            <Route path="/" element={
              <>
                {/* Background Effects - Only show on home page */}
                <div className="fixed inset-0 pointer-events-none">
                  {/* Gradient Orbs */}
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
                  
                  {/* Grid Pattern */}
                  <div className={`absolute inset-0 ${
                    theme === 'light' ? 'bg-grid-pattern opacity-[0.02]' : 'bg-grid-pattern opacity-30'
                  }`} />
                </div>
                <Home />
              </>
            } />
            {FEATURE_FLAGS.SHOW_BLOG && (
              <>
                <Route path="/blog" element={<BlogMain />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </>
            )}
          </Routes>
        </div>
        
        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </main>
    </Router>
  );
}

export default App;
