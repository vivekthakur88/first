import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { RightPanel } from './RightPanel';
import { useCalendarStore } from '../../store/useCalendarStore';
import { EventModal } from '../calendar/EventModal';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { isEventModalOpen, openEventModal, view } = useCalendarStore();

  return (
    <div className="bg-background text-on-background min-h-screen overflow-hidden font-body relative flex flex-col">
      <div className="fixed inset-0 grain-texture z-[100] pointer-events-none"></div>
      
      <Header />
      
      <div className="flex pt-20 h-screen overflow-hidden w-full relative">
        <Sidebar />
        
        <main className={`flex-1 ml-20 ${view === 'focus' || view === 'tasks' ? 'xl:mr-0' : 'xl:mr-80'} mesh-gradient-bg relative overflow-y-auto p-8 custom-scrollbar`}>
          {children}
        </main>
        
        {view !== 'focus' && view !== 'tasks' && <RightPanel />}
      </div>

      <button 
        onClick={() => openEventModal(null)}
        className={`fixed bottom-8 right-8 ${view === 'focus' || view === 'tasks' ? 'xl:right-8' : 'xl:right-[350px]'} w-14 h-14 bg-primary-container text-on-primary-fixed-variant rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(208,188,255,0.4)] hover:scale-110 active:scale-90 transition-all z-50`}
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      {isEventModalOpen && <EventModal />}
    </div>
  );
};
