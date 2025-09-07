import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Heart, AlertTriangle, Leaf, BookOpen, Settings, Target, BarChart3, Brain, Star, Moon, Wind } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen fade-in" data-testid="page-home">
      {/* Header */}
      <header className="gradient-bg px-6 pt-12 pb-8 text-center">
        <div className="mb-4">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🫧</span>
          </div>
          <h1 className="text-2xl font-semibold text-foreground">
            {t('appTitle')}
          </h1>
          <p className="text-muted-foreground mt-2">
            Journey With Your Blue Friend
          </p>
        </div>
      </header>

      {/* Main Navigation - Circular Layout */}
      <main className="px-6 py-6">
        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex space-x-3 mb-4">
            <Link href="/checklist" className="flex-1">
              <button className="w-full bg-green-100 border border-green-200 rounded-2xl p-4 text-left hover:bg-green-200 transition-colors" data-testid="button-checklist">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-800">{t('checklist')}</h3>
                    <p className="text-xs text-green-600">Track daily goals</p>
                  </div>
                </div>
              </button>
            </Link>
            <Link href="/mood-tracker" className="flex-1">
              <button className="w-full bg-blue-100 border border-blue-200 rounded-2xl p-4 text-left hover:bg-blue-200 transition-colors" data-testid="button-mood-tracker">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-blue-800">{t('moodTracker')}</h3>
                    <p className="text-xs text-blue-600">How do you feel?</p>
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Circular Navigation Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8" data-testid="main-navigation">
          {/* Learn */}
          <Link href="/learn">
            <button className="calm-card w-full text-center p-6 aspect-square" data-testid="button-learn">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t('learn')}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Understanding anxiety
                  </p>
                </div>
              </div>
            </button>
          </Link>

          {/* Breathe */}
          <Link href="/exercises">
            <button className="calm-card w-full text-center p-6 aspect-square" data-testid="button-breathe">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                  <Wind className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t('exercises')}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t('language') === 'ar' ? 'تمارين التنفس والاسترخاء' : 'Breathing exercises'}
                  </p>
                </div>
              </div>
            </button>
          </Link>

          {/* Affirm */}
          <Link href="/affirm">
            <button className="calm-card w-full text-center p-6 aspect-square" data-testid="button-affirm">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t('affirm')}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Positive affirmations
                  </p>
                </div>
              </div>
            </button>
          </Link>

          {/* Journal */}
          <Link href="/journal">
            <button className="calm-card w-full text-center p-6 aspect-square" data-testid="button-journal">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t('journal')}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Track your journey
                  </p>
                </div>
              </div>
            </button>
          </Link>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Sleep */}
          <Link href="/sleep">
            <button className="calm-card w-full text-center p-4" data-testid="button-sleep">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center">
                  <Moon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {t('sleep')}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Sleep better
                  </p>
                </div>
              </div>
            </button>
          </Link>

          {/* Settings */}
          <Link href="/settings">
            <button className="calm-card w-full text-center p-4" data-testid="button-settings">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Settings className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {t('settings')}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Preferences
                  </p>
                </div>
              </div>
            </button>
          </Link>
        </div>

        {/* Emergency SOS - Always accessible */}
        <Link href="/sos">
          <button className="w-full bg-red-50 border-2 border-red-200 hover:bg-red-100 rounded-2xl p-6 text-center transition-colors" data-testid="button-sos">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700">
                  {t('emergencySOS')}
                </h3>
                <p className="text-red-600 text-sm">
                  {t('immediateHelp')}
                </p>
              </div>
            </div>
          </button>
        </Link>

        {/* Daily Encouragement */}
        <div className="mt-8 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-2xl p-6 text-center" data-testid="daily-encouragement">
          <div className="text-3xl mb-3">🫧</div>
          <h3 className="text-lg font-semibold text-teal-800 mb-2">
            You're doing great!
          </h3>
          <p className="text-teal-600 text-sm">
            Remember to be kind to yourself today. Every small step counts.
          </p>
        </div>
      </main>
    </div>
  );
}
