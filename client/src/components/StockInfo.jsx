export default function StockInfo({ totalStock, reserved, available }) {
  return (
    <div className="space-y-2 text-sm bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between">
        <span className="text-gray-600">Total stock:</span>
        <span className="font-medium">{totalStock}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Reserved:</span>
        <span className="font-medium text-orange-600">{reserved}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Available:</span>
        <span className="font-medium text-green-600">{available}</span>
      </div>
    </div>
  );
}
