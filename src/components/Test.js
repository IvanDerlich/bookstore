import PropTypes from 'prop-types';

function Test(props) {
  const { name } = props;
  return (
    <div>
      {name}
    </div>
  );
}

Test.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Test;
