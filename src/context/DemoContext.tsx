import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DemoContextType {
  isOpen: boolean;
  triggerModal: (actionContext?: string) => void;
  closeModal: () => void;
  actionContext: string;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [actionContext, setActionContext] = useState('');

  const triggerModal = (context?: string) => {
    setActionContext(context || 'the requested action');
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <DemoContext.Provider value={{ isOpen, triggerModal, closeModal, actionContext }}>
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};
