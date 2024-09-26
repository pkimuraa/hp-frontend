export const parseDate = (dateString: string): string => {
  return dateString.replace(/-/g, "/");
};
