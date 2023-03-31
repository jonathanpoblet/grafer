import { useState,useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch,useSelector } from 'react-redux';
import { postUser } from "../../app/state/userSlice";
import * as Yup from "yup";

import "./detail.css";

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
  const INITIAL__VALUES__SAVE__DATA__FORM = {
    name: "",
    surname: "",
    email: "",
  };
  

  useEffect(() => {
    if(stage === 2) {
      const fetchCheckout = async () => {
        const res = await fetch('http://localhost:3000/api/products/purchase', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user,
            product
          }),
        })
        const data = await res.json()
  
        if(data.global) {
          const script = document.createElement('script')
          script.type = 'text/javascript'
          script.src = 'https://sdk.mercadopago.com/js/v2'
          script.setAttribute('data-preference-id', data.global)
          document.body.appendChild(script)
          
          const mp = new window.MercadoPago('TEST-740b3cb4-a570-4dd2-bf15-74abc09b2f94', {
            locale: 'es-AR'
          })

          mp.checkout({
            preference: {
              id: data.global
            },
            render: {
              container: '.cho-container',
              label: 'Pagar',
            }
          });
        }
      }
  
      const peticion = fetchCheckout()
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
                Guardar información de compra
              </button>
            </Form>
          )}
        </Formik>

        <div className="cho-container"></div>
      </div>
    </div>
  );
}
