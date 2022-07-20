import { Link, Navigate, useParams } from 'react-router-dom';

export default function Admin() {
  const { user } = useParams();

  if (user !== 'Elcior01') {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <p>Você está logado!</p>
      <Link to="/">&lt; Voltar</Link>
    </div>
  );
}
