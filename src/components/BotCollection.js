import React, { useContext } from "react";
import Bot from "./Bot";
import { BotContext } from "../context/BotContext";

const BotCollection = ({ onAction, onBotDelete }) => {
  const bots = useContext(BotContext);
  return (
    <section className="bot__collection">
      {bots.map((bot) => (
        <Bot
          key={bot.id}
          bot={bot}
          onAction={() => onAction(bot.id)}
          onBotDelete={() => onBotDelete(bot.id)}
        />
      ))}
    </section>
  );
};

export default BotCollection;
