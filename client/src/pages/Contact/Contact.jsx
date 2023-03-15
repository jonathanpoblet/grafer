import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./contact.css";

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Nombre requerido"),
  email: Yup.string().email("Email invalido").required("Email requerido"),
  title: Yup.string()
    .max(20, "Asunto máximo 20 caracteres")
    .required("Asunto requerido"),
  message: Yup.string()
    .max(100, "Mensaje máximo 100 caracteres")
    .required("Mensaje requerido"),
});

export default function Contact() {
  const INITIAL__VALUES__CONTACT__FORM = {
    name: "",
    email: "",
    title: "",
    message: "",
  };
  return (
    <div className="contact">
      <h1 className="contact-title">Contacto</h1>
      <div className="contact-container">
        <p className="contact-container-text">
          Para asesoramiento personalizado envianos un mail con tu consulta para
          que podamos brindarte todas las herramientas que necesites.
          <br />
          <br />
          Tenemos planes alimentarios, recetarios, herramientas para
          nutricionistas y e-books para que puedas cambiar tu estilo de vida y
          ayudes a otras personas.
        </p>
        <Formik
          initialValues={INITIAL__VALUES__CONTACT__FORM}
          validationSchema={contactSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form className="contact-container-form">
              <Field
                className="contact-container-form-field"
                name="name"
                placeholder="Nombre"
              />
              {errors.name && touched.name ? (
                <div className="contact-container-form-error">
                  {errors.name}
                </div>
              ) : null}

              <Field
                className="contact-container-form-field"
                name="email"
                placeholder="E-mail"
              />
              {errors.email && touched.email ? (
                <div className="contact-container-form-error">
                  {errors.email}
                </div>
              ) : null}

              <Field
                className="contact-container-form-field"
                name="title"
                placeholder="Asunto"
              />
              {errors.title && touched.title ? (
                <div className="contact-container-form-error">
                  {errors.title}
                </div>
              ) : null}

              <Field
                as="textarea"
                className="contact-container-form-textarea"
                name="message"
                placeholder="Mensaje"
              />
              {errors.message && touched.message ? (
                <div className="contact-container-form-error">
                  {errors.message}
                </div>
              ) : null}

              <button className="contact-container-form-button" type="submit">
                Enviar mail
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
