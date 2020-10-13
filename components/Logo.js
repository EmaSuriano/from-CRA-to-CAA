/** @jsx jsx */
import { jsx } from 'theme-ui';
import CustomizableImage from './CustomizableImage';

const normalizeName = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((str) => str.toLowerCase())
    .join('-');

const Logo = ({ name }) => {
  try {
    return (
      <CustomizableImage
        src={require(`../assets/logo/${normalizeName(name)}.png`)}
        maxWidth="150px"
        alt={`${name} logo`}
        sx={{
          margin: '10px',
        }}
      />
    );
  } catch (error) {
    return name;
  }
};

export default Logo;
