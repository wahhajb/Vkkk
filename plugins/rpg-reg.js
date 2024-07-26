//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `❀° ┄───────╭\n\n*⃠┇ انت مسجل بِل فعل!*\nترغب *بإعادة* التسجيل?\n\n*📌 لإستخدام الامر :↓*\n*${usedPrefix}الغاء-التسجيل* <مع الرقم السري>\n\n╯───────┄ °❀`
  if (!Reg.test(text)) throw `❀° ┄───────╭\n\n*⃠┇استخدام الأمر خاطئ!*\n\n 💟 استخدم الامر : *${usedPrefix + command} اسمك.عمرك*\n📌مثال : *${usedPrefix + command}* ريمورو.20\n\n╯───────┄ °❀\n\n> تأكد من ان الاسم يكون بعدها نقطة بعدها الرقم للعمر و يكون ملتصقة ببعض ، الرقم للعمر لازم يكون انجليزية ولا تستجيب للارقام العربيه.`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*‼️ لايمكن ان يكون لاسم فارغ*'
  if (!age) throw '*‼️ لايمكن للعمر ان يكون فارغ*'
  if (name.length >= 30) throw '*💟 اسمك طويل! ، صغر اسمك او لقبك*' 
  age = parseInt(age)
  if (age > 31) throw '*‼️عمرك كبير جدا . . . ! , الحد للعمر هو من [ 13 ] الی [ 30 ] سنة*'
  if (age < 4) throw '*‼️عمرك صغير جدا . . . ! , الحد للعمر هو من [ 13 ] الی [ 30 ] سنة*'
  user.xovwz2f = xovwz2f.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let vxovx = `
░▒░▒░▒░▒▒▒░▒░▒░
*▾ تــم الـتـسـجــيـل ▾*
᯽┈─๋︩︪┈─┈◟🏩◝┈─๋︩︪┈─┈᯽ـ

*🌼┆ الـإســم* : ${name}
*🌹┆ الـعــمـر* : ${age} سنة
*🍁┆ الـرقــم الـســري* :
${sn}

᯽┈─๋︩︪┈─┈◟🏩◝┈─๋︩︪┈─┈᯽ـ

> اكتب [ *.حسابي* ] لترا معلوماتك < مازلنا نعمل عليه >!
> [ *.اوامر* ] لعرض قائمة المهام

`;

conn.sendMessage(m.chat, {
text: vxovx,
contextInfo: {
        mentionedJid: [m.sender],
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '12036317828129660@newsletter',
          newsletterName: meXov,
          serverMessageId: -1
        },
      forwardingScore: 999,
externalAdReply: {
title: nameBot,
body: meXov,
thumbnailUrl: img,
sourceUrl: global.rwabt,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: reply_status})

m.react("🦋")
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['تسجيل', 'التسجيل', 'register', 'registrar'] 

export default handler