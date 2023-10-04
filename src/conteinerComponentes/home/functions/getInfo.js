export default function getInfo (obj) {
  
    return {
      id: obj.id,
      title: obj.volumeInfo.title,
      description: obj.volumeInfo.description,
      img: obj.volumeInfo.imageLinks.smallThumbnail,
    };
  }
