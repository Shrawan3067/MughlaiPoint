import { createContext, useContext, useState, type ReactNode } from "react";

type MenuContextType = {
  selectedItem: string | null;
  setSelectedItem: (item: string | null) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <MenuContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuSelection() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuSelection must be used within a MenuProvider");
  }
  return context;
}
