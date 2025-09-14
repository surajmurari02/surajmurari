# CLAUDE.md - Portfolio Development Guide

## Project Overview
This is a modern React-based portfolio website showcasing AI/ML expertise and full-stack development skills. Built with Vite for optimal performance, featuring advanced animations, comprehensive blog system, configurable feature flags, and sophisticated theme management. The project emphasizes clean architecture, responsive design, and developer-friendly configuration management.

## Tech Stack
- **Frontend**: React 18.3.1, Vite 6.0.3
- **Routing**: React Router DOM 7.9.1
- **Styling**: Tailwind CSS 3.4.17, PostCSS 8.4.49, Autoprefixer 10.4.20
- **Animations**: Framer Motion 11.15.0
- **State Management**: Redux Toolkit 2.5.0, React Redux 9.2.0
- **Forms & Communication**: Formik 2.4.6, EmailJS 4.4.1
- **Icons**: React Icons 5.4.0
- **Utilities**: React Scroll 1.9.0
- **Development Tools**: ESLint 9.17.0, @vitejs/plugin-react 4.3.4
- **TypeScript Support**: @types/react 18.3.17, @types/react-dom 18.3.5

## Project Structure
```
src/
├── components/
│   ├── aboutMeSection/          # About section components
│   ├── blog/                    # Blog system (routing, filtering, posts)
│   ├── common/                  # Reusable UI components
│   │   ├── LazyImage.jsx       # Optimized image loading
│   │   ├── LoadingSkeleton.jsx # Loading states
│   │   ├── ScrollToTopButton.jsx
│   │   ├── Container.jsx       # Layout container
│   │   └── Section.jsx         # Section wrapper
│   ├── contactMeSection/        # Contact form and info
│   ├── experienceSection/       # Work experience timeline
│   ├── footer/                  # Footer components
│   ├── heroSection/             # Landing hero section
│   ├── icons/                   # Custom icon components
│   ├── navbar/                  # Navigation with theme toggle
│   ├── pages/                   # Page-level components
│   ├── projectsSection/         # Projects showcase with filtering
│   ├── skillsSection/           # Skills display and categorization
│   └── subHeroSection/          # Secondary hero content
├── config/
│   ├── features.js             # Feature flag management
│   └── portfolio.js            # Portfolio content configuration
├── state/
│   ├── store.js               # Redux store configuration
│   ├── menuSlice.js           # Mobile menu state
│   └── themeSlice.js          # Theme management state
├── framerMotion/              # Animation variants and configs
└── main.jsx                   # Application entry point
```

## Development Commands

### Essential Commands
```bash
# Development server with hot reload
npm run dev

# Production build with optimization
npm run build

# Preview production build locally
npm run preview

# Lint code with ESLint
npm run lint
```

### Testing
Currently no test framework is configured. Recommended additions:
```bash
# Recommended testing setup
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
npm install --save-dev @testing-library/user-event jsdom
```

## Key Features

### 🎯 **Core Functionality**
1. **Responsive Design**: Mobile-first approach with adaptive layouts
2. **Smooth Animations**: Framer Motion for micro-interactions and page transitions
3. **Advanced Contact Form**: EmailJS integration with validation and security features
4. **Theme Management**: Light/dark theme with persistence and smooth transitions
5. **Feature Flag System**: Development workflow management and A/B testing
6. **Configuration-Driven**: Centralized portfolio content management

### 🚀 **Advanced Features**
1. **Blog System**: Complete blog with routing, filtering, search, and navigation
2. **Project Showcase**: Dynamic filtering, search, and categorization
3. **Skills Management**: Category-based skill organization with proficiency levels
4. **Lazy Loading**: Optimized image loading with skeleton states
5. **SEO Optimization**: Meta tags, Open Graph, and structured data
6. **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### 🔧 **Developer Experience**
1. **Hot Module Replacement**: Instant development feedback
2. **Modern Build Tools**: Vite for fast builds and optimal bundling
3. **Type Safety**: TypeScript definitions for better development experience
4. **Code Quality**: ESLint configuration for consistent code standards
5. **Component Architecture**: Reusable, composable components

## Configuration System

### Portfolio Content (`src/config/portfolio.js`)
Centralized configuration for all portfolio content:

```javascript
// Dynamic experience calculation
experience: {
  startDate: "2023-02-14" // Automatically calculates years/months
},

// Skills with categories and proficiency levels
skills: {
  main: [...], // Displayed skills with icons and categories
  categories: [...] // Skill groupings for badges
},

// Project management
projects: [...], // Auto-calculates totals and completed count

// Personal information
personal: {
  name: "Suraj Murari",
  role: "Machine Learning Engineer",
  email: "surajmurari02@gmail.com"
}
```

### Feature Flags (`src/config/features.js`)
Development workflow management:

