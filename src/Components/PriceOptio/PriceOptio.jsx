// import Reac from 'react'
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
// PriceOption";

const PriceOptio = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="border-2 rounded-xl p-6 bg-blue-500 text-white flex flex-col ">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold">{name}</span> <br />
        <span className="text-3xl">{price}/-</span> <br />
      </h2>
      <div className="pl-6 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-green-700 py-2 w-full font-bold rounded-lg hover:bg-green-900 ">
        Bye NOw
      </button>
    </div>
  );
};
PriceOptio.propTypes = {
  option: PropTypes.object,
};
export default PriceOptio;
