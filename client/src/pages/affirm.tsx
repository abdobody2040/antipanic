import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Star, Shuffle, Play, Pause } from "lucide-react";

interface Affirmation {
  id: string;
  category: string;
  text: string;
  icon: string;
}

export default function Affirm() {
  const { t } = useLanguage();
  const [currentAffirmation, setCurrentAffirmation] = useState<Affirmation | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const affirmations: Affirmation[] = [
    // Self Love
    { 
      id: '1', 
      category: 'self-love', 
      text: t('language') === 'ar' ? 'أنا أستحق المحبة والاحترام كما أنا عليه تماماً' : 'I am worthy of love and respect exactly as I am', 
      icon: '💝' 
    },
    { 
      id: '2', 
      category: 'self-love', 
      text: t('language') === 'ar' ? 'أعامل نفسي بلطف ورحمة' : 'I treat myself with kindness and compassion', 
      icon: '🤗' 
    },
    { 
      id: '3', 
      category: 'self-love', 
      text: t('language') === 'ar' ? 'أحتضن تفرّدي وأحتفل بمن أنا' : 'I embrace my uniqueness and celebrate who I am', 
      icon: '✨' 
    },
    { 
      id: '13', 
      category: 'self-love', 
      text: t('language') === 'ar' ? 'أحب نفسي دون قيد أو شرط' : 'I love myself unconditionally', 
      icon: '💖' 
    },
    { 
      id: '14', 
      category: 'self-love', 
      text: t('language') === 'ar' ? 'أسامح نفسي وأتعلم من أخطائي' : 'I forgive myself and learn from my mistakes', 
      icon: '🌺' 
    },
    
    // Confidence  
    { 
      id: '4', 
      category: 'confidence', 
      text: t('language') === 'ar' ? 'أثق في قدراتي وحكمتي الداخلية' : 'I trust in my abilities and inner wisdom', 
      icon: '💪' 
    },
    { 
      id: '5', 
      category: 'confidence', 
      text: t('language') === 'ar' ? 'أواجه التحديات بشجاعة وعزيمة' : 'I face challenges with courage and determination', 
      icon: '🦁' 
    },
    { 
      id: '6', 
      category: 'confidence', 
      text: t('language') === 'ar' ? 'أؤمن بنفسي وبإمكاناتي' : 'I believe in myself and my potential', 
      icon: '🌟' 
    },
    { 
      id: '15', 
      category: 'confidence', 
      text: t('language') === 'ar' ? 'أستطيع تحقيق أي شيء أضع عقلي عليه' : 'I can achieve anything I set my mind to', 
      icon: '🎯' 
    },
    { 
      id: '16', 
      category: 'confidence', 
      text: t('language') === 'ar' ? 'صوتي مهم ورأيي له قيمة' : 'My voice matters and my opinions have value', 
      icon: '🗣️' 
    },
    
    // Resilience
    { 
      id: '7', 
      category: 'resilience', 
      text: t('language') === 'ar' ? 'أنا قوي ويمكنني التغلب على أي عقبة' : 'I am strong and can overcome any obstacle', 
      icon: '🏔️' 
    },
    { 
      id: '8', 
      category: 'resilience', 
      text: t('language') === 'ar' ? 'كل نكسة تجعلني أقوى وأكثر حكمة' : 'Every setback makes me stronger and wiser', 
      icon: '🌱' 
    },
    { 
      id: '9', 
      category: 'resilience', 
      text: t('language') === 'ar' ? 'أتكيف وأزدهر في مواجهة التغيير' : 'I adapt and thrive in the face of change', 
      icon: '🦋' 
    },
    { 
      id: '17', 
      category: 'resilience', 
      text: t('language') === 'ar' ? 'أختار الشجاعة على الراحة' : 'I choose courage over comfort', 
      icon: '🛡️' 
    },
    { 
      id: '18', 
      category: 'resilience', 
      text: t('language') === 'ar' ? 'أنا مرن مثل الخيزران، أنحني لكن لا أنكسر' : 'I am flexible like bamboo, I bend but do not break', 
      icon: '🎋' 
    },
    
    // Gratitude
    { 
      id: '10', 
      category: 'gratitude', 
      text: t('language') === 'ar' ? 'أنا ممتن لكل الجمال في حياتي' : 'I am grateful for all the beauty in my life', 
      icon: '🙏' 
    },
    { 
      id: '11', 
      category: 'gratitude', 
      text: t('language') === 'ar' ? 'أقدر اللحظات الصغيرة من الفرح كل يوم' : 'I appreciate the small moments of joy each day', 
      icon: '☀️' 
    },
    { 
      id: '12', 
      category: 'gratitude', 
      text: t('language') === 'ar' ? 'أنا ممتن لرحلتي ونموي' : 'I am thankful for my journey and growth', 
      icon: '🌈' 
    },
    { 
      id: '19', 
      category: 'gratitude', 
      text: t('language') === 'ar' ? 'الامتنان يملأ قلبي بالسلام' : 'Gratitude fills my heart with peace', 
      icon: '🕊️' 
    },
    { 
      id: '20', 
      category: 'gratitude', 
      text: t('language') === 'ar' ? 'أشكر نفسي على كل خطوة أتخذها للأمام' : 'I thank myself for every step I take forward', 
      icon: '👣' 
    },
    
    // Inner Peace
    { 
      id: '21', 
      category: 'peace', 
      text: t('language') === 'ar' ? 'أجد السلام في اللحظة الحاضرة' : 'I find peace in the present moment', 
      icon: '🧘‍♀️' 
    },
    { 
      id: '22', 
      category: 'peace', 
      text: t('language') === 'ar' ? 'أتنفس بعمق وأترك التوتر يذهب' : 'I breathe deeply and let tension go', 
      icon: '🌬️' 
    },
    { 
      id: '23', 
      category: 'peace', 
      text: t('language') === 'ar' ? 'الهدوء هو قوتي العظمى' : 'Calmness is my superpower', 
      icon: '🌊' 
    },
    
    // Growth
    { 
      id: '24', 
      category: 'growth', 
      text: t('language') === 'ar' ? 'أنا دائماً في حالة نمو وتطور' : 'I am constantly growing and evolving', 
      icon: '🌿' 
    },
    { 
      id: '25', 
      category: 'growth', 
      text: t('language') === 'ar' ? 'كل يوم أصبح نسخة أفضل من نفسي' : 'Every day I become a better version of myself', 
      icon: '⬆️' 
    },
    { 
      id: '26', 
      category: 'growth', 
      text: t('language') === 'ar' ? 'أحتضن التعلم والنمو من كل تجربة' : 'I embrace learning and growth from every experience', 
      icon: '📚' 
    }
  ];

  const categories = [
    { id: 'all', name: t('language') === 'ar' ? 'جميع الفئات' : 'All Categories', count: affirmations.length },
    { id: 'self-love', name: t('selfLove'), count: affirmations.filter(a => a.category === 'self-love').length },
    { id: 'confidence', name: t('confidence'), count: affirmations.filter(a => a.category === 'confidence').length },
    { id: 'resilience', name: t('resilience'), count: affirmations.filter(a => a.category === 'resilience').length },
    { id: 'gratitude', name: t('gratitude'), count: affirmations.filter(a => a.category === 'gratitude').length },
    { id: 'peace', name: t('language') === 'ar' ? 'السلام الداخلي' : 'Inner Peace', count: affirmations.filter(a => a.category === 'peace').length },
    { id: 'growth', name: t('language') === 'ar' ? 'النمو' : 'Growth', count: affirmations.filter(a => a.category === 'growth').length },
  ];

  useEffect(() => {
    if (affirmations.length > 0) {
      setCurrentAffirmation(affirmations[0]);
    }
  }, []);

  const getFilteredAffirmations = () => {
    return selectedCategory === 'all' 
      ? affirmations 
      : affirmations.filter(a => a.category === selectedCategory);
  };

  const getRandomAffirmation = () => {
    const filtered = getFilteredAffirmations();
    const randomIndex = Math.floor(Math.random() * filtered.length);
    setCurrentAffirmation(filtered[randomIndex]);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen fade-in" data-testid="page-affirm">
      {/* Header */}
      <header className="gradient-bg px-6 pt-12 pb-6">
        <Link href="/">
          <button className="mb-4 text-foreground" data-testid="button-back">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-2xl font-semibold text-foreground">
          {t('affirm')}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t('affirmSubtitle')}
        </p>
      </header>

      <main className="px-6 py-6">
        {/* Current Affirmation */}
        {currentAffirmation && (
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-3xl p-8 mb-6 text-center" data-testid="current-affirmation">
            <div className="text-4xl mb-4">{currentAffirmation.icon}</div>
            <p className="text-lg font-medium text-gray-800 leading-relaxed mb-6">
              "{currentAffirmation.text}"
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button
                onClick={togglePlayPause}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl"
                data-testid="button-play-pause"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </>
                )}
              </Button>
              
              <Button
                onClick={getRandomAffirmation}
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-2xl"
                data-testid="button-shuffle"
              >
                <Shuffle className="w-4 h-4 mr-2" />
                New Affirmation
              </Button>
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="mb-6" data-testid="affirmation-categories">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            {t('dailyAffirmations')}
          </h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-3 rounded-xl border-2 transition-all duration-200 text-left ${
                  selectedCategory === category.id
                    ? 'border-pink-300 bg-pink-50'
                    : 'border-border bg-card hover:bg-muted'
                }`}
                data-testid={`category-${category.id}`}
              >
                <div className={`font-medium ${
                  selectedCategory === category.id ? 'text-pink-700' : 'text-foreground'
                }`}>
                  {category.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {category.count} affirmations
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Affirmation List */}
        <div className="space-y-3" data-testid="affirmation-list">
          {getFilteredAffirmations().map((affirmation, index) => (
            <button
              key={affirmation.id}
              onClick={() => setCurrentAffirmation(affirmation)}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                currentAffirmation?.id === affirmation.id
                  ? 'border-pink-300 bg-pink-50'
                  : 'border-border bg-card hover:bg-muted'
              }`}
              data-testid={`affirmation-${affirmation.id}`}
            >
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="text-2xl">{affirmation.icon}</div>
                <div className="flex-1">
                  <p className={`font-medium ${
                    currentAffirmation?.id === affirmation.id ? 'text-pink-700' : 'text-foreground'
                  }`}>
                    {affirmation.text}
                  </p>
                </div>
                {currentAffirmation?.id === affirmation.id && (
                  <Star className="w-5 h-5 text-pink-500 fill-current" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Daily Practice */}
        <div className="mt-8 bg-card border border-border rounded-2xl p-6" data-testid="daily-practice">
          <div className="flex items-center mb-4">
            <Heart className="w-5 h-5 text-pink-500 mr-2" />
            <h3 className="text-lg font-semibold text-foreground">
              Daily Practice Tips
            </h3>
          </div>
          
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start space-x-2">
              <span className="text-pink-500 font-bold">•</span>
              <p>Read affirmations aloud with conviction and belief</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-pink-500 font-bold">•</span>
              <p>Practice for 5-10 minutes each morning</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-pink-500 font-bold">•</span>
              <p>Choose affirmations that resonate with your current needs</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-pink-500 font-bold">•</span>
              <p>Be patient - positive changes take time to manifest</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}