import { LuCircleCheckBig, LuShoppingBag, LuRotateCcw } from 'react-icons/lu';
import Badge from './Badge';
import { PRODUCT_NAME, PRICE } from '../utils/constants';

export default function PurchaseCompleteCard({ lastCheckoutCount, onContinueShopping }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-full md:w-[385px] shrink-0 min-w-0">
      <Badge variant="success" icon={<LuCircleCheckBig className="w-3 h-3" />}>
        Purchase Complete
      </Badge>
      <div className="flex flex-col gap-4 sm:gap-6 rounded-xl border-2 border-green-200 p-4 sm:p-6 w-full bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="flex flex-col gap-4 sm:gap-6 items-center text-center py-6 sm:py-8">
          <div className="bg-green-100 rounded-full p-4 sm:p-6">
            <LuCircleCheckBig className="w-14 h-14 sm:w-20 sm:h-20 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-1.5 sm:mb-2">Purchase completed!</h3>
            <p className="text-xs sm:text-sm text-green-700">Your order has been successfully placed.</p>
          </div>
          <div className="w-full bg-white rounded-lg p-3 sm:p-4 space-y-2.5 sm:space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-green-700">
              <LuShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="font-semibold text-sm sm:text-base">Order Summary</span>
            </div>
            <div className="flex justify-between items-center gap-2 min-w-0">
              <span className="text-xs sm:text-sm text-gray-600 truncate">
                {PRODUCT_NAME}
                {lastCheckoutCount > 1 ? ` × ${lastCheckoutCount}` : ''}
              </span>
              <span className="font-semibold text-sm sm:text-base shrink-0">
                {lastCheckoutCount === 1 ? PRICE : `$${99 * lastCheckoutCount}`}
              </span>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm sm:text-base">Total</span>
                <span className="text-lg sm:text-xl font-bold text-green-600">
                  ${99 * lastCheckoutCount}
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onContinueShopping}
            className="inline-flex items-center justify-center gap-2 text-sm font-medium min-h-[44px] sm:h-9 px-4 py-2 rounded-md w-full border border-gray-200 bg-white hover:bg-gray-50 touch-manipulation cursor-pointer"
          >
            <LuRotateCcw className="w-4 h-4 mr-2" />
            Continue Shopping
          </button>
        </div>
      </div>
      <div className="text-xs text-gray-500 bg-white p-2.5 sm:p-3 rounded border border-gray-200">
        <p className="font-semibold mb-1">Cart Cleared:</p>
        <p>Reservation converted to purchase. Timer stopped and cart emptied.</p>
      </div>
    </div>
  );
}
