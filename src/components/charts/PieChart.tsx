import React from 'react';
import dynamic from 'next/dynamic';
import { PlotParams } from 'react-plotly.js';

// Dynamically import Plotly to avoid SSR issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

interface PieChartProps {
  data: {
    labels: string[];
    values: number[];
    colors?: string[];
  };
  title?: string;
  height?: number;
  showLegend?: boolean;
  hole?: number; // For donut charts
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  title,
  height = 400,
  showLegend = true,
  hole = 0
}) => {
  const defaultColors = data.labels.map((_, index) => 
    `hsl(${index * 360 / data.labels.length}, 60%, 50%)`
  );

  const plotData: PlotParams['data'] = [{
    type: 'pie',
    labels: data.labels,
    values: data.values,
    marker: {
      colors: data.colors || defaultColors,
      line: {
        color: '#ffffff',
        width: 2
      }
    },
    textinfo: 'label+percent',
    textposition: 'auto',
    hole: hole,
    hovertemplate: '<b>%{label}</b><br>Valor: %{value}<br>Participação: %{percent}<extra></extra>'
  }];

  const layout: PlotParams['layout'] = {
    title: {
      text: title,
      font: {
        size: 18,
        family: 'Inter, sans-serif'
      }
    },
    plot_bgcolor: 'transparent',
    paper_bgcolor: 'transparent',
    showlegend: showLegend,
    legend: {
      orientation: 'v',
      y: 0.5,
      x: 1.02,
      xanchor: 'left',
      yanchor: 'middle',
      font: {
        size: 12,
        family: 'Inter, sans-serif'
      }
    },
    margin: {
      l: 40,
      r: showLegend ? 120 : 40,
      t: title ? 60 : 40,
      b: 40
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

export default PieChart;