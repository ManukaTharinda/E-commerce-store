import { cartItem } from '@/store/cartSlice'
import Image from 'next/image'
import React from 'react'

type props = {
    items: cartItem[]
}

const CartSidebar = ({ items }: props) => {
    return (
        <div className='mt-6 h-full mb-6'>
            <h1 className='text-center font-sans font-bold mb-6 mt-5 capitalize'>Your Cart</h1>
            {items.length === 0 && (
                <div className='flex items-center w-full h-[80vh] flex-col justify-center'>
                    <Image src="/images/cart.svg" alt="empty_cart" width={200} height={200}
                        className='object-cover mx-auto' />
                    <h1 className='mt-4 mb-4 text-black font-sans font-semibold capitalize'>Your cart is empty</h1>
                </div>
            )}
            {items.length > 0 && (
                <div>
                    {items.map((item) => {
                        return (
                            <div key={item.id} className='pb-4 border-b-2 border-gray-300 border-opacity-70 p-4'>
                                <div>
                                    <Image
                                        src={item?.image}
                                        alt={item.title}
                                        width={60}
                                        height={60}
                                        className='object-cover mb-4' />
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default CartSidebar
