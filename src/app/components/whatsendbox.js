import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppInput = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false); // Prevents multiple clicks

  const sendMessage = () => {
    if (message.trim() === "" || error) {
      if (!isProcessing) {
        setError(true);
        setMessage("Enter a message!");
        setShake(true);
        setIsProcessing(true); // Prevents repeated clicks

        setTimeout(() => {
          setError(false);
          setMessage("");
          setShake(false);
          setIsProcessing(false); // Allow clicking again
        }, 1000);
      }
      return;
    }

    // Open WhatsApp only if a valid message is entered
    const phoneNumber = "+918077657958"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center border-2 border-gray-700 rounded-xl p-2 w-full max-w-3xl">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`flex-1 w-full text-lg outline-none border-none px-4 py-2 rounded-lg sm:rounded-none sm:rounded-l-lg ${
          error ? "border-2 border-red-500 text-red-500" : "text-gray-700 placeholder-gray-400"
        }`}
      />
      
      {/* WhatsApp Button */}
      <button 
        onClick={sendMessage}
        disabled={isProcessing} // Disable button during warning state
        className={`flex items-center justify-center w-full sm:w-auto text-lg bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 transition border-2 border-gray-900 hover:border-green-600 hover:text-white 
        ${shake ? "animate-shake" : ""} ${isProcessing ? "opacity-50 cursor-default" : ""}`}
      >
        <FaWhatsapp className="text-2xl mr-2" />
        WhatsApp
      </button>

      {/* Add Tailwind CSS Animation for shake */}
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
          }
          .animate-shake {
            animation: shake 0.3s ease-in-out 3;
          }
        `}
      </style>
    </div>
  );
};

export default WhatsAppInput;
