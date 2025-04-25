import React, { useState } from "react"; import { motion } from "framer-motion"; import confetti from "canvas-confetti";

const prizes = [ "iPhone 15 Pro", "Samsung S25 Ultra", "Laptop", "Fridge", "Camera", "65'' HD TV", "Solar Panel Kit", "Gold Detector", "Gold Smelter", "Gold Weighing Scale" ];

const colors = { red: "#e60000", blue: "#0033cc", gold: "#ffcc00" };

const PrizeGame = () => { const [revealed, setRevealed] = useState(Array(10).fill(false)); const [winningPrize, setWinningPrize] = useState(null);

const handleClick = (index) => { if (revealed[index]) return; const newReveal = [...revealed]; newReveal[index] = true; setRevealed(newReveal); if (!winningPrize) { setWinningPrize(prizes[index]); confetti(); } };

return ( <div className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-50 to-blue-100 flex flex-col items-center justify-center p-6"> <h1 className="text-4xl font-bold mb-6" style={{ color: colors.red }}> Dubai Elektroniks Prize Draw </h1> <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"> {prizes.map((prize, index) => ( <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-32 h-40 bg-white rounded-2xl shadow-lg border-4 border-gold flex items-center justify-center text-center cursor-pointer" style={{ borderColor: colors.gold }} onClick={() => handleClick(index)} > {revealed[index] ? ( <span className="text-sm font-bold text-blue-800">{prize}</span> ) : ( <span className="text-xl font-semibold text-gray-700">?</span> )} </motion.div> ))} </div> {winningPrize && ( <div className="mt-6 text-center"> <h2 className="text-2xl font-bold text-green-700 mb-2"> You won: {winningPrize}! </h2> <a
href="https://wa.me/491783752967"
target="_blank"
rel="noopener noreferrer"
className="inline-block mt-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
> Claim via WhatsApp </a> </div> )} </div> ); };

export default PrizeGame;

