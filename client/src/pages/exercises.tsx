import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Dumbbell, Brain, Play, Wind, Eye, TreePine, Clock, Compass, X, Pause, RotateCcw, Hand, Volume2, Stethoscope, Smile } from "lucide-react";

export default function Exercises() {
  const { t } = useLanguage();
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const exercises = [
    // Quick Relief (0-3 mins)
    {
      id: 'emergency-calm',
      title: t('emergencyCalm'),
      description: t('quickTechniqueCalm'),
      duration: '1 ' + t('minutes'),
      durationMinutes: 1,
      icon: Zap,
      color: 'bg-red-500',
      textColor: 'text-red-600',
      category: 'quick'
    },
    {
      id: 'quick-calm',
      title: t('quickCalm'),
      description: t('quickCalmDesc'),
      duration: '2 ' + t('minutes'),
      durationMinutes: 2,
      icon: Clock,
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
      category: 'quick'
    },
    {
      id: 'deep-breathing',
      title: t('deepBreathing'),
      description: t('deepBreathingDesc'),
      duration: '3 ' + t('minutes'),
      durationMinutes: 3,
      icon: Wind,
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      category: 'breathing'
    },
    
    // Breathing Exercises (3-8 mins)
    {
      id: 'box-breathing',
      title: t('boxBreathing'),
      description: t('boxBreathingDesc'),
      duration: '5 ' + t('minutes'),
      durationMinutes: 5,
      icon: Zap,
      color: 'bg-calm-blue',
      textColor: 'text-blue-600',
      category: 'breathing'
    },
    {
      id: 'triangular-breathing',
      title: t('triangularBreathing'),
      description: t('inhaleHoldExhale'),
      duration: '6 ' + t('minutes'),
      durationMinutes: 6,
      icon: Wind,
      color: 'bg-cyan-500',
      textColor: 'text-cyan-600',
      category: 'breathing'
    },
    {
      id: 'belly-breathing',
      title: t('bellyBreathing'),
      description: t('deepAbdominalBreathing'),
      duration: '7 ' + t('minutes'),
      durationMinutes: 7,
      icon: Wind,
      color: 'bg-sky-500',
      textColor: 'text-sky-600',
      category: 'breathing'
    },
    
    // Mindfulness & Grounding (5-10 mins)
    {
      id: 'grounding-54321',
      title: t('grounding54321'),
      description: t('grounding54321Desc'),
      duration: '5 ' + t('minutes'),
      durationMinutes: 5,
      icon: Compass,
      color: 'bg-pink-500',
      textColor: 'text-pink-600',
      category: 'grounding'
    },
    {
      id: 'mindful-walking',
      title: t('mindfulWalking'),
      description: t('walkWithAwareness'),
      duration: '8 ' + t('minutes'),
      durationMinutes: 8,
      icon: Compass,
      color: 'bg-green-600',
      textColor: 'text-green-600',
      category: 'mindfulness'
    },
    {
      id: 'five-senses',
      title: t('fiveSensesExercise'),
      description: t('connectSurroundings'),
      duration: '6 ' + t('minutes'),
      durationMinutes: 6,
      icon: Eye,
      color: 'bg-lime-500',
      textColor: 'text-lime-600',
      category: 'grounding'
    },
    {
      id: 'present-moment',
      title: t('presentMomentMeditation'),
      description: t('focusNowLetGo'),
      duration: '10 ' + t('minutes'),
      durationMinutes: 10,
      icon: Brain,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-600',
      category: 'mindfulness'
    },
    
    // Visualization & Relaxation (7-15 mins)
    {
      id: 'visualization',
      title: t('visualization'),
      description: t('visualizationDesc'),
      duration: '8 ' + t('minutes'),
      durationMinutes: 8,
      icon: TreePine,
      color: 'bg-calm-green',
      textColor: 'text-green-600',
      category: 'visualization'
    },
    {
      id: 'peaceful-place',
      title: t('yourPeacefulPlace'),
      description: t('visualizeTravelPeaceful'),
      duration: '9 ' + t('minutes'),
      durationMinutes: 9,
      icon: TreePine,
      color: 'bg-teal-600',
      textColor: 'text-teal-600',
      category: 'visualization'
    },
    {
      id: 'color-healing',
      title: t('colorHealingMeditation'),
      description: t('useHealingPowerColors'),
      duration: '10 ' + t('minutes'),
      durationMinutes: 10,
      icon: TreePine,
      color: 'bg-pink-500',
      textColor: 'text-pink-600',
      category: 'visualization'
    },
    
    // Progressive & Body Work (10-15 mins)
    {
      id: 'progressive-muscle',
      title: t('progressiveMuscle'),
      description: t('progressiveMuscleDesc'),
      duration: '12 ' + t('minutes'),
      durationMinutes: 12,
      icon: Dumbbell,
      color: 'bg-calm-purple',
      textColor: 'text-purple-600',
      category: 'relaxation'
    },
    {
      id: 'body-scanning',
      title: t('bodyScanning'),
      description: t('bodyScanningDesc'),
      duration: '10 ' + t('minutes'),
      durationMinutes: 10,
      icon: Eye,
      color: 'bg-indigo-500',
      textColor: 'text-indigo-600',
      category: 'relaxation'
    },
    {
      id: 'tension-release',
      title: t('fullBodyTensionRelease'),
      description: t('tenseRelaxMuscle'),
      duration: '15 ' + t('minutes'),
      durationMinutes: 15,
      icon: Dumbbell,
      color: 'bg-purple-600',
      textColor: 'text-purple-600',
      category: 'relaxation'
    },
    
    // Extended Mindfulness (15+ mins)
    {
      id: 'mindfulness',
      title: t('mindfulness'),
      description: t('mindfulnessDesc'),
      duration: '15 ' + t('minutes'),
      durationMinutes: 15,
      icon: Brain,
      color: 'bg-teal-500',
      textColor: 'text-teal-600',
      category: 'mindfulness'
    },
    {
      id: 'loving-kindness',
      title: t('lovingKindnessMeditation'),
      description: t('cultivateLoveCompassion'),
      duration: '18 ' + t('minutes'),
      durationMinutes: 18,
      icon: Brain,
      color: 'bg-rose-500',
      textColor: 'text-rose-600',
      category: 'mindfulness'
    },
    
    // Nature Sounds & Ambient (20+ mins)
    {
      id: 'forest-sounds',
      title: t('forestBirds'),
      description: t('soothingNatureSounds'),
      duration: '20 ' + t('minutes'),
      durationMinutes: 20,
      icon: TreePine,
      color: 'bg-green-700',
      textColor: 'text-green-700',
      category: 'ambient'
    },
    {
      id: 'ocean-waves',
      title: t('waves'),
      description: t('gentleOceanWaves'),
      duration: '25 ' + t('minutes'),
      durationMinutes: 25,
      icon: TreePine,
      color: 'bg-blue-700',
      textColor: 'text-blue-700',
      category: 'ambient'
    },
    {
      id: 'rain-sounds',
      title: t('rainfall'),
      description: t('relaxingRainDrops'),
      duration: '30 ' + t('minutes'),
      durationMinutes: 30,
      icon: TreePine,
      color: 'bg-slate-600',
      textColor: 'text-slate-600',
      category: 'ambient'
    }
  ];

  const categories = [
    { id: 'all', name: t('language') === 'ar' ? 'الكل' : 'All', count: exercises.length },
    { id: 'quick', name: t('language') === 'ar' ? 'سريع' : 'Quick', count: exercises.filter(e => e.category === 'quick').length },
    { id: 'breathing', name: t('language') === 'ar' ? 'تنفس' : 'Breathing', count: exercises.filter(e => e.category === 'breathing').length },
    { id: 'grounding', name: t('language') === 'ar' ? 'التأريض' : 'Grounding', count: exercises.filter(e => e.category === 'grounding').length },
    { id: 'mindfulness', name: t('language') === 'ar' ? 'اليقظة' : 'Mindfulness', count: exercises.filter(e => e.category === 'mindfulness').length },
    { id: 'visualization', name: t('language') === 'ar' ? 'التخيل' : 'Visualization', count: exercises.filter(e => e.category === 'visualization').length },
    { id: 'relaxation', name: t('language') === 'ar' ? 'الاسترخاء' : 'Relaxation', count: exercises.filter(e => e.category === 'relaxation').length },
    { id: 'ambient', name: t('language') === 'ar' ? 'أصوات طبيعية' : 'Nature Sounds', count: exercises.filter(e => e.category === 'ambient').length },
  ];

  const getFilteredExercises = () => {
    return selectedCategory === 'all' 
      ? exercises 
      : exercises.filter(e => e.category === selectedCategory);
  };

  return (
    <div className="min-h-screen fade-in" data-testid="page-exercises">
      {/* Exercises Header */}
      <header className="gradient-bg px-6 pt-12 pb-6">
        <Link href="/">
          <button className="mb-4 text-foreground" data-testid="button-back">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-2xl font-semibold text-foreground">
          {t('exercises')}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t('exercisesSubtitle')}
        </p>
      </header>

      <main className="px-4 sm:px-6 py-6">
        {/* Category Filter */}
        <div className="mb-6" data-testid="exercise-categories">
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'border-calm-blue bg-calm-blue text-white shadow-md'
                    : 'border-border bg-card text-foreground hover:bg-muted'
                }`}
                data-testid={`category-${category.id}`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Exercise Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-testid="exercises-grid">
          {getFilteredExercises().map((exercise) => {
            const IconComponent = exercise.icon;
            return (
              <div
                key={exercise.id}
                className="calm-card cursor-pointer hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                onClick={() => setSelectedExercise(exercise.id)}
                data-testid={`exercise-${exercise.id}`}
              >
                <div className="p-4 sm:p-5">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse mb-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${exercise.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight mb-1">
                        {exercise.title}
                      </h3>
                      <span className={`text-xs font-medium ${exercise.textColor} bg-opacity-20 px-2 py-1 rounded-full`} style={{
                        backgroundColor: exercise.color.replace('bg-', '').replace('-500', '').replace('-600', '').replace('-700', '') + '20'
                      }}>
                        {exercise.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                    {exercise.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <div className={`w-2 h-2 rounded-full ${exercise.color}`}></div>
                      <span className="text-xs text-muted-foreground capitalize">
                        {t('language') === 'ar' ? (
                          exercise.category === 'quick' ? 'سريع' :
                          exercise.category === 'breathing' ? 'تنفس' :
                          exercise.category === 'grounding' ? 'تأريض' :
                          exercise.category === 'mindfulness' ? 'يقظة' :
                          exercise.category === 'visualization' ? 'تخيل' :
                          exercise.category === 'relaxation' ? 'استرخاء' : 'طبيعي'
                        ) : exercise.category}
                      </span>
                    </div>
                    <Play className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {getFilteredExercises().length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">😔</div>
            <p className="text-muted-foreground">
              {t('language') === 'ar' ? 'لا توجد تمارين في هذه الفئة' : 'No exercises in this category'}
            </p>
          </div>
        )}

        {/* Exercise Stats */}
        <div className="mt-8 bg-gradient-to-r from-calm-blue to-teal-500 rounded-2xl p-6 text-white" data-testid="exercise-stats">
          <h3 className="text-lg font-semibold mb-4">
            {t('language') === 'ar' ? '📊 إحصائيات التمارين' : '📊 Exercise Library Stats'}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{exercises.length}</div>
              <div className="text-sm opacity-90">
                {t('language') === 'ar' ? 'تمرين' : 'Exercises'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{categories.length - 1}</div>
              <div className="text-sm opacity-90">
                {t('language') === 'ar' ? 'فئة' : 'Categories'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1-30</div>
              <div className="text-sm opacity-90">
                {t('language') === 'ar' ? 'دقيقة' : 'Minutes'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">∞</div>
              <div className="text-sm opacity-90">
                {t('language') === 'ar' ? 'فوائد' : 'Benefits'}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Exercise Modal */}
      {selectedExercise && (
        <ExerciseModal
          exercise={exercises.find(e => e.id === selectedExercise)!}
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </div>
  );
}

interface ExerciseModalProps {
  exercise: {
    id: string;
    title: string;
    description: string;
    duration: string;
    durationMinutes: number;
    icon: any;
    color: string;
    textColor: string;
    category: string;
  };
  onClose: () => void;
}

function ExerciseModal({ exercise, onClose }: ExerciseModalProps) {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(exercise.durationMinutes * 60);
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const IconComponent = exercise.icon;

  // Timer logic
  useEffect(() => {
    if (isPlaying && currentTime < totalTime) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          
          // Update current step based on progress
          const progress = newTime / totalTime;
          const newStep = Math.floor(progress * getStepsForExercise(exercise.category).length);
          setCurrentStep(Math.min(newStep, getStepsForExercise(exercise.category).length - 1));
          
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
  }, [isPlaying, currentTime, totalTime, exercise.category]);

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
      case 'quick':
        return [
          t('language') === 'ar' ? 'خذ نفسًا عميقًا واتركه ببطء...' : 'Take a deep breath and release slowly...',
          t('language') === 'ar' ? 'ركز على اللحظة الحاضرة...' : 'Focus on the present moment...',
          t('language') === 'ar' ? 'تذكر أن هذا الشعور مؤقت...' : 'Remember this feeling is temporary...',
          t('language') === 'ar' ? 'أنت في أمان الآن...' : 'You are safe now...'
        ];
      case 'breathing':
        return [
          t('language') === 'ar' ? 'اجلس بشكل مريح وأغلق عينيك...' : 'Sit comfortably and close your eyes...',
          t('language') === 'ar' ? 'استنشق ببطء من أنفك لمدة 4 ثوان...' : 'Inhale slowly through your nose for 4 seconds...',
          t('language') === 'ar' ? 'احبس أنفاسك لمدة 4 ثوان...' : 'Hold your breath for 4 seconds...',
          t('language') === 'ar' ? 'ازفر ببطء من فمك لمدة 6 ثوان...' : 'Exhale slowly through your mouth for 6 seconds...',
          t('language') === 'ar' ? 'كرر هذا النمط بهدوء...' : 'Repeat this pattern calmly...'
        ];
      case 'grounding':
        return [
          t('language') === 'ar' ? 'انظر حولك وحدد 5 أشياء يمكنك رؤيتها...' : 'Look around and identify 5 things you can see...',
          t('language') === 'ar' ? 'لاحظ 4 أشياء يمكنك لمسها...' : 'Notice 4 things you can touch...',
          t('language') === 'ar' ? 'استمع إلى 3 أصوات من حولك...' : 'Listen for 3 sounds around you...',
          t('language') === 'ar' ? 'تعرف على رائحتين مختلفتين...' : 'Identify 2 different scents...',
          t('language') === 'ar' ? 'لاحظ طعمًا واحدًا في فمك...' : 'Notice 1 taste in your mouth...'
        ];
      case 'mindfulness':
        return [
          t('language') === 'ar' ? 'اجلس بهدوء وركز على تنفسك...' : 'Sit quietly and focus on your breathing...',
          t('language') === 'ar' ? 'لاحظ أفكارك دون الحكم عليها...' : 'Notice your thoughts without judging them...',
          t('language') === 'ar' ? 'اتركد الأفكار تمر كالغيوم في السماء...' : 'Let thoughts pass like clouds in the sky...',
          t('language') === 'ar' ? 'عد إلى التركيز على أنفاسك...' : 'Return focus to your breathing...',
          t('language') === 'ar' ? 'اشعر بالسلام والهدوء...' : 'Feel the peace and tranquility...'
        ];
      case 'visualization':
        return [
          t('language') === 'ar' ? 'أغلق عينيك وتخيل مكانًا هادئًا...' : 'Close your eyes and imagine a peaceful place...',
          t('language') === 'ar' ? 'اجعل الصورة واضحة وحية...' : 'Make the image clear and vivid...',
          t('language') === 'ar' ? 'استشعر الهدوء والأمان في هذا المكان...' : 'Feel the calm and safety in this place...',
          t('language') === 'ar' ? 'تنفس بعمق في هذا المكان الآمن...' : 'Breathe deeply in this safe space...',
          t('language') === 'ar' ? 'احتفظ بهذا الشعور الهادئ...' : 'Keep this peaceful feeling with you...'
        ];
      case 'relaxation':
        return [
          t('language') === 'ar' ? 'ابدأ من قدميك، شد العضلات لـ5 ثوان...' : 'Start with your feet, tense muscles for 5 seconds...',
          t('language') === 'ar' ? 'استرخ وانتقل إلى ساقيك...' : 'Relax and move to your legs...',
          t('language') === 'ar' ? 'شد عضلات بطنك ثم استرخ...' : 'Tense your abdominal muscles then relax...',
          t('language') === 'ar' ? 'شد يديك وذراعيك ثم اتركها...' : 'Tense your hands and arms then release...',
          t('language') === 'ar' ? 'أخيرًا، شد وجهك ثم استرخ تمامًا...' : 'Finally, tense your face then completely relax...'
        ];
      case 'ambient':
        return [
          t('language') === 'ar' ? 'استرخ واستمع لأصوات الطبيعة...' : 'Relax and listen to the sounds of nature...',
          t('language') === 'ar' ? 'اتركد عقلك يهدأ...' : 'Let your mind settle...',
          t('language') === 'ar' ? 'تنفس مع إيقاع الأصوات...' : 'Breathe with the rhythm of the sounds...',
          t('language') === 'ar' ? 'اشعر بالسلام والهدوء...' : 'Feel the peace and tranquility...'
        ];
      default:
        return [
          t('language') === 'ar' ? 'اتبع التعليمات واسترخ...' : 'Follow the instructions and relax...',
          t('language') === 'ar' ? 'تنفس بعمق وهدوء...' : 'Breathe deeply and calmly...',
          t('language') === 'ar' ? 'ركز على اللحظة الحاضرة...' : 'Focus on the present moment...'
        ];
    }
  };

  const getCurrentStepContent = () => {
    const steps = getStepsForExercise(exercise.category);
    return steps[currentStep] || steps[0];
  };

  const getProgressPercentage = () => {
    if (totalTime === 0) return 0;
    return Math.round((currentTime / totalTime) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" data-testid="exercise-modal">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl max-h-[90vh] overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${exercise.color} rounded-full flex items-center justify-center`}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {exercise.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {exercise.duration}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-close-exercise"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mb-8">
            <div className="text-3xl font-mono text-calm-blue mb-4">
              {formatTime(totalTime - currentTime)}
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div 
                className="bg-calm-blue h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
            <p className="text-muted-foreground text-sm">
              {getProgressPercentage()}% {t('completed')}
            </p>
          </div>

          <div className="bg-muted rounded-3xl p-6 mb-8">
            <div className="text-center space-y-6">
              <div className={`w-24 h-24 ${exercise.color} rounded-full mx-auto flex items-center justify-center transition-all duration-1000 ${
                isPlaying ? 'animate-pulse' : ''
              }`}>
                <IconComponent className="w-12 h-12 text-white" />
              </div>
              
              <div className="min-h-[80px] flex items-center justify-center">
                <p className="text-foreground leading-relaxed font-medium">
                  {getCurrentStepContent()}
                </p>
              </div>

              {/* Step Indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {getStepsForExercise(exercise.category).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStep ? 'bg-calm-blue' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button
              onClick={togglePlayPause}
              disabled={currentTime >= totalTime}
              className={`flex-1 transition-all duration-200 ${
                currentTime >= totalTime 
                  ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                  : isPlaying 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                    : 'bg-calm-blue hover:bg-blue-300 text-white'
              }`}
              data-testid="button-play-pause"
            >
              {currentTime >= totalTime ? (
                <>
                  <Brain className="w-4 h-4 mr-2" />
                  {t('language') === 'ar' ? 'انتهى' : 'Finished'}
                </>
              ) : isPlaying ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  {t('pause')}
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  {t('play')}
                </>
              )}
            </Button>
            
            <Button
              onClick={restartExercise}
              variant="outline"
              data-testid="button-restart"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

