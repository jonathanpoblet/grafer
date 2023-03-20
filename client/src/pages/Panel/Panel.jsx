import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./panel.css";

const addProductSchema = Yup.object().shape({
  title: Yup.string().required("Titulo requerido"),
  description: Yup.string().max(300,"Descripción máxima 300 caracteres").required("Descripción requerida"),
  price: Yup.number().required("Precio requerido"),
  type: Yup.string().required("Tipo requerido"),
  image: Yup.mixed().required("Imagen requerida"),
  file: Yup.mixed().required("PDF requerido")
});

export default function Panel() {
  const INITIAL__VALUES__ADD__PRODUCTS__FORM = {
    title: "",
    description: "",
    price: "",
    type: "",
    image: "",
    file:""
  }
  return (
    <div>
      <h1>Agregar Productos</h1>
      <Formik
          initialValues={INITIAL__VALUES__ADD__PRODUCTS__FORM}
          validationSchema={addProductSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form className="contact-container-form">
              <Field
                className="contact-container-form-field"
                name="title"
                placeholder="Titulo"
              />
              {errors.title && touched.title ? (
                <div className="contact-container-form-error">
                  {errors.title}
                </div>
              ) : null}

              <Field
                as="textarea"
                className="contact-container-form-textarea"
                name="description"
                placeholder="Description"
              />
              {errors.description && touched.description ? (
                <div className="contact-container-form-error">
                  {errors.description}
                </div>
              ) : null}

              <Field
                className="contact-container-form-field"
                name="price"
                placeholder="Precio ARS"
              />
              {errors.price && touched.price ? (
                <div className="contact-container-form-error">
                  {errors.price}
                </div>
              ) : null}

              <Field
                className="contact-container-form-field"
                name="type"
                placeholder="Tipo"
                as="select"
              >
                <option value="alimentaryPlan">Planes alimentarios</option>
                <option value="ebook">E-books</option>
                <option value="nutritionalTool">Herramientas para nutricionistas</option>
                <option value="recetary">Recetarios</option>
              </Field>
              {errors.type && touched.type ? (
                <div className="contact-container-form-error">
                  {errors.type}
                </div>
              ) : null}

              <Field
                className="contact-container-form-field"
                name="image"
                placeholder="Tipo"
                type="file"
              />
              {errors.image && touched.image ? (
                <div className="contact-container-form-error">
                  {errors.image}
                </div>
              ) : null}

              <Field
                className="contact-container-form-field"
                name="file"
                placeholder="Tipo"
                type="file"
              />
              {errors.file && touched.file ? (
                <div className="contact-container-form-error">
                  {errors.file}
                </div>
              ) : null}
              

              <button className="contact-container-form-button" type="submit">
                Añadir producto
              </button>
            </Form>
          )}
        </Formik>
    </div>
  )
}
