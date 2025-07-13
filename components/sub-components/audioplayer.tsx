'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import clsx from 'clsx';

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioData = () => setDuration(audio.duration);

    const handleCanPlayThrough = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Autoplay bloqueado:', err);
      }
    };

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('canplaythrough', handleCanPlayThrough, { once: true });

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white/70 backdrop-blur-md shadow-xl rounded-3xl px-6 py-5 flex flex-col gap-4">
      <audio ref={audioRef} src={src} preload="auto" />

      {/* Time + Play */}
      <div className="flex items-center justify-between w-full">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
        >
          {isPlaying ? <Pause className="w-6 h-6 text-gray-700" /> : <Play className="w-6 h-6 text-gray-700" />}
        </button>

        {/* Timer */}
        <div className="text-sm text-gray-600 font-medium ml-auto">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      {/* Progress bar */}
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleProgress}
        className="w-full h-2 rounded-full bg-gray-300 accent-blue-500"
      />
    </div>
  );
}