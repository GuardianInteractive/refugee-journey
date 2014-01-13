var JOURNEY = JOURNEY || {};
JOURNEY.data = {
    s0: {
        title: 'Aleppo',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/9/1389269451064/Syrian-women-past-the-des-001.jpg',
        coverCredit : 'Photo: Miguel Medina/AFP/Getty Images',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608618658/AleppomapforFortressEurope.png',
        contentFile: 'aleppo',
        choice: {
            text: 'Do you decide to try to reach Europe by any means necessary? Or do you decide it would be safer to travel overland to the nearest country, Turkey, and seek refuge there?',
            options: [
                {text: 'Europe', destination: 's2'},
                {text: 'Turkey', destination: 's4'}

            ]

        }
    },

    s2: {
        title: 'Asylum in Europe',
        contentFile: 'asylum_1',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371493923/Syrian-civilians-leave-wi-001.jpg',
        coverCredit : 'Photo: Marco Longari/AFP/Getty Images',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608618658/AleppomapforFortressEurope.png',
        choice: {
            text: 'How do you want to try to get to Europe?',
            options: [
                {text: 'By air', destination: 's21'},
                {text: 'To Istanbul', destination: 's6'},
                {text: 'To a refugee camp', destination: 's4'}

            ]

        }
    },

    s21: {
        title: 'Asylum',
        contentFile: 'asylum_2',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389111546993/Syrian-refugees-travel-by-001.jpg',
        coverCredit : 'Photo: Muhammed Muheisen/AP',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608618658/AleppomapforFortressEurope.png',
        choice: {
            text: 'You have only one choice now. You have to travel overland if you want to leave Syria.',
            options: [
                {text: 'Next', destination: 's4'}

            ]

        }
    },

    s4: {
        title: 'Turkey',
        contentFile: 'turkey',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371689516/Syrian-children-refugees--001.jpg',
        coverCredit : 'Photo: Adem Altan/AFP/Getty Images',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608618658/AleppomapforFortressEurope.png',
        choice: {
            text: 'You have new choices to make. You can stay in Turkey and hope for resettlement through the UNHCR resettlement programme, which moves refugees directly into European countries with full support to build a new life. Or you can take a dangerous route overland into the EU and apply for asylum once there.',
            options: [
                { text: 'Apply for resettlement', destination: 's5'},
                { text: 'Push on alone', destination: 's6' }
            ]
        }
    },


    s5: {
        title: 'Resettlement',
        contentFile: 'resettlement',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371794897/People-walk-inside-Contai-001.jpg',
        coverCredit : 'Photo: Christian Marquardt/Getty Images',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608618658/AleppomapforFortressEurope.png',
        asset: 'start',
        choice: {
            text: 'You can decide to stay in Turkey, where, although conditions are not perfect, you are safe. Or you can take the overland route through Greece, the nearest country and the most common illegal entry point into the EU.',
            options: [
                { text: 'Stay', destination: 's51'},
                { text: 'Greece', destination: 's6' }
            ]
        }
    },

    s51: {
        title: 'Staying in Turkey',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389113268437/Syrians-in-a-refugee-camp-001.jpg',
        coverCredit : 'Photo: Christian Marquardt/Getty Images ',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608618658/AleppomapforFortressEurope.png',
        contentFile: 'stay_in_turkey',
        asset: 'start',
        success:false,
        end: true
    },

    s6: {
        title: 'From Istanbul into Europe',
        contentFile: 'greek_border',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389114189060/A-Greek-soldier-on-a-mili-001.jpg',
        coverCredit : 'Photo: Nikolas Giakoumidis/AP',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619527/IstanbulmapforFortressEurop.png',
        asset: 'start',
        choice: {
            text: 'You can try to get into Greece again. Alternatively, other Syrians in Istanbul tell you that there is another way into the EU, through Bulgaria.',
            options: [
                { text: 'Try again', destination: 's7'},
                { text: 'Bulgaria', destination: 's9' }
            ]
        }
    },

    s7: {
        title: 'Into Greece',
        contentFile: 'into_greece',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387383221567/Immigrants-walk-on-the-hi-001.jpg',
        coverCredit : 'Photo: Aris Messinis/AFP/Getty Images',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619266/AthensmapforFortressEurope.png',
        asset: 'start',
        choice: {
            text: 'You could claim asylum here rather than put your children through another difficult journey.	Or you could try to continue your journey to Sweden. Other refugees have told you that the easiest route is to travel through Italy.',
            options: [
                { text: 'Stay in Greece', destination: 's8'},
                { text: 'Go to Italy', destination: 's13' }
            ]
        }
    },

 
    s8: {
        title: 'The Greek asylum system',
        contentFile: 'greek_asylum_system',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389114506126/A-Syrian-refugee-family-i-001.jpg',
        coverCredit : 'Photo: John Kolesidis/Reuters',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619266/AthensmapforFortressEurope.png',
        asset: 'start',
        choice: {
            text: 'Which of the routes do you choose: Europe via Bulgaria, via the airport, or by ferry to Italy; or stay in Athens, to start a new life in Greece?',
            options: [
                { text: 'Bulgaria', destination: 's9'},
                { text: 'Airport', destination: 's12'},
                { text: 'Ferry to Italy', destination: 's13'},
                { text: 'Life in Athens', destination: 's10' }
            ]
        }
    },

    s9: {
        title: 'Bulgaria',
        contentFile: 'bulgaria',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371867715/A-Bulgarian-army-officer--001.jpg',
        coverCredit : 'Photo: Nikolay Doychinov/AFP/Getty Images',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619527/IstanbulmapforFortressEurop.png',
        choice: {
            text: 'Do you want to stay in Turkey, or use the last of your savings in another attempt to get into Bulgaria?',
            options: [
                { text: 'Stay in Turkey', destination: 's51'},
                { text: 'Try Bulgaria again', destination: 's111' }
            ]
        }
    },

    s111: {
        title: 'Bulgaria again',
        contentFile: 'bulgaria_again',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387370997705/Bulgarian-border-2-001.jpg',
        coverCredit : 'Photo: Oleg Popov/Reuters',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619527/IstanbulmapforFortressEurop.png',
        success: false,
        end: true
    },

    s10: {
        title: 'Life in Athens',
        contentFile: 'life_in_athens',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389115324731/A-guard-watches-over-ille-001.jpg',
        coverCredit : 'Photo: Reuters',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619266/AthensmapforFortressEurope.png',
        success: false,
        end: true
    },

    s13: {
        title: 'Back in Patras',
        contentFile: 'italy_to_sweden',
        coverImg: 'http://image.guardian.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387383381267/A-migrant-sits-on-rocks-a-001-thumb.jpg',
        coverCredit : 'Photo: Filippo Monteforte/AFP/Getty Images',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619723/PatrasmapforFortressEurope.png',
        choice: {
            text: 'Do you want to try your luck again across the Adriatic, or return to Athens?',
            options: [
                { text: 'Try again', destination: 's14'},
                { text: 'Go back to Athens', destination: 's10' }
            ]
        }
    },

    s14: {
        title: 'To Sweden via Italy',
        contentFile: 'sweden_via_italy',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371321532/Syrian-civilians-flee-the-001.jpg',
        coverCredit : 'Photo: Dimitar Dilkoff/AFP/Getty Images',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619723/PatrasmapforFortressEurope.png',
        asset: 'start',
        choice: {
            text: 'You could claim asylum in Italy. Or, since you are in the Schengen zone now you might think it worth heading on to Sweden overland, avoiding the Italian authorities.',
            options: [
                { text: 'Claim asylum', destination: 's15'},
                { text: 'Push on to Sweden', destination: 's16' }
            ]
        }
    },

    s12: {
        title: 'Arriving in Sweden by plane',
        contentFile: 'sweden_by_plane',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/9/1389264413847/Arlanda-Airport-Stockholm-001.jpg',
        coverCredit : 'Photo: Tariq Dajani/Getty Images',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619932/StockholmmapforFortressEuro.png',
        asset: 'start',
        choice: {
            text: 'Next',
            options: [
                { text: 'Next', destination: 's11'}
            ]
        }
    },

    s15: {
        title: 'Refugee life in Italy',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/9/1389264537053/Italian-police-take-pictu-001.jpg',
        coverCredit : 'Photo: Antonio Parrinello /Reuters',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619723/PatrasmapforFortressEurope.png',
        contentFile: 'refugee_life_in_italy',
        success: false,
        end: true
    },

    s16: {
        title: 'Overland to Sweden',
        contentFile: 'overland_to_sweden',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389115450403/The-waterfront-in-Stockho-001.jpg',
        coverCredit : 'Photo: Getty Images ',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619932/StockholmmapforFortressEuro.png',
        asset: 'start',
        choice: {
            text: 'Next',
            options: [
                { text: 'Next', destination: 's11' }
            ]
        }
    },

    s11: {
        title: 'Refugee life in Sweden',
        contentFile: 'refugee_life_in_sweden',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387383485866/Residential-housing-block-001.jpg',
        coverCredit : 'Photo: Bloomberg via Getty Images ',
        insertImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/1/13/1389608619932/StockholmmapforFortressEuro.png',
        success: true,
        end: true
    }
};




