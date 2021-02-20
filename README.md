# ToolTipLite
A react simple tooltip utils

## install 

`npm i tooltip-lite`

## Features

Lite weight and simple, except the peer dependencies of react, no more others dependencies.

Support tooltip on 'top','right','bottom' and 'left' direction.

## Preview

customize yellow text color tooltip

![yellow text tooltip](/assets/1.png)

default tooltip style on the right

![right tooltip](/assets/2.png)

## Basic Usage & Props

**props**

```TypeScript
interface ToolTipProps {
    content?: React.ReactNode;
    children?: React.ReactElement;
    direction?: 'top' | 'right' | 'left' | 'bottom';
}
```

**usage**

```tsx
import React from 'react';
import { ToolTipLite } from 'tooltip-lite';
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
```



