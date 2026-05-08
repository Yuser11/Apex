import crypto from 'crypto'
import { cp } from 'fs'

const secret = crypto.randomBytes(64).toString('hex')

console.log(`SENHA CRIPTO: ${secret}`)

export default secret