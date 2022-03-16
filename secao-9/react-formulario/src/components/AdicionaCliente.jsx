import React from 'react';
import { Formik } from 'formik';

const AdicionaCliente = () => {

  const validarEmail =(value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
  
  return (
    <>
      <h1>Cadastro de Clientes</h1>

    <Formik
     initialValues={{ nome:'', email:'',nascimento:'' }}
     validate={(values) => {
       const errors = {};

       if(!values.nome){
         errors.nome = 'O nome é obrigatorio';
       }

       if(!values.email){
        errors.email = 'O email é obrigatorio';
      } else if (validarEmail(values.email)) {
        errors.email = 'O email é invalido'

      }

      if(!values.nascimento){
        errors.nascimento = 'A data de nascimento é obrigatorio';
      }
      return errors;
     }}
    onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
    >
      {(props) => (
      <form onSubmit={props.handleSubmit} noValidate  >
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input id="nome"
           name="nome"
            type="text" 
            onChange={props.handleChange}
            value={props.values.nome}
            onBlur={props.handleBlur}
            className={props.errors.nome && props.touched.nome ? 'is-invalid' : ''}
            />
            {props.errors.nome && props.touched.nome ? <div className='error-validate'>{props.errors.nome}</div> : null}

        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email"
           name="email"
          type="email"
           onChange={props.handleChange}
           value={props.values.email} 
           onBlur={props.handleBlur}
           className={props.errors.email && props.touched.email ? 'is-invalid' : ''}
           />
          {props.errors.email && props.touched.email ? <div className='error-validate'>{props.errors.email}</div> : null}
        </div>

        <div className="form-group">
          <label htmlFor="date">Data de Nascimento</label>
          <input 
          id="nascimento"
          name="nascimento"
          type="date" 
          onChange={props.handleChange}
          value={props.values.nascimento}
          onBlur={props.handleBlur}
          className={props.errors.nascimento && props.touched.nascimento ? 'is-invalid' : ''}
          />
          {props.errors.nascimento && props.touched.nascimento ? <div className='error-validate'>{props.errors.nascimento}</div> : null}
        </div>
        
        <button type="submit">Adicionar</button>
      </form>
      )}
    </Formik>
    </>
  );
};

export default AdicionaCliente;
