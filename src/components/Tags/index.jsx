import React from 'react'
import styles from './Tags.module.scss'
import fotos from '../Gallery/fotos.json'

export default function Tags({tags, filtrarFotos, setItens}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
        <ul className={styles.tags__lista}>
            {tags.map(it => {
              return (
                <li key={it} onClick={()=>filtrarFotos(it)}>{it}</li>
              )
            })}
            <li onClick={()=>setItens(fotos)}>Todas</li>
        </ul>
    </div>
  )
}
