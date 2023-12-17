import "../stylesheets/Gallery.css";
import Gal1 from "../img/Gal1.jpg";
import Gal2 from "../img/Gal2.jpg";
import Gal3 from "../img/Gal3.jpg";
import Gal4 from "../img/Gal4.jpg";
import Gal5 from "../img/Gal5.jpg";
import Gal6 from "../img/Gal6.jpg";
import Gal7 from "../img/Gal7.jpg";

export default function Gallery() {
  let gallery = [Gal1, Gal2, Gal3, Gal4, Gal5, Gal6, Gal7];

  let galinfo = [
    "Steak on a grill",
    "Grilled steak is served",
    "Salad to go with the meal",
    "Side salad",
    "Tasty appetizers",
    "Yummy egg breakfast",
    "Dinner is served",
  ];

  let i = 0;

  return (
    <div class="gallery">
      <div className="name">
        <h3>winta</h3>
        <p>STEAKHOUSE+BAR</p>
      </div>
      <h1>Welcome to our gallery!</h1>
      <h3 className="info">Some of our more delicious plates are all here!</h3>
      <div className="images">
        <figure>
          {gallery.map((item) => (
            <div className="img-title">
              <img src={item} alt={`galinfo[i++]`} />
              <figcaption>{galinfo[i++]}</figcaption>
            </div>
          ))}
        </figure>
      </div>
      <p className="gallery-home">
        <a href="/">Home</a>
      </p>
    </div>
  );
}
