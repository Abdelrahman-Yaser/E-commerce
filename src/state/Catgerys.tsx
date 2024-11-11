import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

 // Import the Category enum
import { Product } from '../components/interface/Interface';
import { RootState } from './Store';
import { fetchCategories, filterByCategory } from './Categories';

const CategoryButtons: React.FC = () => {
  const dispatch = useDispatch();
  const { filteredItems, loading, error } = useSelector(
    
    (state: RootState) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = (category: AudioContextLatencyCategory) => {
    dispatch(filterByCategory(category));
  };

  if (loading === 'pending') return <p>Loading...</p>;
  if (loading === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <div>
        <button onClick={() => handleCategoryChange(Category.Electronics)}>Electronics</button>
        <button onClick={() => handleCategoryChange(Category.Jewelry)}>Jewelry</button>
        <button onClick={() => handleCategoryChange(Category.MenClothing)}>Men's Clothing</button>
        <button onClick={() => handleCategoryChange(Category.WomenClothing)}>Women's Clothing</button>
      </div>

      <div>
        <h2>Products:</h2>
        {filteredItems.length > 0 ? (
          filteredItems.map((product:Product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryButtons;
