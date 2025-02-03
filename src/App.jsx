import CartContainer from "./components/CartContainer";
import ProductsContainer from "./components/ProductsContainer";

function App() {
  return (
    <main className="bg-rose-100 font-red-hat min-h-screen">
      <div className="max-w-6xl mx-auto py-16 grid grid-cols-3">
        <ProductsContainer />
        <CartContainer />
      </div>
    </main>
  );
}

export default App;
