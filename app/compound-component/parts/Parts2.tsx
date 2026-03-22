"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Context
type TabsContextType = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used inside Tabs");
  }
  return context;
};

// Tabs
type TabsProps = {
  children: ReactNode;
  defaultValue: string;
};

const Tabs = ({ children, defaultValue }: TabsProps) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      {children}
    </TabsContext.Provider>
  );
};

// List
const List = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-2">{children}</div>;
};

// Trigger
type TriggerProps = {
  value: string;
  children: ReactNode;
};

const Trigger = ({ value, children }: TriggerProps) => {
  const { value: activeValue, setValue } = useTabsContext();
  return (
    <button
      onClick={() => setValue(value)}
      className={activeValue === value ? "bg-red-300" : "bg-gray-300"}
    >
      {children}
    </button>
  );
};

// Content
type ContentProps = {
  value: string;
  children: ReactNode;
};

const Content = ({ value, children }: ContentProps) => {
  const { value: activeValue } = useTabsContext();
  if (activeValue !== value) return null;
  return <div className="mt-2">{children}</div>;
};

export const Parts = () => {
  return (
    <Tabs defaultValue="tab1">
      <List>
        <Trigger value="tab1">Tab1</Trigger>
        <Trigger value="tab2">Tab2</Trigger>
      </List>

      <Content value="tab1">Content1</Content>

      <Content value="tab2">Content2</Content>
    </Tabs>
  );
};
