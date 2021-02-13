import React from 'react';
import {Theme, ToggleTheme} from './theme-context';

interface Props {
    theme: Theme;
    setTheme: ToggleTheme;
  }

const ThemeSelect: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <>
    <button onClick={() => {
        let newTheme : Theme = theme === Theme.Light ? Theme.Dark : Theme.Light
        setTheme(newTheme)
        }}>
        Switch theme
      </button>
    </>
  );
};

export default ThemeSelect;