import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GenreSelector from '@/components/GenreSelector';
import ContentGrid from '@/components/ContentGrid';
import { Content } from '@/components/ContentCard';
import RecommendationChart from '@/components/RecommendationChart';
import { getContentsByGenre, getRecommendationInfluence, getGenreInfluence } from '@/lib/mockData';

const Index = () => {
  const { toast } = useToast();
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [contents, setContents] = useState(getContentsByGenre('All'));
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState<{ name: string; score: number }[]>([]);
  const [chartTitle, setChartTitle] = useState('');
  
  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    const filteredContents = getContentsByGenre(genre);
    setContents(filteredContents);
    
    if (genre !== 'All') {
      // Show genre influence chart based
      const influenceData = getGenreInfluence(genre);
      setChartData(influenceData);
      setChartTitle(`Top ${genre} Recommendations`);
      setShowChart(true);
      
      toast({
        title: `${genre} selected`,
        description: `Showing top recommendations for ${genre}`,
      });
    } else {
      setShowChart(false);
    }
  };
  
  const handleContentSelect = (content: Content) => {
    // Show content influence charts
    const influenceData = getRecommendationInfluence(content);
    setChartData(influenceData);
    setChartTitle(`Because you clicked "${content.title}"`);
    setShowChart(true);
    
    toast({
      title: `${content.title} selected`,
      description: `Showing similar content to ${content.title}`,
    });
  };

  return (
    <div className="min-h-screen bg-prime text-white">
      <Navbar />
      <Hero />
      <GenreSelector selectedGenre={selectedGenre} onGenreSelect={handleGenreSelect} />
      <ContentGrid contents={contents} onContentSelect={handleContentSelect} />
      
      <RecommendationChart 
        data={chartData}
        isVisible={showChart}
        onClose={() => setShowChart(false)} 
        title={chartTitle}
      />
    </div>
  );
};

export default Index;