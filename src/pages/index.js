import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Login from "./Login";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {


  return (
    <div className="flex items-center justify-center p-6">
   
      
      <div className="grid  sm:grid-cols-2  md:grid-cols-3  gap-x-24 gap-y-12">
        {data.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
