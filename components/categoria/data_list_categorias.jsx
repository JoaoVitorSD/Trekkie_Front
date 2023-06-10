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
        name: "Futebol",
        description:
          "Esporte coletivo jogado com uma bola nos pés, visando marcar gols no time adversário.",
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
        name: "Tênis",
        description:
          "Esporte individual ou em duplas que envolve rebater uma bola com uma raquete em uma quadra.",
      },
      {
        name: "Vôlei de Praia",
        description:
          "Esporte coletivo jogado na areia, onde dois times competem para fazer a bola tocar o chão do campo adversário.",
      },
      {
        name: "Paraquedismo",
        description:
          "Atividade de saltar de uma aeronave em voo livre, realizando manobras e planando no ar antes de abrir o paraquedas.",
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
