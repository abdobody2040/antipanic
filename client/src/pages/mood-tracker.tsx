import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Calendar, BarChart3 } from "lucide-react";
import { LocalStorage } from "@/lib/storage";

interface MoodEntry {
  id: string;
  emotion: string;
  timestamp: number;
  date: string;
}

interface EmotionOption {
  id: string;
  label: string;
  emoji: string;
  color: string;
}

export default function MoodTracker() {
  const { t } = useLanguage();
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [recentEntries, setRecentEntries] = useState<MoodEntry[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emotions: EmotionOption[] = [
    { id: 'sad', label: t('sad'), emoji: '😢', color: 'bg-blue-100' },
    { id: 'determined', label: t('determined'), emoji: '😤', color: 'bg-orange-100' },
    { id: 'angry', label: t('angry'), emoji: '😠', color: 'bg-red-100' },
    { id: 'relaxed', label: t('relaxed'), emoji: '😌', color: 'bg-green-100' },
    { id: 'worried', label: t('worried'), emoji: '😰', color: 'bg-yellow-100' },
    { id: 'frightened', label: t('frightened'), emoji: '😨', color: 'bg-purple-100' },
    { id: 'unmotivated', label: t('unmotivated'), emoji: '😑', color: 'bg-gray-100' },
    { id: 'hungry', label: t('hungry'), emoji: '😋', color: 'bg-orange-100' },
    { id: 'strong', label: t('strong'), emoji: '💪', color: 'bg-green-100' },
    { id: 'indifferent', label: t('indifferent'), emoji: '😐', color: 'bg-gray-100' },
    { id: 'sleepy', label: t('sleepy'), emoji: '😴', color: 'bg-blue-100' },
    { id: 'calm', label: t('calm'), emoji: '😊', color: 'bg-calm-blue' },
    { id: 'crying', label: t('crying'), emoji: '😭', color: 'bg-blue-100' },
    { id: 'depressed', label: t('depressed'), emoji: '😞', color: 'bg-purple-100' },
    { id: 'dizzy', label: t('dizzy'), emoji: '😵', color: 'bg-yellow-100' }
  ];

  useEffect(() => {
    loadRecentEntries();
  }, []);

  const loadRecentEntries = () => {
    const entries = LocalStorage.get<MoodEntry[]>('mood-entries') || [];
    setRecentEntries(entries.slice(0, 10)); // Show last 10 entries
  };

  const saveMoodEntry = () => {
    if (!selectedEmotion) return;

    const newEntry: MoodEntry = {
      id: crypto.randomUUID(),
      emotion: selectedEmotion,
      timestamp: Date.now(),
      date: new Date().toLocaleDateString(),
    };

    const existingEntries = LocalStorage.get<MoodEntry[]>('mood-entries') || [];
    const updatedEntries = [newEntry, ...existingEntries];
    LocalStorage.set('mood-entries', updatedEntries);
    
    setRecentEntries(updatedEntries.slice(0, 10));
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedEmotion(null);
    }, 2000);
  };

  const getEmotionByKey = (key: string) => {
    return emotions.find(emotion => emotion.id === key);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 fade-in" data-testid="mood-saved">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">
            {getEmotionByKey(selectedEmotion!)?.emoji}
          </div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            {t('moodRecorded')}
          </h2>
          <p className="text-green-600">
            {t('thankYouSharing')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen fade-in" data-testid="page-mood-tracker">
      {/* Header */}
      <header className="gradient-bg px-6 pt-12 pb-6">
        <Link href="/">
          <button className="mb-4 text-foreground" data-testid="button-back">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-2xl font-semibold text-foreground">
          {t('trackProgress')}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t('moodTrackerSubtitle')}
        </p>
      </header>

      <main className="px-6 py-6">
        {/* Mood Selection */}
        <div className="mb-8" data-testid="mood-selection">
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
            {t('howAreYouFeeling')}
          </h2>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            {emotions.map((emotion) => (
              <button
                key={emotion.id}
                onClick={() => setSelectedEmotion(emotion.id)}
                className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                  selectedEmotion === emotion.id
                    ? 'border-calm-blue bg-calm-blue shadow-lg transform scale-105'
                    : 'border-border bg-card hover:bg-muted'
                }`}
                data-testid={`emotion-${emotion.id}`}
              >
                <div className="text-3xl mb-2">{emotion.emoji}</div>
                <div className={`text-xs font-medium ${
                  selectedEmotion === emotion.id ? 'text-primary-foreground' : 'text-foreground'
                }`}>
                  {emotion.label}
                </div>
              </button>
            ))}
          </div>

          {selectedEmotion && (
            <div className="text-center">
              <Button
                onClick={saveMoodEntry}
                className="bg-calm-blue hover:bg-blue-300 text-primary-foreground px-8 py-3"
                data-testid="button-save-mood"
              >
                {t('recordMood')}
              </Button>
            </div>
          )}
        </div>

        {/* Recent Entries */}
        {recentEntries.length > 0 && (
          <div className="bg-card border border-border rounded-2xl p-6" data-testid="recent-entries">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <TrendingUp className="w-5 h-5 text-calm-blue mr-2" />
                {t('recentMoodEntries')}
              </h3>
              <BarChart3 className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="space-y-3">
              {recentEntries.slice(0, 5).map((entry) => {
                const emotion = getEmotionByKey(entry.emotion);
                return (
                  <div
                    key={entry.id}
                    className="flex items-center justify-between p-3 bg-muted rounded-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{emotion?.emoji}</div>
                      <div>
                        <div className="font-medium text-foreground">
                          {emotion?.label}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {entry.date}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {recentEntries.length > 5 && (
              <div className="text-center mt-4">
                <Button variant="outline" size="sm">
                  {t('viewAllEntries')} ({recentEntries.length})
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Mood Insights */}
        <div className="mt-6 bg-card border border-border rounded-2xl p-6" data-testid="mood-insights">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            {t('moodInsights')}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-calm-blue">
                {recentEntries.length}
              </div>
              <div className="text-sm text-muted-foreground">
                {t('totalEntries')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-calm-green">
                7
              </div>
              <div className="text-sm text-muted-foreground">
                {t('dayStreak')}
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-700">
              💡 <strong>{t('tip')}:</strong> {t('moodTrackingHelps')}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}