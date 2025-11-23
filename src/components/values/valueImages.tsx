interface ImageItem {
  trust?: { images: { src: string; alt: string } };
  quick?: { images: { src: string; alt: string } };
  hub?: { images: { src: string; alt: string } };
}

interface Props {
  images: ImageItem[];
}

export default function ValueImages({ images }: Props) {
  return (
    <>
      <div className="row mt-4">
        {images.map((item: ImageItem, index: number) => {
          const key = Object.keys(item)[0] as keyof ImageItem;
          const img = item[key]!.images;

          if (index < 2) {
            return (
              <div key={index} className="col-6">
                <img className="w-100 max-height-200 rounded-3" src={img.src} alt={img.alt} />
              </div>
            );
          }
        })}
      </div>

      {images[2] && (() => {
        const item = images[2];
        const key = Object.keys(item)[0] as keyof ImageItem;
        const img = item[key]!.images;

        return (
          <div className="d-block d-md-flex">
            <img
              className="w-100 max-height-200 rounded-3 mb-4 mb-md-0"
              src={img.src}
              alt={img.alt}
            />
          </div>
        );
      })()}
    </>
  );
}
