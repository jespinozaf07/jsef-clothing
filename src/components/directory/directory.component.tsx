import { Key } from 'react';

import { DirectoryItem } from '../directory-item/directory-item.component';

import CATEGORIES from '../../data/categories.json';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

export const Directory = () => {
  return (
    <DirectoryContainer>
      {CATEGORIES.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
