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


// dipanggil setiap melakukan request
export async function getServerSideProps() {
    // fetch data from an API
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
    const response = await res.json();

    return { props: { products: response.data } };
}