/** @jsx jsx */
import { jsx } from 'theme-ui';

const BackgroundImage = ({ src, children, fade }) => (
  <div
    sx={{
      width: '100%',
      height: '100%',
      backgroundImage: `url(${src})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    <div
      sx={{
        background: fade,
        width: '100%',
        height: '100%',
      }}
    >
      <div
        sx={{
          position: 'absolute',
          marginLeft: '100px',
          marginTop: '200px',
        }}
      >
        {children}
      </div>
    </div>
  </div>
);

export default BackgroundImage;
