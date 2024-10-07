import Catagory from "@/components/Home/Catagory";

export async function getAllCategory() {
const categoryRes = await fetch(
    'https://fakestoreapi.com/products/categories'

);   
return categoryRes.json();
}

export async function getAllProduct() {
    const productRes = await fetch(
        'https://fakestoreapi.com/products'
    );
    return productRes.json();
}

export async function getSingleproduct(id: string) {
    const SingleproductRes = await fetch(`https://fakestoreapi.com/products/${id}`);
    return SingleproductRes.json();
}

export async function getProductByCategory(Catagory:string) {
    const getProductByCategoryRes = await fetch('https://fakestoreapi.com/products/category/jewelery'
    );
    return  getProductByCategoryRes.json();
}


    

    

