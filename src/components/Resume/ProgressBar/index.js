import React,{useState, useEffect} from "react";

function ProgressBar({ percent, label, color }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(percent)
  }, [percent])


  return (
    <div className="w-80 my-5 mx-auto">
      <div className="mx-4">{label}</div>
      <div className="relative w-full h-6 border border-gray-700 rounded-xl flex justify-center items-center overflow-hidden">
        <div
          style={{ width: `${value}%`, transition: '1s ease', transitionDelay: '0.1s' }}
          className={(color === 'red' ? 'bg-red-400' : color === 'lightblue' ? 'bg-blue-400' : color === 'blue' ? 'bg-blue-700' : color === 'green' ? 'bg-green-500' : 'bg-yellow-600') +' absolute left-0 top-0 h-full rounded-lg z-10 animate-vibe transition-all'}
        >
          <div
            style={{ borderRadius: "40%" }}
            className={(color === 'red' ? 'bg-red-400' : color === 'lightblue' ? 'bg-blue-400' : color === 'blue' ? 'bg-blue-700' : color === 'green' ? 'bg-green-500' : 'bg-yellow-600') +' z-10 w-20 h-20 absolute -right-2 -top-6 transform animate-liquid transition-all'}
          ></div>
        </div>
        <span className="z-20 font-medium">{percent}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;
