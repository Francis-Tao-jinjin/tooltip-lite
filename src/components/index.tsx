import React, { useState } from 'react';
import "./style.scss";

export enum ToolTipDirection {
    top = 'top',
    right = 'right',
    left = 'left',
    bottom = 'bottom',
}

export interface ToolTipProps {
    content?: React.ReactNode;
    children?: React.ReactElement;
    direction?: 'top'|'right'|'left'|'bottom' ;
}

export const ToolTipLite = ((props:ToolTipProps, ref) => {

    const [showTips, toogleToolTip] = useState(false);

    return (
        <div className={'Tooltip-Wrapper'}
            onMouseEnter={() => { toogleToolTip(true); }}
            onMouseLeave={() => { toogleToolTip(false); }}>
            {props.children}
            <div className={['Tooltip-Tip', props.direction || 'top', showTips ? 'active' : ''].join(' ')}>
                {
                    props.content
                }
            </div>
        </div>
    );
});