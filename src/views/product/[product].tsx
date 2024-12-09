import { useRouter } from "next/router";

const DetailProductView = () => {
    const {query} = useRouter();
    return (
        <div>
            <h1>Detail Product</h1>
            <p>Product : {query.product}</p>
        </div>
    )
}

export default DetailProductView;