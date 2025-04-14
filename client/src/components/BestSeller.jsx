import React from "react";
import ProductCart from "./ProductCart";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-6 gap-6">
        {products
          .filter((product) => product.inStock)
          .slice(0, 7)
          .map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer px-3 rounded-lg flex flex-col justify-center items-center"
            >
              <ProductCart product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
