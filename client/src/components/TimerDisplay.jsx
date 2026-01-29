import { LuClock } from 'react-icons/lu';
import { formatTime } from '../utils/formatTime';
import { WARNING_THRESHOLD_SECONDS } from '../utils/constants';

export default function TimerDisplay({ timerSecondsRemaining }) {
  const showWarning = timerSecondsRemaining !== null && timerSecondsRemaining <= WARNING_THRESHOLD_SECONDS && timerSecondsRemaining > 0;
  const backgroundColor = showWarning ? '#FFE2E2' : '#FFF7ED';

  return (
    <>
      <div
        className="flex items-center justify-between p-3 rounded-lg border-2 border-red-100"
        style={{ backgroundColor }}
      >
        <div className="flex items-center gap-2">
          <LuClock className="w-4 h-4 text-red-700" />
          <span className="text-sm font-medium text-red-700">Time left:</span>
        </div>
        <span
          className={`text-2xl font-bold text-red-600 ${showWarning ? 'animate-pulse' : ''}`}
        >
          {timerSecondsRemaining !== null ? formatTime(timerSecondsRemaining) : '02:00'}
        </span>
      </div>
      {showWarning && (
        <div className="text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
          ⏱️ Hurry! Your reservation is about to expire!
        </div>
      )}
    </>
  );
}
