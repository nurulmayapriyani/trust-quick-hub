interface Props {
  images: ({
    src: string;
    alt: string;
  })[];
}

export default function ProductGallery({
  images,
}: Props) {

  return (
    <>
      <div className="row mt-4">
         <div className="col-6">
          <img className="w-100 max-height-200 rounded-3" src={images[0].trust.images.src} alt={images[0].trust.images.alt}   />
        </div>
        <div className="col-6">
          <img className="w-100 max-height-200 rounded-3" src={images[1].quick.images.src} alt={images[1].quick.images.alt}  />
        </div>
      </div>
      <div className="d-block d-md-flex">
        <img className="w-100 max-height-200 rounded-3 mb-4 mb-md-0" src={images[2].hub.images.src} alt={images[2].hub.images.alt} />
      </div>
    </>
  );
}
