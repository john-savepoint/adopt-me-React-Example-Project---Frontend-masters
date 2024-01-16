import PropTypes from "prop-types";

const Pet = ({ name, breed, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{breed}</h2>
      <h2>{age}</h2>
    </div>
  );
};

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Pet;
