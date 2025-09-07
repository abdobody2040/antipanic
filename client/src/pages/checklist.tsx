import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Circle, Star, Trophy, Target } from "lucide-react";
import { LocalStorage } from "@/lib/storage";

interface ChecklistItem {
  id: string;
  name: string;
  completed: boolean;
  category: 'breathe' | 'journal' | 'visualize' | 'affirm' | 'sleep';
}

export default function Checklist() {
  const { t } = useLanguage();
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    loadDailyTasks();
  }, []);

  const loadDailyTasks = () => {
    const today = new Date().toDateString();
    const savedTasks = LocalStorage.get<{date: string, items: ChecklistItem[]}>('daily-checklist');
    
    if (savedTasks && savedTasks.date === today) {
      setItems(savedTasks.items);
      setCompletedCount(savedTasks.items.filter(item => item.completed).length);
    } else {
      // Create new daily tasks
      const newTasks: ChecklistItem[] = [
        { id: '1', name: t('journal'), completed: false, category: 'journal' },
        { id: '2', name: t('visualization'), completed: false, category: 'visualize' },
        { id: '3', name: t('breathe'), completed: false, category: 'breathe' },
        { id: '4', name: t('affirm'), completed: false, category: 'affirm' },
        { id: '5', name: t('sleep'), completed: false, category: 'sleep' },
      ];
      setItems(newTasks);
      setCompletedCount(0);
      LocalStorage.set('daily-checklist', { date: today, items: newTasks });
    }
  };

  const toggleItem = (id: string) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    
    const newCompletedCount = updatedItems.filter(item => item.completed).length;
    setItems(updatedItems);
    setCompletedCount(newCompletedCount);
    
    const today = new Date().toDateString();
    LocalStorage.set('daily-checklist', { date: today, items: updatedItems });
  };

  const getProgressPercentage = () => {
    return Math.round((completedCount / items.length) * 100);
  };

  const getItemIcon = (category: string) => {
    switch (category) {
      case 'breathe': return '🫁';
      case 'journal': return '📝';
      case 'visualize': return '🧘';
      case 'affirm': return '💪';
      case 'sleep': return '😴';
      default: return '✨';
    }
  };

  return (
    <div className="min-h-screen fade-in" data-testid="page-checklist">
      {/* Header */}
      <header className="gradient-bg px-6 pt-12 pb-6">
        <Link href="/">
          <button className="mb-4 text-foreground" data-testid="button-back">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-2xl font-semibold text-foreground">
          {t('dailySelfCare')}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t('checklistSubtitle')}
        </p>
      </header>

      <main className="px-6 py-6">
        {/* Progress Section */}
        {completedCount === items.length && items.length > 0 && (
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6 text-center" data-testid="mission-complete">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              {t('dailyMissionComplete')}
            </h2>
            <div className="flex justify-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-6" data-testid="progress-indicator">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t('todaysProgress')}
            </h3>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-calm-blue" />
              <span className="text-calm-blue font-semibold">
                {completedCount}/{items.length}
              </span>
            </div>
          </div>
          
          <div className="w-full bg-muted rounded-full h-3 mb-2">
            <div 
              className="bg-calm-blue h-3 rounded-full transition-all duration-500"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            {getProgressPercentage()}% {t('completed')}
          </p>
        </div>

        {/* Daily Goals */}
        <div className="space-y-4" data-testid="daily-goals">
          <h3 className="text-lg font-semibold text-foreground flex items-center">
            <CheckCircle className="w-5 h-5 text-calm-blue mr-2" />
            {t('dailyGoals')}
          </h3>

          {items.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                item.completed
                  ? 'bg-green-50 border-green-200'
                  : 'bg-card border-border hover:bg-muted'
              }`}
              onClick={() => toggleItem(item.id)}
              data-testid={`checklist-item-${item.id}`}
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="text-2xl">
                  {getItemIcon(item.category)}
                </div>
                <div>
                  <h4 className={`font-medium ${
                    item.completed ? 'text-green-800 line-through' : 'text-foreground'
                  }`}>
                    {item.name}
                  </h4>
                  <div className="flex items-center mt-1">
                    <div className={`w-full bg-muted rounded-full h-2 w-16 ${
                      item.completed ? 'bg-green-200' : ''
                    }`}>
                      <div className={`h-2 rounded-full transition-all duration-300 ${
                        item.completed ? 'bg-green-500 w-full' : 'bg-calm-blue w-0'
                      }`}></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">
                      {item.completed ? '1/1' : '0/1'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {item.completed && (
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                )}
                {item.completed ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <Circle className="w-6 h-6 text-muted-foreground" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <Link href="/exercises">
            <Button className="w-full bg-calm-blue hover:bg-blue-300 text-primary-foreground" data-testid="button-start-exercises">
              {t('startTodaysExercises')}
            </Button>
          </Link>
          <Link href="/journal">
            <Button variant="outline" className="w-full" data-testid="button-add-journal">
              {t('addJournalEntry')}
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}