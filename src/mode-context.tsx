import { createContext, useContext } from 'react';

export enum Mode {
    People = 'People',
    Starships = 'Starships',
}

export type ModeContextType = {
    mode: Mode;
    setMode: (mode: Mode) => void;
}

export const ModeContext = createContext<ModeContextType>({ mode: Mode.People, setMode: mode => console.warn('no mode provider')});
export const useMode = () => useContext(ModeContext);
export type ToggleMode = (selectedMode: Mode) => void;