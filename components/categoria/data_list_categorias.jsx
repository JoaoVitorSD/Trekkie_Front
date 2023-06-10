import { useEffect, useState } from "react";
import Styles from "src/styles/Home.module.css";

export default function ListCategorias({ setCategory }) {
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    let categories = [
      {
        name: "Ciclismo",
        description:
          "Esporte que envolve pedalar em bicicletas em diferentes terrenos e distâncias.",
      },
      {
        name: "Surf",
        description: "Esporte praticado nas ondas do mar utilizando pranchas.",
      },
      {
        name: "Escalada",
        description:
          "Atividade de subir montanhas, paredes de rocha ou estruturas artificiais utilizando técnicas específicas.",
      },
      {
        name: "Caminhada",
        description:
          "Atividade de percorrer a pé trilhas e caminhos em meio à natureza.",
      },
      {
        name: "Corrida",
        description:
          "Atividade de correr em diferentes distâncias, seja em trilhas, estradas ou pistas.",
      },
      {
        name: "Canoagem",
        description:
          "Esporte que envolve navegar em rios, lagos ou mares utilizando uma canoa ou caiaque.",
      },
      {
        name: "Trilha",
        description:
          "Esporte que envolve navegar em rios, lagos ou mares utilizando uma canoa ou caiaque.",
      },
    ];
    setCategoryOptions(
      categories.map((e, i) => (
        <option key={i} value={e.name}>
          {e.description}
        </option>
      ))
    );
  }, []);

  return (
    <div className={Styles["field"]}>
      <label className={Styles["form-label"]}>Categoria</label>
      <input
        className={Styles["form-input"]}
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        list="categorias"
        name="categoria"
      ></input>
      <datalist id="categorias">{categoryOptions}</datalist>
    </div>
  );
}
