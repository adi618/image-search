import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => {
        console.log(image);
        return <ImageCard key={image.id} image={image} />;
      })}
    </div>
  );
};

export default ImageList;
