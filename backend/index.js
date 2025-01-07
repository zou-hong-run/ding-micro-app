import express from 'express';
import cors from 'cors'
import { getLocalIP } from "./utils/redrun.js"
import dingdingRouter from './router/dingding.js'
// import famous_words from './datas/famous_words.json'
// import famous_words from './datas/famous_words.json' assert {type: "json"}
import famous_words from "./datas/famous_words.json" with { type: "json" };
import { initStream } from './stream/stream.js';
const port = 3000;
initStream()
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("./public"))
app.use("/dingding", dingdingRouter)
// app.use("/wechat",xxxx)
app.listen(port, () => {
  const words = famous_words[Math.floor(Math.random() * famous_words.length)];
  console.log(` running：http://${getLocalIP()}:${port} 🥬`)
  console.log(`🍵 ${words} 🥕`)
})