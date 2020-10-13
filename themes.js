import { future, syntaxHighlighterPrism } from '@mdx-deck/themes';
import deepmerge from 'deepmerge';

const BASE = {
  styles: {
    a: {
      color: 'text',
      transition: 'ease color 0.5s',

      '&:hover': {
        color: 'primary',
      },
    },
    ul: {
      listStyle: 'none',
      textAlign: 'left',
    },
    li: {
      margin: '10px',
    },
    td: {
      textAlign: 'center',
      padding: '20px',
    },
    th: {
      padding: '20px',
    },
    blockquote: {
      position: 'relative',
      marginLeft: '90px',
      fontStyle: 'italic',
      fontSize: '50px',
      maxWidth: '33em',

      '&:before': {
        content: '"“"',
        fontStyle: 'normal',
        fontWeight: '900',
        fontFamily: 'serif',
        position: 'absolute',
        right: '100%',
        fontSize: '120px',
        lineHeight: '0px',
        top: '50px',
        color: 'primary',
      },
    },
  },
};

const dark = deepmerge.all([future, BASE]);

const light = deepmerge.all([
  future,
  {
    colors: {
      text: '#6983aa',
      background: '#f4f4f4',
      primary: '#8ec6c5',
      black: '#8566aa',
      fade: '#ffffff66',
    },
  },
  BASE,
  syntaxHighlighterPrism,
]);

const omio = deepmerge.all([
  future,
  {
    colors: {
      text: '#132968',
      background: '#fff',
      primary: '#fa6b6b',
      code: '#f4f4f4',
    },
  },
  BASE,
  syntaxHighlighterPrism,
]);

export default {
  dark,
  light,
  omio,
};
