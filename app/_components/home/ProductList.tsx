'use client'
import React, { useEffect, useState } from 'react'
interface ProductListProps {
  productList: any[]; // Replace 'any[]' with the correct type if available, e.g., Product[]
}

function ProductList({ productList }: ProductListProps) {
    
  return (
      <div>
          {productList.map((item, index) => ( 
          <div key={index}>
              {item.attributes.title}
          </div>
          ))}
    </div>
  )
}

export default ProductList