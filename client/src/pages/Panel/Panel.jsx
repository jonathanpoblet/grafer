import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addProductToCollection } from "../../app/state/productsSlice";
import "./panel.css";

const addProductSchema = Yup.object().shape({
  title: Yup.string().required("Titulo requerido"),
  description: Yup.string().max(300,"Descripción máxima 300 caracteres").required("Descripción requerida"),
  price: Yup.number().required("Precio requerido"),
  name: Yup.string().required("Tipo requerido"),
});

export default function Panel() {
  const dispatch = useDispatch();
  const INITIAL__VALUES__ADD__PRODUCTS__FORM = {
    title: "",
    description: "",
    price: "",
    name: "alimentaryPlans",
  }

  const uploadImage = async(file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "grafer-images");
    const request = await fetch(
      "https://api.cloudinary.com/v1_1/dmx8e4tt0/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const responseImg = await request.json();
    return responseImg.secure_url;
  }

  return (
    <div>
      <h1>Agregar Productos</h1>
      <Formik
          initialValues={INITIAL__VALUES__ADD__PRODUCTS__FORM}
          validationSchema={addProductSchema}
          onSubmit={async (values) => {
            const img = document.getElementById("img").files[0];
            if(img) {
              const urlImage = await uploadImage(img);
              values.image = urlImage;
              dispatch(addProductToCollection(values))
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
                name="name"
                placeholder="Tipo"
                as="select"
              >
                <option value="alimentaryPlans">Planes alimentarios</option>
                <option value="ebooks">E-books</option>
                <option value="recetaries">Recetarios</option>
              </Field>
              {errors.type && touched.type ? (
                <div className="contact-container-form-error">
                  {errors.type}
                </div>
              ) : null}

              <input type="file" id="img" />              

              <button className="contact-container-form-button" type="submit">
                Añadir producto
              </button>
            </Form>
          )}
        </Formik>
    </div>
  )
}