```javascript
export const FEATURE_FLAGS = {
  SHOW_BLOG: false,           // Hide blog during development
  ENABLE_LIGHT_THEME: false, // Force dark mode, hide theme toggle
};
```

## State Management

### Redux Store Structure
- **Theme Slice**: Manages light/dark theme with localStorage persistence
- **Menu Slice**: Controls mobile navigation state
- **Centralized State**: Clean separation of concerns

### Theme System
- **Automatic Detection**: Respects system preferences
- **Manual Override**: User can toggle themes
- **Feature Flag Control**: Can be disabled via configuration
- **Smooth Transitions**: CSS transitions for theme changes
- **Persistence**: Remembers user preference across sessions

## Blog System Architecture

### Routing Implementation
```javascript
// Dynamic routing for blog posts
<Route path="/blog" element={<BlogMain />} />
<Route path="/blog/:slug" element={<BlogPost />} />
```

### Features
- **Search & Filter**: Real-time content filtering
- **Navigation**: Smooth transitions between posts
- **Responsive Design**: Mobile-optimized blog reading experience
- **Feature Toggle**: Can be hidden during development

## Common Development Tasks

### Adding New Sections
1. Create component folder in `src/components/[sectionName]/`
2. Import and add to appropriate page component
3. Add navigation link in `NavbarLinks.jsx`
4. Update routing if needed
5. Follow responsive design patterns

### Modifying Portfolio Content
1. **Personal Info**: Update `src/config/portfolio.js` personal section
2. **Skills**: Add to skills.main array with category and proficiency
3. **Projects**: Add to projects array (total count auto-calculated)
4. **Experience**: Update startDate for automatic calculation

### Managing Feature Flags
```javascript
// Development workflow
FEATURE_FLAGS.SHOW_BLOG = false;        // Hide incomplete features
FEATURE_FLAGS.ENABLE_LIGHT_THEME = true; // Enable/disable theme toggle
```

### Theme Customization
- **Colors**: Edit `tailwind.config.js` color palette
- **Variants**: Extend theme system in themeSlice.js
- **Transitions**: Modify CSS transition properties
- **Components**: Update theme-aware component styling

### Contact Form Configuration
- **EmailJS Setup**: Configure service and template IDs
- **Security Features**: Built-in rate limiting and input sanitization
- **Validation**: Real-time form validation with error states
- **Accessibility**: ARIA labels and keyboard navigation

## Performance Optimizations

### Image Management
- **Lazy Loading**: Intersection Observer API implementation
- **Skeleton States**: Loading placeholders for better UX
- **Optimization**: Consider WebP format and responsive images
- **Location**: Static assets in `public/images/`

### Code Splitting
- **Route-based**: Automatic code splitting by React Router
- **Component-based**: Consider React.lazy() for large components
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

### Animation Performance
- **Hardware Acceleration**: GPU-accelerated transforms
- **Reduced Motion**: Respects user accessibility preferences
- **Efficient Animations**: Use transform and opacity for smooth performance

## Browser Support
- **Modern Browsers**: ES6+ support required
- **Responsive Design**: Works from 320px to large screens
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Accessibility**: WCAG 2.1 compliance where possible

## Deployment

### Build Process
```bash
npm run build  # Generates optimized static files in dist/
```

### Hosting Recommendations
- **Static Hosting**: Vercel, Netlify, GitHub Pages
- **CDN Integration**: Automatic with modern hosting platforms
- **Environment Variables**: Configure EmailJS keys securely
- **Build Optimization**: Automatic minification and bundling

### Production Considerations
- **Asset Optimization**: Images and fonts optimization
- **SEO**: Meta tags and structured data included
- **Analytics**: Ready for Google Analytics or similar integration
- **Performance Monitoring**: Consider Core Web Vitals tracking

## Recent Improvements (January 2025)

### ✅ **Implemented Features**
1. **Blog System Architecture**:
   - Complete React Router implementation
   - Advanced filtering and search functionality
   - Responsive blog post reading experience
   - Feature flag integration for development workflow

2. **Configuration Management System**:
   - Centralized portfolio content in `config/portfolio.js`
   - Dynamic stats calculation (experience, project counts)
   - Skills categorization and proficiency management
   - Personal information and social links management

3. **Advanced Feature Flag System**:
   - Development workflow optimization
   - A/B testing capabilities
   - Feature toggle for blog and theme systems
   - Clean separation of development and production features

4. **Enhanced Theme Management**:
   - Redux-based theme state management
   - System preference detection and override
   - Smooth theme transitions with CSS
   - Feature flag control for theme availability

5. **Improved Contact System**:
   - Advanced form validation and security
   - Rate limiting and spam protection
   - Enhanced accessibility and UX
   - Real-time feedback and error handling

6. **Performance Enhancements**:
   - Lazy image loading with intersection observer
   - Loading skeleton components
   - Optimized bundle splitting
   - Smooth scroll behavior implementation

