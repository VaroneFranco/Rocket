import React from 'react'
import s from './Pagination.module.css'

function Pagination({ pag, setPag, users }) {
  var pageNumbers = []
  for (let i = 1; i <= Math.ceil(users.length / 9); i++) {
    pageNumbers.push(i)
  }
  function handleChange(e) {
    e.preventDefault()
    setPag(e.target.value)
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 500)
  }
  return (
    <div className={s.container}>
      {/* <div className={s.botones}>
            {users.length>0 && <button type="" value={0} onClick={handleChange} className={pag=== "0" || !pag ? s.selected : s.boton}>1</button>}
            {users.length>9 && <button type="" value={9} onClick={handleChange} className={pag==="9" ? s.selected : s.boton}>2</button>}
            {users.length>18 && <button type="" value={18} onClick={handleChange} className={pag==="18" ? s.selected : s.boton}>3</button>}
            {users.length>27 && <button type="" value={27} onClick={handleChange} className={pag==="27" ? s.selected : s.boton}>4</button>}
            {users.length>36 && <button type="" value={36} onClick={handleChange} className={pag==="36" ? s.selected : s.boton}>5</button>}
            </div> */}
      <div className={s.botones}>
        {pageNumbers.map((x) => {
          //   x === 1 && <div />
          return (
            <button
              type=''
              value={9 * x - 9}
              onClick={handleChange}
              className={pag !== 9 * x - 9 ? s.boton : s.selected}
            >
              {x}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Pagination
