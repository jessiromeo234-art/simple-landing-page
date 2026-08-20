import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Sparkles, Check, ShoppingBag, Leaf } from 'lucide-react';
import { Product } from '../types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onSignupClick: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onSignupClick,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = discountApplied ? subtotal * 0.15 : 0;
  const total = subtotal - discountAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (couponCode.trim().toUpperCase() === 'VERDANT15') {
      setDiscountApplied(true);
    } else {
      setCouponError('Invalid code. Sign up for our newsletter to get VERDANT15!');
    }
  };

  const handleSimulatedCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutCompleted(true);
      onClearCart();
    }, 1000);
  };

  return (
    <div
      id="cart-drawer-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn"
    >
      <div
        id="cart-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#2D5A27]/20 relative animate-slideLeft"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#2D5A27]/12 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2D5A27] text-white flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#18311B]">Your Sustainable Bag</h3>
              <p className="text-[11px] text-[#556F57]">
                {cart.reduce((sum, item) => sum + item.quantity, 0)} circular items selected
              </p>
            </div>
          </div>

          <button
            id="close-cart-btn"
            onClick={onClose}
            aria-label="Close cart drawer"
            className="p-2 rounded-full text-[#38513B] hover:bg-[#EBF2EA] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Items list */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {checkoutCompleted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E5F3E3] text-[#2D5A27] flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#19321C]">Order Request Received!</h4>
              <p className="text-xs text-[#4E6751] max-w-xs mx-auto">
                Thank you for choosing zero-waste gardening supplies. Your order will be packed in 100% plastic-free, water-soluble cornstarch cushioning.
              </p>
              <button
                onClick={() => {
                  setCheckoutCompleted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#2D5A27] text-white text-xs font-semibold"
              >
                Continue Browsing
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#EBF3EA] text-[#2D5A27] flex items-center justify-center mx-auto">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#18311C]">Your bag is currently empty</h4>
              <p className="text-xs text-[#526B55] max-w-xs mx-auto">
                Explore our heirloom seeds, heritage tools, and terracotta ollas to get started.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-xl bg-[#2D5A27] text-white text-xs font-semibold hover:bg-[#21431E]"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                id={`cart-item-${item.product.id}`}
                className="p-3.5 bg-white rounded-xl border border-[#2D5A27]/12 shadow-2xs flex gap-3 items-center"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-lg object-cover bg-[#F1EFE9] shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-[#19321C] truncate">{item.product.name}</h4>
                  <div className="text-[11px] text-[#2D5A27] font-semibold">
                    ${item.product.price.toFixed(2)} each
                  </div>
                  <div className="text-[10px] text-[#637D66] truncate mt-0.5">
                    {item.product.badges[0]}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  {/* Quantity controls */}
                  <div className="flex items-center border border-[#2D5A27]/20 rounded-lg bg-[#FAF8F5] overflow-hidden text-xs">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                      className="px-2 py-0.5 hover:bg-[#E3EDE1] text-[#1E3B1C] font-bold"
                    >
                      -
                    </button>
                    <span className="px-2 py-0.5 font-bold text-[11px] text-[#1E3B1C]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                      className="px-2 py-0.5 hover:bg-[#E3EDE1] text-[#1E3B1C] font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-gray-400 hover:text-rose-600 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer calculation & checkout */}
        {!checkoutCompleted && cart.length > 0 && (
          <div className="p-5 border-t border-[#2D5A27]/15 bg-white space-y-4">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="space-y-1.5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Promo code (try VERDANT15)"
                  disabled={discountApplied}
                  className="flex-1 px-3 py-1.5 rounded-lg border border-[#2D5A27]/20 text-xs uppercase placeholder-normal focus:outline-none focus:ring-1 focus:ring-[#2D5A27] bg-[#FAF8F5]"
                />
                <button
                  type="submit"
                  disabled={discountApplied}
                  className="px-3 py-1.5 rounded-lg bg-[#2D5A27] text-white text-xs font-semibold disabled:opacity-50"
                >
                  {discountApplied ? 'Applied' : 'Apply'}
                </button>
              </div>
              {discountApplied && (
                <div className="text-[11px] text-[#2D5A27] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>15% Newsletter Welcome Discount Active!</span>
                </div>
              )}
              {couponError && (
                <div className="text-[11px] text-rose-600">{couponError}</div>
              )}
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#445E47] pt-2 border-t border-gray-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-[#2D5A27] font-semibold">
                  <span>Welcome Discount (15%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#2D5A27]">
                <span>Plastic-Free Delivery</span>
                <span className="font-semibold uppercase tracking-wider text-[11px]">FREE</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#18311B] pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Eco Delivery Guarantee */}
            <div className="bg-[#F2F7F0] p-2.5 rounded-lg border border-[#2D5A27]/10 flex items-center gap-2 text-[11px] text-[#294B27]">
              <ShieldCheck className="w-4 h-4 text-[#2D5A27] shrink-0" />
              <span>Carbon-neutral zero-waste delivery to your door.</span>
            </div>

            {/* Checkout Action */}
            <button
              id="cart-checkout-btn"
              onClick={handleSimulatedCheckout}
              disabled={isCheckingOut}
              className="w-full py-3.5 rounded-xl bg-[#2D5A27] hover:bg-[#20441C] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span>Packing plastic-free order...</span>
              ) : (
                <>
                  <span>Complete Order (${total.toFixed(2)})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