7. **Developer Experience**:
   - Comprehensive configuration system
   - Modern build tools and hot reloading
   - ESLint integration for code quality
   - TypeScript definitions for better DX

### 🎨 **Visual and UX Enhancements**
- **Modern Design System**: Consistent spacing and typography
- **Advanced Animations**: Micro-interactions and page transitions
- **Responsive Components**: Mobile-first design approach
- **Loading States**: Skeleton components for perceived performance
- **Interactive Elements**: Hover states and smooth transitions

## Architecture Patterns

### Component Composition
```javascript
// Reusable container pattern
<Container size="lg">
  <Section>
    <SectionContent />
  </Section>
</Container>

// Feature flag integration
{FEATURE_FLAGS.SHOW_BLOG && <BlogNavigation />}
```

### State Management Patterns
```javascript
// Theme management
const theme = useSelector((state) => state.theme.mode);
const dispatch = useDispatch();

// Feature flag usage
if (!FEATURE_FLAGS.ENABLE_LIGHT_THEME) {
  return null; // Hide theme toggle
}
```

### Configuration Patterns
```javascript
// Dynamic content loading
const stats = getDynamicStats();
const experience = calculateExperience();
```

## Future Enhancement Opportunities

### Technical Improvements
1. **TypeScript Migration**: Full type safety implementation
2. **Testing Suite**: Comprehensive unit and integration tests
3. **PWA Features**: Service worker and offline support
4. **Advanced SEO**: Sitemap generation and schema markup
5. **Performance Monitoring**: Real User Monitoring integration

### Feature Enhancements
1. **CMS Integration**: Headless CMS for dynamic content management
2. **Analytics Dashboard**: User behavior and site performance tracking
3. **Advanced Blog Features**: Comments, tags, search optimization
4. **Multi-language Support**: Internationalization implementation
5. **Advanced Forms**: Multi-step forms and file upload capabilities

### Infrastructure Improvements
1. **CI/CD Pipeline**: Automated testing and deployment
2. **Security Enhancements**: CSP headers and security auditing
3. **Accessibility Audit**: WCAG 2.1 AA compliance verification
4. **Performance Optimization**: Bundle analysis and optimization

## Troubleshooting

### Common Issues
- **Build Failures**: Check for unused imports and TypeScript errors
- **Animation Performance**: Reduce motion complexity on slower devices
- **Feature Flag Issues**: Verify feature flag imports and usage
- **Theme Problems**: Check theme slice state and localStorage persistence
- **Routing Issues**: Verify React Router configuration and feature flags

### Development Tips
- **Browser DevTools**: Use React DevTools and Redux DevTools
- **Console Monitoring**: Check for React warnings and errors
- **Responsive Testing**: Test across multiple device sizes
- **Performance**: Monitor Lighthouse scores and Core Web Vitals
- **Accessibility**: Use screen readers and keyboard-only navigation

### Configuration Management
- **Portfolio Updates**: Modify `src/config/portfolio.js` for content changes
- **Feature Toggles**: Use feature flags for development workflow
- **Theme Issues**: Check theme slice and feature flag configuration
- **Blog Problems**: Verify blog routing and feature flag settings

## Contributing Guidelines

### Code Standards
1. **Component Structure**: Follow existing patterns and naming conventions
2. **Responsive Design**: Mobile-first approach with consistent breakpoints
3. **Accessibility**: Include ARIA labels and keyboard navigation
4. **Performance**: Optimize images and minimize bundle impact
5. **Documentation**: Update CLAUDE.md for significant changes

### Development Workflow
1. **Feature Flags**: Use flags for incomplete features
2. **Configuration**: Prefer config files over hardcoded values
3. **State Management**: Use Redux for complex state, local state for simple cases
4. **Testing**: Test across multiple browsers and screen sizes
5. **Performance**: Profile animations and optimize for 60fps

### Pull Request Guidelines
1. **Description**: Clear description of changes and motivation
2. **Testing**: Test on multiple devices and browsers
3. **Documentation**: Update relevant documentation
4. **Performance**: Ensure no performance regressions
5. **Accessibility**: Verify accessibility improvements

## Contact & Support

### Project Information
- **Portfolio Owner**: Suraj Murari
- **Tech Stack**: React, Vite, Tailwind CSS, Framer Motion
- **Architecture**: Modern SPA with advanced configuration management
- **Development**: Feature flag system with comprehensive theming

### Getting Help
- **Documentation**: This CLAUDE.md file for comprehensive guidance
- **Configuration**: Check `src/config/` files for content and feature management
- **State Issues**: Use Redux DevTools for state debugging
- **Performance**: Profile with browser DevTools and Lighthouse

---

**Last Updated**: January 2025  
**Version**: 2.0.0  
**Maintainer**: Claude Code Assistant

> This documentation reflects the current state of the portfolio project and should be updated whenever significant changes are made to the architecture, features, or development workflow.