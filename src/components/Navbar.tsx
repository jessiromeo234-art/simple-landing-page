import React, { useState, useEffect } from 'react';
import { Sprout, ShoppingBag, Leaf, Heart, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  wishlistCount: number;
  onOpenSignup: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  wishlistCount,
  onOpenSignup,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Impact Calculator', href: '#calculator' },
    { label: 'Guide & Newsletter', href: '#signup' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#2D5A27]/10 py-3.5'
            : 'bg-[#FAF8F5]/80 backdrop-blur-xs py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="brand-logo-link"
              href="#"
              className="group flex items-center gap-2.5 text-[#1A331E] font-serif text-2xl font-bold tracking-tight"
            >
              <div className="w-9 h-9 rounded-full bg-[#2D5A27] text-white flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
                <Sprout className="w-5 h-5 text-[#E6F4EA]" />
              </div>
              <span className="font-serif tracking-tight text-2xl text-[#1E3A20]">
                Verdant<span className="text-[#3A7334]">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-[#344C38] hover:text-[#1E3A20] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2D5A27] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: Cart, Wishlist, Free Guide CTA */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Free Guide CTA */}
              <button
                id="header-free-guide-btn"
                onClick={onOpenSignup}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#EBF3EC] text-[#244E20] border border-[#2D5A27]/20 hover:bg-[#2D5A27] hover:text-white transition-all duration-200 shadow-2xs"
              >
                <Leaf className="w-3.5 h-3.5" />
                <span>Get Free Starter Guide</span>
              </button>

              {/* Cart Drawer Trigger */}
              <button
                id="cart-toggle-btn"
                onClick={onOpenCart}
                aria-label="View eco cart"
                className="relative p-2.5 rounded-full text-[#244E20] hover:bg-[#E9EFEB] transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span
                    id="cart-count-badge"
                    className="absolute -top-1 -right-1 bg-[#2D5A27] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF8F5] animate-scale"
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                id="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[#244E20] hover:bg-[#E9EFEB]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden border-t border-[#2D5A27]/10 bg-[#FAF8F5] px-6 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-[#244E20] hover:text-[#143011]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#2D5A27]/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignup();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2D5A27] text-white font-medium text-sm shadow-xs hover:bg-[#23481e]"
              >
                <Leaf className="w-4 h-4" />
                <span>Join Newsletter & Get Free PDF Guide</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
