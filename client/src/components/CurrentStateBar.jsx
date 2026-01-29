export default function CurrentStateBar({ availableStock, reservedCount }) {
  return (
    <div className="mt-6 bg-blue-50 rounded-lg p-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <div>
          <span className="font-semibold">Current State:</span>{' '}
          <span className="capitalize">product</span>
        </div>
        <div className="flex gap-4">
          <span>
            <span className="font-semibold">Available:</span> {availableStock}
          </span>
          <span>
            <span className="font-semibold">Reserved:</span> {reservedCount}
          </span>
        </div>
      </div>
    </div>
  );
}
