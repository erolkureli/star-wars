import React, { useState } from 'react';
import { ThemeContext, Theme } from './theme-context';
import { ModeContext, Mode } from './mode-context';
import StartWarsGame from './StartWarsGame';

function App() {
  const [theme, setTheme] = useState(Theme.Light);
  const [mode, setMode] = useState(Mode.People);

  return <>
    <ModeContext.Provider value={{ mode, setMode }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <StartWarsGame />
      </ThemeContext.Provider>
    </ModeContext.Provider>
  </>;
}

export default App;
