const Loader = () => {
  const dots = [
    { color: 'bg-white', delay: '0s' },
    { color: 'bg-beige', delay: '0.2s' },
    { color: 'bg-brown', delay: '0.4s' },
    { color: 'bg-garnet', delay: '0.6s' },
  ];

  return (
    <div className="fixed inset-0 bg-midnight flex items-center justify-center z-50">
      <div className="flex items-center space-x-4">
        {dots.map((dot, index) => (
          <div
            key={index}
            className={`w-5 h-5 rounded-full ${dot.color} shadow-lg animate-bounce-dot`}
            style={{
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
