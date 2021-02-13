import React from 'react';

import { Mode, ToggleMode } from './mode-context';

interface Props {
    mode: Mode;
    setMode: ToggleMode;
}

const ModeSelect: React.FC<Props> = ({ mode, setMode }) => {

    const handleInputChange = (mode: any) => {
        alert(mode);
        setMode(mode);
    };

    return (
        <>
            <label>
                <div>
                    <input
                        type="radio"
                        value={Mode.People}
                        name={Mode.People}
                        onChange={e => handleInputChange(Mode.People)}
                        checked={Mode.People === mode}
                    />
                    {Mode.People}
                </div>
            </label>

            <label>
                <div>
                    <input
                        type="radio"
                        value={Mode.Starships}
                        name={Mode.Starships}
                        onChange={e => handleInputChange(Mode.Starships)}
                        checked={Mode.Starships === mode}
                    />
                    {Mode.Starships}
                </div>
            </label>

        </>
    );
};

export default ModeSelect;