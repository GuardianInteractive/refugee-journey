var JOURNEY = JOURNEY || {};
JOURNEY.data = {
    s0: {
        title: 'Aleppo',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371321532/Syrian-civilians-flee-the-001.jpg',
        insertImg: 'http://maps.googleapis.com/maps/api/staticmap?center=sweden&zoom=11&scale=false&size=300x300&maptype=terrain&sensor=false&format=png&visual_refresh=true',
        contentFile: 'aleppo',
        choice: {
            text: 'Do you decide to try and reach Europe by any means necessary? Or do you decide it would be safer to travel overland to the nearest country, Turkey, and seek refuge there?',
            options: [
                {text: 'Europe', destination: 's2'},
                {text: 'Turkey', destination: 's4'}

            ]

        }
    },

    s2: {
        title: 'Asylum',
        contentFile: 'asylum_1',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371493923/Syrian-civilians-leave-wi-001.jpg',
        choice: {
            text: 'So how do you get there? Do you decide that the safest and easiest way to travel is by plane? You have some money saved and could fly to Stockholm. Or do you decide to travel overland, through Turkey and into the nearest EU country, Greece? Perhaps you will be able to get resettled directly from a camp along the way if you get in touch with the UNHCR. ',
            options: [
                {text: 'By air', destination: 's3'},
                {text: 'Overland', destination: 's3'}

            ]

        }
    },

    s21: {
        title: 'Asylum',
        contentFile: 'asylum_2',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389111546993/Syrian-refugees-travel-by-001.jpg',
        choice: {
            text: 'You have only one choice now. You have to travel overland if you want to leave Syria.',
            options: [
                {text: 'Next', destination: 's2'}

            ]

        }
    },

    s4: {
        title: 'Turkey',
        contentFile: 'turkey',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371689516/Syrian-children-refugees--001.jpg',
        choice: {
            text: 'You have new choices to make. You can stay in Turkey and hope that for resettlement through the UNHCR resettlement programme, which moves refugees directly into European countries with full support to build a new life. Or you can take a dangerous route overland into the EU and apply for asylum once there. To do this you would probably have to cross the border into Greece illegally.',
            options: [
                { text: 'Stay here', destination: 's5'},
                { text: 'Try for Europe', destination: 's6' }
            ]
        }
    },


    s5: {
        title: 'Resettlement',
        contentFile: 'Resettlement',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371794897/People-walk-inside-Contai-001.jpg',
        asset: 'start',
        choice: {
            text: '1 – You decide to stay in Turkey, it’s not perfect but it’s safe and a better option than living under mortar attack in Syria or taking a dangerous journey overland into Europe. (GO TO s 5)2 – You decide you will take the overland route through Greece, the nearest country and the most common illegal entry point into the EU. (GO TO s 6)',
            options: [
                { text: 'Stay', destination: 's51'},
                { text: 'Go to Greece', destination: 's6' }
            ]
        }
    },

    s51: {
        title: 'Staying in Turkey',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389113268437/Syrians-in-a-refugee-camp-001.jpg',
        contentFile: 'stay_in_turkey',
        asset: 'start',
        success:false,
        end: true
    },

    s6: {
        title: 'The Greek border',
        contentFile: 'greek_boarder',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389114189060/A-Greek-soldier-on-a-mili-001.jpg',
        asset: 'start',
        choice: {
            text: 'You can try and get into Greece again. Alternatively, other Syrians in Istanbul tell you that there is another way into the EU, through Bulgaria.',
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
        asset: 'start',
        choice: {
            text: 'You know that the borders to leave Greece are watched to stop irregular migrants leaving as well as entering, so you could claim asylum here rather than put your children through more difficult travelling.	Or you could keep going to Sweden, which means avoiding detection by Greek border guards. Migrants without refugee status in Greece are frequently rounded up and detained.',
            options: [
                { text: 'Stay in Greece', destination: 's8'},
                { text: 'Head for Sweden', destination: 'gotoTurkey' }
            ]
        }
    },

    s8: {
        title: 'The Greek asylum system',
        contentFile: 'greek_asylum_system',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389114506126/A-Syrian-refugee-family-i-001.jpg',
        asset: 'start',
        choice: {
            text: '1 Return to Turkey and try to reach Europe via Bulgaria instead (s 11) 2 Try to make a life in Athens, blending into the underground Syrian community there. (s 10) 3 Use your savings to look for fake passports that would get you onto a plane to Stockholm. (s 12)4 You decide to keep moving forward and try to reach Sweden overland,  You don’t want to risk using a false passport so you work out the overland journey, through eastern Europe, Romania and Germany and into Sweden. (s 13)',
            options: [
                { text: 'Back to Turkey', destination: 's11'},
                { text: 'Fake passport', destination: 's12'},
                { text: 'Overland to Sweden', destination: 's13'},
                { text: 'Life in Athens', destination: 's10' }
            ]
        }
    },

    s9: {
        title: 'Bulgaria',
        contentFile: 'bulgaria',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387371867715/A-Bulgarian-army-officer--001.jpg',
        choice: {
            text: 'You have two options1 Stay in Turkey (Go to s 5)2 Use the last of your savings to try to get into Bulgaria again. (Go to s 11)',
            options: [
                { text: 'Stay in Turkey', destination: 's5'},
                { text: 'Try Bulgaria again', destination: 's111' }
            ]
        }
    },

    s111: {
        title: 'Bulgaria again',
        contentFile: 'bulgaria_again',
        coverImg: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387370997705/Bulgarian-border-2-001.jpg',
        success: false,
        end: true
    },

    s10: {
        title: 'Life in Athens',
        contentFile: 'life_in_athens',
        coverImg: 'http://static.guim.co.uk/sys-images/guardian/Pix/pictures/2014/1/7/1389115324731/A-guard-watches-over-ille-001.jpg',
        success: false,
        end: true
    },

    s13: {
        title: 'Through Italy to Sweden',
        contentFile: 'italy_to_sweden',
        coverImg: '2013/12/18/1387383381267/A-migrant-sits-on-rocks-a-001.jpg',
        choice: {
            text: '?',
            options: [
                { text: 'Try again', destination: 's14'},
                { text: 'Stay in Athens', destination: 's10' }
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
        success: true,
        end: true
    }
};




