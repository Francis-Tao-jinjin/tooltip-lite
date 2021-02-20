import React from 'react';
// import { ToolTipLite } from '../components';
import { ToolTipLite } from '../../build/tooltip.bundle';
import './style.scss';

export function UIContainer() {
    return (
    <div className="App">
        <div className={'testBtnWithToolTip'}>
            <ToolTipLite
                content={<div style={{
                        color: 'yellow',
                    }}>
                    This is Submit btn👇🏼</div>}
                direction={'top'}
                >
                <button>Submit</button>
            </ToolTipLite>
        </div>
        <div>
            A emoji in the line,
            <ToolTipLite content="Cool!" direction="right">
                <span className="example-emoji" role="img" aria-label="cool emoji">
                😎
                </span>
            </ToolTipLite> hover to show tip.
        </div>
    </div>
    );
}