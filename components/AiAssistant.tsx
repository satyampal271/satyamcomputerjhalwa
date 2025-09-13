import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';

type Message = {
  sender: 'user' | 'ai';
  text: string;
};

const AiAssistant: React.FC = () => {
  const [step, setStep] = useState<'idle' | 'chatting'>('idle');
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [chat, setChat] = useState<Chat | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const problemCategories = [
    { id: 'slow-pc', title: 'Slow PC / Performance' },
    { id: 'virus', title: 'Virus or Malware' },
    { id: 'hardware', title: 'Hardware Issue' },
    { id: 'software', title: 'Software Problem' },
  ];

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const startTroubleshooting = async (category: string, categoryTitle: string) => {
    setStep('chatting');
    setIsLoading(true);
    setError('');
    setMessages([]);

    const userMessage: Message = { sender: 'user', text: `I need help with: ${categoryTitle}` };
    setMessages([userMessage]);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const newChat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: `You are an expert IT support technician for 'Satyam Computer Solution'. A user has a '${category}' problem. Your goal is to diagnose the issue by asking one clear, simple question at a time. Be friendly and helpful. Start the conversation now with your first diagnostic question.`
        },
      });
      setChat(newChat);

      const response = await newChat.sendMessage({ message: `I have a problem related to ${category}` });
      const aiMessage: Message = { sender: 'ai', text: response.text };
      setMessages(prev => [...prev, aiMessage]);

    } catch (err: any) {
      console.error(err);
      setError('Failed to initialize AI assistant. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || !chat || isLoading) return;

    const userMessage: Message = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);
    setError('');

    try {
      const response = await chat.sendMessage({ message: userInput });
      const aiMessage: Message = { sender: 'ai', text: response.text };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err: any) {
      console.error(err);
      setError('An error occurred. Please try sending your message again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setStep('idle');
    setMessages([]);
    setUserInput('');
    setIsLoading(false);
    setError('');
    setChat(null);
  };
  
  const bubbleBaseStyle = "p-3 rounded-lg max-w-full break-words border";
  const aiBubbleStyle = "bg-[var(--accent-violet)]/30 border-[var(--accent-violet)]/50 rounded-bl-none";
  const userBubbleStyle = "bg-[var(--accent-cyan)]/30 border-[var(--accent-cyan)]/50 rounded-br-none";

  const AiIcon = () => (
    <div className="w-8 h-8 rounded-full bg-[var(--accent-violet)]/50 flex items-center justify-center flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent-cyan)]" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L9 9.61v5.032a1 1 0 001.447.894l4-2A1 1 0 0015 12.61V6.39l4.606-2.472a1 1 0 000-1.84l-7-3zM9 7.61l-6-3.214 6-2.727v5.94z" />
      </svg>
    </div>
  );
  
  const UserIcon = () => (
    <div className="w-8 h-8 rounded-full bg-[var(--accent-cyan)]/50 flex items-center justify-center flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    </div>
  );

  const ErrorAlert = ({ message }: { message: string }) => (
    <div className="flex items-center border border-red-500/50 bg-red-500/20 text-red-300 text-sm rounded-md p-3 my-4 animate-message">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span>{message}</span>
    </div>
  );

  return (
    <section id="ai-assistant" className="bg-[var(--bg-dark-navy)] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">AI Troubleshooter</h2>
          <p className="text-lg text-gray-400">
            Get instant help diagnosing your computer issues with our AI assistant.
          </p>
        </div>

        <div className="max-w-2xl mx-auto glass-card p-8">
          {step === 'idle' && (
            <div className="animate-fadeInUp">
              <h3 className="text-xl font-bold text-white text-center mb-6">What seems to be the problem?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problemCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => startTroubleshooting(cat.id, cat.title)}
                    className="text-left p-4 bg-[var(--accent-violet)]/20 hover:bg-[var(--accent-violet)]/40 rounded-lg transition-colors duration-300 border border-[var(--accent-violet)]/50"
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
               {error && <ErrorAlert message={error} />}
            </div>
          )}

          {step === 'chatting' && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Troubleshooting Chat</h3>
                <button onClick={handleReset} className="text-sm text-[var(--accent-cyan)] hover:text-white">&larr; Start Over</button>
              </div>
              <div ref={chatContainerRef} className="h-80 overflow-y-auto bg-black/20 rounded-lg p-4 space-y-4 flex flex-col mb-4">
                {messages.map((msg, index) => {
                  if (msg.sender === 'ai') {
                    return (
                      <div key={index} className="flex items-end gap-2 self-start max-w-[85%]">
                        <AiIcon />
                        <div className={`${bubbleBaseStyle} ${aiBubbleStyle}`}>{msg.text}</div>
                      </div>
                    );
                  }
                  return (
                    <div key={index} className="flex items-end gap-2 self-end max-w-[85%]">
                      <div className={`${bubbleBaseStyle} ${userBubbleStyle}`}>{msg.text}</div>
                      <UserIcon />
                    </div>
                  );
                })}
                 {isLoading && messages.length > 0 && messages[messages.length - 1].sender === 'user' && (
                  <div className="flex items-end gap-2 self-start max-w-[85%]">
                    <AiIcon />
                    <div className={`${bubbleBaseStyle} ${aiBubbleStyle} flex items-center space-x-2`}>
                      <span className="w-2 h-2 bg-[var(--accent-cyan)] rounded-full animate-pulse"></span>
                      <span className="w-2 h-2 bg-[var(--accent-cyan)] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-[var(--accent-cyan)] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                )}
              </div>
              
              {error && <ErrorAlert message={error} />}
              
              <form onSubmit={handleSendMessage}>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your response..."
                    className="flex-grow bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition"
                    disabled={isLoading}
                    aria-label="Your message"
                  />
                  <button
                    type="submit"
                    className="btn-primary py-3 px-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading || !userInput.trim()}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;