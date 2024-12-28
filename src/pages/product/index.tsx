import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductView from "@/views/product";
import useSWR from "swr";
import {fetcher} from "@/lib/swr/fetcher";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const {push} = useRouter();
  
  const { data, error, isLoading } = useSWR(
    "api/product",
    fetcher
  );

  // console.log(data);

  // kalau pakai useeffect bakal masuk ke product dulu baru diredirect jadi muncul glitch
  // useEffect(() => {
  //   push("/")
  // }, [])

  return (
    <div>
        <ProductView products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default ProductPage;
