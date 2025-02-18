"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(32);

  // Convert Celsius to Fahrenheit
  useEffect(() => {
    setFahrenheit((celsius * 9) / 5 + 32);
  }, [celsius]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <motion.div
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl animate-breathingShadow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-2 text-center">
          Celsius to Fahrenheit Converter
        </h1>
        <p className="text-sm font-bold text-primary mb-6 text-center">
          ADITYA VERMA [RA2211027010019]
        </p>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label className="text-xl text-primary">Celsius</label>
            <input
              type="number"
              value={celsius}
              onChange={(e) => setCelsius(Number(e.target.value))}
              className="mt-2 p-4 border border-accent rounded-md text-lg text-black focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter Celsius"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl text-primary">Fahrenheit</label>
            <input
              type="number"
              value={fahrenheit}
              readOnly
              className="mt-2 p-4 border border-accent rounded-md text-lg text-black bg-gray-300"
              placeholder="Fahrenheit"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TemperatureConverter;
