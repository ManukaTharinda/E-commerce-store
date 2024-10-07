import { getProductByCategory, getSingleproduct } from '@/Request/Request';
import { product } from '@/typing';
import { StarIcon } from 'lucide-react';
import React from 'react';
import AddToCart from './addcart';
import ProductCard from '@/components/Home/ProductCard';
import Image from 'next/image';

const ProductdetailsPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const singleProduct: product = await getSingleproduct(id);
  const relatedProduct: product[] = await getProductByCategory(
    singleProduct.category
  );
  
  const num = Math.round(singleProduct?.rating?.rate);
  const starArray = new Array(num).fill(0);

  return (
    <div className='mt-20'>
      {/* define grid system */}
      <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4'>
        {/* product image */}
        <div className='col-span-3 mb-6 lg:mb-0'>
          <img
            src={singleProduct?.image}
            alt={singleProduct?.title}
            width={400}
            height={400}
            className=''
          />
        </div>

        {/* content  */}
        <div className='col-span-4 lg:col-span-4'>
          <h1 className='lg:text-3xl text-2xl font-bold text-black'>
            {singleProduct.title}
          </h1>
          <div className='mt-2 flex items-center space-x-2'>
            <div className='flex items-center'>
              {starArray.map(() => (
                <StarIcon
                  key={Math.random() * 5000}
                  size={20}
                  fill='yellow'
                  className='text-yellow-600'
                />
              ))}
            </div>
            <p className='text-base text-gray-700 font-semibold'>
              ({singleProduct?.rating.count} Reviews)
            </p>
          </div>
          <span className='w-1/4 h-[1.6px] bg-gray-500 rounded-lg block mt-4 opacity-20 mb-4'></span>
          <h1 className='lg:text-6xl text-3xl md:text-4xl text-blue-800'>${singleProduct?.price.toFixed(2)}</h1>
          <p className='mt-4 text-base text-black opacity-90'>{singleProduct?.description}</p>
          <p className='mt-4 text-sm text-black text-opacity-90 font-serif font-semibold'>Category: {singleProduct?.category}</p>
          <p className='mt-2 text-sm text-black text-opacity-90 font-serif font-semibold'>Tag: shop, wow</p>
          <p className='mt-2 text-sm text-black text-opacity-90 font-serif font-semibold'>SKU: {Math.random() * 500}</p>
          {/* Add to Cart Buttons */}
          <AddToCart />
        </div>
      </div>
      <div className='w-4/5 mt-16 mx-auto'>
        <h1 className='text-2xl text-black font-semibold'>Related Products</h1>
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
          {relatedProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductdetailsPage;
