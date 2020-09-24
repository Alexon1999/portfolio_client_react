import { useEffect, useState } from 'react';

const checkLocalStorage = (theme) => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }

  return theme;
};

function settingTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'default.css';
  }

  if (mode == 'blue') {
    document.getElementById('theme-style').href = 'blue.css';
  }

  if (mode == 'green') {
    document.getElementById('theme-style').href = 'green.css';
  }

  if (mode == 'purple') {
    document.getElementById('theme-style').href = 'purple.css';
  }

  localStorage.setItem('theme', mode);
}

const useLocalStorage = (mode) => {
  const [theme, setTheme] = useState(() => checkLocalStorage(mode));

  useEffect(() => {
    settingTheme(theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useLocalStorage;
