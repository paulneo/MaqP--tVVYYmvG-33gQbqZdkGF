// sort by date
export const sortByDate = (array) => {
  const sortedArray = array.sort(
    (a, b) =>
      new Date(b.data.date && b.data.date) -
      new Date(a.data.date && a.data.date)
  );
  return sortedArray;
};
