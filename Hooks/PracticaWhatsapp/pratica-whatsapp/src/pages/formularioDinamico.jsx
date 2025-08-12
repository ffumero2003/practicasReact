import { useState } from "react";

function Formulario(){
  const [nombre, setNombre] = useState("")
  const [errorName, setErrorName] = useState("")

  const [email, setEmail] = useState("")
  const [errorEmail, setErrorEmail] = useState("")

  const [success, setSuccess] = useState(false)

  const [skills, setSkills] = useState([])
  const [skillCounter, setSkillCounter] = useState(1)
  const [errorSkill, setErrorSkill] = useState("")
  const [currentSkill, setCurrentSkill] = useState("")



  const handleSubmit = (event) => {
    event.preventDefault()
    // const div = document.createElement("div")
    // div.innerHTML = '<h1>{nombre}</h1>'
    // document.body.appendChild(div)

    const regexNombre = /^[a-zA-Z]+(\s[a-zA-Z]+)+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = true

    if(nombre.trim() === ""){
      setErrorName('Favor Ingresar su nombre')
      isValid = false
    } else if(!regexNombre.test(nombre)){
      setErrorName('Favor ingresar en el formato de nombre(Nombre Apellido)')
      isValid = false
    } else{
      setErrorName("")
    }
    

    if(email.trim() === ""){
      setErrorEmail('Favor ingrese su correo')
      isValid = false
    } else if(!regexEmail.test(email)){
      setErrorEmail("Favor ingrese en formato de correo")
      isValid = false
    } else{
      setErrorEmail("")
    }

    if(isValid){
      setSuccess(true)
    } else{
      setSuccess(false)
    }
    
  }

  const handleSkills = (event) => {
    const skillRegex = /^[A-Za-z\s]+$/
    event.preventDefault()

    if(skills === ""){
      setErrorSkill("Favor ingresar alguna habilidad")
    }
    if(!skillRegex.test(skills)){
      setErrorSkill('Favor ingresarlo en el formato requerido(solo letras)')
    }

    setSkills([...skills, currentSkill])
    setCurrentSkill("")
    setErrorSkill("")
    setSkillCounter(prev => prev + 1)

  }

  return(
    <div className="flex flex-col justify-center items-center h-screen ">
      <form className="p-4 shadow-lg bg-white flex flex-col w-96 " onSubmit={handleSubmit}>
        <h1 className="pb-4 text-blue-900 text-2xl">Ejercicio 1: Formulario Dinamico con Valiidacion(useState)</h1>
        
        <div className="flex flex-col py-3">
          <label htmlFor="nombre">Nombre:</label>
          <input 
          type="text" 
          className="border-b-1 border-gray-300 outline-none mt-1"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}/>
          {errorName && (<p>{errorName}</p>)}
        </div>

        <div className="flex flex-col py-3">
          <label htmlFor="email">Email:</label>
          <input 
          type="text" 
          className="border-b-1 border-gray-300 outline-none mt-1"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          {errorEmail && (<p>{errorEmail}</p>)}
        </div>

        <div className="flex flex-col py-3">
          <label htmlFor="skills">Habilidades:</label>
          <input type="text"
          className="border-b-1 border-gray-300 outline-none mt-1 "
          placeholder={`Habilidad ${skillCounter}`}
          id="skills"
          value={currentSkill}
          onChange={(e) => setCurrentSkill(e.target.value)} />
          <button className="flex p-3 text-white bg-indigo-700 w-fit mt-5 rounded-lg hover:bg-indigo-800 transition-all duration-400" onClick={handleSkills}>Añadir Habilidad</button>
          {errorSkill && (
            <p>{errorSkill}</p>
          )}
        </div>
        {skills.length > 0 && (
          <ul className="flex gap-2">
            {skills.map((skill, i) => {
              return(
                <li className="rounded-lg shadow-lg bg-white" key={i}>{skill}</li>
              )
            })}
          </ul>
        )}
        
        <button type="submit" className="flex p-3 bg-sky-600 w-fit rounded-lg text-white hover:bg-sky-700 transition-all duration-400">Enviar Formulario</button>
      </form>
      {success && (
        <div className="mt-4 bg-stone-400 p-4 rounded-lg shadow-lg">
          <h1>Su nombre y correo fueron enviados</h1>
        </div>
      )}
      
      
    </div>
  )
}

export default Formulario;