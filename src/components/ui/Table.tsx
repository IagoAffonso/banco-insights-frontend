import React from 'react';

interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
  className?: string;
  striped?: boolean;
  hover?: boolean;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  className = '',
  striped = false,
  hover = true
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-4 text-sm font-semibold text-gray-900 uppercase tracking-wider ${
                    alignClasses[column.align || 'left']
                  }`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`
                  border-b border-gray-200 last:border-b-0
                  ${striped && rowIndex % 2 === 1 ? 'bg-gray-25' : ''}
                  ${hover ? 'hover:bg-gray-50 transition-colors duration-150' : ''}
                `}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${
                      alignClasses[column.align || 'left']
                    }`}
                  >
                    {column.render 
                      ? column.render(row[column.key], row)
                      : row[column.key]
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
        {data.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum dado encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;