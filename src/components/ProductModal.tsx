import React from 'react';
import { X, Star, Check, Sparkles, Leaf, Shield, Recycle, ArrowRight, Heart, Share2 } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isInCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  if (!product) return null;

  return (
    <div
      id="product-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
    >
      <div
        id="product-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#2D5A27]/20 relative my-8"
      >
        {/* Close button */}
        <button
          id="close-product-modal-btn"
          onClick={onClose}
          aria-label="Close product modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#254228] hover:bg-[#EBF2EB] flex items-center justify-center shadow-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image & Badges */}
          <div className="md:col-span-5 bg-[#F2EFE9] relative p-6 flex flex-col justify-between">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xs">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 space-y-2">
              <div className="text-xs font-semibold text-[#305333] uppercase tracking-wider">
                Eco Credentials
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-[#21431E] text-xs font-medium px-2.5 py-1 rounded-full border border-[#2D5A27]/15 shadow-2xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Lifecycle snapshot */}
            <div className="mt-4 bg-[#E7EFE6] p-3 rounded-xl border border-[#2D5A27]/15 text-xs text-[#20401E] space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Recycle className="w-3.5 h-3.5 text-[#2D5A27]" />
                <span>End-of-Life Lifecycle:</span>
              </div>
              <p className="text-[11px] leading-relaxed text-[#3B5A39]">
                {product.endOfLife}
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Story & Specs */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-5">
            
            {/* Header / Category & Rating */}
            <div>
              <div className="flex items-center justify-between text-xs text-[#526B55] mb-1">
                <span className="uppercase tracking-wider font-semibold text-[#2D5A27]">
                  {product.category.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <span className="font-bold text-[#1C331F]">{product.rating}</span>
                  <span className="text-[#657F68]">({product.reviewsCount} verified reviews)</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#152B18] leading-tight">
                {product.name}
              </h3>
              <p className="text-sm text-[#465E49] mt-1 font-light italic">
                "{product.tagline}"
              </p>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 pb-3 border-b border-[#2D5A27]/10">
              <span className="text-3xl font-serif font-bold text-[#19351C]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm line-through text-gray-400">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-xs bg-[#EBF5EA] text-[#245220] px-2.5 py-0.5 rounded-full font-medium border border-[#2D5A27]/20">
                Carbon Neutral Shipping Included
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#314834] leading-relaxed">
              {product.description}
            </p>

            {/* Impact Metric callout */}
            <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#2D5A27]/15">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1E3E20]">
                <Leaf className="w-4 h-4 text-[#2D5A27]" />
                <span>Environmental Benefit:</span>
              </div>
              <p className="text-xs text-[#445E47] mt-1">
                {product.ecoBenefit}
              </p>
            </div>

            {/* Key Features checklist */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#233F25] uppercase tracking-wider">
                Highlights & Craftsmanship
              </span>
              <ul className="space-y-1.5">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#39503C]">
                    <Check className="w-3.5 h-3.5 text-[#2D5A27] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials List */}
            <div className="pt-2">
              <span className="text-xs font-bold text-[#233F25] uppercase tracking-wider block mb-1.5">
                Clean Materials:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#F0F5EE] text-[#244222] px-2.5 py-1 rounded-lg border border-[#2D5A27]/10"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-[#2D5A27]/12 flex items-center gap-3">
              <button
                id={`modal-add-to-cart-${product.id}`}
                onClick={() => onAddToCart(product)}
                className={`flex-1 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                  isInCart
                    ? 'bg-[#E3EFE2] text-[#1E451A] border border-[#2D5A27]/25'
                    : 'bg-[#2D5A27] hover:bg-[#20441C] text-white shadow-xs hover:shadow-md'
                }`}
              >
                {isInCart ? (
                  <>
                    <Check className="w-4 h-4 text-[#2D5A27]" />
                    <span>Added to Sample Inquiry Bag</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Add to Bag (${product.price.toFixed(2)})</span>
                  </>
                )}
              </button>

              <button
                id={`modal-wishlist-toggle-${product.id}`}
                onClick={() => onToggleWishlist(product.id)}
                aria-label="Toggle wishlist"
                className={`p-3.5 rounded-xl border transition-colors ${
                  isWishlisted
                    ? 'bg-rose-50 text-rose-600 border-rose-200'
                    : 'border-[#2D5A27]/20 text-[#304B34] hover:bg-[#F2F7F0]'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
