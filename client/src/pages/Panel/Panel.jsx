import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./panel.css";

const addProductSchema = Yup.object().shape({
  title: Yup.string().required("Titulo requerido"),
  description: Yup.string().max(300,"Descripción máxima 300 caracteres").required("Descripción requerida"),
  price: Yup.number().required("Precio requerido"),
  type: Yup.string().required("Tipo requerido"),
});

export default function Panel() {
  const INITIAL__VALUES__ADD__PRODUCTS__FORM = {
    title: "",
    description: "",
    price: "",
    type: "alimentaryPlan",
  }

  const uploadImage = async(file,pdf) => {
    const data = new FormData();
    const pdfData = new FormData();
    data.append("file", file);
    data.append("upload_preset", "grafer-images");
    pdfData.append("file", pdf);
    pdfData.append("upload_preset", "grafer-pdfs");
    const request = await fetch(
      "https://api.cloudinary.com/v1_1/dmx8e4tt0/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const requestPdf = await fetch(
      "https://api.cloudinary.com/v1_1/dmx8e4tt0/image/upload",
      {
        method: "POST",
        body: pdfData,
      }
    )
    const responseImg = await request.json();
    const responsePdf = await requestPdf.json();
    return {img: responseImg.secure_url, pdf: responsePdf.secure_url};
  }

  return (
    <div>
      <h1>Agregar Productos</h1>
      <Formik
          initialValues={INITIAL__VALUES__ADD__PRODUCTS__FORM}
          validationSchema={addProductSchema}
          onSubmit={async (values) => {
            const img = document.getElementById("img").files[0];
            const pdf = document.getElementById("pdf").files[0];
            if(img && pdf) {
              const urlImage = await uploadImage(img,pdf);
              values.image = urlImage.img;
              values.pdf = urlImage.pdf;
              console.log(values)
            } else {
              console.log("Mising data")
            }
          }}
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

              <input type="file" id="img" />

              <input type="file" accept="application/pdf,application/vnd.ms-excel" id="pdf" />
              

              <button className="contact-container-form-button" type="submit">
                Añadir producto
              </button>
            </Form>
          )}
        </Formik>
    </div>
  )
}
