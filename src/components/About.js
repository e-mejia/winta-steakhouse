import "../stylesheets/About.css";

import Ribeye from "../img/Ribeye-Steak-Garlic-Butter.jpg";

export default function About() {
  return (
    <div className="about-page">
      <div className="name">
        <h3>winta</h3>
        <p>STEAKHOUSE+BAR</p>
      </div>

      <h2>About Winta...</h2>

      <img src={Ribeye} alt="Ribey-Steak-Garlic-Butter" />

      <h3>Our history</h3>

      <p className="bg-slate-200">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ratione
        eos sint quibusdam impedit. Quasi itaque dolorem ipsam magni pariatur
        culpa nulla suscipit impedit quibusdam! Sunt, iusto neque! Adipisci,
        provident. Itaque laboriosam dolore nulla et doloremque voluptas cumque
        quam reiciendis ab quas praesentium asperiores magnam consequuntur
        adipisci eligendi molestias voluptatibus odio obcaecati, unde error
        quaerat nisi. Asperiores nesciunt unde repudiandae.
      </p>
      <p>
        Vero facere quod doloremque odit earum quae quidem veritatis nam
        deleniti ullam excepturi adipisci atque expedita debitis, ea recusandae
        exercitationem delectus! Aliquid dolorem esse eius quo voluptatibus!
        Delectus, expedita? At? Maiores, ducimus eligendi sint adipisci delectus
        quas rem dolorum eum quia optio accusamus pariatur libero labore
        consectetur maxime, voluptate laborum rerum suscipit ut. Officiis
        tempore voluptas et tenetur dicta expedita.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ratione
        eos sint quibusdam impedit. Quasi itaque dolorem ipsam magni pariatur
        culpa nulla suscipit impedit quibusdam! Sunt, iusto neque! Adipisci,
        provident. Itaque laboriosam dolore nulla et doloremque voluptas cumque
        quam reiciendis ab quas praesentium asperiores magnam consequuntur
        adipisci eligendi molestias voluptatibus odio obcaecati, unde error
        quaerat nisi. Asperiores nesciunt unde repudiandae. Vero facere quod
        doloremque odit earum quae quidem veritatis nam deleniti ullam excepturi
        adipisci atque expedita debitis, ea recusandae exercitationem delectus!
        Aliquid dolorem esse eius quo voluptatibus! Delectus, expedita? At?
      </p>

      <p>
        Maiores, ducimus eligendi sint adipisci delectus quas rem dolorum eum
        quia optio accusamus pariatur libero labore consectetur maxime,
        voluptate laborum rerum suscipit ut. Officiis tempore voluptas et
        tenetur dicta expedita. Asperiores alias numquam expedita eveniet esse
        voluptatem, vitae laboriosam doloribus assumenda animi beatae ad. Omnis
        consequuntur sint ab alias harum nobis magni. Earum nihil culpa quis
        incidunt optio molestias debitis.
      </p>
      <div className="about-home">
        <a href="/">Home</a>
      </div>
    </div>
  );
}
