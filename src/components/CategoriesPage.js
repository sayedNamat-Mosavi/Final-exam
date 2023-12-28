import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function CategoriesPage() {
  const categoryStatus = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="category">
      <div>{categoryStatus}</div>
      <button
        className="status"
        type="submit"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check Status
      </button>
    </div>
  );
}

export default CategoriesPage;
