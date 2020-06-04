import React, { useState } from 'react';

export interface FavoritesState {
  favorites: Set<number>;
  toggleFavorite: (id: number) => void;
}

const initialState: FavoritesState = {
  favorites: new Set<number>(),
  toggleFavorite: () => {
    throw new Error('method not implemented');
  },
};

export const FavoritesContext = React.createContext<FavoritesState>(initialState);

const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Set<number>>(new Set<number>());

  const toggleFavorite = (id: number) => {
    const newFavoriteSet = new Set(favorites);
    const isFavorite = favorites.has(id);

    if (isFavorite) {
      newFavoriteSet.delete(id);
    } else {
      newFavoriteSet.add(id);
    }

    setFavorites(newFavoriteSet);
  };

  return (
    <FavoritesContext.Provider value={{ favorites: favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
