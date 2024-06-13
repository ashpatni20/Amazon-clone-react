import { useContext } from "react";
import { ProductContext } from "../main";

const BillSection = () => {
  const { cart } = useContext(ProductContext);

  const total = cart.reduce((acc, next) => {
    const price = parseFloat(next.product_minimum_offer_price.slice(1));
    return acc + price * next.count;
  }, 0);

  return (
    <div className="bg-white max-w-[30%] min-w-[30%] my-4 py-2 ">
      <div className="mx-2">
        <p className="text-sm">
          The price and availability of items at Amazon.in are subject to change.
        </p>
        <div className="flex pt-4 justify-between text-2xl">
          <p className="font-medium text-green-600">Subtotal</p>
          <p>Total items: {cart.length}</p>
        </div>
        <div className="flex pt-2 justify-between text-2xl">
          <p className="font-medium">Total</p>
          <p>${total.toFixed(2)}</p>
        </div>

        <div className="w-[80%] m-auto pt-6">
              <button
                className="w-full m-auto rounded-full p-2 text-xl font-medium bg-yellow-300 hover:bg-yellow-500"
              >
                Buy Now
              </button>
            </div>


      </div>
    </div>
  );
};

export default BillSection;
