import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faBuilding, faEye, faPhone, faTag, faEnvelope, faLocationDot, faPenToSquare  } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function Card({array}){
  return(
    <>
    {array.map(({ bgLetra, nombre, posicion, label, compania, email, phone, ubicacion, detalles, colorLetra, colorBg}, i) => (
            <div key={i} className="flex flex-col w-1/3 shadow-sm p-3">

              <div className="flex justify-between">

                <div className="flex gap-2">
                  <div className="h-14 w-14 bg-blue-500 rounded-full flex items-center justify-center">
                    <h3 className="text-white text-2xl">{bgLetra}</h3>
                  </div>
                  <div className="flex flex-col ">
                    <h2 className="text-xl text-black">{nombre}</h2>
                    <h5 className="text-md text-gray-400">{posicion}</h5>
                  </div>
                </div>

                <div className={`${colorBg} ${colorLetra} flex justify-center items-center rounded-lg px-3 py-1 h-fit w-fit`}>
                  <p >{label}</p>
                </div>

              </div>

              <div className="flex flex-col gap-4 mt-5">

                <div className="flex gap-1 items-center justify-start text-gray-500">
                  <FontAwesomeIcon icon={faBuilding} />
                  <p>{compania}</p>
                </div>

                <div className="flex gap-1 items-center justify-start text-gray-500">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>{email}</p>
                </div>

                <div className="flex gap-1 items-center justify-start text-gray-500">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>{phone}</p>
                </div>

                <div className="flex gap-1 items-center justify-start text-gray-500">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>{ubicacion}</p>
                </div>

              </div>

              <div className="flex gap-2 mt-3"> 
              {detalles.map((det, i) => (
                  <div key={i} className="flex justify-center items-center gap-1">
                    <FontAwesomeIcon icon={faTag} />
                    <p>{det}</p>
                  </div>
              ))}
              </div>

              <div className="flex justify-between mt-5 items-center">
                <div className="text-gray-500 flex justify-center items-center">
                  <p>06 ago 2025</p>
                </div>
                <div className="flex gap-5 justify-center items-center">
                  <Link
                    to={`/detalle/${i + 1}`}
                    aria-label={`Ver detalles de ${nombre}`}
                    className="inline-flex items-center justify-center relative z-10 cursor-pointer"
                    onClick={() => console.log('click link', i + 1)}
                  >
                    <FontAwesomeIcon icon={faEye} className="text-black text-lg pointer-events-auto" />
                  </Link>
                  <FontAwesomeIcon icon={faPenToSquare} className="text-blue-400 text-lg"/>
                </div>
              </div>

            </div>
          ))}
          </>
  )
}

export default Card;