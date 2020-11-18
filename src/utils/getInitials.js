export const getInitials = (fullName) => {
  if (!fullName) return '-';

  const names = fullName.split(' ');

  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[1].substring(0, 1).toUpperCase();
  }
  return initials;
};
