import { Message } from 'whatsapp-web.js'
import { Message as MessageEntity} from './message'

interface IHandle {
       message: Message
}
export class Handle {
       private message: Message
       constructor(props: IHandle){
              this.message = props.message
       }
       
       async save(): Promise<void> {
              const msg = new MessageEntity(this.message)
              await msg.save()
       }
}