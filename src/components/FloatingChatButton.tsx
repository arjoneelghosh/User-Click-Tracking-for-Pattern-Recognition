
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

interface FloatingChatButtonProps {
  onClick: () => void;
  className?: string;
}

const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ onClick, className }) => {
  return (
    <Button
      onClick={onClick}
      className={`fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 bg-prime-accent hover:bg-prime-accent/90 text-prime-dark shadow-lg accent-glow z-30 ${className || ''}`}
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  );
};

export default FloatingChatButton;
