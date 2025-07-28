import React from 'react';
import dynamic from 'next/dynamic';
import { PlotParams } from 'react-plotly.js';

// Dynamically import Plotly to avoid SSR issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

interface LineChartProps {
  data: Array<{
    x: (string | number | Date)[];
    y: number[];
    name: string;
    color?: string;
  }>;
  title?: string;
  xAxisTitle?: string;
  yAxisTitle?: string;
  height?: number;
  showLegend?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  title,
  xAxisTitle = '',
  yAxisTitle = '',
  height = 400,
  showLegend = true
}) => {
  const plotData: PlotParams['data'] = data.map((series, index) => ({
    x: series.x,
    y: series.y,
    type: 'scatter',
    mode: 'lines+markers',
    name: series.name,
    line: {
      color: series.color || `hsl(${index * 40}, 60%, 50%)`,
      width: 2
    },
    marker: {
      size: 6,
      color: series.color || `hsl(${index * 40}, 60%, 50%)`
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
      showgrid: true
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
      showgrid: true
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
      l: 60,
      r: 40,
      t: title ? 60 : 40,
      b: showLegend ? 80 : 60
    },
    height: height,
    font: {
      family: 'Inter, sans-serif',
      size: 12,
      color: '#374151'
    }
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

export default LineChart;