import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Gallery.module.scss'
import Cards from './Cards'
import fotos from './fotos.json'

export default function Gallery() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map(valor => valor.tag))]

  const filtrarFotos = (tag) => {
    const filtro = fotos.filter(foto => {
      return foto.tag === tag;
    })

    setItens(filtro);
  }

  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
        <Cards fotos={itens} styles={styles}/>
    </section>
  )
}
