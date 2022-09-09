import express from 'express'
import { Client, LocalAuth, Message } from 'whatsapp-web.js'
import { Handle } from './handle'
import { Message as MessageEntity } from './message'


import qrcode from 'qrcode-terminal'

const client = new Client({
       puppeteer: {
              args: ['--no-sandbox'],
       },
       authStrategy: new LocalAuth({ clientId: "tom-oliveira" })
})

client.on('qr', qr =>
{
       qrcode.generate(qr, { small: true })
})

client.on('ready', () =>
{
       console.log('Ok')
})

client.on('message', async (message: Message) =>
{
       const handle = new Handle({
              message
       })

       await handle.save()
})

client.initialize()

const app = express()

app.get("/my-messages/:page", async (req, res) =>
{
       const page = Number(req.params.page)

       const messages = await MessageEntity.getMessages(page)

       return res.json(messages)
})

app.listen(3000)