/** @jsx jsx */
import { jsx } from 'theme-ui';

const Flex = (
  {
    alignItems = 'center',
    justifyContent = 'flex-start',
    direction = 'row',
    children,
  },
  props,
) => (
  <div
    {...props}
    sx={{
      display: 'flex',
      alignItems,
      flexDirection: direction,
      justifyContent,
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

export default Flex;
