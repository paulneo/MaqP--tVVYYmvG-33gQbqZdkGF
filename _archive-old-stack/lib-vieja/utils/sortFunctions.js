// sort by date
export const sortByDate = (array) => {
  const arrayOrdenado = array.sort((a, b) => {
    return new Date(b.data.pubDate) - new Date(a.data.pubDate);
  });
  return arrayOrdenado;
};
