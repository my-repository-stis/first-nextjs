import ProductView from "@/views/product";
import { productType } from "@/types/productType";

const ProductPage = (props : {products: productType[]}) => {
    const { products } = props;
    return (
        <div>
            <ProductView products={products} />
        </div>
    )
}

export default ProductPage;

export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api/product');
    const data = await res.json();

    return {
        props : 
        {
            products : data.data
        },     
        // setelah 10 detik, nextjs akan trigger untuk regeneration untuk halaman tersebut di backgorund
        // revalidate: 10
    }

}