import { fetcher } from "@/lib/swr/fetcher";
import useSWR from "swr";
import {useRouter} from "next/router";
import DetailProduct from "@/views/detailProduct";
import { productType } from "@/types/productType";
import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config";



const DetailProductPage = ({product} : {product : productType}) => {
    const {query} = useRouter();

    // Client Side
    // const { data, error, isLoading } = useSWR(
    //     `/api/product/${query.product}`,
    //     fetcher
    // );

    return (
        <>
            {/* Client side */}
            {/* <DetailProduct product={isLoading ? {} : data.data}/> */}
            {/* Server side & Static side*/}
            <DetailProduct product={product}/>
        </>
    )
}

export default DetailProductPage;

// Server side
export async function getServerSideProps(params : {product : string}) {
    // fetch data from an API
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.product}`);
    const response = await res.json();

    return { props: { product: response.data} };
}


// Static side
// export async function getStaticPaths(){
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/`);
//     const response = await res.json();

//     const paths = response.data.map((product:productType) => ({
//         params : {product : product.id}
//     }));

//     return {paths, fallback: false}
// }

// export async function getStaticProps({params} : {params : {product:string}}){
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.product}`);
//     const data = await res.json();

//     return {props : {product : data.data}}
// }