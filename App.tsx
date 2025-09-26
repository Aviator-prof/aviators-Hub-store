import React from 'react';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 font-sans">
      <Header />
      <main id="main-content" className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
            Premium Aviation Resources
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Hand-picked tools and knowledge to accelerate your career in aviation.
          </p>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRODUCTS.map(product => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default App;