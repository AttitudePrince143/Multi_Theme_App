import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const Home = () => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


   // Shuffle utility for randomizing product order
  const shuffleArray = (array: Product[]) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };



  // Fetch products from fakestoreapi
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(shuffleArray(data)))
      .catch((err) => console.error('Failed to load products:', err))
      .finally(() => setLoading(false));
  }, []);


  // Reshuffle products when theme changes
  useEffect(() => {
    setProducts((prev) => shuffleArray([...prev]));
  }, [theme]);

  return (
    <motion.main
      key={theme} // triggers animation on theme change
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="mt-24 px-4 max-w-6xl mx-auto"
    >
      <h2 className={`text-3xl md:text-4xl mb-4 ${currentTheme.headerTextStyle}`}>
        Welcome Home
      </h2>

      <p className={`${currentTheme.paragraphStyle} mb-4`}>
        This app demonstrates multi-theme support, dynamic layouts, and product listings fetched from a public API.
        Switch themes and explore different UI experiences.
      </p>

      <button
        onClick={() =>
          document.getElementById('product-section')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Explore Products
      </button>


  {/* Featured products */}
      <section id="product-section">
  <h3 className="text-2xl font-semibold mb-4 text-center sm:text-left">Featured Products</h3>

  {loading ? (
    <p className="text-center text-gray-500">Loading products...</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.slice(0, 6).map((p) => (
        <Card
          key={p.id}
          title={p.title}
          description={p.description.slice(0, 100)}
          image={p.image}
        />
      ))}
    </div>
  )}
</section>

    </motion.main>
  );
};
