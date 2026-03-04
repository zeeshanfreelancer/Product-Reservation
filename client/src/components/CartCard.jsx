import { LuShoppingCart, LuX } from 'react-icons/lu';
import Badge from './Badge';
import TimerDisplay from './TimerDisplay';
import { PRICE } from '../utils/constants';

export default function CartCard({ cart, timerSecondsRemaining, onCancel, onCheckout }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-full md:w-[385px] shrink-0 min-w-0">
      <Badge variant="success" icon={<LuShoppingCart className="w-3 h-3" />}>
        Cart Active
      </Badge>
      <div className="flex flex-col gap-4 sm:gap-6 rounded-xl border-2 border-green-100 p-4 sm:p-6 w-full bg-gradient-to-br from-green-50 to-blue-50">
        <div className="flex flex-col gap-3 sm:gap-4">
          <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
            <LuShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            Your Cart
          </h3>
          <div className="bg-white rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4 shadow-sm">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex justify-between items-start gap-2 min-w-0">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm sm:text-base truncate">{item.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Quantity: 1</p>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-blue-600 shrink-0">{PRICE}</p>
                </div>
                <TimerDisplay timerSecondsRemaining={timerSecondsRemaining} />
                <button
                  type="button"
                  onClick={() => onCancel(item.id)}
                  className="inline-flex items-center justify-center text-sm font-medium min-h-[44px] sm:h-8 rounded-md gap-1.5 px-3 w-full text-red-600 hover:text-red-700 hover:bg-red-50 border-2 border-red-100 touch-manipulation cursor-pointer"
                >
                  <LuX className="w-4 h-4 mr-1 shrink-0" />
                  Cancel Reservation
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={onCheckout}
            className="inline-flex items-center justify-center text-sm font-medium min-h-[44px] sm:h-10 rounded-md px-6 w-full bg-green-600 text-white hover:bg-green-700 touch-manipulation cursor-pointer"
          >
            Complete Checkout
          </button>
        </div>
      </div>
      <div className="text-xs text-gray-500 bg-white p-2.5 sm:p-3 rounded border border-gray-200">
        <p className="font-semibold mb-1">Timer Active:</p>
        <p>Complete checkout before timer expires or item will be returned to stock.</p>
      </div>
    </div>
  );
}
