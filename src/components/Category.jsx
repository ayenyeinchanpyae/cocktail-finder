import { Link } from "react-router-dom";
import ordinarydrink from "../images/ordinarydrink.png";
import softdrink from "../images/softdrink.png";
import vodka from "../images/vodka.png";
import shot from "../images/shot.png";

const Category = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-8 xl:mb-16 mt-[50px] ">
      <p className="text-4xl text-yellow-900 text-center mb-[50px] font-playfair">
        Top Categories
      </p>
      <div className="flex md:flex-row md:flex-wrap md:justify-center flex-col  md:gap-x-[25px] gap-y-[25px]">
        <Link to="/OrdinaryDrink">
          <div className="flex flex-col items-center justify-center w-[250px]   shadow-2xl rounded-[10px]">
            <img src={ordinarydrink} alt="" className="h-[250px]" />
            <p className="text-xl font-garamond mb-[20px]">Ordinary Drink</p>
          </div>
        </Link>
        <Link to="/SoftDrink">
          <div className="flex flex-col items-center justify-center w-[250px]   shadow-2xl rounded-[10px]">
            <img src={softdrink} alt="" className="h-[250px]" />
            <p className="text-xl font-garamond mb-[20px]">Soft Drink</p>
          </div>
        </Link>
        <Link to="/HomemadeLiqueur">
          <div className="flex flex-col items-center justify-center w-[250px]   shadow-2xl rounded-[10px]">
            <img src={vodka} alt="" className="h-[250px]" />
            <p className="text-xl font-garamond mb-[20px]">Homemade Liqueur</p>
          </div>
        </Link>
        <Link to="/Shot">
          <div className="flex flex-col items-center justify-center w-[250px]   shadow-2xl rounded-[10px]">
            <img src={shot} alt="" className="h-[250px]" />
            <p className="text-xl font-garamond mb-[20px]">Shot</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
