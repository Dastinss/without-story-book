import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from './OnOff';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const callBack = action ('on or off click');

export const OnMode = () => <OnOff on={true} onChange={callBack}/>;
export const OffMode = () => <OnOff on={false} onChange={callBack}/>;
export const ModeChanging = () => {
    const [value,setValue] = useState(true);
    return <OnOff on={value} onChange={setValue}/>
};