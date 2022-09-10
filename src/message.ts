import { Message as MessageWp } from 'whatsapp-web.js'
import DB from './knex'

interface IMessage
{
       message: string,
       phone: string,
       hasMedia: boolean,
       fileSrc: string,
}

export class Message
{
       private message: IMessage
       constructor(msg: MessageWp)
       {
              this.message = {
                     message: msg.body,
                     phone: msg.from,
                     hasMedia: msg.hasMedia,
                     fileSrc: ""
              }
       }

       async save(): Promise<void>
       {
              const db = DB.table('messages')
              await db.insert(this.message)
       }
       static async getMessages(page: number): Promise<Object> {
              
              return await DB.select("*").from('messages').orderBy('id', 'desc').offset(page * 20).limit(20)
       }
}