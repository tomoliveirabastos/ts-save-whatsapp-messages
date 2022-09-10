import express from 'express'
import { Message } from './message'
import rootPath from 'app-root-path'

const app = express()
app.get("/my-messages/:page", async (req, res) =>
{
       const page = Number(req.params.page)

       const messages = await Message.getMessages(page)

       return res.json(messages)
})


app.get("/my-qrcode", async (_, res) =>
{
       res.sendFile(`${rootPath.path}/qr_code.svg`);
})

app.listen(3000)