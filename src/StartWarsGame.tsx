import React from 'react';
import ThemeSelect from './ThemeSelect';
import ModeSelect from './ModeSelect';

import { useTheme, Theme } from './theme-context';
import { useMode, Mode } from './mode-context';

const StartWarsGame = () => {

    const { theme, setTheme } = useTheme();
    const { mode, setMode } = useMode();

    return (
        <>
            <ThemeSelect theme={theme} setTheme={setTheme} />
            <ModeSelect mode={mode} setMode={setMode} />
        </>
    );
};

export default StartWarsGame;