import { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { ArrowLeft, BookOpen, CheckCircle, Brain, Heart, Lightbulb, Shield, ArrowRight } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  completed: boolean;
  content: string;
}

export default function Learn() {
  const { t } = useLanguage();
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  const lessons: Lesson[] = [
    {
      id: 'what-is-anxiety',
      title: t('whatIsAnxiety'),
      description: t('language') === 'ar' ? 'فهم أساسيات اضطرابات القلق' : 'Understanding the basics of anxiety disorders',
      icon: Brain,
      color: 'bg-blue-500',
      completed: completedLessons.has('what-is-anxiety'),
      content: t('language') === 'ar' ? 
        'القلق هو استجابة طبيعية للضغط والتهديدات المحتملة. يصبح اضطراباً عندما يتداخل مع الحياة اليومية. القلق الطبيعي يساعدنا على الاستعداد للمخاطر، لكن القلق المرضي يستمر حتى عندما لا يكون هناك خطر حقيقي. يؤثر القلق على الجسم والعقل بطرق مختلفة، ويمكن أن يظهر في شكل أعراض جسدية ونفسية متنوعة. الخبر الجيد أن القلق قابل للعلاج بطرق عديدة فعالة.' :
        'Anxiety is a natural response to stress and potential threats. It becomes a disorder when it interferes with daily life. Normal anxiety helps us prepare for dangers, but pathological anxiety persists even when there is no real threat. Anxiety affects the body and mind in different ways, and can manifest as various physical and psychological symptoms. The good news is that anxiety is treatable through many effective methods.'
    },
    {
      id: 'physical-mental-effects',
      title: t('physicalMentalEffects'),
      description: t('language') === 'ar' ? 'كيف يؤثر القلق على جسمك وعقلك' : 'How anxiety affects your body and mind',
      icon: Heart,
      color: 'bg-red-500',
      completed: completedLessons.has('physical-mental-effects'),
      content: t('language') === 'ar' ? 
        'يسبب القلق أعراضاً جسدية مثل تسارع ضربات القلب، التعرق، والارتجاف. كما يسبب أعراضاً نفسية مثل الأفكار المتسارعة، صعوبة التركيز، والخوف الشديد. قد تشعر بضيق في الصدر، دوخة، أو مشاكل في الجهاز الهضمي. هذه الأعراض طبيعية وتحدث لأن جسمك يستعد للخطر حتى لو لم يكن هناك خطر حقيقي.' :
        'Anxiety causes physical symptoms like rapid heartbeat, sweating, and trembling. It also causes psychological symptoms like racing thoughts, difficulty concentrating, and intense fear. You may feel chest tightness, dizziness, or digestive issues. These symptoms are normal and occur because your body is preparing for danger even when there is no real threat.'
    },
    {
      id: 'causes-theories',
      title: t('causesAndTheories'),
      description: t('language') === 'ar' ? 'ما الذي يسبب القلق والنظريات الحالية' : 'What causes anxiety and current theories',
      icon: Lightbulb,
      color: 'bg-yellow-500',
      completed: completedLessons.has('causes-theories'),
      content: t('language') === 'ar' ? 
        'يمكن أن ينتج القلق عن الوراثة، كيمياء الدماغ، تجارب الحياة، والعوامل البيئية. قد يكون لديك استعداد وراثي للقلق، أو قد تطور القلق بعد تجربة صادمة. الضغوط اليومية مثل العمل والعلاقات يمكن أن تؤدي للقلق أيضاً. فهم أسباب قلقك يساعدك في إيجاد العلاج المناسب.' :
        'Anxiety can be caused by genetics, brain chemistry, life experiences, and environmental factors. You may have a genetic predisposition to anxiety, or you may develop anxiety after a traumatic experience. Daily stresses like work and relationships can also lead to anxiety. Understanding the causes of your anxiety helps you find appropriate treatment.'
    },
    {
      id: 'general-anxiety',
      title: t('generalAnxiety'),
      description: t('language') === 'ar' ? 'فهم اضطراب القلق العام' : 'Understanding Generalized Anxiety Disorder',
      icon: Shield,
      color: 'bg-green-500',
      completed: completedLessons.has('general-anxiety'),
      content: t('language') === 'ar' ? 
        'اضطراب القلق العام (GAD) يشمل القلق المستمر والمفرط حول جوانب مختلفة من الحياة. الأشخاص المصابون بـ GAD يقلقون حول الصحة، المال، العمل، والعائلة حتى عندما تكون الأمور على ما يرام. هذا القلق صعب السيطرة عليه ويستمر لمدة ستة أشهر أو أكثر. العلاج متاح ويشمل العلاج النفسي والأدوية إذا لزم الأمر.' :
        'Generalized Anxiety Disorder (GAD) involves persistent, excessive worry about various aspects of life. People with GAD worry about health, money, work, and family even when things are going well. This worry is difficult to control and lasts for six months or more. Treatment is available and includes therapy and medication when necessary.'
    },
    {
      id: 'first-steps',
      title: t('firstSteps'),
      description: t('language') === 'ar' ? 'اتخاذ خطواتك الأولى نحو التعافي' : 'Taking your first steps toward recovery',
      icon: ArrowRight,
      color: 'bg-purple-500',
      completed: completedLessons.has('first-steps'),
      content: t('language') === 'ar' ? 
        'التعافي يبدأ بالاعتراف بالمشكلة والبحث عن المساعدة والدعم المناسبين. الخطوة الأولى هي فهم أن القلق حالة قابلة للعلاج وأنك لست وحدك في هذه الرحلة. تحدث مع أصدقائك وعائلتك، واطلب المساعدة المهنية إذا احتجت لذلك. ابدأ بتمارين بسيطة مثل التنفس العميق والتأمل.' :
        'Recovery begins with acknowledging the problem and seeking appropriate help and support. The first step is understanding that anxiety is a treatable condition and that you are not alone in this journey. Talk to your friends and family, and seek professional help if you need it. Start with simple exercises like deep breathing and meditation.'
    },
    {
      id: 'coping-strategies',
      title: t('copingStrategies'),
      description: t('language') === 'ar' ? 'استراتيجيات فعالة لإدارة القلق' : 'Effective strategies for managing anxiety',
      icon: BookOpen,
      color: 'bg-indigo-500',
      completed: completedLessons.has('coping-strategies'),
      content: t('language') === 'ar' ? 
        'تشمل استراتيجيات التأقلم الفعالة تقنيات التنفس، اليقظة، الرياضة، والعلاج المهني عند الضرورة. التمرين المنتظم يقلل من هرمونات التوتر ويحسن المزاج. النوم الجيد والتغذية الصحية مهمان أيضاً. تعلم كيفية تحدي الأفكار السلبية واستبدالها بأفكار أكثر واقعية وإيجابية.' :
        'Effective coping strategies include breathing techniques, mindfulness, exercise, and professional therapy when necessary. Regular exercise reduces stress hormones and improves mood. Good sleep and healthy nutrition are also important. Learn how to challenge negative thoughts and replace them with more realistic and positive ones.'
    },
    {
      id: 'panic-attacks',
      title: t('language') === 'ar' ? 'نوبات الهلع' : 'Panic Attacks',
      description: t('language') === 'ar' ? 'فهم وإدارة نوبات الهلع المفاجئة' : 'Understanding and managing sudden panic attacks',
      icon: Heart,
      color: 'bg-red-600',
      completed: completedLessons.has('panic-attacks'),
      content: t('language') === 'ar' ? 
        'نوبة الهلع هي نوبة مفاجئة من الخوف الشديد تصل لذروتها خلال دقائق. تشمل الأعراض خفقان القلب، التعرق، الارتجاف، وضيق النفس. قد تشعر وكأنك تموت أو تفقد السيطرة. نوبات الهلع مخيفة لكنها غير ضارة جسدياً. يمكن إدارتها بتقنيات التنفس والتأريض والعلاج المعرفي السلوكي.' :
        'A panic attack is a sudden episode of intense fear that peaks within minutes. Symptoms include heart palpitations, sweating, trembling, and shortness of breath. You may feel like you are dying or losing control. Panic attacks are frightening but physically harmless. They can be managed with breathing techniques, grounding, and cognitive behavioral therapy.'
    },
    {
      id: 'social-anxiety',
      title: t('language') === 'ar' ? 'القلق الاجتماعي' : 'Social Anxiety',
      description: t('language') === 'ar' ? 'التغلب على الخوف من المواقف الاجتماعية' : 'Overcoming fear of social situations',
      icon: Shield,
      color: 'bg-teal-500',
      completed: completedLessons.has('social-anxiety'),
      content: t('language') === 'ar' ? 
        'القلق الاجتماعي هو خوف شديد من الحكم عليك في المواقف الاجتماعية. قد تخاف من التحدث أمام الآخرين، مقابلة أشخاص جدد، أو أن تبدو محرجاً. هذا يمكن أن يحد من أنشطتك وعلاقاتك. العلاج التدريجي للتعرض والعلاج المعرفي السلوكي فعالان في علاج القلق الاجتماعي.' :
        'Social anxiety is an intense fear of being judged in social situations. You may fear speaking in front of others, meeting new people, or appearing embarrassed. This can limit your activities and relationships. Gradual exposure therapy and cognitive behavioral therapy are effective in treating social anxiety.'
    },
    {
      id: 'mindfulness-anxiety',
      title: t('language') === 'ar' ? 'اليقظة الذهنية والقلق' : 'Mindfulness and Anxiety',
      description: t('language') === 'ar' ? 'استخدام اليقظة لتهدئة العقل القلق' : 'Using mindfulness to calm an anxious mind',
      icon: Brain,
      color: 'bg-emerald-500',
      completed: completedLessons.has('mindfulness-anxiety'),
      content: t('language') === 'ar' ? 
        'اليقظة الذهنية تساعدك على البقاء في اللحظة الحاضرة بدلاً من القلق حول المستقبل أو الندم على الماضي. تشمل تقنيات اليقظة التنفس الواعي، تأمل مسح الجسم، والمشي الواعي. الممارسة المنتظمة تقلل من القلق وتحسن التركيز والمزاج. ابدأ بـ 5 دقائق يومياً وزد تدريجياً.' :
        'Mindfulness helps you stay in the present moment instead of worrying about the future or regretting the past. Mindfulness techniques include conscious breathing, body scan meditation, and mindful walking. Regular practice reduces anxiety and improves focus and mood. Start with 5 minutes daily and gradually increase.'
    },
    {
      id: 'lifestyle-changes',
      title: t('language') === 'ar' ? 'تغييرات نمط الحياة' : 'Lifestyle Changes',
      description: t('language') === 'ar' ? 'إجراء تغييرات صحية لتقليل القلق' : 'Making healthy changes to reduce anxiety',
      icon: Heart,
      color: 'bg-rose-500',
      completed: completedLessons.has('lifestyle-changes'),
      content: t('language') === 'ar' ? 
        'تغييرات نمط الحياة يمكن أن تقلل بشكل كبير من القلق. تشمل: ممارسة الرياضة بانتظام، النوم 7-9 ساعات ليلاً، تناول طعام صحي، تجنب الكافيين المفرط والكحول، قضاء وقت في الطبيعة، والحفاظ على علاقات اجتماعية صحية. هذه التغييرات البسيطة تحسن المزاج وتقلل التوتر بشكل طبيعي.' :
        'Lifestyle changes can significantly reduce anxiety. These include: exercising regularly, sleeping 7-9 hours nightly, eating healthy foods, avoiding excessive caffeine and alcohol, spending time in nature, and maintaining healthy social relationships. These simple changes naturally improve mood and reduce stress.'
    }
  ];

  const markAsCompleted = (lessonId: string) => {
    const newCompleted = new Set(completedLessons);
    newCompleted.add(lessonId);
    setCompletedLessons(newCompleted);
  };

  const getCompletionPercentage = () => {
    return Math.round((completedLessons.size / lessons.length) * 100);
  };

  if (selectedLesson) {
    const lesson = lessons.find(l => l.id === selectedLesson);
    if (!lesson) return null;

    const IconComponent = lesson.icon;

    return (
      <div className="min-h-screen fade-in" data-testid="lesson-content">
        <header className="gradient-bg px-6 pt-12 pb-6">
          <button 
            onClick={() => setSelectedLesson(null)}
            className="mb-4 text-foreground" 
            data-testid="button-back-to-lessons"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3 mb-2">
            <div className={`w-8 h-8 ${lesson.color} rounded-full flex items-center justify-center`}>
              <IconComponent className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-foreground">
              {lesson.title}
            </h1>
          </div>
        </header>

        <main className="px-6 py-6">
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <div className="prose prose-sm max-w-none">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                {lesson.title}
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p className="leading-relaxed">{lesson.content}</p>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-5 rounded-2xl border border-blue-200 dark:border-blue-700/50">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    {t('keyPoints')}:
                  </h3>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('understandingFirst')}
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('everyoneExperiences')}
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('professionalHelp')}
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('recoveryPossible')}
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 p-5 rounded-2xl border border-green-200 dark:border-green-700/50">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">💚</span>
                    </span>
                    {t('remember')}:
                  </h3>
                  <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                    {t('youreNotAlone')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            {!lesson.completed && (
              <button
                onClick={() => markAsCompleted(lesson.id)}
                className="bg-gradient-to-r from-calm-blue to-blue-400 hover:from-blue-300 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                data-testid="button-mark-complete"
              >
                <CheckCircle className="w-5 h-5 mr-2 inline" />
                {t('markAsComplete')}
              </button>
            )}
            
            {lesson.completed && (
              <div className="flex items-center justify-center text-green-600 bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-2xl border border-green-200 dark:border-green-700">
                <CheckCircle className="w-6 h-6 mr-3 animate-pulse" />
                <span className="font-semibold text-lg">{t('lessonComplete')}</span>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen fade-in" data-testid="page-learn">
      {/* Header */}
      <header className="gradient-bg px-6 pt-12 pb-6">
        <Link href="/">
          <button className="mb-4 text-foreground" data-testid="button-back">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-2xl font-semibold text-foreground">
          {t('learn')}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t('learnSubtitle')}
        </p>
      </header>

      <main className="px-6 py-6">
        {/* Progress Overview */}
        <div className="bg-gradient-to-br from-card to-card/80 border border-border rounded-3xl p-6 mb-6 shadow-lg" data-testid="learning-progress">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-foreground flex items-center">
              <span className="w-8 h-8 bg-gradient-to-br from-calm-blue to-blue-600 rounded-full flex items-center justify-center mr-3">
                <BookOpen className="w-4 h-4 text-white" />
              </span>
              {t('learningProgress')}
            </h3>
            <div className="bg-calm-blue/10 px-4 py-2 rounded-full">
              <span className="text-calm-blue font-bold text-lg">
                {completedLessons.size}/{lessons.length}
              </span>
            </div>
          </div>
          
          <div className="w-full bg-muted rounded-full h-4 mb-3 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-calm-blue to-blue-400 h-4 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
              style={{ width: `${getCompletionPercentage()}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center font-medium">
            {getCompletionPercentage()}% {t('complete')}
          </p>
        </div>

        {/* Understanding Lessons */}
        <div className="space-y-4" data-testid="lesson-list">
          <h3 className="text-lg font-semibold text-foreground flex items-center">
            <BookOpen className="w-5 h-5 text-calm-blue mr-2" />
            {t('understandingLessons')}
          </h3>

          {lessons.map((lesson) => {
            const IconComponent = lesson.icon;
            return (
              <button
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson.id)}
                className="w-full text-left bg-card border border-border rounded-2xl p-5 hover:bg-muted hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                data-testid={`lesson-${lesson.id}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className={`w-14 h-14 ${lesson.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg group-hover:text-calm-blue transition-colors duration-200">
                        {lesson.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        {lesson.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {lesson.completed && (
                      <div className="bg-green-100 dark:bg-green-900/20 rounded-full p-1">
                        <CheckCircle className="w-6 h-6 text-green-500 animate-pulse" />
                      </div>
                    )}
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-calm-blue group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Learning Tips */}
        <div className="mt-8 bg-gradient-to-br from-calm-blue via-blue-500 to-indigo-600 rounded-3xl p-6 text-white shadow-2xl" data-testid="learning-tips">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="text-2xl mr-3 animate-bounce">💡</span>
            {t('learningTips')}
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start transform hover:translate-x-1 transition-transform duration-200">
              <span className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></span>
              {t('takeyourTime')}
            </li>
            <li className="flex items-start transform hover:translate-x-1 transition-transform duration-200">
              <span className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></span>
              {t('practiceDaily')}
            </li>
            <li className="flex items-start transform hover:translate-x-1 transition-transform duration-200">
              <span className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></span>
              {t('revisitLessons')}
            </li>
            <li className="flex items-start transform hover:translate-x-1 transition-transform duration-200">
              <span className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></span>
              {t('applyTechniques')}
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}