
export default function getInfo(obj) {
  const description = obj.volumeInfo.description || ""; // Asegúrate de que description esté definido

  // Buscar el primer punto en la descripción
  const indexOfFirstPeriod = description.indexOf(".");

  // Si se encuentra un punto, recortar la descripción hasta ese punto
  const truncatedDescription =
    indexOfFirstPeriod !== -1
      ? description.slice(0, indexOfFirstPeriod + 1)
      : description;

  return {
    id: obj.id,
    title: obj.volumeInfo.title,
    description: truncatedDescription,
    img: obj.volumeInfo.imageLinks.smallThumbnail,
    page: obj.pageCount,
  };
}

