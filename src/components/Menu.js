import "../stylesheets/Menu.css";

import Car1 from "../img/Car1.jpg";
import Car2 from "../img/Car2.jpg";
import Car3 from "../img/Car3.jpg";

export default function Menu() {
  return (
    <div>
      <div className="name">
        <h3>winta</h3>
        <p>STEAKHOUSE+BAR</p>
      </div>
      <div className="menu-title">
        <h4>LATEST NEWS</h4>
        <h1>Our Recipes</h1>
      </div>

      <section className="main">
        <div className="item">
          <img src={Car1} alt="Steak on a Grill" />
          <h2>Burger Big Daddy Receipt</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            nobis repudiandae facilis minima quibusdam saepe exercitationem
            iusto, aspernatur tempore, a necessitatibus officiis! Doloribus
            excepturi enim, maxime deleniti exercitationem quas eum earum
            eveniet, voluptatem, debitis totam.
          </p>

          <p>Details</p>
          <hr />
        </div>

        <div className="item">
          <img src={Car2} alt="Steak and potatoes" />
          <h2>The Secret Ingredient</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            nobis repudiandae facilis minima quibusdam saepe exercitationem
            iusto, aspernatur tempore, a necessitatibus officiis! Doloribus
            excepturi enim, maxime deleniti exercitationem quas eum earum
            eveniet, voluptatem, debitis totam.
          </p>

          <p>Details</p>
          <hr />
        </div>

        <div className="item">
          <img src={Car3} alt="Veggies on a pan" />
          <h2>Pasta Receipt</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            nobis repudiandae facilis minima quibusdam saepe exercitationem
            iusto, aspernatur tempore, a necessitatibus officiis! Doloribus
            excepturi enim, maxime deleniti exercitationem quas eum earum
            eveniet, voluptatem, debitis totam.
          </p>

          <p>Details</p>
          <hr />
        </div>
      </section>

      <div className="about-home">
        <a href="/">Home</a>
      </div>
    </div>
  );
}
