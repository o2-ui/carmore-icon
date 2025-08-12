const mergeClassNames = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

const getElementId = (original?: string) => {
  const prefix = 'o2-ui-react-icon';

  let uniqueId = '';
  if (typeof window !== 'undefined') {
    uniqueId = window.crypto.randomUUID();
  } else {
    uniqueId = Array.from({ length: 5 })
      .map(() => Math.random().toString(36).substring(2, 9))
      .join('-');
  }

  return [prefix, uniqueId, original].filter(Boolean).join('-');
};

export { mergeClassNames, getElementId };
