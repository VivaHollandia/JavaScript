const restParameter = (...parameters) => {
  console.log(`You have passed ${parameters.length} parameters`);
};

restParameter(3, 'A', true);

restParameter([], {}, 'Hello', 45, false);
