interface EmptyProps {
  image?: string;
  title?: string;
  description?: string;
  imageClassName?: string;
}

export default function Empty({
  image,
  title,
  description,
  imageClassName = "",
}: EmptyProps) {
  return (
    <div className="py-6 space-y-6">
      {image && (
        <div className={`text-center max-w-[400px] mx-auto ${imageClassName}`}>
          <img className="w-full" src={image} alt="" />
        </div>
      )}
      <div className="space-y-3 text-center">
        {title && <h2 className="font-bold text-lg md:text-xl">{title}</h2>}
        {description && (
          <p className="text-gray-600 text-sm md:text-base">{description}</p>
        )}
      </div>
    </div>
  );
}
