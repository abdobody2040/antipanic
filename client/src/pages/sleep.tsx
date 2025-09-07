import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Moon, Play, Pause, RotateCcw, Volume2 } from "lucide-react";

interface SleepExercise {
  id: string;
  title: string;
  description: string;
  duration: string;
  durationMinutes: number;
  category: string;
  icon: string;
  color: string;
}

export default function Sleep() {
  const { t } = useLanguage();
  const [selectedExercise, setSelectedExercise] = useState<SleepExercise | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const sleepExercises: SleepExercise[] = [
    {
      id: 'bedtime-routine',
      title: t('bedtimeRoutine'),
      description: t('calmingRoutine'),
      duration: '10 mins',
      durationMinutes: 10,
      category: 'routine',
      icon: '🛏️',
      color: 'bg-indigo-500'
    },
    {
      id: 'sleep-story-forest',
      title: t('forestDreams'),
      description: t('peacefulJourneyWoods'),
      duration: '20 mins',
      durationMinutes: 20,
      category: 'story',
      icon: '🌲',
      color: 'bg-green-500'
    },
    {
      id: 'sleep-story-ocean',
      title: t('oceanWaves'),
      description: t('driftAwayOcean'),
      duration: '15 mins',
      durationMinutes: 15,
      category: 'story',
      icon: '🌊',
      color: 'bg-blue-500'
    },
    {
      id: 'progressive-relaxation',
      title: t('bodyScanSleep'),
      description: t('releaseTensionHeadToe'),
      duration: '12 mins',
      durationMinutes: 12,
      category: 'relaxation',
      icon: '😴',
      color: 'bg-purple-500'
    },
    {
      id: 'breathing-sleep',
      title: t('sleepBreathing478'),
      description: t('breathingFasterSleep'),
      duration: '8 mins',
      durationMinutes: 8,
      category: 'breathing',
      icon: '💨',
      color: 'bg-teal-500'
    },
    {
      id: 'gratitude-meditation',
      title: t('gratitudeBeforeSleep'),
      description: t('endDayThankfulness'),
      duration: '6 mins',
      durationMinutes: 6,
      category: 'meditation',
      icon: '🙏',
      color: 'bg-pink-500'
    }
  ];

  const categories = [
    { id: 'all', name: t('all'), icon: '🌙' },
    { id: 'story', name: t('sleepStories'), icon: '📖' },
    { id: 'routine', name: t('bedtimeRoutine'), icon: '🛏️' },
    { id: 'relaxation', name: t('relaxation'), icon: '😌' },
    { id: 'breathing', name: t('breathing'), icon: '💨' },
    { id: 'meditation', name: t('meditation'), icon: '🧘' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  // Timer logic
  useEffect(() => {
    if (selectedExercise && isPlaying && currentTime < totalTime) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          
          // Update current step based on progress
          const progress = newTime / totalTime;
          const newStep = Math.floor(progress * getStepsForExercise(selectedExercise.category).length);
          setCurrentStep(Math.min(newStep, getStepsForExercise(selectedExercise.category).length - 1));
          
          if (newTime >= totalTime) {
            setIsPlaying(false);
            return totalTime;
          }
          return newTime;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [selectedExercise, isPlaying, currentTime, totalTime]);

  const startExercise = (exercise: SleepExercise) => {
    setSelectedExercise(exercise);
    setTotalTime(exercise.durationMinutes * 60); // Convert minutes to seconds
    setCurrentTime(0);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const restartExercise = () => {
    setCurrentTime(0);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const getStepsForExercise = (category: string) => {
    switch (category) {
      case 'story':
        return [
          t('language') === 'ar' ? 'أغلق عينيك واجعل جسدك مسترخياً...' : 'Close your eyes and let your body relax...',
          t('language') === 'ar' ? 'تخيل نفسك في مكان هادئ وجميل...' : 'Imagine yourself in a peaceful, beautiful place...',
          t('language') === 'ar' ? 'استمع لأصوات الطبيعة من حولك...' : 'Listen to the sounds of nature around you...',
          t('language') === 'ar' ? 'تنفس بعمق واتركد نفسك تنجرف للنوم...' : 'Breathe deeply and let yourself drift into sleep...'
        ];
      case 'breathing':
        return [
          t('language') === 'ar' ? 'اجلس أو استلق في وضع مريح...' : 'Sit or lie down in a comfortable position...',
          t('language') === 'ar' ? 'استنشق لمدة 4 ثوان...' : 'Inhale for 4 seconds...',
          t('language') === 'ar' ? 'احبس النفس لمدة 7 ثوان...' : 'Hold your breath for 7 seconds...',
          t('language') === 'ar' ? 'ازفر ببطء لمدة 8 ثوان...' : 'Exhale slowly for 8 seconds...',
          t('language') === 'ar' ? 'كرر هذا النمط حتى تشعر بالاسترخاء...' : 'Repeat this pattern until you feel relaxed...'
        ];
      case 'relaxation':
        return [
          t('language') === 'ar' ? 'ابدأ من أعلى رأسك...' : 'Start from the top of your head...',
          t('language') === 'ar' ? 'لاحظ أي توتر في عضلات وجهك...' : 'Notice any tension in your facial muscles...',
          t('language') === 'ar' ? 'اترك التوتر يذوب من كتفيك...' : 'Let the tension melt away from your shoulders...',
          t('language') === 'ar' ? 'استرخ صدرك وبطنك...' : 'Relax your chest and abdomen...',
          t('language') === 'ar' ? 'اتركد التوتر يخرج من ساقيك وقدميك...' : 'Let tension flow out of your legs and feet...'
        ];
      case 'routine':
        return [
          t('language') === 'ar' ? 'تأكد من أن غرفتك مظلمة ومريحة...' : 'Make sure your room is dark and comfortable...',
          t('language') === 'ar' ? 'ضع جهازك بعيداً عنك...' : 'Put your devices away from you...',
          t('language') === 'ar' ? 'خذ أنفاس عميقة وبطيئة...' : 'Take deep, slow breaths...',
          t('language') === 'ar' ? 'فكر في شيء إيجابي حدث اليوم...' : 'Think of something positive that happened today...',
          t('language') === 'ar' ? 'اتركد نفسك تسترخي تماماً...' : 'Let yourself completely relax...'
        ];
      case 'meditation':
        return [
          t('language') === 'ar' ? 'فكر في ثلاثة أشياء تشعر بالامتنان لها اليوم...' : 'Think of three things you\'re grateful for today...',
          t('language') === 'ar' ? 'تذكر لحظة جميلة من يومك...' : 'Remember a beautiful moment from your day...',
          t('language') === 'ar' ? 'أرسل المحبة لنفسك ولأحبائك...' : 'Send love to yourself and your loved ones...',
          t('language') === 'ar' ? 'اشعر بالسلام والهدوء يملأ قلبك...' : 'Feel peace and tranquility fill your heart...',
          t('language') === 'ar' ? 'احتفظ بهذا الشعور واتركد نفسك تنام...' : 'Hold onto this feeling and let yourself fall asleep...'
        ];
      default:
        return [
          t('language') === 'ar' ? 'استرخ واتبع التوجيهات...' : 'Relax and follow the guidance...',
          t('language') === 'ar' ? 'خذ وقتك ولا تستعجل...' : 'Take your time and don\'t rush...',
          t('language') === 'ar' ? 'اتركد نفسك تسترخي تماماً...' : 'Let yourself completely relax...'
        ];
    }
  };

  const getCurrentStepContent = () => {
    if (!selectedExercise) return '';
    const steps = getStepsForExercise(selectedExercise.category);
    return steps[currentStep] || steps[0];
  };

  const getProgressPercentage = () => {
    if (totalTime === 0) return 0;
    return Math.round((currentTime / totalTime) * 100);
  };

  const getFilteredExercises = () => {
    return selectedCategory === 'all' 
      ? sleepExercises 
      : sleepExercises.filter(ex => ex.category === selectedCategory);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (selectedExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white fade-in" data-testid="sleep-player">
        <div className="px-6 py-8">
          <button
            onClick={() => setSelectedExercise(null)}
            className="mb-6 text-white/80 hover:text-white"
            data-testid="button-back-to-sleep"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{selectedExercise.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{selectedExercise.title}</h2>
            <p className="text-white/80 mb-4">{selectedExercise.description}</p>
            <div className="text-3xl font-mono text-indigo-200 mb-4">
              {formatTime(totalTime - currentTime)}
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
            <p className="text-white/60 text-sm">
              {getProgressPercentage()}% {t('completed')}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <div className="text-center space-y-6">
              <div className={`w-32 h-32 rounded-full mx-auto flex items-center justify-center transition-all duration-1000 ${
                isPlaying ? 'bg-white/30 animate-pulse' : 'bg-white/20'
              }`}>
                <Moon className={`w-16 h-16 text-white/80 transition-transform duration-2000 ${
                  isPlaying ? 'rotate-180' : 'rotate-0'
                }`} />
              </div>
              
              <div className="min-h-[120px] flex items-center justify-center">
                <p className="text-white/90 leading-relaxed text-lg font-medium">
                  {getCurrentStepContent()}
                </p>
              </div>

              {/* Step Indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {getStepsForExercise(selectedExercise.category).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStep ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={togglePlayPause}
              disabled={currentTime >= totalTime}
              className={`px-8 py-4 rounded-2xl backdrop-blur-sm transition-all duration-200 ${
                currentTime >= totalTime 
                  ? 'bg-white/10 text-white/50 cursor-not-allowed' 
                  : 'bg-white/20 hover:bg-white/30 text-white border-white/30'
              }`}
              data-testid="button-play-pause-sleep"
            >
              {currentTime >= totalTime ? (
                <>
                  <Moon className="w-5 h-5 mr-2" />
                  {t('language') === 'ar' ? 'انتهى' : 'Finished'}
                </>
              ) : isPlaying ? (
                <>
                  <Pause className="w-5 h-5 mr-2" />
                  {t('pause')}
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  {t('play')}
                </>
              )}
            </Button>
            
            <Button
              onClick={restartExercise}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-sm"
              data-testid="button-restart-sleep"
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-sm"
              data-testid="button-volume"
            >
              <Volume2 className="w-5 h-5" />
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              💡 {t('findComfortablePosition')}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen fade-in" data-testid="page-sleep">
      {/* Header */}
      <header className="bg-gradient-to-b from-indigo-600 to-purple-600 text-white px-6 pt-12 pb-6">
        <Link href="/">
          <button className="mb-4 text-white/80 hover:text-white" data-testid="button-back">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
        <div className="flex items-center space-x-3 mb-2">
          <Moon className="w-8 h-8" />
          <h1 className="text-2xl font-semibold">
            {t('sleep')}
          </h1>
        </div>
        <p className="text-white/80 mt-2">
          {t('sleepSubtitle')}
        </p>
      </header>

      <main className="px-6 py-6">
        {/* Categories */}
        <div className="mb-6" data-testid="sleep-categories">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-indigo-300 bg-indigo-50 text-indigo-700'
                    : 'border-border bg-card text-foreground hover:bg-muted'
                }`}
                data-testid={`sleep-category-${category.id}`}
              >
                <span>{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sleep Exercises */}
        <div className="space-y-4" data-testid="sleep-exercises">
          {getFilteredExercises().map((exercise) => (
            <button
              key={exercise.id}
              onClick={() => startExercise(exercise)}
              className="w-full text-left bg-card border border-border rounded-2xl p-4 hover:bg-muted transition-all duration-200"
              data-testid={`sleep-exercise-${exercise.id}`}
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className={`w-12 h-12 ${exercise.color} rounded-full flex items-center justify-center text-xl`}>
                  {exercise.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">
                    {exercise.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {exercise.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">
                      {exercise.duration}
                    </span>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                      {exercise.category}
                    </span>
                  </div>
                </div>
                <Play className="w-5 h-5 text-muted-foreground" />
              </div>
            </button>
          ))}
        </div>

        {/* Sleep Tips */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6" data-testid="sleep-tips">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center">
            <Moon className="w-5 h-5 mr-2" />
            {t('betterSleepTips')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-indigo-500">🛏️</span>
                <span className="text-indigo-700">{t('keepConsistentSchedule')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-indigo-500">📱</span>
                <span className="text-indigo-700">{t('avoidScreensBeforeBed')}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-indigo-500">🌡️</span>
                <span className="text-indigo-700">{t('keepRoomCoolDark')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-indigo-500">☕</span>
                <span className="text-indigo-700">{t('limitCaffeineAfter2PM')}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}