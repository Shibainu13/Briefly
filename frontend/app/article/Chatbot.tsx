import React, { useState } from 'react';
import MessageBubble from '@/components/messagebubble/MessageBubble';

const BotService = {
  sendMessage: (message: string) => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`Bot response to: ${message}`);
      }, 1000); // Simulate a delay for the bot response
    });
  }
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ content: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage: { content: string; sender: 'user' } = { content: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
      setLoading(true);

      const botResponse = await BotService.sendMessage(input);
      const botMessage: { content: string; sender: 'bot' } = { content: botResponse, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setLoading(false);
    }
  };

  return (
    <div className="prose lg:prose-xl dark:prose-invert w-full h-full flex flex-col rounded-md p-3 max-w-full">
      <div className="chat-window flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <MessageBubble key={index} content={msg.content} sender={msg.sender} />
        ))}
        {loading && (
          <div className="flex justify-start mb-2">
            <div className="p-2 rounded-lg bg-gray-300 text-black max-w-xs break-words">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                <div className="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 p-2 border rounded-md"
        />
        <button onClick={handleSendMessage} className="ml-2 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;