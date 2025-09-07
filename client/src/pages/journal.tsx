import { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { useJournal } from "@/hooks/use-journal";
import { JournalEntryForm } from "@/components/journal-entry-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";

export default function Journal() {
  const { t } = useLanguage();
  const { entries, addEntry } = useJournal();
  const [showForm, setShowForm] = useState(false);

  const getIntensityColor = (intensity: number) => {
    if (intensity <= 3) return 'bg-green-100 text-green-700';
    if (intensity <= 6) return 'bg-yellow-100 text-yellow-700';
    if (intensity <= 8) return 'bg-orange-100 text-orange-700';
    return 'bg-red-100 text-red-700';
  };

  const handleSaveEntry = (entryData: Parameters<typeof addEntry>[0]) => {
    addEntry(entryData);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen fade-in" data-testid="page-journal">
      {/* Journal Header */}
      <header className="gradient-bg px-6 pt-12 pb-6">
        <div className="flex justify-between items-start mb-4">
          <Link href="/">
            <button className="text-foreground" data-testid="button-back">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-calm-blue hover:bg-blue-300 text-primary-foreground px-4 py-2 text-sm font-medium"
            data-testid="button-add-entry"
          >
            <Plus className="w-4 h-4 mr-1" />
            {t('addEntry')}
          </Button>
        </div>
        <h1 className="text-2xl font-semibold text-foreground">
          {t('journal')}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t('journalSubtitle')}
        </p>
      </header>

      {/* Journal Entries */}
      <main className="px-6 py-6 space-y-4" data-testid="journal-entries">
        {entries.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg mb-2">
              {t('noEntriesYet')}
            </div>
            <p className="text-sm text-muted-foreground">
              {t('startTrackingEpisodes')}
            </p>
          </div>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-card border border-border rounded-2xl p-6"
              data-testid={`journal-entry-${entry.id}`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-sm text-muted-foreground">
                  <span>{entry.date}</span> • <span>{entry.time}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-xs text-muted-foreground">
                    {t('intensity')}:
                  </span>
                  <div className={`px-2 py-1 rounded-lg text-xs font-medium ${getIntensityColor(entry.intensity)}`}>
                    {entry.intensity}/10
                  </div>
                </div>
              </div>
              
              <h3 className="font-medium text-foreground mb-2">
                {entry.trigger}
              </h3>
              
              {entry.notes && (
                <p className="text-sm text-muted-foreground">
                  {entry.notes}
                </p>
              )}
            </div>
          ))
        )}
      </main>

      {/* Add Entry Form */}
      {showForm && (
        <JournalEntryForm
          onSave={handleSaveEntry}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
