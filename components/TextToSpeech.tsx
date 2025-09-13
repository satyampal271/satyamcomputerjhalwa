import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';

const PlayIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    </svg>
);
const PauseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
    </svg>
);
const StopIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 3.5h10A1.5 1.5 0 0116.5 5v10a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 15V5A1.5 1.5 0 015 3.5z" />
    </svg>
);

const TextToSpeech: React.FC<{ textToRead: string }> = ({ textToRead }) => {
    const [isReading, setIsReading] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [selectedLang, setSelectedLang] = useState<'en' | 'hi'>('en');
    const [translatedText, setTranslatedText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const populateVoices = useCallback(() => {
        const availableVoices = window.speechSynthesis.getVoices();
        if (availableVoices.length > 0) {
            setVoices(availableVoices);
        }
    }, []);

    useEffect(() => {
        populateVoices();
        window.speechSynthesis.onvoiceschanged = populateVoices;

        const keepAliveInterval = setInterval(() => {
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.resume();
            }
        }, 10000);

        return () => {
            window.speechSynthesis.cancel();
            clearInterval(keepAliveInterval);
            window.speechSynthesis.onvoiceschanged = null;
        };
    }, [populateVoices]);

    const speak = (text: string, lang: string) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        
        const voiceOptions = voices.filter(v => v.lang.startsWith(lang));
        const voice = voiceOptions.find(v => v.name.includes('Google')) || voiceOptions[0];

        if (voice) {
            utterance.voice = voice;
        } else {
            console.warn(`No voice found for language: ${lang}. Using default.`);
        }
        utterance.lang = lang;

        utterance.onstart = () => {
            setIsReading(true);
            setIsPaused(false);
        };
        utterance.onend = () => {
            setIsReading(false);
            setIsPaused(false);
        };
        utterance.onerror = (e) => {
            // The "interrupted" error is expected when the user stops or restarts speech.
            // We can safely ignore it to prevent showing an unnecessary error message.
            if (e.error === 'interrupted') {
                return;
            }
            console.error('Speech synthesis error:', e.error);
            setError(`Could not play audio. Your browser might not support this voice. (${e.error})`);
            setIsReading(false);
            setIsPaused(false);
        };
        window.speechSynthesis.speak(utterance);
    };

    const handlePlay = async () => {
        setError('');

        if (selectedLang === 'en') {
            speak(textToRead, 'en-US');
        } else {
            if (translatedText) {
                speak(translatedText, 'hi-IN');
            } else {
                setIsLoading(true);
                try {
                    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                    const response = await ai.models.generateContent({
                        model: 'gemini-2.5-flash',
                        contents: `Translate the following English text to Hindi: "${textToRead}"`
                    });
                    const hindiText = response.text;
                    if (hindiText) {
                        setTranslatedText(hindiText);
                        speak(hindiText, 'hi-IN');
                    } else {
                        throw new Error("Translation resulted in empty text.");
                    }
                } catch (err) {
                    console.error("Translation failed:", err);
                    setError("Failed to translate text. Please try again.");
                } finally {
                    setIsLoading(false);
                }
            }
        }
    };
    
    const handlePauseResume = () => {
        if (isPaused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        } else {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    };

    const handleStop = () => {
        window.speechSynthesis.cancel();
        setIsReading(false);
        setIsPaused(false);
    };

    const handleLanguageChange = (lang: 'en' | 'hi') => {
        handleStop();
        setSelectedLang(lang);
    };

    return (
        <div className="glass-card p-4 tts-player">
            <div className="flex flex-wrap items-center gap-4">
                <span className="font-semibold text-gray-300 mr-2">Read Aloud:</span>
                <div className="flex items-center gap-2">
                    <button onClick={isReading ? handlePauseResume : handlePlay} disabled={isLoading} aria-label={isReading && !isPaused ? "Pause" : "Play"}>
                        {isReading && !isPaused ? <PauseIcon /> : <PlayIcon />}
                    </button>
                    <button onClick={handleStop} disabled={!isReading || isLoading} aria-label="Stop">
                        <StopIcon />
                    </button>
                </div>
                <div className="lang-switcher flex items-center gap-2 bg-[var(--accent-violet)]/20 p-1 rounded-lg">
                    <button onClick={() => handleLanguageChange('en')} className={selectedLang === 'en' ? 'active' : ''}>English</button>
                    <button onClick={() => handleLanguageChange('hi')} className={selectedLang === 'hi' ? 'active' : ''}>हिन्दी</button>
                </div>
                 {isLoading && (
                    <div className="flex items-center space-x-2">
                        <div className="spinner h-5 w-5 border-2 border-t-transparent"></div>
                        <span className="text-sm text-gray-400">Translating...</span>
                    </div>
                )}
            </div>
            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
        </div>
    );
};

export default TextToSpeech;