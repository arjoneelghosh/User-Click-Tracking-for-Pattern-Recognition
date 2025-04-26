
import React from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface RecommendationData {
  name: string;
  score: number;
}

interface RecommendationChartProps {
  data: RecommendationData[];
  isVisible: boolean;
  onClose: () => void;
  title: string;
}

const RecommendationChart: React.FC<RecommendationChartProps> = ({ 
  data, 
  isVisible, 
  onClose,
  title 
}) => {
  return (
    <div className={`fixed bottom-24 right-6 z-40 w-80 md:w-96 bg-prime-light rounded-lg shadow-2xl shadow-prime-accent/10 border border-prime-accent/20 transition-all duration-300 ${
      isVisible ? 'animate-slide-in-right' : 'translate-x-full'
    }`}>
      <div className="px-4 py-3 flex justify-between items-center border-b border-gray-700">
        <h3 className="font-medium text-white">{title}</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0 text-gray-400 hover:text-white" 
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-4">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 20 }}>
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#ffffff', fontSize: 12 }} 
              tickLine={false}
              axisLine={false}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              hide={true}
              domain={[0, 100]} 
            />
            <Tooltip
              contentStyle={{ background: '#232f3e', border: 'none', borderRadius: '4px' }}
              labelStyle={{ color: '#ffffff' }}
              formatter={(value) => [`${value}%`, 'Relevance']}
            />
            <Bar 
              dataKey="score" 
              fill="#00a8e1" 
              radius={[4, 4, 0, 0]}
              animationDuration={1000} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RecommendationChart;
