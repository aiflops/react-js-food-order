import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Card from './components/UI/Card';

function App() {
  return (
    <CartProvider>
      <Card />
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
