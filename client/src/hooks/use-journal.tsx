import { useState, useEffect } from 'react';
import { JournalEntry, InsertJournalEntry } from '@shared/schema';
import { LocalStorage } from '@/lib/storage';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/use-language';

export function useJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const { toast } = useToast();
  const { t } = useLanguage();

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = () => {
    const savedEntries = LocalStorage.get<JournalEntry[]>('journal-entries') || [];
    // Sort by creation date, newest first
    const sortedEntries = savedEntries.sort((a, b) => b.createdAt - a.createdAt);
    setEntries(sortedEntries);
  };

  const addEntry = (entryData: InsertJournalEntry) => {
    const newEntry: JournalEntry = {
      ...entryData,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    LocalStorage.set('journal-entries', updatedEntries);

    toast({
      title: t('entrySaved'),
      duration: 2000,
    });

    return newEntry;
  };

  const deleteEntry = (id: string) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    LocalStorage.set('journal-entries', updatedEntries);
  };

  const clearAllEntries = () => {
    setEntries([]);
    LocalStorage.remove('journal-entries');
  };

  const exportEntries = () => {
    const dataStr = JSON.stringify(entries, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'calm-mind-journal-export.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return {
    entries,
    addEntry,
    deleteEntry,
    clearAllEntries,
    exportEntries,
    refresh: loadEntries,
  };
}
