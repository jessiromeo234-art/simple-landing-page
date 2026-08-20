import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles, Filter, X } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { CATEGORIES } from '../data/products';

interface ProductShowcaseProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  cartProductIds: string[];
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  onQuickView,
  onAddToCart,
  wishlist,
  onToggleWishlist,
  cartProductIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const matchesSearch =
          searchQuery.trim() === '' ||
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.badges.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // default featured
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-16 md:py-24 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#2D5A27]/12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#2D5A27] font-bold">
              Earth-First Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18311B] mt-1">
              Sustainable Gardening Essentials
            </h2>
            <p className="text-sm sm:text-base text-[#465E49] mt-2 max-w-xl">
              Engineered to replace single-use plastics and toxic synthetics with circular, natural materials that benefit the micro-biome.
            </p>
          </div>

          {/* Quick counts */}
          <div className="text-xs text-[#526B55] font-medium bg-[#EBF2EA] px-3.5 py-2 rounded-xl border border-[#2D5A27]/15 inline-flex items-center gap-2 self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-[#2D5A27]" />
            <span>Showing {filteredProducts.length} certified sustainable products</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#2D5A27] text-white shadow-xs'
                      : 'bg-white text-[#38513B] border border-[#2D5A27]/15 hover:bg-[#EEF4ED]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search & Sort */}
          <div className="flex items-center gap-3">
            {/* Search input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-[#607963] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="product-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools, seeds, ollas..."
                className="w-full pl-9 pr-8 py-2 bg-white text-xs text-[#1D3520] rounded-xl border border-[#2D5A27]/20 focus:outline-none focus:ring-2 focus:ring-[#2D5A27] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative shrink-0">
              <select
                id="product-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products"
                className="appearance-none bg-white text-xs font-medium text-[#29432C] pl-3.5 pr-8 py-2 rounded-xl border border-[#2D5A27]/20 focus:outline-none focus:ring-2 focus:ring-[#2D5A27] cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="rating">Sort: Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#5F7A62] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                isInCart={cartProductIds.includes(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#2D5A27]/15 max-w-lg mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#EBF2EB] text-[#2D5A27] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#1A311D]">No matching products found</h3>
            <p className="text-xs text-[#526B55]">
              We couldn't find any products matching "{searchQuery}". Try selecting another category or resetting your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-[#2D5A27] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
