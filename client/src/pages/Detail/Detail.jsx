import { useState,useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch,useSelector } from 'react-redux';
import { postUser } from "../../app/state/userSlice";
import { toast } from "react-toastify";

import * as Yup from "yup";

import "./detail.css";
import { getRequest, postRequest } from "../../services/httpRequest";

const saveUserDataSchema = Yup.object().shape({
  name: Yup.string().required("Nombre requerido"),
  surname: Yup.string().required("Apellido requerido"),
  email: Yup.string().required("Email requerido"),
});

export default function Detail() {
  const dispatch = useDispatch();
  const [stage,setStage] = useState(1)
  const product = JSON.parse(localStorage.getItem('detail'))
  const user = JSON.parse(localStorage.getItem('user'));
  const [isLoadingPay, setIsLoadingPay] = useState(false);
  const INITIAL__VALUES__SAVE__DATA__FORM = {
    name: "",
    surname: "",
    email: "",
  };

  const handlePay = () => {
    setIsLoadingPay(true);

    postRequest({user,product},"/mpago/process")
      .then(res => {
        window.location.href = res.link;
      })
      .catch(err => {
        setIsLoadingPay(false);
        toast.error("Se ha producido un error al generar tu pago, intentá en unos minutos", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      });
  };
  

  useEffect(() => {
    if(stage === 2) {
      handlePay()
    }
  }, [stage])
  return (
    <div className="detail">
      <img className="detail-img" src={product.image} alt={product.title} />
      <div className="detail-container">
        <h2 className="detail-container-title">{product.title}</h2>
        <p className="detail-container-price">ARS $ {product.price}</p>
        <p className="detail-container-description">{product.description}</p>
        <Formik
          initialValues={INITIAL__VALUES__SAVE__DATA__FORM}
          validationSchema={saveUserDataSchema}
          onSubmit={async (values) => {
            localStorage.setItem('user', JSON.stringify(values));
            setStage(2)
          }}
        >
          {({ errors, touched }) => (
            <Form className="detail-form">
              <Field
                className="detail-form-field"
                name="name"
                placeholder="Nombre"
              />
              {errors.name && touched.name ? (
                <div className="detail-form-error">{errors.name}</div>
              ) : null}

              <Field
                className="detail-form-field"
                name="surname"
                placeholder="Apellido"
              />
              {errors.surname && touched.surname ? (
                <div className="detail-form-error">{errors.surname}</div>
              ) : null}

              <Field
                className="detail-form-field"
                name="email"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <div className="detail-form-error">{errors.email}</div>
              ) : null}

              <button className="detail-form-button" type="submit">
                Comprar
              </button>
            </Form>
          )}
        </Formik>

        <div className="cho-container"></div>
      </div>
    </div>
  );
}
