import { lazy, Suspense } from "react";
import './css/App.css';
const Slogan = lazy(() => import('./Slogan'));
/*import Footer from '../src/Components/Menu/footer';
import Lojas from '../src/Components/Lojas/lojas'*/
const Link = lazy(() => import('./Link'));
/*import Categorias from '../src/Components/Produtos/categorias'
import ListaProdutos from '../src/Components/Produtos/produtos'*/
const Ying = lazy(() => import('./Img'));
/*import FormIndex from './Components/formulario'
import Contatos from '../src/Components/contatos'
import Categorias from '../src/Component/categorias'
*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<p>Carregando...</p>}>
          <Ying/>
        </ Suspense>
        <br /> <br />
        <Suspense fallback={<p>Carregando...</p>}>
          < Slogan />
        </Suspense>

        <Suspense fallback={<p>Carregando...</p>}>
          <Link />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
