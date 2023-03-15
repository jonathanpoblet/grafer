import Grafer from "../../assets/grafer.png";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <h1 className="aboutMe-title">Sobre mí</h1>
      <div className="aboutMe-information">
        <img
          className="aboutMe-information-img"
          src={Grafer}
          alt="Graciela Fernandez"
        />
        <p className="aboutMe-information-text">
          Hola! Bienvenida/o a mi página web!
          <br />
          <br />
          Soy Nutricionista - Dietista Universitaria, apasionada de la{" "}
          <span className="aboutMe-information-text-orange">salud</span>, la
          nutrición y la felicidad de mis pacientes, acompañándolos en el
          control de peso, a identificar sensibilidades a los alimentos y
          mejorar la{" "}
          <span className="aboutMe-information-text-green">nutrición</span> a
          través de planes de comidas, asesoramiento y consejos para aprender a
          comer mejor.
          <br />
          <br />
          Además, soy Obstétrica, egresada de la Universidad de Buenos Aires.
          ¡Así es!
          <br />
          <br />
          Por eso, durante estos años me dediqué mucho a mis dos carreras
          profesionales y en muchos de los casos asistí las patologías del
          embarazo desde los dos aspectos, lo cual hizo que el control de la
          embarazada fuera multidisciplinario y completo.
          <br />
          <br />
          Vivo en Buenos Aires, Argentina y atiendo muchos pacientes en
          consultorio presencial y online.
          <br />
          <br />
          Si te interesa reservar una consulta nutricional, propongo que te
          contactes conmigo de manera directa a través de mi WhatsApp.
          <br />
          <br />
          ¡Unite a mí en este viaje hacia una vida más saludable! <br />
          <br />
          ¡Te espero!
          <br />
          <br />
          Lic. Grafer
        </p>
      </div>
    </div>
  );
}
