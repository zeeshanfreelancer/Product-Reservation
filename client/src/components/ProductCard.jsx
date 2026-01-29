import Badge from './Badge';
import StockInfo from './StockInfo';
import { PRODUCT_NAME, PRICE, TOTAL_STOCK_INITIAL } from '../utils/constants';

export default function ProductCard({
  reservedCount,
  availableStock,
  canReserve,
  showExpiredMessage,
  onReserve,
}) {
  return (
    <div className="flex flex-col gap-4 max-w-sm w-full">
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <Badge>Product Page</Badge>
        {showExpiredMessage && <Badge variant="error">Reservation Expired</Badge>}
      </div>
      <div className="bg-white flex flex-col gap-6 rounded-xl border border-gray-200 p-6 w-full">
        <div className="flex flex-col gap-4">
          <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <span className="text-6xl" role="img" aria-label="headphones">
              🎧
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-1">{PRODUCT_NAME}</h2>
            <p className="text-3xl font-bold text-blue-600">{PRICE}</p>
          </div>
          <StockInfo
            totalStock={TOTAL_STOCK_INITIAL}
            reserved={reservedCount}
            available={availableStock}
          />
          {showExpiredMessage && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
              ⏱️ Your reservation has expired. The item has been returned to available stock.
            </div>
          )}
          <button
            type="button"
            onClick={onReserve}
            disabled={!canReserve}
            className="inline-flex items-center justify-center text-sm font-medium h-10 rounded-md px-6 w-full bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none"
          >
            Reserve Now
          </button>
        </div>
      </div>
      <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-200">
        <p className="font-semibold mb-1">How it works:</p>
        <p>
          Click &quot;Reserve Now&quot; to add this item to your cart. You&apos;ll have 2 minutes to
          complete checkout.
        </p>
      </div>
    </div>
  );
}
