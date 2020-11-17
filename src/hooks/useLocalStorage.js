import { useEffect, useState } from 'react';

const checkLocalStorage = (theme) => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }

  return theme;
};

let themeLinkTag = document.getElementById('theme-style');

function settingTheme(mode) {
  if (mode == 'light') {
    themeLinkTag.href = 'default.css';
  }

  if (mode == 'blue') {
    themeLinkTag.href = 'blue.css';
  }

  if (mode == 'green') {
    themeLinkTag.href = 'green.css';
  }

  if (mode == 'purple') {
    themeLinkTag.href = 'purple.css';
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
