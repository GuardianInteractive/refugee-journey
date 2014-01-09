var JOURNEY = JOURNEY || {};
JOURNEY.data = {
    s0: {
        title: 'Aleppo',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371321532/Syrian-civilians-flee-the-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        insertImg: 'http://maps.googleapis.com/maps/api/staticmap?center=sweden&zoom=11&scale=false&size=300x300&maptype=terrain&sensor=false&format=png&visual_refresh=true',
        contentFile: 'aleppo',
        choice: {
            text: 'Do you decide to try and reach Europe by any means necessary? Or do you decide it would be safer to travel overland to the nearest country, Turkey, and seek refuge there?',
            options: [
                {text: 'Europe s6', destination: 's6'},
                {text: 'Turkey s4', destination: 's4'}

            ]

        }
    },

    s2: {
        title: 'Asylum s2',
        contentFile: 'asylum_1',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371493923/Syrian-civilians-leave-wi-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        choice: {
            text: 'So how do you get there? Do you decide that the safest and easiest way to travel is by plane? You have some money saved and could fly to Stockholm. Or do you decide to travel overland, through Turkey and into the nearest EU country, Greece? Perhaps you will be able to get resettled directly from a camp along the way if you get in touch with the UNHCR. ',
            options: [
                {text: 'By air s21', destination: 's21'},
                {text: 'Overland s3', destination: 's3'}

            ]

        }
    },

    s21: {
        title: 'Asylum s21',
        contentFile: 'asylum_2',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389111546993/Syrian-refugees-travel-by-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        choice: {
            text: 'You have only one choice now. You have to travel overland if you want to leave Syria.',
            options: [
                {text: 'Next s4', destination: 's4'}

            ]

        }
    },

    s4: {
        title: 'Turkey s4',
        contentFile: 'turkey',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371689516/Syrian-children-refugees--001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        choice: {
            text: 'You have new choices to make. You can stay in Turkey and hope for resettlement through the UNHCR resettlement programme, which moves refugees directly into European countries with full support to build a new life. Or you can take a dangerous route overland into the EU and apply for asylum once there.',
            options: [
                { text: 'Apply for resettlement s5', destination: 's5'},
                { text: 'Push on alone s6', destination: 's6' }
            ]
        }
    },


    s5: {
        title: 'Resettlement s5',
        contentFile: 'resettlement',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371794897/People-walk-inside-Contai-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        asset: 'start',
        choice: {
            text: 'You can decide to stay in Turkey, where, although conditions are not perfect, you are safe. Or you can take the overland route through Greece, the nearest country and the most common illegal entry point into the EU.',
            options: [
                { text: 'Stay s51', destination: 's51'},
                { text: 'Greece s6', destination: 's6' }
            ]
        }
    },

    s51: {
        title: 'Staying in Turkey s51',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389113268437/Syrians-in-a-refugee-camp-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        contentFile: 'stay_in_turkey',
        asset: 'start',
        success:false,
        end: true
    },

    s6: {
        title: 'The Greek border s6',
        contentFile: 'greek_border',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389114189060/A-Greek-soldier-on-a-mili-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        asset: 'start',
        choice: {
            text: 'You can try to get into Greece again. Alternatively, other Syrians in Istanbul tell you that there is another way into the EU, through Bulgaria.',
            options: [
                { text: 'Try again s7', destination: 's7'},
                { text: 'Bulgaria s9', destination: 's9' }
            ]
        }
    },

    s7: {
        title: 'Into Greece',
        contentFile: 'into_greece',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387383221567/Immigrants-walk-on-the-hi-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        asset: 'start',
        choice: {
            text: 'You could claim asylum here rather than put your children through another difficult journey.	Or you could try to continue your journey to Sweden. Other refugees have told you that the easiest route is to travel through Italy.',
            options: [
                { text: 'Stay in Greece', destination: 's8'},
                { text: 'Go to Italy', destination: 's13' }
            ]
        }
    },

    s71: {
        title: 'Overland across Europe',
        contentFile: 'acrosseurope',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387383221567/Immigrants-walk-on-the-hi-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        asset: 'start',
        choice: {
            text: 'At last your bus pulls into the bus station in Stockholm.',
            options: [
                { text: 'Next', destination: 's11' }
            ]
        }
    },

    s8: {
        title: 'The Greek asylum system',
        contentFile: 'greek_asylum_system',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389114506126/A-Syrian-refugee-family-i-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        asset: 'start',
        choice: {
            text: 'Which of the routes do you choose: Europe via Bulgaria, the airport or by ferry to Italy, or stay in Athens, to start a new life in Greece?',
            options: [
                { text: 'Bulgaria', destination: 's11'},
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
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        choice: {
            text: 'You have two options1 Stay in Turkey (Go to s 5)2 Use the last of your savings to try to get into Bulgaria again. (Go to s 11)',
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
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        success: false,
        end: true
    },

    s10: {
        title: 'Life in Athens',
        contentFile: 'life_in_athens',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389115324731/A-guard-watches-over-ille-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        success: false,
        end: true
    },

    s13: {
        title: 'Back in Patras',
        contentFile: 'italy_to_sweden',
        coverImg: '2013/12/18/1387383381267/A-migrant-sits-on-rocks-a-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        choice: {
            text: '?',
            options: [
                { text: 'Try again', destination: 's14'},
                { text: 'Go back to Athens', destination: 's10' }
            ]
        }
    },

    s14: {
        title: 'To Sweden via Italy',
        contentFile: 'sweden_via_italy',
        asset: 'start',
        choice: {
            text: '1. Claim asylum in Italy (Go to s 15) 2. You are in the Schengen zone now so you think it’s worth just travelling forward to Sweden overland, avoiding the Italian authorities. (Go to s 16)?',
            options: [
                { text: 'Claim asylum', destination: 's15'},
                { text: 'Push on to Sweden', destination: 's16' }
            ]
        }
    },

    s12: {
        title: 'Arriving in Sweden by plane',
        contentFile: 'sweden_by_plane',
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
        contentFile: 'refugee_life_in_italy',
        success: false,
        end: true
    },

    s16: {
        title: 'Overland to Sweden',
        contentFile: 'overland_to_sweden',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389115450403/The-waterfront-in-Stockho-001.jpg',
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
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
        coverCredit : 'PHOTO CREDIT and &copy; 2XXX GOES HERE !!!!!!!!!!!!!!!!!',
        success: true,
        end: true
    }
};




