import { useEffect, useState } from "react";
import Styles from '@/styles/Home.module.css'

export default function ListCategorias({setCategoria}){
  const [categoriaOptions, setCategoriaOptions] =  useState([]);

      useEffect(()=>{
      fetch("http://localhost:8080/categoria/find-all")
      .then( resp => resp.json())
      .then(resp => {
        setCategoriaOptions(resp.map( (e: any,i:any) => <option key={i} value={e.name}>{e.descricao}</option>));
      })
  },[])

    return(
     <div className={Styles['field']}>
              <label className={Styles['form-label']}>Categoria</label>
              <input className={Styles['form-input']} type="text" onChange={e=>setCategoria(e.target.value)} list="categorias" name="categoria"></input>
              <datalist id="categorias">
                {categoriaOptions}
              </datalist>
            </div>
    )

}