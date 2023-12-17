import "../stylesheets/News.css";

import Gal7 from "../img/Gal7.jpg";

export default function News() {
  return (
    <div className="News">
      <div className="name">
        <h3>winta</h3>
        <p>STEAKHOUSE+BAR</p>
      </div>
      <h2>Upcoming Events...</h2>
      <h4>Live entertainment</h4>
      <p className="dates">October 18, 2024</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aut rem
        et explicabo quas est, itaque a autem soluta iure quo assumenda dolorem
        veniam, placeat deserunt perferendis provident fuga molestiae?
        Necessitatibus quis vero dolore est dolores. Doloremque nostrum eum et,
        dignissimos labore laudantium ipsa nemo eligendi, nulla aut voluptas
        suscipit aperiam quaerat deleniti.
        <p className="dates">December 23, 2024</p>
        <p>
          Aliquam consequatur et quos ratione tenetur distinctio illo sunt
          facere autem commodi sequi ab repudiandae suscipit recusandae quidem
          asperiores pariatur, id placeat dolorem nemo ducimus fugit. Ratione
          voluptas cum inventore? dicta.
        </p>
        Dolorum, aut maiores! Quo illo ipsa aliquid quae nostrum odio quasi,
        cupiditate a quisquam suscipit? Assumenda qui quos eum. Culpa ipsam
        laudantium labore minima omnis ipsa non, quos dolorem pariatur!
      </p>
      <h2 className="karaoke">Karaoke</h2>
      <p className="free-dinner">Win a free dinner!</p>
      <img src={Gal7} alt="Win a Dinner" />
      <p className="dates">Date: January 3, 2025</p>
      <p></p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quos nemo
        dolor, necessitatibus optio corporis magnam ea ducimus enim natus esse
        iusto minus iste. Aperiam voluptate vero doloribus temporibus autem!
      </p>

      <div className="news-home">
        <a href="/">Home</a>
      </div>
    </div>
  );
}
