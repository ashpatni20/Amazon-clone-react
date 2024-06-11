import { useEffect, useState } from "react";
import { v4 } from "uuid";

const SectionCard = ({ value }) => {
  const { StaticData, heading, productname } = value;
  
  const [showData, setShowData] = useState(StaticData[0]?.data?.products || []);

  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    handleData();
  }, [showData]);

  const handleData = () => {
    const newSectionData = showData.slice(0, 4);
    setSectionData(newSectionData);
  };

  const handleShowData = () => {};

  return (
    <div className="p-2 shadow-2xl bg-slate max-w-[350px] min-w-[350px]" onClick={handleShowData}>
      <h1 className="text-2xl font-bold p-4 ">{heading}</h1>
      {showData.length !== 0 ? (
        <div className="flex flex-wrap gap-4">
          {sectionData.map((product) => (
            <div key={v4()}>
              <img
                className="w-[150px] h-[160px] object-contain"
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
