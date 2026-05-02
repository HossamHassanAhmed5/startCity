import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Loader } from 'lucide-react';
import { useAIAssistant } from '../../contexts/AIAssistantContext';

interface AutocompleteSuggestionProps {
  fieldName: string;
  fieldValue: string;
  formData: Record<string, string>;
  onAccept: (suggestion: string) => void;
}

const AutocompleteSuggestion: React.FC<AutocompleteSuggestionProps> = ({
  fieldName,
  fieldValue,
  formData,
  onAccept,
}) => {
  const { getAutocomplete } = useAIAssistant();
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (!fieldValue || fieldValue.length < 10) {
      setSuggestion(null);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      const result = await getAutocomplete(fieldName, fieldValue, formData);
      setSuggestion(result);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [fieldValue, fieldName, formData, getAutocomplete]);

  if (!suggestion || isHidden || isLoading) {
    return null;
  }

  const fullText = fieldValue + suggestion;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute -top-12 left-0 right-0 bg-white border border-blue-200 rounded-lg shadow-lg p-3 z-10"
    >
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Wand2 className="w-4 h-4 text-blue-600" />
          <p className="text-xs font-medium text-neutral-700">SMSM Suggestion</p>
        </div>
        <p className="text-sm text-neutral-600">
          <span className="text-neutral-500">{fieldValue}</span>
          <span className="text-blue-600 font-medium">{suggestion}</span>
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => onAccept(fullText)}
            className="flex-1 px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition"
          >
            Accept (Tab)
          </button>
          <button
            onClick={() => setIsHidden(true)}
            className="flex-1 px-2 py-1 bg-neutral-200 text-neutral-700 text-xs rounded hover:bg-neutral-300 transition"
          >
            Dismiss
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AutocompleteSuggestion;
