import { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import { BreathingCircle } from "@/components/breathing-circle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Shield, Eye, Hand, Volume2, Stethoscope, Smile, CheckCircle } from "lucide-react";

export default function SOS() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCompletion = () => {
    setShowSuccess(true);
    toast({
      title: t('wellDone'),
      duration: 3000,
    });
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 fade-in" data-testid="sos-success">
        <div className="text-center p-8">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            {t('wellDone')}
          </h2>
          <Link href="/">
            <Button className="mt-4 bg-calm-green hover:bg-green-400" data-testid="button-return-home">
              {t('back')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen fade-in" data-testid="page-sos">
      {/* Emergency Header */}
      <header className="bg-red-500 px-6 pt-12 pb-8 text-center text-white">
        <Link href="/">
          <button className="absolute top-12 left-6 text-white" data-testid="button-back">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
        <div className="mb-4">
          <Heart className="w-10 h-10 mb-3 mx-auto" />
          <h1 className="text-xl font-medium">
            {t('emergencySupport')}
          </h1>
        </div>
      </header>

      {/* SOS Content */}
      <main className="px-6 py-8 space-y-8">
        {/* Reassurance Message */}
        <div className="text-center bg-green-50 border border-green-200 rounded-2xl p-6" data-testid="reassurance-message">
          <Shield className="w-12 h-12 text-green-600 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            {t('youAreSafe')}
          </h2>
          <p className="text-green-700 leading-relaxed">
            {t('safetyMessage')}
          </p>
        </div>

        {/* Breathing Exercise */}
        <div className="text-center bg-blue-50 border border-blue-200 rounded-2xl p-8" data-testid="breathing-exercise">
          <h3 className="text-lg font-semibold text-blue-800 mb-6">
            {t('breathingExercise')}
          </h3>
          
          <BreathingCircle />
          
          <div className="text-blue-700 space-y-2 mt-4">
            <p className="text-sm">
              {t('followCircle')}
            </p>
            <p className="text-xs">
              {t('breathingPattern')}
            </p>
          </div>
        </div>

        {/* Grounding Technique */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6" data-testid="grounding-technique">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">
            {t('grounding')}
          </h3>
          <p className="text-purple-700 text-sm leading-relaxed mb-4">
            {t('groundingText')}
          </p>
          
          <div className="grid grid-cols-5 gap-2 mt-4">
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-1">
                <Eye className="w-4 h-4 text-purple-700" />
              </div>
              <span className="text-xs text-purple-600">5</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-1">
                <Hand className="w-4 h-4 text-purple-700" />
              </div>
              <span className="text-xs text-purple-600">4</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-1">
                <Volume2 className="w-4 h-4 text-purple-700" />
              </div>
              <span className="text-xs text-purple-600">3</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-1">
                <Stethoscope className="w-4 h-4 text-purple-700" />
              </div>
              <span className="text-xs text-purple-600">2</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-1">
                <Smile className="w-4 h-4 text-purple-700" />
              </div>
              <span className="text-xs text-purple-600">1</span>
            </div>
          </div>
        </div>

        {/* Completion Button */}
        <div className="text-center pt-4">
          <Button
            onClick={handleCompletion}
            className="w-full bg-calm-green hover:bg-green-400 text-accent-foreground font-medium py-4 px-6 rounded-2xl"
            data-testid="button-im-okay"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            {t('imOkayNow')}
          </Button>
        </div>
      </main>
    </div>
  );
}
