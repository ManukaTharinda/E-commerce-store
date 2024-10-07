"use client";


import { product } from '@/typing';
import { Heart, ShoppingBag, StarIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';

type Props = {
  product: product;
};

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  // Round rating and create an array to map stars
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);

  // Handler to add product to cart
  const addToCardHandler = (product: product) => {
    dispatch(addItem(product));
  };

  return (
    <div className='p-4'>
      <div className='w-[200px] h-[150px]'>
        <img
          src={product.image}
          alt={product.title}
          height={100}
          width={100}
          className='w-[80%] h-[80%] object-contain'
        />
      </div>
      <p className='mt-5 text-xs capitalize text-gray-600'>
        {product.category}
      </p>
      <Link href={`/product/product-details/${product.id}`}>
        <h1 className='text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-serif font-semibold'>
          {product.title}
        </h1>
      </Link>
      <div className='flex items-center mt-2'>
        {ratingArray.map((_, index) => (
          <StarIcon key={index} size={16} className="text-yellow-500" fill="currentColor" />
        ))}
      </div>

      {/* Pricing */}
      <div className='flex mt-2 items-center space-x-2'>
        <p className='text-black text-base line-through font-semibold opacity-50'>
          {`$${(product.price + 10).toFixed(2)}`}
        </p>
        <p className='text-black text-lg font-bold'>
          {`$${product.price.toFixed(2)}`}
        </p>
      </div>

      {/* Bottoms */}
      <div className='mt-4 flex items-center space-x-2'>
        <Button onClick={() => addToCardHandler(product)} size={"icon"}>
          <ShoppingBag size={18} />
        </Button>
        <Button size={"icon"} className='bg-red-600'>
          <Heart />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
