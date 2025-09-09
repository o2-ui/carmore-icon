import CustomCrypto from '@/lib/custom-crypto';

const mergeClassNames = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

const getElementId = (original?: string) => {
  const prefix = 'o2_ui_carmore_icon';
  const originalKey = (original || '').toLowerCase().replaceAll('-', '_');
  const uniqueKey = CustomCrypto.randomUUID().toLowerCase().replaceAll('-', '_');

  return [prefix, originalKey, uniqueKey].filter(Boolean).join('__');
};

const getElementClass = (original?: string) => {
  const prefix = 'o2-ui-carmore-icon';
  const originalKey = (original || '').toLowerCase().replace('_', '-');
  return [prefix, originalKey].join('-');
};

export { mergeClassNames, getElementId, getElementClass };
