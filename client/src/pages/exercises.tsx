import { useState, useEffect } from "react";
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
      icon: TreePine,
      color: 'bg-calm-green',
      textColor: 'text-green-600',
      category: 'visualization'
    },
    {
      id: 'peaceful-place',
      title: t('language') === 'ar' ? 'مكانك السلمي' : 'Your Peaceful Place',
      description: t('language') === 'ar' ? 'تخيل وانتقل لمكانك المفضل الهادئ' : 'Visualize and travel to your favorite peaceful place',
      duration: '9 ' + t('minutes'),
      icon: TreePine,
      color: 'bg-teal-600',
      textColor: 'text-teal-600',
      category: 'visualization'
    },
    {
      id: 'color-healing',
      title: t('language') === 'ar' ? 'الشفاء بالألوان' : 'Color Healing Meditation',
      description: t('language') === 'ar' ? 'استخدم قوة الألوان للشفاء النفسي' : 'Use the healing power of colors for emotional wellness',
      duration: '10 ' + t('minutes'),
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
      icon: Eye,
      color: 'bg-indigo-500',
      textColor: 'text-indigo-600',
      category: 'relaxation'
    },
    {
      id: 'tension-release',
      title: t('language') === 'ar' ? 'إطلاق التوتر' : 'Full Body Tension Release',
      description: t('language') === 'ar' ? 'شد واسترخ كل عضلة لإطلاق التوتر' : 'Tense and relax every muscle to release tension',
      duration: '15 ' + t('minutes'),
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
      icon: Brain,
      color: 'bg-teal-500',
      textColor: 'text-teal-600',
      category: 'mindfulness'
    },
    {
      id: 'loving-kindness',
      title: t('language') === 'ar' ? 'تأمل الرحمة والمحبة' : 'Loving Kindness Meditation',
      description: t('language') === 'ar' ? 'زرع المحبة والرحمة في قلبك' : 'Cultivate love and compassion in your heart',
      duration: '18 ' + t('minutes'),
      icon: Brain,
      color: 'bg-rose-500',
      textColor: 'text-rose-600',
      category: 'mindfulness'
    },
    
    // Nature Sounds & Ambient (20+ mins)
    {
      id: 'forest-sounds',
      title: t('forestBirds'),
      description: t('language') === 'ar' ? 'أصوات الطبيعة المهدئة للاسترخاء العميق' : 'Soothing nature sounds for deep relaxation',
      duration: '20 ' + t('minutes'),
      icon: TreePine,
      color: 'bg-green-700',
      textColor: 'text-green-700',
      category: 'ambient'
    },
    {
      id: 'ocean-waves',
      title: t('waves'),
      description: t('language') === 'ar' ? 'أمواج المحيط الهادئة للسكينة التامة' : 'Gentle ocean waves for complete tranquility',
      duration: '25 ' + t('minutes'),
      icon: TreePine,
      color: 'bg-blue-700',
      textColor: 'text-blue-700',
      category: 'ambient'
    },
    {
      id: 'rain-sounds',
      title: t('rainfall'),
      description: t('language') === 'ar' ? 'قطرات المطر المريحة لتهدئة العقل' : 'Relaxing rain drops to calm the mind',
      duration: '30 ' + t('minutes'),
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
    icon: any;
    color: string;
    textColor: string;
  };
  onClose: () => void;
}

