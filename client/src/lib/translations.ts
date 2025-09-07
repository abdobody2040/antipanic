export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // App
    appTitle: 'Calm Mind',
    appSubtitle: 'Your pocket companion for peace',
    
    // Navigation
    emergencySOS: 'Emergency SOS',
    exercises: 'Exercises',
    journal: 'Journal',
    settings: 'Settings',
    learn: 'Learn',
    affirm: 'Affirm',
    sleep: 'Sleep',
    checklist: 'Checklist',
    moodTracker: 'Mood Tracker',
    
    // Home Screen
    immediateHelp: 'Immediate help for panic attacks',
    breathingRelaxation: 'Breathing, relaxation & mindfulness',
    trackEpisodes: 'Track episodes & triggers',
    languagePreferences: 'Language & preferences',
    
    // SOS Screen
    emergencySupport: 'Emergency Support',
    youAreSafe: 'You are safe',
    safetyMessage: 'You are safe. We will calm down step by step.',
    breathingExercise: 'Breathing Exercise',
    followCircle: 'Follow the circle rhythm:',
    breathingPattern: 'Inhale 1..2..3..4 — Hold 1..2..3..4 — Exhale 1..2..3..4..5..6',
    grounding: '5-4-3-2-1 Grounding',
    groundingText: 'Name 5 things you see, 4 things you can touch, 3 things you hear, 2 things you smell, 1 thing you taste.',
    imOkayNow: "I'm okay now",
    wellDone: 'Well done! You are calming down.',
    
    // Exercises Screen
    exercisesSubtitle: 'Techniques to help you relax and center yourself',
    boxBreathing: 'Box Breathing',
    boxBreathingDesc: '4-4-4-4 breathing pattern',
    progressiveMuscle: 'Progressive Muscle Relaxation',
    progressiveMuscleDesc: 'Tension and release exercise',
    mindfulness: 'Mindfulness Meditation',
    mindfulnessDesc: 'Present moment awareness',
    deepBreathing: 'Deep Breathing',
    deepBreathingDesc: 'Slow diaphragmatic breathing',
    bodyScanning: 'Body Scan',
    bodyScanningDesc: 'Full body awareness technique',
    visualization: 'Guided Visualization',
    visualizationDesc: 'Peaceful mental imagery',
    quickCalm: '2-Minute Quick Calm',
    quickCalmDesc: 'Rapid anxiety relief',
    grounding54321: '5-4-3-2-1 Grounding',
    grounding54321Desc: 'Sensory awareness technique',
    minutes: 'minutes',
    startExercise: 'Start Exercise',
    pauseExercise: 'Pause',
    resumeExercise: 'Resume',
    completeExercise: 'Complete',
    restartExercise: 'Restart',
    inhale: 'Inhale',
    exhale: 'Exhale',
    hold: 'Hold',
    relax: 'Relax',
    tense: 'Tense',
    breatheIn: 'Breathe In',
    breatheOut: 'Breathe Out',
    
    // Exercise Instructions
    boxBreathingInstructions: 'Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Follow the visual guide.',
    deepBreathingInstructions: 'Take slow, deep breaths using your diaphragm. Focus on expanding your belly.',
    progressiveMuscleInstructions: 'Tense each muscle group for 5 seconds, then relax for 10 seconds.',
    bodyScanInstructions: 'Notice sensations throughout your body from head to toe without judgment.',
    visualizationInstructions: 'Imagine yourself in a peaceful, safe place. Use all your senses.',
    mindfulnessInstructions: 'Focus on your breath and present moment. Gently return attention when mind wanders.',
    quickCalmInstructions: 'Quick techniques to reduce anxiety in just 2 minutes.',
    grounding54321Instructions: 'Name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.',
    
    // Body Parts for Progressive Muscle
    feet: 'Feet',
    legs: 'Legs',
    abdomen: 'Abdomen',
    hands: 'Hands',
    arms: 'Arms',
    shoulders: 'Shoulders',
    face: 'Face',
    
    // Exercise Phases
    preparation: 'Preparation',
    exercise: 'Exercise',
    completion: 'Completion',
    wellDoneExercise: 'Well done! You completed the exercise.',
    
    // Daily Checklist
    dailySelfCare: 'Daily Self Care',
    dailyMissionComplete: 'Daily Mission Complete!',
    checklistSubtitle: 'Track your daily wellness activities',
    dailyGoals: 'Daily Goals',
    todaysProgress: "Today's Progress",
    completed: 'Completed',
    pending: 'Pending',
    
    // Learn Section  
    learnSubtitle: 'Understanding anxiety and building coping skills',
    understandingLessons: 'Understanding Lessons',
    whatIsAnxiety: 'What is Anxiety?',
    physicalMentalEffects: 'Physical & Mental Effects',
    causesAndTheories: 'Causes & Theories',
    generalAnxiety: 'General Anxiety',
    firstSteps: 'First Steps',
    copingStrategies: 'Coping Strategies',
    
    // Affirm Section
    affirmSubtitle: 'Positive affirmations for daily strength',
    dailyAffirmations: 'Daily Affirmations',
    selfLove: 'Self Love',
    confidence: 'Confidence', 
    resilience: 'Resilience',
    gratitude: 'Gratitude',
    
    // Sleep Section
    sleepSubtitle: 'Guided exercises for better rest',
    sleepStories: 'Sleep Stories',
    nighttimeCalm: 'Nighttime Calm',
    bedtimeRoutine: 'Bedtime Routine',
    dreamscapes: 'Dreamscapes',
    
    // Mood Tracker
    moodTrackerSubtitle: 'How are you feeling today?',
    howAreYouFeeling: 'How are you feeling?',
    selectEmotion: 'Select your current emotion',
    trackProgress: 'Test & Track your Progress',
    
    // Emotions
    sad: 'Sad',
    determined: 'Determined',
    angry: 'Angry',
    relaxed: 'Relaxed',
    worried: 'Worried',
    frightened: 'Frightened',
    unmotivated: 'Unmotivated',
    hungry: 'Hungry',
    strong: 'Strong',
    indifferent: 'Indifferent',
    sleepy: 'Sleepy',
    calm: 'Calm',
    crying: 'Crying',
    depressed: 'Depressed',
    dizzy: 'Dizzy',
    
    // Extended Exercises
    campfire: 'Campfire',
    forestBirds: 'Forest Birds',
    smoothBeats: 'Smooth Beats',
    softAmbience: 'Soft Ambience',
    coralJourney: 'Coral Journey',
    rainfall: 'Rainfall',
    waves: 'Waves',
    rainforest: 'Rainforest',
    
    // Journal Screen
    journalSubtitle: 'Track your episodes and patterns',
    addEntry: 'Add Entry',
    newEntry: 'New Entry',
    intensity: 'Intensity',
    whatTriggered: 'What triggered this episode?',
    additionalNotes: 'Additional notes',
    cancel: 'Cancel',
    save: 'Save',
    entrySaved: 'Entry saved successfully!',
    
    // Settings Screen
    settingsSubtitle: 'Customize your experience',
    language: 'Language',
    english: 'English',
    biometricLock: 'Biometric Lock',
    secureApp: 'Secure app with fingerprint',
    dataManagement: 'Data Management',
    manageData: 'Manage your personal data',
    exportData: 'Export Journal Data',
    clearAllData: 'Clear All Data',
    appVersion: 'Version 1.0.0',
    madeWithCare: 'Made with care for mental wellness',
    
    // Common
    back: 'Back',
    close: 'Close',
    confirm: 'Confirm',
    delete: 'Delete',
    see: 'See',
    touch: 'Touch', 
    hear: 'Hear',
    smell: 'Smell',
    taste: 'Taste',
  },
  ar: {
    // App
    appTitle: 'عقل هادئ',
    appSubtitle: 'رفيقك للحصول على الهدوء',
    
    // Navigation
    emergencySOS: 'طوارئ',
    exercises: 'التمارين',
    journal: 'المذكرات',
    settings: 'الإعدادات',
    learn: 'تعلم',
    affirm: 'إيجابية',
    sleep: 'نوم',
    checklist: 'قائمة يومية',
    moodTracker: 'متتبع المزاج',
    
    // Home Screen
    immediateHelp: 'مساعدة فورية لنوبات الهلع',
    breathingRelaxation: 'تنفس، استرخاء ووعي ذهني',
    trackEpisodes: 'تتبع النوبات والمحفزات',
    languagePreferences: 'اللغة والتفضيلات',
    
    // SOS Screen
    emergencySupport: 'دعم الطوارئ',
    youAreSafe: 'أنت في مكان آمن',
    safetyMessage: 'أنت في مكان آمن. سنهدأ خطوة بخطوة.',
    breathingExercise: 'تمرين التنفس',
    followCircle: 'اتبع إيقاع الدائرة:',
    breathingPattern: 'استنشق ببطء 1..2..3..4 — احبس 1..2..3..4 — ازفر 1..2..3..4..5..6',
    grounding: 'تمرين التأريض 5-4-3-2-1',
    groundingText: 'اذكر 5 أشياء تراها، 4 تلمسها، 3 تسمعها، 2 تشمها، 1 تتذوقها.',
    imOkayNow: 'أنا بخير الآن',
    wellDone: 'أحسنت! جسدك بدأ يهدأ.',
    
    // Exercises Screen
    exercisesSubtitle: 'تقنيات لمساعدتك على الاسترخاء وتهدئة نفسك',
    boxBreathing: 'تنفس الصندوق',
    boxBreathingDesc: 'نمط التنفس 4-4-4-4',
    progressiveMuscle: 'استرخاء العضلات التدريجي',
    progressiveMuscleDesc: 'تمرين الشد والإرخاء',
    mindfulness: 'تأمل الوعي الذهني',
    mindfulnessDesc: 'الوعي باللحظة الحاضرة',
    deepBreathing: 'التنفس العميق',
    deepBreathingDesc: 'تنفس بطيء بالحجاب الحاجز',
    bodyScanning: 'مسح الجسم',
    bodyScanningDesc: 'تقنية الوعي بكامل الجسم',
    visualization: 'التصور الموجه',
    visualizationDesc: 'صور ذهنية هادئة',
    quickCalm: 'هدوء سريع - دقيقتان',
    quickCalmDesc: 'تخفيف سريع للقلق',
    grounding54321: 'تأريض 5-4-3-2-1',
    grounding54321Desc: 'تقنية الوعي الحسي',
    minutes: 'دقائق',
    startExercise: 'ابدأ التمرين',
    pauseExercise: 'توقف',
    resumeExercise: 'استمر',
    completeExercise: 'اكتمل',
    restartExercise: 'إعادة البدء',
    inhale: 'استنشق',
    exhale: 'ازفر',
    hold: 'احبس',
    relax: 'استرخ',
    tense: 'شد',
    breatheIn: 'تنفس للداخل',
    breatheOut: 'تنفس للخارج',
    
    // Exercise Instructions
    boxBreathingInstructions: 'استنشق لـ4 عدات، احبس لـ4، ازفر لـ4، احبس لـ4. اتبع الدليل البصري.',
    deepBreathingInstructions: 'خذ أنفاسًا عميقة وبطيئة باستخدام الحجاب الحاجز. ركز على توسيع بطنك.',
    progressiveMuscleInstructions: 'شد كل مجموعة عضلية لـ5 ثواني، ثم استرخ لـ10 ثواني.',
    bodyScanInstructions: 'لاحظ الأحاسيس في جسمك من الرأس للقدمين دون إصدار أحكام.',
    visualizationInstructions: 'تخيل نفسك في مكان هادئ وآمن. استخدم جميع حواسك.',
    mindfulnessInstructions: 'ركز على تنفسك واللحظة الحاضرة. أعد انتباهك برفق عندما يشرد عقلك.',
    quickCalmInstructions: 'تقنيات سريعة لتقليل القلق في دقيقتين فقط.',
    grounding54321Instructions: 'اذكر 5 أشياء تراها، 4 تلمسها، 3 تسمعها، 2 تشمها، 1 تتذوقه.',
    
    // Body Parts for Progressive Muscle
    feet: 'القدمان',
    legs: 'الساقان',
    abdomen: 'البطن',
    hands: 'اليدان',
    arms: 'الذراعان',
    shoulders: 'الكتفان',
    face: 'الوجه',
    
    // Exercise Phases
    preparation: 'التحضير',
    exercise: 'التمرين',
    completion: 'الاكتمال',
    wellDoneExercise: 'أحسنت! أكملت التمرين.',
    
    // Daily Checklist
    dailySelfCare: 'العناية الذاتية اليومية',
    dailyMissionComplete: 'اكتملت المهمة اليومية!',
    checklistSubtitle: 'تتبع أنشطة العافية اليومية',
    dailyGoals: 'الأهداف اليومية',
    todaysProgress: 'تقدم اليوم',
    completed: 'مكتمل',
    pending: 'معلق',
    
    // Learn Section
    learnSubtitle: 'فهم القلق وبناء مهارات التأقلم',
    understandingLessons: 'دروس الفهم',
    whatIsAnxiety: 'ما هو القلق؟',
    physicalMentalEffects: 'التأثيرات الجسدية والنفسية',
    causesAndTheories: 'الأسباب والنظريات',
    generalAnxiety: 'القلق العام',
    firstSteps: 'الخطوات الأولى',
    copingStrategies: 'استراتيجيات التأقلم',
    
    // Affirm Section
    affirmSubtitle: 'تأكيدات إيجابية للقوة اليومية',
    dailyAffirmations: 'التأكيدات اليومية',
    selfLove: 'حب الذات',
    confidence: 'الثقة',
    resilience: 'المرونة',
    gratitude: 'الامتنان',
    
    // Sleep Section
    sleepSubtitle: 'تمارين موجهة لراحة أفضل',
    sleepStories: 'قصص النوم',
    nighttimeCalm: 'هدوء الليل',
    bedtimeRoutine: 'روتين النوم',
    dreamscapes: 'مناظر الأحلام',
    
    // Mood Tracker
    moodTrackerSubtitle: 'كيف تشعر اليوم؟',
    howAreYouFeeling: 'كيف تشعر؟',
    selectEmotion: 'اختر مشاعرك الحالية',
    trackProgress: 'اختبار وتتبع تقدمك',
    
    // Emotions
    sad: 'حزين',
    determined: 'مصمم',
    angry: 'غاضب',
    relaxed: 'مسترخ',
    worried: 'قلق',
    frightened: 'خائف',
    unmotivated: 'غير متحفز',
    hungry: 'جائع',
    strong: 'قوي',
    indifferent: 'لامبال',
    sleepy: 'نعسان',
    calm: 'هادئ',
    crying: 'يبكي',
    depressed: 'محبط',
    dizzy: 'دوار',
    
    // Extended Exercises
    campfire: 'نار المخيم',
    forestBirds: 'طيور الغابة',
    smoothBeats: 'إيقاعات ناعمة',
    softAmbience: 'أجواء هادئة',
    coralJourney: 'رحلة المرجان',
    rainfall: 'المطر',
    waves: 'الأمواج',
    rainforest: 'الغابة المطيرة',
    
    // Journal Screen
    journalSubtitle: 'تتبع نوباتك والأنماط',
    addEntry: 'إضافة مذكرة',
    newEntry: 'مذكرة جديدة',
    intensity: 'الشدة',
    whatTriggered: 'ما الذي تسبب في هذه النوبة؟',
    additionalNotes: 'ملاحظات إضافية',
    cancel: 'إلغاء',
    save: 'حفظ',
    entrySaved: 'تم حفظ المذكرة بنجاح!',
    
    // Settings Screen
    settingsSubtitle: 'خصص تجربتك',
    language: 'اللغة',
    english: 'العربية',
    biometricLock: 'القفل البيومتري',
    secureApp: 'تأمين التطبيق ببصمة الإصبع',
    dataManagement: 'إدارة البيانات',
    manageData: 'إدارة بياناتك الشخصية',
    exportData: 'تصدير بيانات المذكرات',
    clearAllData: 'مسح جميع البيانات',
    appVersion: 'الإصدار 1.0.0',
    madeWithCare: 'صُنع بعناية للصحة النفسية',
    
    // Common
    back: 'رجوع',
    close: 'إغلاق',
    confirm: 'تأكيد',
    delete: 'حذف',
    see: 'ترى',
    touch: 'تلمس',
    hear: 'تسمع',
    smell: 'تشم',
    taste: 'تتذوق',
  },
};

export function getTranslation(key: keyof typeof translations.en, language: Language): string {
  return translations[language][key] || translations.en[key];
}
