import React from 'react';
import { Star, Heart, Eye, Plus, Check, Leaf } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  isInCart: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  isInCart,
}) => {
  return (
    <article
      id={`product-card-${product.id}`}
      className="verdant-card overflow-hidden flex flex-col justify-between group"
    >
      {/* Top Image Figure Container */}
      <figure className="relative aspect-4/3 overflow-hidden bg-[#F1EFE9] m-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Primary Eco Badges */}
        <figcaption className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[80%] pointer-events-none">
          {product.badges.slice(0, 2).map((badge, idx) => (
            <span
              key={idx}
              className="verdant-badge shadow-2xs"
            >
              {badge}
            </span>
          ))}
        </figcaption>

        {/* Wishlist Button */}
        <button
          type="button"
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600 border border-rose-200'
              : 'bg-white/85 text-[#37523B] hover:bg-white border border-black/5'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
        </button>

        {/* Quick View Floating Overlay on Hover */}
        <button
          type="button"
          id={`quick-view-btn-${product.id}`}
          onClick={() => onQuickView(product)}
          className="absolute inset-x-4 bottom-3 py-2.5 rounded-xl bg-white/95 backdrop-blur-xs text-[#1E3A20] text-xs font-semibold flex items-center justify-center gap-2 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick Eco Specs & Details</span>
        </button>
      </figure>

      {/* Content Body Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <header>
          {/* Rating & Review Count */}
          <div className="flex items-center justify-between text-xs text-[#4F6852] mb-1.5">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span className="font-bold text-[#1F3622]">{product.rating.toFixed(1)}</span>
              <span className="text-[#6D8370]">({product.reviewsCount})</span>
            </div>
            <span className="text-[11px] font-medium uppercase tracking-wider text-[#356133]">
              {product.category.replace('-', ' ')}
            </span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-lg font-serif font-bold text-[#1A331C] leading-snug cursor-pointer hover:text-[#2D5A27] transition-colors"
          >
            {product.name}
          </h3>

          {/* Short Tagline */}
          <p className="text-xs text-[#465E49] line-clamp-2 mt-1 leading-relaxed">
            {product.tagline}
          </p>
        </header>

        {/* Impact Metric Highlight Pill */}
        <aside className="bg-[#F2F6F1] p-2.5 rounded-xl border border-[#2D5A27]/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[#2A4B27]">
            <Leaf className="w-3.5 h-3.5 text-[#356B30] shrink-0" />
            <span className="font-medium">{product.impactMetric.label}:</span>
          </div>
          <span className="font-bold text-[#1E3B1C]">{product.impactMetric.value}</span>
        </aside>

        {/* Price & Action Footer */}
        <footer className="pt-2 border-t border-[#2D5A27]/10 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold font-serif text-[#173019]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs line-through text-[#79907C]">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            type="button"
            id={`add-to-cart-btn-${product.id}`}
            onClick={() => onAddToCart(product)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              isInCart
                ? 'bg-[#E2EFE1] text-[#1E421A] border border-[#2D5A27]/25'
                : 'bg-[#2D5A27] hover:bg-[#20441C] text-white shadow-2xs'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#2D5A27]" />
                <span>In Bag</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </footer>
      </div>
    </article>
  );
};

