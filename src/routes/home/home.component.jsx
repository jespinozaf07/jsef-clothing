import React from 'react';

import { Directory } from '../../components/directory/directory.component';

import { categories } from '../../data/categories.js';

export const Home = () => {
  return <Directory categories={categories} />;
};
