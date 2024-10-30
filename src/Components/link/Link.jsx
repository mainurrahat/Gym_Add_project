import PropTypes from "prop-types"; // ES6
const Link = ({ route }) => {
  return (
    <li className="mr-6 px-6 hover:bg-slate-500 " >
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
// Link.prototypes=
Link.PropTypes = {
  route: PropTypes.object,
};
export default Link;
