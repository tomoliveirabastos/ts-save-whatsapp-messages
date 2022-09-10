import { Client, LocalAuth, Message } from 'whatsapp-web.js'
import { Handle } from './handle'
import qrcode from 'qrcode-terminal'
import qrimg from 'qr-image'
import fs from 'fs'
const client = new Client({
       puppeteer: {
              args: ['--no-sandbox'],
       },
       authStrategy: new LocalAuth({ clientId: "tom-oliveira" })
})

client.on('qr', qr =>
{
       qrcode.generate(qr, { small: true })

       const svg = qrimg.image(qr, {type: 'svg'})
       svg.pipe(fs.createWriteStream('qr_code.svg'));
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

client.on('disconnected', () =>
{

       client.initialize()
})

client.initialize()