export const displayFormation = (formation) => {
  switch (formation) {
    case '3-4-3':
      return [8, 8, 8, 6, 6, 6, 6, 8, 8, 8, 24];
    case '3-2-2-3':
      return [8, 8, 8, 12, 12, 12, 12, 8, 8, 8, 24];
    case '3-5-2':
      return [12, 12, 24, 6, 6, 6, 6, 8, 8, 8, 24];
    case '4-2-3-1':
      return [24, 8, 8, 8, 12, 12, 6, 6, 6, 6, 24];
    case '4-3-2-1':
      return [24, 12, 12, 8, 8, 8, 6, 6, 6, 6, 24];
    case '4-4-2':
      return [12, 12, 6, 6, 6, 6, 6, 6, 6, 6, 24];
    case '4-5-1':
      return [24, 12, 12, 8, 8, 8, 6, 6, 6, 6, 24];
    case '5-4-1':
      return [24, 6, 6, 6, 6, 24, 6, 6, 6, 6, 24];
    default:
      return [];
  }
};
