import { createSlice } from '@reduxjs/toolkit';
import { FEATURE_FLAGS } from '../config/features';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    // Force dark theme if light theme is disabled
    if (!FEATURE_FLAGS.ENABLE_LIGHT_THEME) {
      return 'dark';
    }
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      // Don't allow toggle to light theme if it's disabled
      if (!FEATURE_FLAGS.ENABLE_LIGHT_THEME && state.mode === 'dark') {
        return; // Stay in dark mode
      }
      
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.mode);
        document.documentElement.classList.toggle('light', state.mode === 'light');
        document.documentElement.classList.toggle('dark', state.mode === 'dark');
      }
    },
    setTheme: (state, action) => {
      // Force dark theme if light theme is disabled and trying to set light
      if (!FEATURE_FLAGS.ENABLE_LIGHT_THEME && action.payload === 'light') {
        state.mode = 'dark';
      } else {
        state.mode = action.payload;
      }
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.mode);
        document.documentElement.classList.toggle('light', state.mode === 'light');
        document.documentElement.classList.toggle('dark', state.mode === 'dark');
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;