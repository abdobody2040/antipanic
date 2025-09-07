import { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Moon, Play, Pause, RotateCcw, Volume2 } from "lucide-react";

interface SleepExercise {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  icon: string;
  color: string;
}

export default function Sleep() {
  const { t } = useLanguage();
  const [selectedExercise, setSelectedExercise] = useState<SleepExercise | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const sleepExercises: SleepExercise[] = [
    {
      id: 'bedtime-routine',
      title: t('bedtimeRoutine'),
      description: 'Calming routine to prepare for sleep',
      duration: '10 mins',
      category: 'routine',
      icon: '🛏️',
      color: 'bg-indigo-500'
    },
    {
      id: 'sleep-story-forest',
      title: 'Forest Dreams',
      description: 'A peaceful journey through moonlit woods',
      duration: '20 mins',
      category: 'story',
      icon: '🌲',
      color: 'bg-green-500'
    },
    {
      id: 'sleep-story-ocean',
      title: 'Ocean Waves',
      description: 'Drift away with gentle ocean sounds',
      duration: '15 mins',
      category: 'story',
      icon: '🌊',
      color: 'bg-blue-500'
    },
    {
      id: 'progressive-relaxation',
      title: 'Body Scan for Sleep',
      description: 'Release tension from head to toe',
      duration: '12 mins',
      category: 'relaxation',
      icon: '😴',
      color: 'bg-purple-500'
    },
    {
      id: 'breathing-sleep',
      title: '4-7-8 Sleep Breathing',
      description: 'Breathing technique for faster sleep onset',
      duration: '8 mins',
      category: 'breathing',
      icon: '💨',
      color: 'bg-teal-500'
    },
    {
      id: 'gratitude-meditation',
      title: 'Gratitude Before Sleep',
      description: 'End your day with thankfulness',
      duration: '6 mins',
      category: 'meditation',
      icon: '🙏',
      color: 'bg-pink-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🌙' },
    { id: 'story', name: t('sleepStories'), icon: '📖' },
    { id: 'routine', name: t('bedtimeRoutine'), icon: '🛏️' },
    { id: 'relaxation', name: 'Relaxation', icon: '😌' },
    { id: 'breathing', name: 'Breathing', icon: '💨' },
    { id: 'meditation', name: 'Meditation', icon: '🧘' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

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
            <div className="text-3xl font-mono text-indigo-200">
              {formatTime(currentTime)}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                <Moon className="w-16 h-16 text-white/80" />
              </div>
              
              <p className="text-white/90 leading-relaxed">
                {selectedExercise.category === 'story' && "Close your eyes and let your imagination carry you to a peaceful place..."}
                {selectedExercise.category === 'breathing' && "Focus on your breath. Inhale for 4, hold for 7, exhale for 8..."}
                {selectedExercise.category === 'relaxation' && "Starting from the top of your head, notice any tension and let it melt away..."}
                {selectedExercise.category === 'routine' && "Let's prepare your mind and body for restful sleep..."}
                {selectedExercise.category === 'meditation' && "Bring to mind three things you're grateful for today..."}
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-8 py-4 rounded-2xl backdrop-blur-sm"
              data-testid="button-play-pause-sleep"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5 mr-2" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Play
                </>
              )}
            </Button>
            
            <Button
              onClick={() => setCurrentTime(0)}
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
              💡 Find a comfortable position and let yourself relax completely
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
              onClick={() => setSelectedExercise(exercise)}
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
            Better Sleep Tips
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-indigo-500">🛏️</span>
                <span className="text-indigo-700">Keep a consistent sleep schedule</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-indigo-500">📱</span>
                <span className="text-indigo-700">Avoid screens 1 hour before bed</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-indigo-500">🌡️</span>
                <span className="text-indigo-700">Keep your room cool and dark</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-indigo-500">☕</span>
                <span className="text-indigo-700">Limit caffeine after 2 PM</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}