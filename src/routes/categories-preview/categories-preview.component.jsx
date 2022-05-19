import React, { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.contex';

import { CategoryPreview } from '../../components/category-preview/category-preview';

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};
