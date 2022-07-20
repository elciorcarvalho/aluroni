import { useNavigate } from 'react-router-dom';
// Datas
import cardapio from 'data/cardapio.json';
// Styles
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
// Images
import nossaCasa from 'assets/nossa_casa.png';
import { Prato } from 'types/Prato';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato): void {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.resomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}> Nossa casa </h3>
      <div>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185
          <br />
          <br />
          Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
