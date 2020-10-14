const test = () => {
  const array = ['flatMap()', ' ', 'is', ' ', 'rad'];

  // eslint-disable-next-line no-console
  console.log(array.flatMap((x) => x));
};

// eslint-disable-next-line no-console
console.log(test());
