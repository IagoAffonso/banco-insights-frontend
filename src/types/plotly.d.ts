declare module 'react-plotly.js' {
  import { ComponentType } from 'react';

  export interface PlotData {
    x?: any[];
    y?: any[];
    z?: any[];
    type?: 'scatter' | 'bar' | 'line' | 'pie' | 'histogram' | string;
    mode?: 'lines' | 'markers' | 'lines+markers' | string;
    name?: string;
    marker?: any;
    line?: any;
    text?: string | string[];
    textinfo?: string;
    textposition?: string;
    hovertemplate?: string;
    orientation?: 'v' | 'h';
    labels?: string[];
    values?: number[];
    hole?: number;
    [key: string]: any;
  }

  export interface PlotLayout {
    title?: string | { text?: string; font?: any };
    xaxis?: any;
    yaxis?: any;
    plot_bgcolor?: string;
    paper_bgcolor?: string;
    showlegend?: boolean;
    legend?: any;
    margin?: any;
    height?: number;
    width?: number;
    font?: any;
    barmode?: 'stack' | 'group' | 'overlay' | 'relative';
    [key: string]: any;
  }

  export interface PlotConfig {
    responsive?: boolean;
    displayModeBar?: boolean;
    modeBarButtonsToRemove?: string[];
    displaylogo?: boolean;
    [key: string]: any;
  }

  export interface PlotParams {
    data: PlotData[];
    layout?: PlotLayout;
    config?: PlotConfig;
    style?: React.CSSProperties;
    className?: string;
    useResizeHandler?: boolean;
    debug?: boolean;
    onInitialized?: (figure: any, graphDiv: HTMLElement) => void;
    onUpdate?: (figure: any, graphDiv: HTMLElement) => void;
    onPurge?: (figure: any, graphDiv: HTMLElement) => void;
    onError?: (error: any) => void;
  }

  const Plot: ComponentType<PlotParams>;
  export default Plot;
}