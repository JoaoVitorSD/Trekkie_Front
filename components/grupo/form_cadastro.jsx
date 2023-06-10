import FormStyle from '@/styles/Group.module.css'
import ModalStyle from '@/styles/Modal.module.css'
import ListCategorias from '../categoria/data_list_categorias.jsx'
import { useState } from 'react'

export default function FormCadastro({ closeModal }) {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");

    function submitForm() {
        fetch("", {
            headers: {

            },
            method: "POST",
            body: JSON.stringify({ categoria: categoria, nome: nome, descricao: descricao })
        })

        closeModal();
    }
    return (
      <div className={ModalStyle["modal-container"]}>
        <div className={FormStyle["form-container"]}>
          <button
            className={FormStyle["close-modal-button"]}
            onClick={() => closeModal()}
            type="button"
          >
            X
          </button>

          <form className={FormStyle["form"]} action="">
            <div className={FormStyle["field"]}>
              <label className={styles["form-label"]}>Nome do grupo</label>
              <input
                type="text"
                onChange={(e) => setNome(e.target.value)}
              ></input>
            </div>
            <ListCategorias setCategoria={setCategoria} />

            <div className={FormStyle["field"]}>
              <label>Descrição</label>
              <input
                type="text"
                onChange={(e) => setDescricao(e.target.value)}
              ></input>
            </div>
            <div className={FormStyle["field"]}>
              <label>Região</label>
              <input
                type="text"
                onChange={(e) => setDescricao(e.target.value)}
              ></input>
            </div>
            <button>Cadastrar</button>
          </form>
        </div>
      </div>
    );
}