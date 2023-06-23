const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['994400853441'] //ur owner number
global.ownername = "s7sntar❤️" //ur owner name
global.ytname = "YT: s7sntar" //ur yt chanel name
global.socialm = "GitHub: s7sntar" //ur github or insta name
global.location = "Asiya, syria, damaskos" //ur location

//bot bomdy 
global.ownernomer = "994400853441" //ur number
global.premium = ['994400853441'] //ur premium number
global.botname = 's7sntar ᗷOT❤️' //ur bot name
global.linkz = "https://www.tiktok.com/@a2gkora?_t=8dO9BMaxm1V&_r=1" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/@AMGkora" //ur website to be displayed
global.botscript = 'https://www.tiktok.com/@a2gkora?_t=8dO9BMaxm1V&_r=1' //script link
global.themeemoji = "♥" //ur theme emoji
global.packname = "المؤسس سحسنتر" //ur sticker watermark packname
global.author = "⍣+905519445622⍣" //ur sticker watermark author
global.wm = "s7sntar m2ass." //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'تم يروحي✨',
    admin: '『 الامر دا لادمن بس! 』',
    botAdmin: '『 ارفع البوت ادمن الاول 』',
    premime: '『 ميزات خاصة متميزة إذا كنت ترغب في تسجيل نوع الإيجار 』',
    owner: '『 الميزه دي للمطور بس! 』',
    group: '『 الميزه دي للجروبات بس! 』',
    private: '『 الميزه دي في الخاص بس! 』',
    bot: '『 الميزه دي للبوت بس! 』',
    wait: '『 استني شويه... 』',
    linkm: '『 فين الرابط? 』',
    endLimit: 'انتهت صلاحية الحد اليومي الخاص بك ، وسيتم إعادة تعيين الحد كل 12 ساعة',
    nsfw: 'لم يتم تنشيط ميزة nsfw ، يرجى الاتصال بالمسؤول للتفعيل',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
بطولة: '🏆',
لفل: '🎚️',
الحد: '📊',
العمر: '❤️',
اكسبي: '💫',
مصاري: '💵',
عصير: '🥤',
الماس: '💎',
صندوق: '📦',
هدية: '🎁',
اسطوري: '🗳️',
لجندري: '🗃️',
هدية: '🎁',
قمامة: '🗑',
قميص: '👕',
حرب: '⚔️',
خشب: '🪵',
حجر: '🪨',
شبكة: '🕸️',
حصان: '🐎',
قط: '🐈',
كلب: '🐕',
سنكر: '🦊',
لحم: '🍖',
سلسلة: '⛓️',
ملك: '👑',
زمرد: '💚',
ركد: '🏃',
سهم: '🏹',
سهم اخطرق القلب: '💘',
فئس: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
