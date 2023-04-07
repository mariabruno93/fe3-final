import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name,setName]=useState("");
  const [email, setEmail]= useState("");
  const [mostrarError,setMostrarError]=useState(false)
  const [mostrarExito, setMostrarExito]=useState(false)

  //Validaciones
  const isAValidName = name.length>5;
  const isAValidEmail= (email.includes("@")&& email.includes(".com"))
  //OnChanges
  const onChangeName= (e)=>{
    setName(e.target.value)
    console.log(name)
  }
  const onChangeEmail=(e)=>{
    setEmail(e.target.value)
    console.log(email)
  }

  //Submit Handler
  const handleSubmit = (e)=>{
    e.preventDefault()

    if(isAValidName && isAValidEmail){
      setMostrarExito(true)
      setMostrarError(false)
			e.target.reset()
    }
    else{
      setMostrarError(true)
      setMostrarExito(false)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="input"
          onChange={onChangeName}
          placeholder="Nombre Completo" />
        <input 
          type="email"
          className="input"
          onChange={onChangeEmail}
          placeholder="Email" />
          <button type="submit" className="button-form">Enviar</button>
          {mostrarError && <p>Por favor verifique su información nuevamente</p>}
          {mostrarExito && <p>Gracias {name}, te contactaremos cuando antes vía mail</p>}
      </form>
    </div>
  );
};

export default Form;
