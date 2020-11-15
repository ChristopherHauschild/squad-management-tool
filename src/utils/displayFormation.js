export const displayFormation = (formation) => {
  if (!formation) return {};

  switch (formation) {
    case '3-4-3':
      return {
        plyr_1: 8,
        plyr_2: 8,
        plyr_3: 8,
        plyr_4: 24,
        plyr_5: 8,
        plyr_6: 8,
        plyr_7: 8,
        plyr_8: 8,
        plyr_9: 8,
        plyr_10: 8,
      };
    case '3-2-2-3':
      return {
        plyr_1: 8,
        plyr_2: 8,
        plyr_3: 8,
        plyr_4: 12,
        plyr_5: 12,
        plyr_6: 12,
        plyr_7: 12,
        plyr_8: 8,
        plyr_9: 8,
        plyr_10: 8,
      };
    case '3-5-2':
      return {
        plyr_1: 12,
        plyr_2: 12,
        plyr_3: 12,
        plyr_4: 12,
        plyr_5: 8,
        plyr_6: 8,
        plyr_7: 8,
        plyr_8: 8,
        plyr_9: 8,
        plyr_10: 8,
      };
    case '4-2-3-1':
      return {
        plyr_1: 24,
        plyr_2: 8,
        plyr_3: 8,
        plyr_4: 8,
        plyr_5: 12,
        plyr_6: 12,
        plyr_7: 24,
        plyr_8: 8,
        plyr_9: 8,
        plyr_10: 8,
      };
    case '4-3-2-1':
      return {
        plyr_1: 24,
        plyr_2: 12,
        plyr_3: 12,
        plyr_4: 8,
        plyr_5: 8,
        plyr_6: 8,
        plyr_7: 24,
        plyr_8: 8,
        plyr_9: 8,
        plyr_10: 8,
      };
    case '4-4-2':
      return {
        plyr_1: 12,
        plyr_2: 12,
        plyr_3: 24,
        plyr_4: 8,
        plyr_5: 8,
        plyr_6: 8,
        plyr_7: 24,
        plyr_8: 8,
        plyr_9: 8,
        plyr_10: 8,
      };
    case '4-5-1':
      return {
        plyr_1: 24,
        plyr_2: 12,
        plyr_3: 12,
        plyr_4: 8,
        plyr_5: 8,
        plyr_6: 8,
        plyr_7: 24,
        plyr_8: 8,
        plyr_9: 8,
        plyr_10: 8,
      };
    case '5-4-1':
      return {
        plyr_1: 24,
        plyr_2: 24,
        plyr_3: 8,
        plyr_4: 8,
        plyr_5: 8,
        plyr_6: 12,
        plyr_7: 12,
        plyr_8: 8,
        plyr_9: 8,
        plyr_10: 8,
      };
    default:
      return {};
  }
};
