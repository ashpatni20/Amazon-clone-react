const CartCard = ({data, addCount, removeCount, removeItem}) => {
    const stars = () => {
        let star = parseInt(data.product_star_rating);
        let ans = "";
        for (let i = 0; i < star; i++) {
          ans += "⭐️";
        }
        return ans;
      };
  return (
    <div className="flex border border-slate-400 m-4">
      <div className="max-w-[200px] min-w-[200px] p-6 flex justify-center items-center ">
        <img className="max-h-[200px] hover:scale-125 cursor-pointer transition-all duration-500" src={data.product_photo} alt="" />
      </div>
      <div className="p-4 border-l border-slate-400">
        <p className="text-2xl py-2">{data.product_title}</p>
        <p className="text-xl py-2">Ratings : {stars()}</p>
        <div className="flex justify-between items-center">
        <div className="flex gap-5  max-w-fit py-4">
            <button className="border border-yellow-400 px-2 py-1 bg-yellow-500" onClick={() => addCount(data.asin)}>+</button>
            <button className=" px-2 py-1">{data.count}</button>
            <button className="border border-yellow-400 px-2 py-1 text-xl bg-yellow-500" onClick={() => removeCount(data.asin)}>-</button>
        </div>

        <div className="cursor-pointer p-2 rounded-lg bg-yellow-300 hover:bg-yellow-500 px-4" onClick={() => removeItem(data.asin)}>REMOVE 🗑️</div>

        </div>
        <p>{data.sales_volume}</p>
      </div>
    </div>
  )
}

export default CartCard
