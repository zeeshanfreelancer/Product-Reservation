import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import CartCard from './components/CartCard';
import PurchaseCompleteCard from './components/PurchaseCompleteCard';
import CurrentStateBar from './components/CurrentStateBar';
import {
  PRODUCT_NAME,
  PRICE,
  TOTAL_STOCK_INITIAL,
  MAX_RESERVATION_PER_USER,
  RESERVATION_TIMER_SECONDS,
} from './utils/constants';

function App() {
  const [cart, setCart] = useState([]);
  const [purchasedCount, setPurchasedCount] = useState(0);
  const [timerSecondsRemaining, setTimerSecondsRemaining] = useState(null);
  const [showExpiredMessage, setShowExpiredMessage] = useState(false);
  const [showPurchaseComplete, setShowPurchaseComplete] = useState(false);
  const [lastCheckoutCount, setLastCheckoutCount] = useState(0);

  const reservedCount = cart.length;
  const availableStock = TOTAL_STOCK_INITIAL - purchasedCount - reservedCount;
  const isTimerActive = timerSecondsRemaining !== null;
  const canReserve =
    availableStock > 0 &&
    reservedCount < MAX_RESERVATION_PER_USER &&
    !isTimerActive &&
    !showPurchaseComplete;

  /** Start 2-minute countdown when the first item is added to the cart. */
  useEffect(() => {
    if (cart.length > 0 && timerSecondsRemaining === null) {
      setTimerSecondsRemaining(RESERVATION_TIMER_SECONDS);
    }
  }, [cart.length, timerSecondsRemaining]);

  /** Tick every second; on expiry (0), clear cart and show expired message. */
  useEffect(() => {
    if (timerSecondsRemaining === null || timerSecondsRemaining <= 0) {
      if (timerSecondsRemaining === 0) {
        setCart([]);
        setTimerSecondsRemaining(null);
        setShowExpiredMessage(true);
      }
      return undefined;
    }
    const intervalId = setInterval(() => {
      setTimerSecondsRemaining((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timerSecondsRemaining]);

  /** Reset timer when cart is emptied (cancel or checkout). */
  useEffect(() => {
    if (cart.length === 0) {
      setTimerSecondsRemaining(null);
    }
  }, [cart.length]);

  /** Add one unit to cart (reserve). Disabled when canReserve is false. */
  const handleReserve = () => {
    if (!canReserve) return;
    setShowExpiredMessage(false);
    setCart((prev) => [...prev, { id: crypto.randomUUID(), name: PRODUCT_NAME, price: PRICE }]);
  };

  /** Remove one reserved item by id; restores that unit to available stock. */
  const handleCancel = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /** Finalize reservation: record purchase count, clear cart, stop timer, show Purchase Complete card. */
  const handleCheckout = () => {
    if (cart.length === 0) return;
    setLastCheckoutCount(cart.length);
    setPurchasedCount((prev) => prev + cart.length);
    setCart([]);
    setTimerSecondsRemaining(null);
    setShowPurchaseComplete(true);
  };

  /** Dismiss Purchase Complete card and return to single product view. */
  const handleContinueShopping = () => {
    setShowPurchaseComplete(false);
    setLastCheckoutCount(0);
  };

  /** True when cart or Purchase Complete card should occupy the right slot. */
  const showRightCard = cart.length > 0 || showPurchaseComplete;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto">
      <div className="min-h-full p-12">
        <div className="max-w-[900px] mx-auto">
          {/* Page title and subtitle */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Flash Deal Product Reservation</h1>
            <p className="text-gray-600">Interactive demonstration with working timer and stock management</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className={`flex flex-col gap-8 ${showRightCard ? 'lg:flex-row lg:items-start lg:justify-center' : 'items-center justify-center'}`}>
              {/* Product Section: single card, centered when no right card */}
              <div className={showRightCard ? 'flex-1 flex justify-center lg:justify-end' : 'flex justify-center w-full'}>
                <ProductCard
                  reservedCount={reservedCount}
                  availableStock={availableStock}
                  canReserve={canReserve}
                  showExpiredMessage={showExpiredMessage}
                  onReserve={handleReserve}
                />
              </div>

              {/* Cart Section: reserved items, countdown timer, cancel per item, Complete Checkout */}
              {cart.length > 0 && (
                <CartCard
                  cart={cart}
                  timerSecondsRemaining={timerSecondsRemaining}
                  onCancel={handleCancel}
                  onCheckout={handleCheckout}
                />
              )}

              {/* Purchase Complete card: order summary, total, Continue Shopping */}
              {showPurchaseComplete && (
                <PurchaseCompleteCard
                  lastCheckoutCount={lastCheckoutCount}
                  onContinueShopping={handleContinueShopping}
                />
              )}
            </div>
          </div>

          {/* Current State bar: available and reserved counts (below main card container) */}
          <CurrentStateBar availableStock={availableStock} reservedCount={reservedCount} />
        </div>
      </div>
    </div>
  );
}

export default App;