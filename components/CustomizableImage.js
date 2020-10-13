/** @jsx jsx */
import { jsx } from 'theme-ui';
import Flex from './Flex';

const CustomizableImage = ({
  round,
  margin,
  maxWidth = '500px',
  src,
  alt,
  sx = {},
  ...rest
}) => (
  <Flex justifyContent="center">
    <img
      sx={{
        borderRadius: round ? '50%' : 0,
        maxWidth,
        maxHeight: '100%',
        display: 'block',
        ...sx,
      }}
      alt={alt}
      src={src}
      {...rest}
    />
  </Flex>
);

export default CustomizableImage;
