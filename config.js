const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919064245546";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_36_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc1LFxuICAgICAgICA3MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk5LFxuICAgICAgICA0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MixcbiAgICAgICAgODcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNixcbiAgICAgICAgMTk0LFxuICAgICAgICA3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTFU0elo0TForaThKWWtCNGk1ZjlUMHIySVA3SUJSTENjNWpTSkhnYmdiUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkwNjQyNDU1NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUzNUY0OEExNDEzMUMxRkE2RjJDN0YyOTk4NUQ5NDU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTgzNTgxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTA2NDI0NTU0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzBCRkNCRkIzRUVFQzc0MjY1RDY4MDM3RDIxMjVDQkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1ODM1ODEzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlxTmdkeGxXUzRHdmN4OVJFcnh4YVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTYwODIzMDUtZjVmMi00ZDU0LWI5MDUtNDljZWFjNzkxOGVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMTY1LFxuICAgICAgNDYsXG4gICAgICAyMzYsXG4gICAgICA4MixcbiAgICAgIDg4LFxuICAgICAgMTQwLFxuICAgICAgMjAwLFxuICAgICAgMTE1LFxuICAgICAgMjQyLFxuICAgICAgMzUsXG4gICAgICAyNDQsXG4gICAgICA2NyxcbiAgICAgIDIzMixcbiAgICAgIDIyMSxcbiAgICAgIDEyMCxcbiAgICAgIDE2MSxcbiAgICAgIDIxLFxuICAgICAgMTgyLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDgzLFxuICAgICAgMTk1LFxuICAgICAgOTUsXG4gICAgICAyMzksXG4gICAgICAyOSxcbiAgICAgIDI0NCxcbiAgICAgIDI5LFxuICAgICAgMjMwLFxuICAgICAgMTQ4LFxuICAgICAgMTQwLFxuICAgICAgMjEwLFxuICAgICAgMTMwLFxuICAgICAgMjM2LFxuICAgICAgMixcbiAgICAgIDIwNixcbiAgICAgIDEyMyxcbiAgICAgIDExMSxcbiAgICAgIDE4LFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpWSjY5RllCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkwNjQyNDU1NDY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg3OTc4MzM3MDA1NzUzOjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSXQnel9fX19fUyBVIEIgSCBB8J+Sq+KdpO+4j+KAjfCfqblcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPN0JuYk1GRUorQjI3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIml3eHNaUTVqNnBSTXNydEt3YnZhcS95NUxma2VIN3JwTVJuNUs1ZmJJQTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV3lxZVN4dFFBTnByRUZZTFhZMXV3R0w5QklrMFdIaEdZVWF5Qzc1dmpoMnM5UHFOV2EyVVhsSzlDbVVuamgvSndtR0loNzFlUENKZzFLeGhzSDdNRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiLzF6M0MzVjFQbVVVYWZya21TcU44R0szS2IySktITFBuQkVqbUZhYXBlZVpJUHhpNlFYMG9RQng5MGNjOHJtMWRlRUtBWFlEMWwvbzlvb2NvMFZ4anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MDY0MjQ1NTQ2OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTgzNTgxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ6Z1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnpnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVW40YU5xVllzUzFEZXQvdzZMMnFoMFJpQ3lpWXhZdFpHSm1uVVVmaUI5TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQ5NjE1NTk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU4MzU4MTMxOTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
