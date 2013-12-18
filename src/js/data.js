var JOURNEY = JOURNEY || {};
JOURNEY.data = {
	start: {
		title: 'Aleppo',
		text: 'Your name is Karima. Your are a 28-year-old Sunni woman from Aleppo, and you have two children, a girl aged 10 and a boy aged 14. Your husband was killed in a mortar attack three months ago. You now realise you must, for your children’s sake, get out of Syria. You know many people who have left Syria, most to neighbouring countries where they are in refugee camps and some who have made it to northern European countries and been given refugee protection. You have some money you could use for your journey so now your choices begin.',
		choice: {
			text: 'Do you decide to try and reach Europe by any means necessary? Or do you decide it would be safer to travel overland to the nearest country, Turkey, and seek refuge there?',
			options: [
				{text: 'Europe', destination: 'scene2'},
				{text: 'Turkey', destination: 'scene4'}

			]

		},


	scene2: {
		title: 'Asylum',
		text: 'You do your research and find out that in September, Sweden announced that it would give permanent residence to all Syrian refugees. Since early 2012, Sweden has received about 14,700 asylum applications from Syrians. Among them are member of your family, who you speak to regularly on the phone.They tell you that they are being  given support in building a new life in Sweden and that they would help you if you came.  They will wire you money along the way, to help make your savings go further.Unfortunately there is a catch. In order to apply for asylum in Sweden you need to actually get there first. This is true of most northern European countries. The UK and France for example have a high recognition rate for Syrians who apply for asylum within their borders, but asylum applications are not taken at foreign embassies. There is a relatively small resettlement programme in place, moving refugees directly from camps to European countries but you would have to be in a refugee camp to find out whether you could apply to be part of this.		( XXX Put stat in about asylum applications from Syrians across whole of Europe. )',
		choice: {
			text: 'So how do you get there? Do you decide that the safest and easiest way to travel is by plane? You have some money saved and could fly to Stockholm. Or do you decide to travel overland, through Turkey and into the nearest EU country, Greece? Perhaps you will be able to get resettled directly from a camp along the way if you get in touch with the UNHCR. ',
			options: [
				{text: 'By air', destination: 'scene3'},
				{text: 'Overland', destination: 'scene3'}

			]

		},


    
	scene2: {
		title: 'Asylum',
		text: 'There is bad news. You can’t fly to Sweden because you don’t have a visa and there are now no new visas being granted to anyone in Syria. (CHECK) A very small number of family reunification visas are being granted to close family members such as children and spouses but this doesn’t apply to you. Last year in Europe only X family reunification visas were issued. (CHECK) Even if your husband was in Sweden or the UK you would not be gaurunteed a visa to join them.			If you want to leave Syria you have to travel overland. And if you hope to reach a northern European country you will have to do so illegally. There are now almost no legal routes to reach countries like Italy, Sweden or the UK, even though it is legal to claim asylum once you get there.			It is not just Syrians who face this catch 22 situation. The increase of visas needed for people leaving conflict ridden countries has massively increased over the past decade.			XXX AUDIO INSERT - (MOHAMED – case study, have audio – he had a visa from previous travels – flew into UK with his family)			Mohamed travelled directly to the UK with his family using a visa he received before war broke out. When he reached Heathrow airport he claimed asylum at the immigration desk. ',
		choice: {
			text: 'You have only one choice now. You have to travel overland if you want to leave Syria.',
			options: [
				{text: 'Next', destination: 'scene2'}
	
			]

		},

scene4: {
        title: 'Turkey',
        text: 'You walk across the Turkish border and are met by UNHCR officials who take you to a refugee camp and register you. You are now among around 600,000 Syrians registered as refugees in Turkey. Turkey has an opt out from the Geneva Convention and does not grant asylum to people from outside the European Union. So although you are given support in the camp you will never have the right to work here. Other refugees around you are talking about making the dangerous journey overland into the EU, to join family members and try and get international protection, which carries with it the right to work and live a normal life.(video insert from Turkey?)',
        choice: {
            text: 'You have new choices to make. You can stay in Turkey and hope that for resettlement through the UNHCR resettlement programme, which moves refugees directly into European countries with full support to build a new life. Or you can take a dangerous route overland into the EU and apply for asylum once there. To do this you would probably have to cross the border into Greece illegally.',
            options: [
                { text: 'Stay here', destination: 'scene5'},
                { text: 'Try for Europe', destination: 'scene6' }
            ]
        }
    },




scene5: {
        title: 'Resettlement',
        text: 'The UNHCR has called for 30,000 of the most vulnerable Syrian refugees to be directly resettled into western countries via a screening process that is taking place in camps across the region. Unfortunately for you, the numbers being offered this chance are very low compared to the numbers fleeing Syria. Excluding Germany, the remaining 27 EU members states have offered to take only 2,340 refugees directly from Syria. Eighteen member states, including the UK and Italy, have refused to take part, drawing condemnation from leading refugee agencies.VIDEO INSERT - Somali man now settled in Sweden. ??You are not considered vulnerable enough, as the few places are being offered to families with sick or disabled children, or a parent who is struggling to cope with looking after children. The response so far has been criticised as ’shameful’ by Amnesty International and ’feeble’ by UNHCR. The country that has offered the most places is Germany, which has said it will take 10,000 people directly from camps.You are in good health as are your children so you now have two choices.',
        asset: 'start',
        choice: {
            text: '1 – You decide to stay in Turkey, it’s not perfect but it’s safe and a better option than living under mortar attack in Syria or taking a dangerous journey overland into Europe. (GO TO SCENE 5)2 – You decide you will take the overland route through Greece, the nearest country and the most common illegal entry point into the EU. (GO TO SCENE 6)',
            options: [
                { text: 'Stay', destination: 'scene51'},
                { text: 'Go to Greece', destination: 'scene6' }
            ]
        }
    },


scene51: {
        title: 'Staying in Turkey',
        text: 'You can’t work, but you are not under attack so you have a sense of safety. The camp you are in is not a bad one and the Turkish government is doing what it can to provide an education for your children and they are able to go to school for a few hours a day.It is estimated that by the end of 2014 there could be a million Syrians living in Turkey. The UNHCR and other aid organisations have warned of the pressure this is putting on Turkey and also on neighbouring Jordan and Lebanon.You start to feel at home in the camp eventually. You meet your neighbours. One of them has a Palestinian grandfather who knows people from his childhood who went to a refugee camp in Lebanon in 1948 and are still there. You wonder if your children will spend their entire lives in this camp. Your story is not over, but nor is it continuing You stay in Turkey and hope that the peace talks succeed and you can return to Syria soon.',
        asset: 'start',
        success:false,
        end: true}
    },

scene6: {
        title: 'The Greek border',
        text: 'You decide that however dangerous the journey across the Greek border might be might be, it’s better than staying in a camp indefinitely. If you make it to northern Europe you are pretty much guarunteed a life in which you can work and move on with your life until it is safe to return to Syria. You leave the camp and take your children to Istanbul, which is full of migrants from across the Middle East and Asia, as well as people smugglers who offer, for a price, to take you across the Greek border.Unfortunately you do not make it across the Greek border. For the past decade this has been the main route for migrants crossing irregularly into the European Union. Over 90 per cent of migrants entered the EU in this way in 2012.But since 2010 there has been a huge increase on EU support for border protection in the Evros region where most migrants cross. (stat here about numbers dropping). In 2012, 8,000 Syrians were arrested on the Greek border. You are stopped by border guards who are abusive to you and your children They take you back in Turkey without assessing whether you are in need of refugee protection even though this is a breach of international law.XXXX VIDEO INSERT (John D has interview with woman who was detained on the Greek border with her daughter, in a van for 11 hours with no water then dumped back into Turkey)A recent report detailed evidence of an illegal ’push back’ policy on both the land and sea border between Turkey and Greece. (LINK TO REPORT http://ecre.org/component/content/article/70-weekly-bulletin-articles/486-pro-asyl-accuses-greece-of-systematically-pushing-back-refugees-at-the-greek-turkish-border.html)You make your way back to Istanbul to begin again. You now have two choices.',
        asset: 'start',
        choice: {
            text: 'You can try and get into Greece again. Alternatively, other Syrians in Istanbul tell you that there is another way into the EU, through Bulgaria.',
            options: [
                { text: 'Try again', destination: 'scene7'},
                { text: 'Bulgaria', destination: 'scene9' }
            ]
        }
    },


 scene7: {
        title: 'Into Greece',
        text: 'This time, after paying the smugglers again, you are one of the gradually reducing number who do make it over the Evros border and into Greece. (do we have a story to illustrate this???) After crossing the border you travel to Athens (how?). Friends in the Syrian community in Istanbul have given you the contact details of a church that helps refugee families so you head there. Now you are here you have two choices.',
        asset: 'start',
        choice: {
            text: 'You know that the borders to leave Greece are watched to stop irregular migrants leaving as well as entering, so you could claim asylum here rather than put your children through more difficult travelling.	Or you could keep going to Sweden, which means avoiding detection by Greek border guards. Migrants without refugee status in Greece are frequently rounded up and detained.',
            options: [
                { text: 'Stay in Greece', destination: 'scene8'},
                { text: 'Head for Sweden', destination: 'gotoTurkey' }
            ]
        }
    },


 scene8: {
        title: 'The Greek asylum system',
        text: 'You join a queue of hundreds of others waiting outside the Aliens Police Directorate in Athens to register as an asylum seeker. Unfortunately the Greek asylum system has been in a state of chaos for several years and your claim for asylum, like the majority of others, is refused. The number of Syrians being given protection in Greece is almost zero. In 2012 no Syrians were given asylum (how many entrants? What are 2013 figures). Even for those who manage to make a claim, there is little support. The Greek government has been criticised for failing to provide adequate reception and support for vulnerable migrants and for the ’deplorable’ conditions faced by Syrians in particular. (link to Amnesty report).(INSERT VIDEO HERE - situation in Greece)You now have several choices.
',
        asset: 'start',
        choice: {
            text: '1 Return to Turkey and try to reach Europe via Bulgaria instead (SCENE 11) 2 Try to make a life in Athens, blending into the underground Syrian community there. (SCENE 10) 3 Use your savings to look for fake passports that would get you onto a plane to Stockholm. (SCENE 12)4 You decide to keep moving forward and try to reach Sweden overland,  You don’t want to risk using a false passport so you work out the overland journey, through eastern Europe, Romania and Germany and into Sweden. (SCENE 13)',
            options: [
                { text: 'Back to Turkey', destination: 'scene11'},
                { text: 'Fake passport', destination: 'scene12'},
                { text: 'Overland to Sweden', destination: 'scene13'},
                { text: 'Life in Athens', destination: 'scene10' }
            ]
        }
    },



 scene9: {
        title: 'Bulgaria',
        text: 'You pay a people smuggler to lead you with a group of people through the dense forests on the border between Turkey and Bulgaria.When you reach the Bulgarian border, armed men appear and line you all up and ask for ID. They then make you all get into the back of their van and they drive you back towards (Turkish town? need to check) and leave you there. All the children are crying, as you walk back towards XX (town?). Eventually you make it back to Istanbul.Even though such ’push backs’ are illegal, there have been reports of Syrians being turned away at the Bulgarian border, or driven straight back to Turkey, with no access to a fair asylum procedure.VIDEO INSERT – Story from Bulgaria / Turkey of Syrians talking about illegal push backs.',
        asset: 'start',
        choice: {
            text: 'You have two options1 Stay in Turkey (Go to scene 5)
2 Use the last of your savings to try to get into Bulgaria again. (Go to scene 11)',
            options: [
                { text: 'Stay in Turkey', destination: 'scene5'},
                { text: 'Try Bulgaria again', destination: 'scene11' }
            ]
        }
    },




 scene11: {
        title: 'Bulgaria again',
        text: 'This time, when you reach the border the guards that pick you up take you to one of several camps that have been set up to house Syrian refugees, you are told that the camp is called Harmanli. It is an open air detention centre and you are not allowed to leave, so there is no chance to move further into Europe or to turn back and return to Turkey. The conditions are extremely bad, with little or no official presence, no reception process and very little food. Many thousands of migrants, not only Syrians, but Afghans, Bangladeshis and even some Africans have started to take what was previously a barely used route into the EU, from Turkey and into Bulgaria. An estimated 5,000 refugees from Syria arrived between January and November 2013 (Amnesty int. figures) In a recent visit, the Guardian found a complete lack of official support for newly arrived refugees, and very poor conditions inside. One heavily pregnant woman, separated from her husband in Turkey, was being refused permission to leave the camp to give birth. VIDEO INSERT – film in Harmani, interviews with Syrians detained there. There is no way forward or back for you, the UNHCR is pushing for improved conditions in Bulgaria, and the government has promised to provide more support, but for now, you are stuck.',
        asset: 'start',
        success: false,
        end: true
        }
    },




    scene10: {
        title: 'Life in Athens',
        text: 'You have connections within the refugee community in Athens, and there are Church groups who provide food for families with children. But one day when you are waiting outside the church at lunchtime the police arrive and take you and your children to a detention centre. Your son, who is only 14, is taken away and put into the male section of the camp, with adult men. You and your daughter have to share a room with several other women, there is very little fresh water and XXX Thousands of asylum seekers are detained, for up to 18 months for administrative purposes only, in what have been described as ’appalling conditions.,’ by the EU (Home Affairs Commissioner). Each year thousands of migrants are arrested and held in detention, in conditions the EU Home Affairs Commissioner as ’appalling’. The far right are on the rise. (poss video/ audio/ story? - past stories / videos? video from Calais?) Greece has focused on reinforcing its external borders and started a policy which relies too heavily on detention. Despite the Greek authorities’ determination to improve the asylum system and detention conditions, which in many instances remain deplorable, much still needs to be done. Similarly the challenges arising from the large flow of Syrian  refugees into Turkey and now increasingly into Greece and other European countries is an issue where Europe needs to show more solidarity. The difficult economic context in Greece is contributing to rising social tension as well as increasing racism and xenophobia. This has to be tackled. Most migrants and asylum seekers do not want to stay in Greece and plan to continue their journey further into Europe. Many of them are however stuck in Greece, due to border checks and arrests when trying to exit Greece, [5] the current Dublin Regulation, and the fact that many irregular migrants cannot be returned to their country of origin.',
        success: false,
        end: true
            },


    scene13: {
        title: 'Through Italy to Sweden',
        text: ' Even though you don’t have documents allowing you to travel legally within the EU, you follow a path many others have taken and try to travel by boat via the Adriatic to Italy, from there you will be able to get a train onwards into Europe. You go to the main Greek port, Patras and arrive in Bari in Italy. Un (need to do a bit more research here on what happens on this journey) Last year, some European countries threatened Greece with removal from the Schengen agreement if they did not tighten their borders. Greece is under enormous pressure to stop migrants crossing it’s borders, as is Turkey. Illegal push backs have been reported on this Adriatic route. You now have two choices. 1 Stay in Patras and try again. (Go to scene 14) 2 You can’t face any more travelling so decide to stay in Athens for now. (Go to scene 10)',
        asset: 'start',
        choice: {
            text: '?',
            options: [
                { text: 'Try again', destination: 'scene14'},
                { text: 'Stay in Athens', destination: 'scene10' }
            ]
        }
    },


   scene14: {
        title: 'To Sweden via Italy',
        text: 'This time you make it into Italy (add more detail).  You have two choices.',
        asset: 'start',
        choice: {
            text: '1. Claim asylum in Italy (Go to scene 15) 2. You are in the Schengen zone now so you think it’s worth just travelling forward to Sweden overland, avoiding the Italian authorities. (Go to scene 16)?',
            options: [
                { text: 'Claim asylum', destination: 'scene15'},
                { text: 'Push on to Sweden', destination: 'scene16' }
            ]
        }
    },


        scene12: {
        title: 'Arriving in Sweden by plane',
        text: 'You are lucky this time. Your passports work and despite your nerves you are allowed to board the plane.  (stat here about how many asylum applications at Stockholm airport + at other EU countries))As soon as your reach passport control at Stockholm airport you tell them that your passport is fake and you tell them, in English, that you are here to claim asylum.',
        asset: 'start',
        choice: {
            text: 'Next',
            options: [
                { text: 'Next', destination: 'scene11'}
            ]
        }
    },

    scene15: {
        title: 'Refugee life in Italy',
        text: 'You tell the border officials in Bari that you want to claim asylum. They give you a cash payment of 200 euros and train tickets to Rome. Once you are in Rome you claim asylum. Because you have children you are given a place in a reception centre, although friends you have made on your journey are not so lucky. Not all asylum seekers are given housing in Italy, many end up sleeping on the street.There have been widely reported criticisms of the Italian asylum system and the lack of support for refugees.Asylum seekers say that the huge difference in the way refugees are treated across Europe leaves them with the choice of life on the streets in Greece or Italy, or a hazardous illegal journey towards northern European countries like Sweden, the UK or Germany.VIDEO INSERT – ROME/ CALAIS etc?GO TO VIDEO INSERT> Africans/ Afghans. Eventually you are given refugee status, but there is no welfare support and you can’t speak Italian so it’s impossible to find work. You are allowed to stay in your hostel but you don’t have any money left so you have to rely on church groups for food and basic Italian lessons. Unfortunately you can’t move on now. You have been fingerprinted in Rome and your prints are stored on the Eurodac system. Under the ‘Dublin’ system, asylum seekers are only allowed to make a claim in the first EU country they enter. But the differences in support on offer around the EU means that people continue to try and breach this system. In the two years to the end of October 2013, Sweden has received 20,490 new Syrian asylum applications and Germany received 16,100 such applications. Less than 1,000 people have claimed asylum in each of Greece, Italy and Cyprus. All you can do is struggle on, trying to learn Italian and relying on the support of the churches and fellow refugees.',
        success: false,
        end: true
            },



    scene16: {
        title: 'Overland to Sweden',
        text: 'Many asylum seekers try to leave Italy without being detected. There have been widely reported problems for refugees there, even once people are recognised as refugees under international law, there is often a lack of any kind of support. In 2011 the Guardian visited Rome, where hundreds of refugees, including children were sleeping in the street. GO TO VIDEO INSERT> Africans/ Afghans Even though all migrants detected at an international border should have their fingerprints stored on the Eurodac system, to stop them claiming asylum in more than one country, there have been reports that Italian border officials do not take fingerprints of all migrants, but release them to travel onwards into Europe. You have enough money left to pay for trains that take you out of Italy, north towards Sweden, changing to a ferry at Rostock (give more details of routes). Although you pass through Germany, which has a high acceptance rate for Syrian asylum seekers, your family have promised you support and help if you can reach them. When you finally arrive in Stockholm you claim asylum.',
        asset: 'start',
        choice: {
            text: 'Next',
            options: [
                { text: 'Next', destination: 'scene11' }
            ]
        }
    },


 scene11: {
        title: 'Refugee life in Sweden',
        text: 'You are given a place to stay in a hostel for families, put in touch with Syrian support groups and given access to a basic benefit that will help you survive until your asylum claim is heard. You explain to the officials why you left Syria and within a month you are told you have permanent residence. You are given social housing and free Swedish lessons and told that once you speak reasonable Swedish you will be given help finding a job. VIDEO INSERT – back to Somalia guy who was resettled, talking about life in Sweden? Although there is now a Common EU Asylum System, which came into operation in summer 2014, nobody denies that the way refugees are treated varies wildly from country to country. In the UK, Sweden and Germany, asylum seekers are given housing while their claim is processed, and support once they are granted refugee status. This is not always the case in Greece, Italy or the eastern European countries. Experts and EU politicians continually warn that as long as these differences exist, people will continue to make dangerous journeys overland to reach a country that promises safety and support. ((VIDEO LINK – CALAIS??? recent footage from protests in Calais? Calais film from a few years ago? Interview in Rome - with man explaining that system is different across the whole of Europe?)',
        success: true,
        end: true
            },




};




