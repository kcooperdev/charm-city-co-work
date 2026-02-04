
import React, { useState } from 'react';
import { getVibeRecommendation } from '../services/geminiService';

const VibeFinder: React.FC = () => {
  const [input, setInput] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const result = await getVibeRecommendation(input);
      setRecommendation(result || "I'm having trouble connecting to the harbor waves. Try again in a second!");
    } catch (error) {
      setRecommendation("The signal is weak. Please check back later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1a2e44] text-[#fdfbf7] p-8 md:p-12 rounded-[3rem] shadow-2xl border border-[#d4af37]/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
        </svg>
      </div>

      <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">AI Vibe Finder</h3>
      <p className="text-[#d4af37] font-bold uppercase text-xs tracking-[0.3em] mb-8">Personalized Co-Work Concierge</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-black uppercase tracking-widest mb-3 opacity-60">
            What are you looking for today?
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 'I need a quiet space with fast wifi and good coffee nearby'"
            className="w-full bg-[#fdfbf7]/5 border-2 border-[#fdfbf7]/10 rounded-2xl px-6 py-4 text-[#fdfbf7] placeholder-[#fdfbf7]/20 focus:outline-none focus:border-[#d4af37] transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#d4af37] text-[#1a2e44] font-black uppercase tracking-widest py-4 rounded-2xl hover:bg-[#fdfbf7] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          {loading ? 'Consulting the Oracle...' : 'Find My Vibe'}
        </button>
      </form>

      {recommendation && (
        <div className="mt-8 p-6 bg-[#fdfbf7]/5 border-l-4 border-[#d4af37] rounded-r-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-lg font-medium leading-relaxed italic">
            "{recommendation}"
          </p>
        </div>
      )}
    </div>
  );
};

export default VibeFinder;
