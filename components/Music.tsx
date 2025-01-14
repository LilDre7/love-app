// components/MusicButton.tsx
import { useState, useEffect, useRef } from "react";

const MusicButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Configuración inicial del audio
  useEffect(() => {
    audioRef.current = new Audio("/music/1.mp3");

    return () => {
      // Limpia el audio cuando el componente se desmonta
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleMusicToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={handleMusicToggle}
      className={`fixed bottom-5 right-5 px-4 py-2 rounded-full shadow-lg transition-all ${
        isPlaying
          ? "bg-red-500 hover:bg-red-600 text-white"
          : "bg-green-500 hover:bg-green-600 text-white"
      }`}
    >
      {isPlaying ? "Pausar Música" : "Reproducir Música"}
    </button>
  );
};

export default MusicButton;
