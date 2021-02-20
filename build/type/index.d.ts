import React from 'react';
import "./style.scss";
export declare enum ToolTipDirection {
    top = "top",
    right = "right",
    left = "left",
    bottom = "bottom"
}
export interface ToolTipProps {
    content?: React.ReactNode;
    children?: React.ReactElement;
    direction?: 'top' | 'right' | 'left' | 'bottom';
}
export declare const ToolTipLite: (props: ToolTipProps, ref: any) => JSX.Element;
