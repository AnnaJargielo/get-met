import React, { useState } from 'react';
import { setValue, getValue } from '../../../utils';

const FAVORITES_KEY = 'get_met_favorites';

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
  const storedFavorites = new Set(getValue<number[]>(FAVORITES_KEY) || []);

  const [favorites, setFavorites] = useState<Set<number>>(storedFavorites);

  const toggleFavorite = (id: number) => {
    const fav = getValue<number[]>(FAVORITES_KEY);
    const newFavoriteSet = new Set(fav || favorites);
    const isFavorite = favorites.has(id);

    if (isFavorite) {
      newFavoriteSet.delete(id);
    } else {
      newFavoriteSet.add(id);
    }

    setValue(FAVORITES_KEY, Array.from(newFavoriteSet));
    setFavorites(newFavoriteSet);
  };

  return (
    <FavoritesContext.Provider value={{ favorites: favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
