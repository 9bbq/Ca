const Discord = require('discord.js');

module.exports = {
     name:"cuttweet",
     category: "Game",
     aliases: ["cut","كت تويت","كت"],
     cooldown: 1,

    run: async (client, message, args) => {
          const cuttweet = [
               '- يومك في كلمة؟',
               '- من أين تستمد القوة عندما تصاب بالخذلان؟',
               '- أكثر مشروب صودا من أي شركة تفضّله؟',
               '- متى يعتبر الاهتمام إزعاج؟',
               '- شاركنا آخر فيديو أضحكك؟وجه مبتسم ذو فم مفتوح وأعين مُغمضة بشدة',
               '- لو كُنت إحدى ردات الفعل، ماذا تُحبذ أن تكون؟قلب أبيض',
               '- ما هو الشعور العالق بك حاليًا؟',
               '- شيء تتميز فيه عن الآخرين؟',
               '- طباع لا تطيقها في شخص تتعامل معه؟',
               '- تصرف لا تتحمله؟',
               '- بلد اشتقت أن تسافر له مرة أخرى؟✈',
               '- أكتب شيء تُؤجر عليه ..الخزامى',
               '- طبع تُحب أن يتواجد في كل شخص قد تعرفه؟',
               '- شاركنا خلفية هاتفك؟',
               '- مشتاق؟',
               '- أجمل شيء حصل معك مؤخرًا؟',
               '- كتاب تقرأه هذه الأيام؟',
               '- تضحي بشيء تحبه لأجل شخص؟',
               '- أكثر الألوان المحببة لقلبك؟',
               '- مبدأ في الحياة تعتمد عليه دائما؟',
               '- أنت مُخير بالجلوس مع شخصك المفضل في مطعم راقي  أو  جلسة على البحر في ليلة مقمرة؟ أيهما تختار ولماذا؟',
               '- هل يمكن أن يُحب القلب شخصين؟',
               '- كلمة لمن أمسك يدك حين أفلتها الجميع؟',
               '- شيء مستحيل يتغير فيك؟',
               '- هل أنت الشخص نفسه قبل 3 سنوات؟',
               '- أصعب قرار اتخذته مؤخرًا؟',
               '- مَن اختار لك اسمك؟',
               '- إيموجي يوصف مزاجك حاليًا؟',
               '- هل تنتقم لنفسك أم تترك الأيام تنتقم لك؟',
               '- أكثر نوع سمك تُحبه؟',
               '- للإناث | أشياء مهمة معك بالشنطة؟',
               '- مادة دراسية تعتبرها السبب في كرهك للدراسة؟',
               '- مشروب بارد تحبه؟',
               '- تميل أكثر للشاي أو القهوة؟',
               '- كم يمثل وضعك عند النوم مِن 10؟',
               '- لاعب تتمنى عودته إلى الملاعب في كرة القدم؟',
               '- كل شيء يتعوّض إلا .. ؟',
               '- زمن تتمنى لو ولدت فيه؟',
               '- متى تُنهي علاقتك بأحدهم حتى لو كان عزيزًا عليك؟',
               '- هل يوجد مَن يُساعدك بحياتك العملية؟',
               '- كيف كان صباحك؟',
               '- أكثر شيء يضيع منك؟',
               '- احدى تصرفاتك الكسولة؟',
               '- أشتاق إلى .. ؟',
               '- توصف حياتك بالفوضوية أم المرتبة والمنظمة؟',
               '- شيء تتمنى أن يتم حذفه نهائيًا من الحياة؟',
               '- أجمل شيء بالشتا؟🌧☔',
               '- ماهو رئيك بل البوت ؟',
               `لو قالوا لك  تناول صنف واحد فقط من الطعام لمدة شهر . 
               ‏وش بيكون اختيارك ؟`,
               'شخص تحب تستفزه ؟',
               'لو حلمت في شخص وصحيت وحصلت رساله من نفس الشخص . ارسل ايموجيي مثل ردة فعلك.',
               'هات صورة تحس إنك ابدعت بتصويرها.',
               'على إيش سهران ؟',
               'مين تتوقع يطالعك طول الوقت بدون ملل ؟',
               'وين جالس الحين ؟',
               'كم من عشرة تقيم يومك ؟',
               'أطول مدة نمت فيها كم ساعه ؟',
               'أجمل سنة ميلادية مرت عليك ؟',
               'أخر رسالة بالواتس جاتك من مين ؟',
               'ليه مانمت ؟',
               'تعتقد فيه أحد يراقبك ؟',
               'كم من عشره تعطي حظك ؟',
               'كلمه ماسكه معك الفترة هذي ؟',
               'شيء مستحيل تمل منه ؟',
               'متى تنام بالعادة ؟',
               'كم من عشرة جاهز للدراسة ؟',
               'منشن صديقك الفزعة',
               'يوم نفسك يرجع بكل تفاصيله ؟',
               'أجمل صورة بجوالك ؟',
               'ايش أغرب مكان قد صحتوا فيه؟',
               'اذا جاك خبر مفرح اول واحد تعلمه فيه مين ؟',
               'شيء لو يختفي تصير الحياة جميلة ؟',
               'كم من عشرة تشوف نفسك محظوظ ؟',
               'امدح نفسك بكلمة وحدة بس',
               'كلمة لأقرب شخص لقلبك ؟',
               'قوة الصداقة بالمدة ولا بالمواقف ؟',
               'حط@منشن.  شخص وقوله" حركتك مالها داعي".',
               'تتابع مسلسلات ولا م تهتم ؟',
               'تاريخ يعني لك الكثير ؟',
               'كم عدد اللي معطيهم بلوك ؟',
               'من الغباء انك ؟',
               'اكثر شيء محتاجه الحين ؟',
               'حط@منشن شخص تقوله "بطل تفكر فيني ابي انام"',
               'ايش مسهرك ؟.',
               'حزين ولا مبسوط ؟',
               'تحب سوالف مين ؟',
               'كم من عشرة روتينك ممل ؟',
               'شيء مستحيل ترفضه ؟.',
               'كم من عشرة الإيجابية فيك ؟.',
               'تعتقد اشباهك الاربعين عايشين حياة حلوة ؟.',
               'مين جالس عندك ؟',
               'كم من عشرة تشوف نفسك انسان ناجح ؟',
               'شيء حظك فيه حلو ؟.',
               'كم من عشرة الصبر عندك ؟',
               'أخر مرة نزل عندكم مطر ؟',
               'اكثر مشاكلك بسبب ؟',
               'اكره شعور ممكن يحسه انسان ؟',
               'شخص تحب تنشبله ؟',
          ]
          let cut = cuttweet[Math.floor(Math.random() * cuttweet.length)];
          message.channel.send(new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(message.author.username, message.author.avatarURL({dynamics:true}))
          .setDescription(`${cut}`)
          .setTimestamp()
          .setFooter(message.guild.name, message.guild.iconURL()))
     }
}