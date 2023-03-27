import { useEffect } from 'react';
import { Formik, Form, Field } from "formik";
import { useDispatch,useSelector } from "react-redux";
import * as Yup from "yup";
import { addProductToCollection, getAllProducts } from "../../app/state/productsSlice";
import PanelTable from '../../components/PanelTable/PanelTable';
import { toast } from "react-toastify";
import "./panel.css";

const addProductSchema = Yup.object().shape({
  title: Yup.string().required("Titulo requerido"),
  description: Yup.string().max(400,"Descripción máxima 400 caracteres").required("Descripción requerida"),
  price: Yup.number().required("Precio requerido"),
  name: Yup.string().required("Tipo requerido"),
});

export default function Panel() {
  const products = useSelector(store => store.products.products); 
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

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])

  return (
    <div className="panel">
      <h1 className="panel-title">Panel de Administrador</h1>
      <Formik
          initialValues={INITIAL__VALUES__ADD__PRODUCTS__FORM}
          validationSchema={addProductSchema}
          onSubmit={async (values) => {
            const img = document.getElementById("img").files[0];
            const password = document.getElementById("password")
            if(img) {
              if(password.value === 'papafrita') {
                const urlImage = await uploadImage(img);
                values.image = urlImage;
                const request = dispatch(addProductToCollection(values));
                if(request) {
                  toast.success('Producto Cargado', {
                    position: "top-right",
                    autoClose: 1111,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                  }
                } else {
                  toast.error('Contraseña de administrador incorrecta', {
                    position: "top-right",
                    autoClose: 1111,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                }
            } else {
              toast.error('Faltan datos', {
                    position: "top-right",
                    autoClose: 1111,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className="panel-form">

              <input type="password" id="password" className='panel-form-field' placeholder='Contraseña de Administrador'/>              

              <Field
                className="panel-form-field"
                name="title"
                placeholder="Titulo"
              />
              {errors.title && touched.title ? (
                <div className="panel-form-error">
                  {errors.title}
                </div>
              ) : null}

              <Field
                as="textarea"
                className="panel-form-textarea"
                name="description"
                placeholder="Description"
              />
              {errors.description && touched.description ? (
                <div className="panel-form-error">
                  {errors.description}
                </div>
              ) : null}

              <Field
                className="panel-form-field"
                name="price"
                placeholder="Precio ARS"
              />
              {errors.price && touched.price ? (
                <div className="panel-form-error">
                  {errors.price}
                </div>
              ) : null}

              <Field
                className="panel-form-field"
                name="name"
                placeholder="Tipo"
                as="select"
              >
                <option value="alimentaryPlans">Planes alimentarios</option>
                <option value="ebooks">E-books</option>
                <option value="recetaries">Recetarios</option>
              </Field>
              {errors.type && touched.type ? (
                <div className="panel-form-error">
                  {errors.type}
                </div>
              ) : null}

              <input type="file" id="img" />              

              <button className="panel-form-button" type="submit">
                Añadir producto
              </button>
            </Form>
          )}
        </Formik>

        <h2 className='panel-subtitle'>Productos</h2>
        <PanelTable
          products={products}
        />
    </div>
  )
}
