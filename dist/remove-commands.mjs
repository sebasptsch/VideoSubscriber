import{REST as t}from"@discordjs/rest";import{Routes as r}from"discord-api-types/v9";import{config as c}from"dotenv";import l from"signale";c();var e=new l.Signale({disabled:!1,interactive:!1,logLevel:process.env.LOG_LEVEL||"info",secrets:[process.env.TOKEN,process.env.CLIENT_ID]}),{TOKEN:n,CLIENT_ID:s,GUILD_ID:o}=process.env;if(!n||!s)e.error("Missing env vars.");else{let i=new t({version:"9"}).setToken(n);(async()=>{try{e.info(`Started refreshing ${o?"guild":"application"} (/) commands.`),o?await i.put(r.applicationGuildCommands(s,o),{body:[]}):await i.put(r.applicationCommands(s),{body:[]}),e.info(`Successfully deleted ${o?"guild":"application"} (/) commands.`)}catch(a){e.error(a)}})()}
//# sourceMappingURL=remove-commands.mjs.map