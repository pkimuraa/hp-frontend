interface CharacterImageProps {
  image?: string;
}
const CharacterImage = ({ image }: CharacterImageProps) => {
  const placeholderImage = "https://via.placeholder.com/350?text=No+Image";

  return <img className="w-1/3" src={image ? image : placeholderImage} />;
};

export { CharacterImage };
