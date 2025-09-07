import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="bg-calm-blue hover:bg-blue-300 text-primary-foreground border-blue-300"
      data-testid="button-toggle-language"
    >
      {language === 'en' ? 'عربي' : 'English'}
    </Button>
  );
}
