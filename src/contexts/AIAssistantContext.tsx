import React, { createContext, useContext, useState, useCallback } from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface Recommendation {
  fieldName: string;
  recommendation: string;
  reasoning: string;
  accepted: boolean;
}

interface AIAssistantContextType {
  isOpen: boolean;
  toggleChat: () => void;
  messages: ChatMessage[];
  addMessage: (message: ChatMessage) => void;
  clearMessages: () => void;
  sendMessage: (content: string, formData: Record<string, string>) => Promise<string>;
  getAutocomplete: (fieldName: string, fieldValue: string, formData: Record<string, string>) => Promise<string>;
  getRecommendation: (fieldName: string, formData: Record<string, string>) => Promise<Recommendation | null>;
  recommendations: Map<string, Recommendation>;
  addRecommendation: (fieldName: string, recommendation: Recommendation) => void;
  isLoading: boolean;
}

const AIAssistantContext = createContext<AIAssistantContextType | undefined>(undefined);

export const useAIAssistant = () => {
  const context = useContext(AIAssistantContext);
  if (context === undefined) {
    throw new Error('useAIAssistant must be used within an AIAssistantProvider');
  }
  return context;
};

export const AIAssistantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm SMSM, your AI co-founder. I'm here to help you build your startup! I'll provide smart suggestions as you fill out your form. Feel free to ask me questions anytime!",
      timestamp: Date.now(),
    },
  ]);
  const [recommendations, setRecommendations] = useState<Map<string, Recommendation>>(new Map());
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const addMessage = useCallback((message: ChatMessage) => {
    setMessages((prev) => [...prev, message]);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: "Hi! I'm SMSM, your AI co-founder. I'm here to help you build your startup! I'll provide smart suggestions as you fill out your form. Feel free to ask me questions anytime!",
        timestamp: Date.now(),
      },
    ]);
  }, []);

  const sendMessage = useCallback(
    async (content: string, formData: Record<string, string>): Promise<string> => {
      setIsLoading(true);
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        const response = await fetch(`${supabaseUrl}/functions/v1/ai-assistant`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${anonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'chat',
            message: content,
            formData,
            conversationHistory: messages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        const data = await response.json();
        return data.data || "I'm having trouble responding right now.";
      } catch (error) {
        console.error('Error sending message:', error);
        return "I'm having trouble connecting. Please try again.";
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  const getAutocomplete = useCallback(
    async (fieldName: string, fieldValue: string, formData: Record<string, string>): Promise<string> => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        const response = await fetch(`${supabaseUrl}/functions/v1/ai-assistant`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${anonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'autocomplete',
            fieldName,
            fieldValue,
            formData,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to get autocomplete');
        }

        const data = await response.json();
        return data.data || '';
      } catch (error) {
        console.error('Error getting autocomplete:', error);
        return '';
      }
    },
    []
  );

  const getRecommendation = useCallback(
    async (fieldName: string, formData: Record<string, string>): Promise<Recommendation | null> => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        const response = await fetch(`${supabaseUrl}/functions/v1/ai-assistant`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${anonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'recommend',
            fieldName,
            formData,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to get recommendation');
        }

        const data = await response.json();
        const recommendation: Recommendation = {
          fieldName,
          recommendation: data.data.recommendation || '',
          reasoning: data.data.reasoning || '',
          accepted: false,
        };
        return recommendation;
      } catch (error) {
        console.error('Error getting recommendation:', error);
        return null;
      }
    },
    []
  );

  const addRecommendation = useCallback((fieldName: string, recommendation: Recommendation) => {
    setRecommendations((prev) => new Map(prev).set(fieldName, recommendation));
  }, []);

  const value: AIAssistantContextType = {
    isOpen,
    toggleChat,
    messages,
    addMessage,
    clearMessages,
    sendMessage,
    getAutocomplete,
    getRecommendation,
    recommendations,
    addRecommendation,
    isLoading,
  };

  return (
    <AIAssistantContext.Provider value={value}>
      {children}
    </AIAssistantContext.Provider>
  );
};
