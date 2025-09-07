import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/use-language';

interface BreathingCircleProps {
  isActive?: boolean;
}

export function BreathingCircle({ isActive = true }: BreathingCircleProps) {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale');
  const [count, setCount] = useState(4);
  const { t } = useLanguage();

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev === 1) {
          setPhase(current => {
            switch (current) {
              case 'inhale':
                return 'hold';
              case 'hold':
                return 'exhale';
              case 'exhale':
                return 'rest';
              case 'rest':
              default:
                return 'inhale';
            }
          });
          return getPhaseCount();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const getPhaseCount = () => {
    switch (phase) {
      case 'inhale':
        return 4;
      case 'hold':
        return 4;
      case 'exhale':
        return 6;
      case 'rest':
        return 2;
      default:
        return 4;
    }
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale':
        return t('breathingPattern').split('—')[0].trim();
      case 'hold':
        return t('breathingPattern').split('—')[1].trim();
      case 'exhale':
        return t('breathingPattern').split('—')[2].trim();
      case 'rest':
        return t('breathe');
      default:
        return t('breathe');
    }
  };

  const getCircleScale = () => {
    switch (phase) {
      case 'inhale':
        return 'scale-110';
      case 'hold':
        return 'scale-110';
      case 'exhale':
        return 'scale-75';
      case 'rest':
        return 'scale-100';
      default:
        return 'scale-100';
    }
  };

  const getCircleOpacity = () => {
    switch (phase) {
      case 'inhale':
      case 'hold':
        return 'opacity-100';
      case 'exhale':
        return 'opacity-50';
      case 'rest':
        return 'opacity-70';
      default:
        return 'opacity-70';
    }
  };

  return (
    <div className="text-center" data-testid="breathing-circle">
      <div className="relative mb-8">
        <div 
          className={`
            w-32 h-32 bg-calm-blue rounded-full mx-auto flex items-center justify-center 
            border-4 border-blue-300 transition-all duration-1000 ease-in-out
            ${getCircleScale()} ${getCircleOpacity()}
          `}
        >
          <div className="text-center">
            <div className="text-primary-foreground font-medium text-sm">
              {count}
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-blue-700 space-y-2">
        <p className="text-sm font-medium">
          {getPhaseText()}
        </p>
      </div>
    </div>
  );
}
