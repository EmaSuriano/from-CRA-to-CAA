/** @jsx jsx */
import { jsx } from 'theme-ui';

const TopWrapper = ({ children }) => (
  <div
    sx={{
      alignItems: 'center',
      color: 'text',
      pointerEvents: 'all',
      margin: 16,
      a: {
        color: 'text',
        transition: 'ease color 0.5s',

        '&:hover': {
          color: 'primary',
        },
      },
    }}
  >
    {children}
  </div>
);

export default TopWrapper;
