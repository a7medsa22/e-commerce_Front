// 'use client';

// import { useEffect, useState } from 'react';

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://ecommerce-store-production-sotohy.up.railway.app/api/v1/products')
//       .then((res) => res.json())
//       .then((data) => setProducts(data.data)) // لأن غالبًا الـ response عندك بيجي: { data: [...] }
//       .catch((err) => console.error('Error fetching products:', err));
//   }, []);

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {products.map((product) => (
//         <div key={product._id} className="border p-4 rounded shadow">
//           <img
//             src={product.imageCover}
//             alt={product.title}
//             className="w-full h-40 object-cover mb-2"
//           />
//           <h2 className="font-bold">{product.title}</h2>
//           <p className="text-gray-600">${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductsPage;
