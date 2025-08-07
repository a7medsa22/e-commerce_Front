'use client';

import React, { useEffect, useState } from 'react';
import ProductApi from '../../../lib/ProductApi'; // تأكد المسار صحيح
import ProductList from './ProductList';

function ProductSection() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getListsProducts_();
  }, []);

  const getListsProducts_ = () => {
    ProductApi.getListsProducts()
      .then((res) => {
        console.log(res.data); // هتشوف هنا لو الـ API بيرجع فعلاً البيانات صح
        setProductList(res.data.data); // تأكد إنك بتحط `data.data` مش `data` بس
      })
      .catch((err) => console.error('Error fetching products:', err));
  };

  return (
    <div>
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductSection;
