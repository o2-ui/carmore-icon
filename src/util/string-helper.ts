export function mergeClassNames(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
