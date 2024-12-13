import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import { useState, useEffect } from "react";

interface SpeakButtonProps {
  text: string;
  lang?: string;
}

export function SpeakButton({ text, lang = 'es' }: SpeakButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speak = () => {
    if ('speechSynthesis' in window) {
      setIsPlaying(true);
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;

      // Find a Spanish voice
      const spanishVoice = voices.find(voice => 
        voice.lang.startsWith('es') && !voice.name.includes('Neural')
      );
      
      if (spanishVoice) {
        utterance.voice = spanishVoice;
      }
      
      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={speak}
      disabled={isPlaying}
      title="Listen to pronunciation"
    >
      <Volume2 className={`h-4 w-4 ${isPlaying ? 'text-primary' : ''}`} />
    </Button>
  );
} 