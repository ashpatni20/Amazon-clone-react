import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import SectionProducts from "../pages/SectionProducts";
import { ProductContext } from "../main";

const SectionCard = ({ value }) => {
  const { StaticData, heading, productname } = value;
  const {setProduct} = useContext(ProductContext);
  const [showData, setShowData] = useState(StaticData[0]?.data?.products || []);
  const [sectionData, setSectionData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    handleData();
  }, [showData]);

  const handleData = () => {
    const newSectionData = showData.slice(0, 4);
    setSectionData(newSectionData);
  };

  const handleShowData = () => {
    // <SectionProducts products={showData} />;
    setProduct(showData);
    navigate("/products");
    return;
  };

  return (
    <div
      className="p-2 shadow-2xl  max-w-[320px] min-w-[320px] bg-white "
      onClick={handleShowData}
    >
      <h1 className="text-2xl font-bold p-4 ">{heading}</h1>
      {showData.length !== 0 ? (
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {sectionData.map((product) => (
            <div key={v4()}>
              <img
                className="w-[100px] h-[100px] object-contain border border-slate-200 p-2"
                src={product.product_photo}
                alt=""
              />
              <p className="text-[14px] ">{productname}</p>
            </div>
          ))}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default SectionCard;
