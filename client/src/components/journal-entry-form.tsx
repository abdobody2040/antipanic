import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/hooks/use-language';
import { InsertJournalEntry } from '@shared/schema';
import { X } from 'lucide-react';

interface JournalEntryFormProps {
  onSave: (entry: InsertJournalEntry) => void;
  onCancel: () => void;
}

export function JournalEntryForm({ onSave, onCancel }: JournalEntryFormProps) {
  const { t } = useLanguage();
  const [intensity, setIntensity] = useState([5]);
  const [trigger, setTrigger] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const now = new Date();
    const entry: InsertJournalEntry = {
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      intensity: intensity[0],
      trigger: trigger.trim(),
      notes: notes.trim(),
    };
    
    onSave(entry);
    
    // Reset form
    setIntensity([5]);
    setTrigger('');
    setNotes('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end" data-testid="journal-entry-form">
      <div className="w-full bg-white rounded-t-3xl p-6 max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-foreground">
            {t('newEntry')}
          </h3>
          <button
            onClick={onCancel}
            className="text-muted-foreground hover:text-foreground"
            data-testid="button-close-form"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="block text-sm font-medium text-foreground mb-2">
              {t('intensity')} (0-10)
            </Label>
            <Slider
              value={intensity}
              onValueChange={setIntensity}
              max={10}
              min={0}
              step={1}
              className="w-full"
              data-testid="slider-intensity"
            />
            <div className="text-center mt-2">
              <span className="text-lg font-semibold text-calm-blue">{intensity[0]}</span>
            </div>
          </div>

          <div>
            <Label className="block text-sm font-medium text-foreground mb-2">
              {t('whatTriggered')}
            </Label>
            <Input
              type="text"
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
              className="w-full"
              required
              data-testid="input-trigger"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium text-foreground mb-2">
              {t('additionalNotes')}
            </Label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-20 resize-none"
              data-testid="textarea-notes"
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              onClick={onCancel}
              variant="outline"
              className="flex-1"
              data-testid="button-cancel"
            >
              {t('cancel')}
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-calm-blue hover:bg-blue-300 text-primary-foreground"
              data-testid="button-save-entry"
            >
              {t('save')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
