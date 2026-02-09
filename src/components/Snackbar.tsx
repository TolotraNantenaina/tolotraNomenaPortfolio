import { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface SnackbarProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Snackbar = ({ message, type, isVisible, onClose, duration = 5000 }: SnackbarProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const bgColor = type === 'success' 
    ? 'bg-green-500/90 backdrop-blur-sm border-green-400/50' 
    : 'bg-red-500/90 backdrop-blur-sm border-red-400/50';
  
  const textColor = type === 'success' ? 'text-green-50' : 'text-red-50';
  const iconColor = type === 'success' ? 'text-green-100' : 'text-red-100';

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slideUp">
      <div className={`${bgColor} ${textColor} border rounded-lg shadow-2xl px-6 py-4 flex items-center space-x-4 min-w-[300px] max-w-[500px]`}>
        <div className={`flex-shrink-0 ${iconColor}`}>
          {type === 'success' ? (
            <CheckCircle size={24} />
          ) : (
            <AlertCircle size={24} />
          )}
        </div>
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className={`flex-shrink-0 ${textColor} hover:opacity-70 transition-opacity`}
          aria-label="Close notification"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
