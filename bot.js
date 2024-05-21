import TelegramBot from "node-telegram-bot-api";
import axios from "axios";

// Reemplaza 'YOUR_TELEGRAM_BOT_TOKEN' con el token que te proporcionó @BotFather
const token = "6485443431:AAFIg1Yz1EmNMleJ-SLCN0Wr59wGeMeNLe8";

// Crear un bot que use 'polling' para obtener actualizaciones
const bot = new TelegramBot(token, { polling: true });

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;
//   console.log(`Mensaje recibido: ${text}`)
//   bot.sendMessage(msg.chat.id, "Hola!");
// });

bot.onText(/\/prueba (.+)/, (msg, match) => {
  const ip = match[1];
  const chatId = msg.chat.id;
  axios.get(`http://ip-api.com/json/${ip}`).then( res => {
    console.log(res.data)
    bot.sendMessage(chatId, JSON.stringify(res.data));
  })
});

console.log("Bot de Telegram está en funcionamiento...");
