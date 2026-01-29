import { LuShoppingCart, LuX } from 'react-icons/lu';
import Badge from './Badge';
import TimerDisplay from './TimerDisplay';
import { PRICE } from '../utils/constants';

export default function CartCard({ cart, timerSecondsRemaining, onCancel, onCheckout }) {
  return (
    <div className="flex flex-col gap-4 w-full md:w-[385px] shrink-0">
      <Badge variant="success" icon={<LuShoppingCart className="w-3 h-3" />}>
        Cart Active
      </Badge>
      <div className="flex flex-col gap-6 rounded-xl border-2 border-green-100 p-6 w-full bg-gradient-to-br from-green-50 to-blue-50">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <LuShoppingCart className="w-5 h-5" />
            Your Cart
          </h3>
          <div className="bg-white rounded-lg p-4 space-y-4 shadow-sm">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600 mt-1">Quantity: 1</p>
                  </div>
                  <p className="text-xl font-bold text-blue-600">{PRICE}</p>
                </div>
                <TimerDisplay timerSecondsRemaining={timerSecondsRemaining} />
                <button
                  type="button"
                  onClick={() => onCancel(item.id)}
                  className="inline-flex items-center justify-center text-sm font-medium h-8 rounded-md gap-1.5 px-3 w-full text-red-600 hover:text-red-700 hover:bg-red-50 border-2 border-red-100"
                >
                  <LuX className="w-4 h-4 mr-1" />
                  Cancel Reservation
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={onCheckout}
            className="inline-flex items-center justify-center text-sm font-medium h-10 rounded-md px-6 w-full bg-green-600 text-white hover:bg-green-700"
          >
            Complete Checkout
          </button>
        </div>
      </div>
      <div className="text-xs text-gray-500 bg-white p-3 rounded border border-gray-200">
        <p className="font-semibold mb-1">Timer Active:</p>
        <p>Complete checkout before timer expires or item will be returned to stock.</p>
      </div>
    </div>
  );
}
