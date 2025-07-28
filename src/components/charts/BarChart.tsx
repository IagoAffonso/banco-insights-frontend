import React from 'react';
import dynamic from 'next/dynamic';
import { PlotParams } from 'react-plotly.js';

// Dynamically import Plotly to avoid SSR issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

interface BarChartProps {
  data: Array<{
    x: string[];
    y: number[];
    name: string;
    color?: string;
  }>;
  title?: string;
  xAxisTitle?: string;
  yAxisTitle?: string;
  height?: number;
  orientation?: 'v' | 'h';
  showLegend?: boolean;
  stacked?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  title,
  xAxisTitle = '',
  yAxisTitle = '',
  height = 400,
  orientation = 'v',
  showLegend = true,
  stacked = false
}) => {
  const plotData: PlotParams['data'] = data.map((series, index) => ({
    x: orientation === 'v' ? series.x : series.y,
    y: orientation === 'v' ? series.y : series.x,
    type: 'bar',
    name: series.name,
    orientation: orientation,
    marker: {
      color: series.color || `hsl(${index * 40}, 60%, 50%)`,
      line: {
        width: 1,
        color: 'rgba(255,255,255,0.8)'
      }
    }
  }));

  const layout: PlotParams['layout'] = {
    title: {
      text: title,
      font: {
        size: 18,
        family: 'Inter, sans-serif'
      }
    },
    xaxis: {
      title: {
        text: xAxisTitle,
        font: {
          size: 14,
          family: 'Inter, sans-serif'
        }
      },
      gridcolor: '#f1f5f9',
      showgrid: orientation === 'h'
    },
    yaxis: {
      title: {
        text: yAxisTitle,
        font: {
          size: 14,
          family: 'Inter, sans-serif'
        }
      },
      gridcolor: '#f1f5f9',
      showgrid: orientation === 'v'
    },
    plot_bgcolor: 'transparent',
    paper_bgcolor: 'transparent',
    showlegend: showLegend,
    legend: {
      orientation: 'h',
      y: -0.15,
      x: 0.5,
      xanchor: 'center',
      font: {
        size: 12,
        family: 'Inter, sans-serif'
      }
    },
    margin: {
      l: 80,
      r: 40,
      t: title ? 60 : 40,
      b: showLegend ? 80 : 60
    },
    height: height,
    font: {
      family: 'Inter, sans-serif',
      size: 12,
      color: '#374151'
    },
    barmode: stacked ? 'stack' : 'group'
  };

  const config: PlotParams['config'] = {
    responsive: true,
    displayModeBar: true,
    modeBarButtonsToRemove: [
      'pan2d',
      'select2d',
      'lasso2d',
      'resetScale2d',
      'toggleSpikelines'
    ],
    displaylogo: false
  };

  return (
    <div className="w-full">
      <Plot
        data={plotData}
        layout={layout}
        config={config}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
    </div>
  );
};

export default BarChart;