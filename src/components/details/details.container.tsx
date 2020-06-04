import React from 'react';
import Details from './details.view';
import { useFavoritesContext } from '../../hooks';
import { ObjectItem } from '../../hooks';

interface Props {
  discovery: ObjectItem;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsContainer = ({ setIsModalOpen, discovery }: Props) => {
  const { favorites, toggleFavorite } = useFavoritesContext();
  const isFavorite = favorites.has(discovery.objectID);

  const onClickExpand = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const onClickFavorite = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    toggleFavorite(discovery.objectID);
  };

  return (
    <Details
      onClickExpand={onClickExpand}
      onClickFavorite={onClickFavorite}
      isFavorite={isFavorite}
      discovery={discovery}
    />
  );
};

export default DetailsContainer;
