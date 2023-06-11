import Header from "src/components/header.jsx";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Card from "components/grupo/card";
import FormCadastro from "components/grupo/form_cadastro";
import ListCategorias from "../../components/categoria/data_list_categorias.jsx";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [category, setCategory] = useState("");
  const [minParticipants, setMinParticipants] = useState(0);
  const [maxParticipants, setMaxParticipants] = useState(200);
  const [nome, setNome] = useState("");
  const [level, setLevel] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [groups, setGroups] = useState([]);
  const sportsCategory = [
    "Caminhada",
    "Ciclismo",
    "Corrida",
    "Canoagem",
    "Escalada",
    "Surf",
    "Trilha",
  ];

  const levels = ["Iniciante", "Intermediario", "Avançado"];

  const groupKeywords = [
    "Aventura",
    "Radical",
    "Exploradores",
    "Aventureiros",
    "Equipe",
    "Adrenalina",
    "Natureza",
    "Esportistas",
    "Respire",
    "Movimento",
    "Unidos",
    "Equilíbrio",
    "Energia",
    "Desafio",
  ];
  function listGroups() {
    let randomGroups = [];
    for (var i = 0; i<20; i++) {
      let group = generateRandomGroup();
      if ((nome === "" || group.name.includes(nome))&&(
          category === "" || group.category.includes(category)) &&
        (isNaN(minParticipants) || group.participants >= minParticipants) &&
        (isNaN(maxParticipants) || group.participants <= maxParticipants) &&
        (level === "" || group.level === level)
      ) {
        randomGroups.push(group);
      }
    }
    setGroups(
      randomGroups
        .filter((grupo) => {
          return (
            (category === "" || grupo.category.includes(category)) &&
            (isNaN(minParticipants) || grupo.participants >= minParticipants) &&
            (isNaN(maxParticipants) || grupo.participants <= maxParticipants) &&
            (level === "" || grupo.level === level)
          );
        })
        .map((e, i) => <Card key={i} label={e.name} category={e.category} />)
    );
  }
  function generateRandomGroup() {
    const groupName = generateGroupName();
    const categoryCount = Math.floor(Math.random() * 3) + 1;
    const groupCategory = sportsCategory[Math.floor(Math.random() * sportsCategory.length)];
    const participantCount = Math.floor(Math.random() * 20) + 1;
    const groupLevel = levels[Math.floor(Math.random() * levels.length)];

    const group = {
      name: groupName,
      category: groupCategory,
      participants: participantCount,
      level: groupLevel,
    };

    return group;
  }

  function generateGroupName() {
    const randomKeywords = [];
    for (let i = 0; i < 2; i++) {
      const randomKeyword =
        groupKeywords[Math.floor(Math.random() * groupKeywords.length)];
      randomKeywords.push(randomKeyword);
    }

    const groupName = randomKeywords.join(" ");
    return groupName;
  }

  return (
    <>
     <Header />
      <main className={styles.main}>
        <div className="search-form-container">
          <form className={styles["form-search"]}>
            <div className={styles["field"]}>
              <label className={styles["form-label"]}>Nome</label>
              <input
                className={styles["form-input"]}
                type="text"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              ></input>
            </div>
            <ListCategorias setCategory={setCategory} />
            <div className={styles["field"]}>
              <label className={styles["form-label"]}>Min. Participantes</label>
              <input
                className={styles["form-input"]}
                type="number"
                name="minParticipantes"
                value={minParticipants}
                onChange={(e) => setMinParticipants(e.target.value)}
              ></input>
            </div>
            <div className={styles["field"]}>
              <label className={styles["form-label"]}>Max. Participantes</label>
              <input
                className={styles["form-input"]}
                type="number"
                name="maxParticipantes"
                value={maxParticipants}
                onChange={(e) => setMaxParticipants(e.target.value)}
              ></input>
            </div>
            <div className={styles["field"]}>
              <label className={styles["form-label"]} htmlFor="nivel">
                Nível
              </label>
              <select
                className={styles["form-select-categorias"]}
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                name="nivel"
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediario">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
            <div className={styles["button-container"]}>
              <button
                className={styles["form-button"]}
                type="button"
                onClick={listGroups}
              >
                {" "}
                Buscar{" "}
              </button>
            </div>
          </form>
        </div>
        <div className={styles["groups-container"]}>
          {groups.length > 0 ? groups : "Não foram encontrados grupos"}
        </div>
        <div
          className={styles["add-group"]}
          onClick={() => setShowModal(!showModal)}
        >
          +
        </div>
        {showModal ? (
          <FormCadastro closeModal={() => setShowModal(false)} />
        ) : null}
      </main>
    </>
  );
}
