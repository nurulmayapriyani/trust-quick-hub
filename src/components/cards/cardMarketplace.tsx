interface Props {
  thumb_src: string;
  title: string;
  link: string;
  collection?: string;
  classList?: string;
  cta?: string;
}

export default function CardMarketplace({
  thumb_src,
  title,
  link,
  classList,
  cta,
}: Props) {

  const classBody = ((cta != null) ? "align-items-end d-flex" : "text-center w-100 pt-8" );

  return (
    <>
      <a href={link}>
        <div className={`card card-background align-items-start mb-4 mb-lg-0 ${classList}`}>
          <div className="full-background" style={{backgroundImage: `url(${thumb_src})`, backgroundSize: 'cover'}}></div>
          <div className={`card-body ${classBody}`}>
            <div className="d-block mt-10">
              <h4 className="text-white font-weight-bolder">{title}</h4>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
