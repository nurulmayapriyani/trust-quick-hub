import ProductFeatureImg from './products/productFeatureImg';
import ProductFeatureDetails from './products/productFeatureDetails';
import Footer from './footer';

interface Props {
  images: ({
    src: string;
    alt: string;
  })[];
}

export default function AboutUs({
  images,
}: Props) {
  const aboutDetails = { 
  Trust: "Trust - Represents reliability and honesty, ensuring every recommended product is safe and worth considering.", 
  Quick: "Quick - Offers fast, simple, and time-saving product discovery without overwhelming search results.",
  Hub: "Hub - Serves as a centralized place where various trusted products and categories come together."
};

  return (
    <>
    <div className="card card-product card-plain">
      <div className="row">
        <div className="col-12 col-lg-7 mx-auto text-center">
            <h2 className="mb-3">Trust Quick Hub</h2>
            <p className="mb-5">Your all-in-one product hub — Find trusted products quickly</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 pe-5">
          <div className="row">
            <h4 className="mb-3">About Us</h4>
            <p className="mb-5">Welcome to Trust Quick Hub — your reliable shopping destination! We offer a wide variety of carefully selected products from different categories to help you shop smarter and faster. Every item featured here is chosen based on quality, reviews, and popularity, ensuring you always get trusted recommendations. Explore now and enjoy convenient shopping, anytime and anywhere!</p>
            <ProductFeatureDetails details={aboutDetails} />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <ProductFeatureImg images={images}/>
        </div>
      </div>
    </div>
    <div class="mb-5">
      <Footer />
    </div>
    </>
  );
};
