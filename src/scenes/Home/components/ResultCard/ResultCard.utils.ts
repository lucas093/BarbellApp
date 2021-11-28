export const calculate = (weights: number[], barWeight: number, weight: number): number[] => {
  const availableWeights = weights.sort((a, b) => b - a);

  let left = weight - barWeight;
  const plates: number[] = [];

  for (let i = 0; i < weights.length; i++) {
    const amount = weights[i] * 2;
    if (amount <= left) {
      left -= amount;
      plates.push(weights[i]);
    }
  }

  return plates;
};

export const plurify = (string: string, value: number = 0) => {
  return `${string}${value > 1 ? 's' : ''}`;
};

const plates = {
  '25': {
    backgroundColor: '#cb2d2d',
    width: 23,
    height: '100%',
    borderRadius: 5,
  },
  '20': {
    backgroundColor: '#427ED8',
    width: 20,
    height: '100%',
    borderRadius: 5,
  },
  '15': {
    backgroundColor: '#D6C52C',
    width: 15,
    height: '100%',
    borderRadius: 5,
  },
  '10': {
    backgroundColor: '#4DCE38',
    width: 13,
    height: '100%',
    borderRadius: 5,
  },
  medium: {
    backgroundColor: '#636B61',
    width: 8,
    height: '65%',
    top: `${50 - 65 / 2}%`,
    borderRadius: 3,
    fontSize: 10,
  },
  small: {
    backgroundColor: '#636B61',
    width: 8,
    height: '45%',
    top: `${50 - 45 / 2}%`,
    borderRadius: 3,
    fontSize: 10,
  },
};

export const getPlateStyle = (weight: number = 0) => {
  if (`${weight}` in plates) {
    return plates[`${weight}`];
  }

  return weight < 5 ? plates.small : plates.medium;
};

const PLATE_INTER_SPACE = 1;
export const getPlateSpacingStyle = (plates: number[], startPosition: number, plateIndex: number): object => {
  if (plateIndex >= plates.length) {
    return {left: startPosition};
  }

  let position = 0;
  for (let i = 0; i <= plateIndex; i++) {
    let plateWidth = getPlateStyle(plates[i]).width;
    plateWidth = parseInt(plateWidth, 10);
    position += PLATE_INTER_SPACE + plateWidth;
  }

  const plateWidth = parseInt(getPlateStyle(plates[plateIndex]).width, 10);

  return {
    left: startPosition + position - plateWidth,
    marginLeft: 15,
  };
};
