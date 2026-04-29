import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GREETING: Message = {
  role: 'assistant',
  content: "Hey! I'm here to help. Tell me about your business — what's your biggest challenge right now?",
};

export const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    const userMessage: Message = { role: 'user', content: trimmed };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      if (!response.ok) throw new Error('Server error');
      const data = await response.json();
      if (data && data.content) {
        setMessages([...newMessages, { role: 'assistant', content: data.content }]);
      } else {
        throw new Error('Bad response');
      }
    } catch {
      setError('Connection issue — please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { e.preventDefault(); sendMessage(); }
  };