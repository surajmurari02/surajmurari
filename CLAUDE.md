# CLAUDE.md - Portfolio Development Guide

## Project Overview
This is a React-based portfolio website built with Vite, featuring a modern design with Tailwind CSS, Framer Motion animations, and Redux for state management.

## Tech Stack
- **Frontend**: React 18.3.1, Vite 6.0.3
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 11.15.0
- **State Management**: Redux Toolkit 2.5.0
- **Forms**: Formik 2.4.6, EmailJS 4.4.1
- **Icons**: React Icons 5.4.0
- **Utilities**: React Scroll 1.9.0

## Project Structure
```
src/
├── components/
│   ├── aboutMeSection/
│   ├── contactMeSection/
│   ├── experienceSection/
│   ├── footer/
│   ├── heroSection/
│   ├── icons/
│   ├── navbar/
│   ├── projectsSection/
│   ├── skillsSection/
│   └── subHeroSection/
├── state/
│   ├── store.js
│   └── menuSlice.js
├── framerMotion/
└── main.jsx
```

## Development Commands

### Essential Commands
```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Testing
Currently no test framework is configured. Consider adding:
```bash
# Recommended additions
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

## Key Features
1. **Responsive Design**: Mobile-first approach with custom breakpoints
2. **Smooth Animations**: Framer Motion for page transitions and scroll animations
3. **Contact Form**: EmailJS integration for contact functionality
4. **State Management**: Redux for menu toggle and global state
5. **Custom Color Scheme**: Brown/orange/cyan theme with custom shadows

## Common Development Tasks

### Adding New Sections
1. Create component folder in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation link in `NavbarLinks.jsx`
4. Implement responsive design following existing patterns

### Modifying Colors/Theme
- Edit `tailwind.config.js` colors object
- Custom colors: brown, cyan, orange variants
- Custom shadows for glow effects

### Adding Projects
- Modify projects array in `src/components/projectsSection/ProjectsMain.jsx`
- Add corresponding images to `public/images/`
- Update links when projects are live

### Contact Form Configuration
- EmailJS service configuration in contact components
- Environment variables should be added for API keys

## Performance Considerations
- Images are served from `public/images/` - consider optimization
- Large bundle size due to Framer Motion - implement code splitting if needed
- No lazy loading currently implemented

## Browser Support
- Modern browsers supporting ES6+
- Responsive design works on mobile devices (350px+)

## Deployment Notes
- Built for static hosting (Vercel, Netlify, etc.)
- All assets in public folder will be served statically
- No server-side rendering currently implemented

## Recent Improvements (September 2024)

### ✅ **Completed Features**
1. **SEO Optimization**: 
   - Complete meta tags, Open Graph, Twitter Cards
   - Structured data for better search visibility
   - Performance-focused font loading

2. **Dark/Light Theme Toggle**:
   - Full theme switching functionality
   - Animated toggle button in navbar
   - Theme persistence in localStorage
   - Smooth transitions between themes

3. **Performance Enhancements**:
   - LazyImage component with intersection observer
   - Image optimization and loading skeletons
   - Smooth scrolling with reduced motion support

4. **Accessibility Improvements**:
   - ARIA labels and roles throughout
   - Keyboard navigation support
   - Focus management and indicators
   - Screen reader compatibility

5. **Enhanced Contact Form**:
   - Real-time validation with error states
   - Loading states and success feedback
   - Better UX with animated notifications
   - Accessibility improvements

6. **Project Filtering System**:
   - Search functionality across projects
   - Category-based filtering
   - Enhanced project cards with tech stacks
   - Smooth animations and empty states

7. **Mobile Navigation**:
   - Improved mobile menu with animations
   - Better responsive design
   - Enhanced touch interactions

### 🎨 **Visual Enhancements**
- Improved color system for both themes
- Better button and interaction animations
- Loading skeletons for better perceived performance
- Enhanced project showcase with descriptions

## Future Enhancement Opportunities
1. **TypeScript Migration**: Add comprehensive type safety
2. **Testing Suite**: Unit and integration tests with Vitest
3. **PWA Features**: Service worker, offline support, installability
4. **CMS Integration**: Headless CMS for dynamic content
5. **Analytics**: User behavior tracking and insights
6. **Blog Section**: Content creation capabilities
7. **Advanced Animations**: More sophisticated micro-interactions
8. **Performance Monitoring**: Real user monitoring and optimization
9. **Internationalization**: Multi-language support
10. **Advanced Forms**: Multi-step forms, file uploads

## Troubleshooting

### Common Issues
- **Build failures**: Check for unused imports or syntax errors
- **Animation performance**: Reduce motion complexity for slower devices
- **Mobile layout**: Test on various screen sizes (use browser dev tools)
- **Contact form**: Verify EmailJS configuration and API keys

### Development Tips
- Use browser dev tools for responsive testing
- Check console for any React warnings
- Use Redux DevTools for state debugging
- Test animations on slower devices

## Contributing Guidelines
1. Follow existing component structure and naming conventions
2. Maintain responsive design patterns
3. Test on multiple screen sizes
4. Keep animations smooth and purposeful
5. Update this CLAUDE.md when making significant changes

## Contact & Support
For issues with this portfolio codebase, refer to the component-specific files or create issues in the repository.