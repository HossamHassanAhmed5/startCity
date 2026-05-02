import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Info } from 'lucide-react';
import { useAIAssistant } from '../../contexts/AIAssistantContext';

interface RecommendationBadgeProps {
  fieldName: string;
  formData: Record<string, string>;
  onRecommendation: (recommendation: string) => void;
}

const RecommendationBadge: React.FC<RecommendationBadgeProps> = ({
  fieldName,
  formData,
  onRecommendation,
}) => {
  const { getRecommendation, recommendations, addRecommendation } = useAIAssistant();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const recommendation = recommendations.get(fieldName);

  useEffect(() => {
    const filledFields = Object.entries(formData).filter(
      ([key, value]) => value && key !== fieldName && value.length > 0
    ).length;

    if (filledFields > 0 && !recommendation) {
      const timer = setTimeout(async () => {
        setIsLoading(true);
        const result = await getRecommendation(fieldName, formData);
        if (result) {
          addRecommendation(fieldName, result);
        }
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [fieldName, formData, getRecommendation, addRecommendation, recommendation]);

  if (!recommendation || isLoading) {
    return null;
  }

  return (
    <div className="relative">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => {
          onRecommendation(recommendation.recommendation);
          setShowTooltip(!showTooltip);
        }}
        className="ml-2 inline-flex items-center space-x-1 px-2 py-1 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition"
      >
        <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
        <span className="text-xs font-medium text-blue-700">SMSM Recommends</span>
        <Info className="w-3 h-3 text-blue-500" />
      </motion.button>

      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 left-0 bg-white border border-neutral-200 rounded-lg shadow-xl p-3 z-20 w-64"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold text-neutral-900">
              Recommended: <span className="text-blue-600">{recommendation.recommendation}</span>
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {recommendation.reasoning}
            </p>
            <div className="flex space-x-2 pt-2">
              <button
                onClick={() => {
                  onRecommendation(recommendation.recommendation);
                  setShowTooltip(false);
                }}
                className="flex-1 px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition"
              >
                Accept
              </button>
              <button
                onClick={() => setShowTooltip(false)}
                className="flex-1 px-2 py-1 bg-neutral-200 text-neutral-700 text-xs rounded hover:bg-neutral-300 transition"
              >
                Dismiss
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RecommendationBadge;