function ExerciseModal({ exercise, onClose }: ExerciseModalProps) {
  const { t } = useLanguage();
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const [phase, setPhase] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const IconComponent = exercise.icon;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getInstructions = () => {
    switch (exercise.id) {
      case 'box-breathing':
        return t('boxBreathingInstructions');
      case 'deep-breathing':
        return t('deepBreathingInstructions');
      case 'progressive-muscle':
        return t('progressiveMuscleInstructions');
      case 'body-scanning':
        return t('bodyScanInstructions');
      case 'visualization':
        return t('visualizationInstructions');
      case 'mindfulness':
        return t('mindfulnessInstructions');
      case 'quick-calm':
        return t('quickCalmInstructions');
      case 'grounding-54321':
        return t('grounding54321Instructions');
      default:
        return exercise.description;
    }
  };

  const renderExerciseContent = () => {
    if (exercise.id === 'box-breathing') {
      return (
        <div className="text-center py-8">
          <div className="w-32 h-32 bg-calm-blue rounded-full mx-auto flex items-center justify-center mb-6 animate-breathe">
            <div className="text-white text-lg font-semibold">
              {isActive ? getBreathingPhase() : (t('language') === 'ar' ? 'تنفس' : 'Breathe')}
            </div>
          </div>
        </div>
      );
    }

    if (exercise.id === 'progressive-muscle') {
      return (
        <div className="py-6">
          <ProgressiveMuscleGuide isActive={isActive} />
        </div>
      );
    }

    if (exercise.id === 'grounding-54321') {
      return (
        <div className="py-6">
          <GroundingGuide />
        </div>
      );
    }

    return (
      <div className="text-center py-8">
        <div className={`w-24 h-24 ${exercise.color} rounded-full mx-auto flex items-center justify-center mb-6`}>
          <IconComponent className="w-12 h-12 text-white" />
        </div>
        <p className="text-muted-foreground">
          {getInstructions()}
        </p>
      </div>
    );
  };

  const getBreathingPhase = () => {
    const cycle = Math.floor((timer % 16) / 4);
    switch (cycle) {
      case 0: return t('inhale');
      case 1: return t('hold');
      case 2: return t('exhale');
      case 3: return t('hold');
      default: return t('breathe');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end" data-testid="exercise-modal">
      <div className="w-full bg-white rounded-t-3xl max-h-[90vh] overflow-hidden">
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

          <div className="text-center mb-6">
            <div className="text-2xl font-mono text-calm-blue mb-2">
              {formatTime(timer)}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {getInstructions()}
            </p>
          </div>

          {renderExerciseContent()}

          <div className="flex space-x-3 pt-6">
            <Button
              onClick={() => setIsActive(!isActive)}
              className={`flex-1 ${isActive ? 'bg-orange-500 hover:bg-orange-600' : 'bg-calm-blue hover:bg-blue-300'} text-white`}
              data-testid="button-play-pause"
            >
              {isActive ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  {t('pauseExercise')}
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  {timer > 0 ? t('resumeExercise') : t('startExercise')}
                </>
              )}
            </Button>
            <Button
              onClick={() => {
                setTimer(0);
                setIsActive(false);
                setPhase(0);
              }}
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

function ProgressiveMuscleGuide({ isActive }: { isActive: boolean }) {
  const { t } = useLanguage();
  const [currentMuscle, setCurrentMuscle] = useState(0);
  const [isRelaxing, setIsRelaxing] = useState(false);

  const muscleGroups = [
    { name: t('feet'), duration: 5 },
    { name: t('legs'), duration: 5 },
    { name: t('abdomen'), duration: 5 },
    { name: t('hands'), duration: 5 },
    { name: t('arms'), duration: 5 },
    { name: t('shoulders'), duration: 5 },
    { name: t('face'), duration: 5 },
  ];

  return (
    <div className="text-center">
      <div className="bg-purple-50 rounded-2xl p-6 mb-4">
        <h4 className="text-lg font-semibold text-purple-800 mb-2">
          {muscleGroups[currentMuscle]?.name}
        </h4>
        <p className="text-purple-600 text-sm">
          {isRelaxing ? t('relax') : t('tense')} - {muscleGroups[currentMuscle]?.duration}s
        </p>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mt-4">
        {muscleGroups.map((muscle, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
              index === currentMuscle
                ? 'bg-purple-500 text-white'
                : index < currentMuscle
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

function GroundingGuide() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { count: 5, sense: t('see'), icon: Eye },
    { count: 4, sense: t('touch'), icon: Hand },
    { count: 3, sense: t('hear'), icon: Volume2 },
    { count: 2, sense: t('smell'), icon: Stethoscope },
    { count: 1, sense: t('taste'), icon: Smile },
  ];

  return (
    <div className="text-center">
      <div className="grid grid-cols-5 gap-3 mb-6">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                index === currentStep ? 'bg-pink-500' : 'bg-pink-200'
              }`}>
                <IconComponent className={`w-6 h-6 ${
                  index === currentStep ? 'text-white' : 'text-pink-600'
                }`} />
              </div>
              <div className="text-lg font-bold text-pink-600">
                {step.count}
              </div>
              <div className="text-xs text-pink-500">
                {step.sense}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-muted-foreground">
        {t('grounding54321Instructions')}
      </p>
    </div>
  );
}
