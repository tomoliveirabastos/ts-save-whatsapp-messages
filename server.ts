import express from 'express'
import { Message } from './message'

const app = express()

app.get("/my-messages/:page", async (req, res) =>
{
       const page = Number(req.params.page)

       const messages = await Message.getMessages(page)

       return res.json(messages)
})

app.listen(3000)