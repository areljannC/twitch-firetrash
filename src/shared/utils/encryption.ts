import AES from 'crypto-js/aes'
import Base64 from 'crypto-js/enc-base64'
import Hex from 'crypto-js/enc-hex'
import UTF8 from 'crypto-js/enc-utf8'

const key = 'hello'

/*
  https://stackoverflow.com/questions/64656073/node-js-encrypt-a-string-into-alphanumerical

  1. Encrypt the string with the encryption key.
  2. Encode encrypted string to Base64 (URL-friendly).
  3. Decode the Base64 encoded string.
  4. Decrypt the decoded encrypted string.
*/

export const encrypt = (s: string): string => AES.encrypt(s, key).toString()
export const decrypt = (s: string): string => AES.decrypt(s, key).toString(UTF8)
export const encode = (s: string): string => Base64.parse(s).toString(Hex)
export const decode = (s: string): string => Hex.parse(s).toString(Base64)
