// import React from 'react'
import PropTypes from "prop-types";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Feature = ({ feature }) => {
  return (
    <div>
      <h2 className="flex items-center gap-2">
        <IoIosCheckmarkCircleOutline className="text-green-500"></IoIosCheckmarkCircleOutline>
        {feature}
      </h2>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
