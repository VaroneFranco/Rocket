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
    console.log(e.target.value)
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 500)
  }

  return (
    <div className={s.container}>
      <div className={s.botones}>
        {pageNumbers.map((x) => {
          return (
            <button
              value={9 * x - 9}
              onClick={handleChange}
              className={pag == 9 * x - 9 ? s.selected : s.boton}>
              {x}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Pagination
