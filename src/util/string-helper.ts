import CustomCrypto from '@/lib/custom-crypto';

const mergeClassNames = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

const getElementId = (original?: string) => {
  const prefix = 'o2_ui_react_icon';
  const originalKey = (original || '').toLowerCase();
  const uniqueKey = CustomCrypto.randomUUID();

  return [prefix, originalKey, uniqueKey].filter(Boolean).join('__').toLowerCase().replaceAll('-', '_');
};

export { mergeClassNames, getElementId };
