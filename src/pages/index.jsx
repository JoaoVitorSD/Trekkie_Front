import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Card from 'components/grupo/card'
import FormCadastro from 'components/grupo/form_cadastro'
import ListCategorias from '../../components/categoria/data_list_categorias.jsx'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [category, setCategory] = useState("");
  const [minParticipants, setMinParticipants] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("");
  const [level, setLevel] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [groups, setGroups] = useState([]);
const sportsCategories = [
  "Ciclismo",
  "Surf",
  "Escalada",
  "Caminhada",
  "Futebol",
  "Corrida",
  "Canoagem",
  "Tênis",
  "Vôlei de Praia",
  "Paraquedismo",
];

const levels = ["Iniciante", "Intermediário", "Avançado"];

const groupKeywords = [
  "Aventura",
  "Radical",
  "Exploradores",
  "Natureza",
  "Respire",
  "Movimento",
  "Unidos",
  "Em Equilíbrio",
  "Energia",
  "Desafio",
];
  function listGroups() {
    let randomGroups = [];
    for (var i = 0; i < 5; i++) {
      randomGroups.push(generateRandomGroup());
    }
    setGroups(
      randomGroups.filter( grupo =>{
        console.log(grupo, category, minParticipants, maxParticipants, level);
        return (category === "" || grupo.categories.includes(category)) &&
          (isNaN(minParticipants) || grupo.participants >= minParticipants) &&
          (isNaN(maxParticipants) || grupo.participants <= maxParticipants) &&
          (level === "" || grupo.level === level);

          
      }
      ).map( (e,i) => <Card key={i}/>)
    );
  }
function generateRandomGroup() {
  const groupName = generateGroupName();
  const categoryCount = Math.floor(Math.random() * 3) + 1;
  const groupCategories = [];

  for (let i = 0; i < categoryCount; i++) {
    const randomCategory =
      sportsCategories[Math.floor(Math.random() * sportsCategories.length)];
    if (!groupCategories.includes(randomCategory)) {
      groupCategories.push(randomCategory);
    }
  }

  const participantCount = Math.floor(Math.random() * 20) + 1;
  const groupLevel = levels[Math.floor(Math.random() * levels.length)];

  const group = {
    name: groupName,
    categories: groupCategories,
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
      <Head>
        <title>Trekkie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <a href="http://localhost:3000" className={styles.title}>
            Trenkkie
          </a>
          <div className={styles.description}>Esportes ao ar livre</div>
          <nav className={styles.nav}>
            <ul className={styles.navlist}>
              <li className={styles["nav-bar-option"]}>Sobre nós</li>
              <li className={styles["nav-bar-option"]}>Dúvidas</li>
              <li className={styles["nav-bar-option"]}>Suporte</li>
            </ul>
          </nav>

          <div className={styles["user-area"]}>
            <button
              className={`${styles["user-button"]} ${styles["user-button-sign"]}`}
            >
              sign in
            </button>
            <button
              className={`${styles["user-button"]} ${styles["user-button-log"]}`}
            >
              log in
            </button>
          </div>
        </header>
        <div className="search-form-container">
          <form className={styles["form-search"]}>
            <ListCategorias setCategory={setCategory} />
            <div className={styles["field"]}>
              <label className={styles["form-label"]}>Número de Participantes</label>
              <input
                type="range"
                min="0"
                max="100"
                value={minParticipants}
                onChange={(e) =>
                  setMinParticipants(
                    e.target.value
                  )
                }
              />
              <input
                type="range"
                min="0"
                max="100"
                value={maxParticipants}
                onChange={(e) =>
                  setMaxParticipants([
                    minParticipants,
                    parseInt(e.target.value),
                  ])
                }
              />
              {minParticipants} - {maxParticipants}
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
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediario</option>
                <option value="avançado">Avançado</option>
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
        {groups}
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