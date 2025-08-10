const mergeClassNames = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

const getElementId = (original?: string) => {
  const originalId = original || String(Math.floor(Math.random() * 100000)).padStart(5, '0');
  const prefix = 'o2-ui-react-icon';
  return [prefix, originalId].join('-');
};

export { mergeClassNames, getElementId };
