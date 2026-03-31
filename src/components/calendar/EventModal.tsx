import React, { useState } from 'react';
import { useCalendarStore } from '../../store/useCalendarStore';

export const EventModal = () => {
  const { isEventModalOpen, closeEventModal, selectedEvent, addEvent, updateEvent } = useCalendarStore();
  const [title, setTitle] = useState(selectedEvent?.title || '');
  const [description, setDescription] = useState(selectedEvent?.description || '');

  if (!isEventModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedEvent && selectedEvent.id) {
      updateEvent(selectedEvent.id, { title, description });
    } else {
      addEvent({
        title,
        description,
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        color: '#D0BCFF',
        priority: 'medium',
        isTask: false,
        tags: []
      });
    }
    closeEventModal();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={closeEventModal}
      ></div>

      {/* Modal */}
      <div className="relative bg-surface-container-highest border border-white/10 p-6 rounded-2xl shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-200">
        <h2 className="text-xl font-headline font-bold text-white mb-6">
          {selectedEvent ? 'Edit Element' : 'Create Element'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-white/60 mb-1">TITLE</label>
            <input 
              type="text" 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary-container font-body transition-colors"
              placeholder="E.g., Synaptic Sync"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-white/60 mb-1">DESCRIPTION</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary-container font-body min-h-[100px] transition-colors"
              placeholder="Add contextual details..."
            />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button 
              type="button" 
              onClick={closeEventModal}
              className="px-4 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors font-headline"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-6 py-2 rounded-lg bg-primary-container text-on-primary-fixed-variant font-bold font-headline hover:shadow-[0_0_15px_rgba(208,188,255,0.4)] transition-all"
            >
              {selectedEvent ? 'Update' : 'Initialize'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
