import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
// Styles
import styles from './Prato.module.scss';
// Datas
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound/Index';
import Template from 'components/Template';

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find((item) => item.id === Number(id));
  if (!prato) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<Template />}>
        <Route
          index
          element={
            <>
              <button className={styles.voltar} onClick={() => navigate(-1)}>
                {'< Voltar'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.titulo}>{prato.title}</h1>
                <div className={styles.imagem}>
                  <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                  <p className={styles.conteudo__descricao}>
                    {prato.description}
                  </p>
                </div>
                <TagsPrato {...prato} />
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
