import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { useJournal } from "@/hooks/use-journal";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Fingerprint, Database, Download, Trash2, Heart } from "lucide-react";

export default function Settings() {
  const { t, language } = useLanguage();
  const { exportEntries, clearAllEntries } = useJournal();

  const handleExportData = () => {
    exportEntries();
  };

  const handleClearData = () => {
    if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      clearAllEntries();
    }
  };

  return (
    <div className="min-h-screen fade-in" data-testid="page-settings">
      {/* Settings Header */}
      <header className="gradient-bg px-6 pt-12 pb-6">
        <Link href="/">
          <button className="mb-4 text-foreground" data-testid="button-back">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-2xl font-semibold text-foreground">
          {t('settings')}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t('settingsSubtitle')}
        </p>
      </header>

      {/* Settings Options */}
      <main className="px-6 py-6 space-y-6">
        {/* Language Setting */}
        <div className="bg-card border border-border rounded-2xl p-6" data-testid="language-setting">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-calm-blue rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {t('language')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? t('english') : 'العربية'}
                </p>
              </div>
            </div>
            <LanguageToggle />
          </div>
        </div>

        {/* Security Setting (Placeholder) */}
        <div className="bg-card border border-border rounded-2xl p-6" data-testid="security-setting">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-calm-purple rounded-full flex items-center justify-center">
                <Fingerprint className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {t('biometricLock')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('secureApp')}
                </p>
              </div>
            </div>
            <div className="w-12 h-6 bg-muted rounded-full relative cursor-pointer" data-testid="toggle-biometric">
              <div className="w-5 h-5 bg-white rounded-full shadow-md transform translate-x-0.5 translate-y-0.5 transition-transform"></div>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="bg-card border border-border rounded-2xl p-6" data-testid="data-management">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Database className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                {t('dataManagement')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('manageData')}
              </p>
            </div>
          </div>
          
          <div className="space-y-3 pt-4 border-t border-border">
            <Button
              onClick={handleExportData}
              variant="outline"
              className="w-full justify-start p-3 h-auto"
              data-testid="button-export-data"
            >
              <Download className="w-5 h-5 mr-3 text-calm-blue" />
              <span className="text-foreground">
                {t('exportData')}
              </span>
            </Button>
            
            <Button
              onClick={handleClearData}
              variant="outline"
              className="w-full justify-start p-3 h-auto hover:bg-red-50 border-red-200"
              data-testid="button-clear-data"
            >
              <Trash2 className="w-5 h-5 mr-3 text-red-500" />
              <span className="text-red-600">
                {t('clearAllData')}
              </span>
            </Button>
          </div>
        </div>

        {/* App Info */}
        <div className="bg-card border border-border rounded-2xl p-6" data-testid="app-info">
          <div className="text-center space-y-2">
            <Heart className="w-8 h-8 text-calm-blue mx-auto" />
            <h3 className="font-semibold text-foreground">{t('appTitle')}</h3>
            <p className="text-sm text-muted-foreground">{t('appVersion')}</p>
            <p className="text-xs text-muted-foreground">
              {t('madeWithCare')}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
