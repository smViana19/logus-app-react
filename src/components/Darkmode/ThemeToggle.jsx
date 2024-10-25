import React from 'react';

const ThemeToggle = ({ handleThemeChange, isDarkMode }) => {
  return (
    <label
      htmlFor="themeToggle"
      className="flex cursor-pointer items-center relative"
    >
      <input
        type="checkbox"
        id="themeToggle"
        className="sr-only peer"
        onChange={handleThemeChange}
        checked={isDarkMode}
      />
      <div
        className="w-16 h-8 rounded-full flex items-center px-1 bg-zinc-200 transition-all duration-500
          after:content-[''] after:flex after:relative after:w-6 after:h-6 after:bg-white after:rounded-full after:left-0 after:transition-all after:duration-300 after:rotate-0 shadow-inner
          peer-checked:after:left-8 peer-checked:after:bg-[url('/icons/moon-solid.svg')] peer-checked:after:-rotate-360
          after:bg-[url('/icons/sun-solid.svg')] after:bg-no-repeat after:bg-center
          dark:bg-zinc-700 dark:after:bg-zinc-800"
      ></div>
    </label>
  );
};

export default ThemeToggle;
