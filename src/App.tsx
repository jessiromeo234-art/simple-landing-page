import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactBar } from './components/ImpactBar';
import { ProductShowcase } from './components/ProductShowcase';
import { ProductModal } from './components/ProductModal';
import { GardenImpactCalculator } from './components/GardenImpactCalculator';
import { PhilosophySection } from './components/PhilosophySection';
import { EmailSignupSection } from './components/EmailSignupSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { PRODUCTS } from './data/products';
import { Product } from './types';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4000);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to your sample inquiry bag.`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const isAlready = prev.includes(productId);
      const updated = isAlready ? prev.filter((id) => id !== productId) : [...prev, productId];
      showToast(isAlready ? 'Removed from saved favorites' : 'Saved to favorites');
      return updated;
    });
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F3] text-[#1E2B20]">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#1C361E] text-white py-2 px-4 text-center text-xs font-medium border-b border-[#2C4F2E] flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#9EE297]" />
        <span>
          Spring 2026 Season Launch: 100% Peat-Free & Plastic-Free. Use code{' '}
          <strong className="text-[#E5C365] tracking-wide font-mono">VERDANT15</strong> for 15% off your first order!
        </span>
      </div>

      {/* Navigation */}
      <Navbar
        cartCount={cartTotalItems}
        onOpenCart={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onOpenSignup={() => scrollToSection('signup')}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero
          onExploreClick={() => scrollToSection('products')}
          onSignupClick={() => scrollToSection('signup')}
        />

        <ImpactBar />

        <ProductShowcase
          products={PRODUCTS}
          onQuickView={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          cartProductIds={cart.map((i) => i.product.id)}
        />

        <PhilosophySection />

        <GardenImpactCalculator
          onSelectProductRecommendation={() => scrollToSection('products')}
        />

        <EmailSignupSection onSuccessToast={showToast} />

        <TestimonialsSection />

        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenSignup={() => scrollToSection('signup')} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isInCart={selectedProduct ? cart.some((i) => i.product.id === selectedProduct.id) : false}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onSignupClick={() => {
          setIsCartOpen(false);
          scrollToSection('signup');
        }}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div
          id="toast-notification"
          className="fixed bottom-6 right-6 z-50 bg-[#162D18] text-white px-4 py-3 rounded-2xl shadow-xl border border-[#2E5531] flex items-center gap-3 animate-slideUp max-w-sm"
        >
          <CheckCircle2 className="w-5 h-5 text-[#9EE297] shrink-0" />
          <p className="text-xs font-medium leading-snug flex-1">{toastMessage}</p>
          <button
            onClick={() => setToastMessage(null)}
            className="text-gray-400 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
