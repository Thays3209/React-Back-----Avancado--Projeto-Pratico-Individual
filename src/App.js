import { lazy, Suspense } from "react";
import './css/App.css';
const Slogan = lazy(() => import('./texto'));
/*import Footer from '../src/Components/Menu/footer';
import Lojas from '../src/Components/Lojas/lojas'*/
const Link = lazy(() => import('./Loja'));
/*import Categorias from '../src/Components/Produtos/categorias'
import ListaProdutos from '../src/Components/Produtos/produtos'*/
const  Full = lazy(() => import('./img'));
/*import FormIndex from './Components/formulario'
import Contatos from '../src/Components/contatos'
import Categorias from '../src/Component/categorias'
*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<p>Carregando...</p>}>
          <Full/>
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
