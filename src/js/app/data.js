var JOURNEY = JOURNEY || {};
JOURNEY.data = {
    start: {
        title: 'Aleppo',
        testimony: 'start',
        img: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/12/18/1387383572368/9ec0dd8f-b2ec-4fea-9c6f-773aa74943a6-620x411.jpeg',
        contentFile: 'aleppo',
        choice: {
            text: 'Do you decide to try and reach Europe by any means necessary? Or do you decide it would be safer to travel overland to the nearest country, Turkey, and seek refuge there?',
            options: [
                {text: 'Europe', destination: 'scene2'},
                {text: 'Turkey', destination: 'scene4'}

            ]

        }
    },


    scene2: {
        title: 'Asylum',
        contentFile: 'asylum_1',
        choice: {
            text: 'So how do you get there? Do you decide that the safest and easiest way to travel is by plane? You have some money saved and could fly to Stockholm. Or do you decide to travel overland, through Turkey and into the nearest EU country, Greece? Perhaps you will be able to get resettled directly from a camp along the way if you get in touch with the UNHCR. ',
            options: [
                {text: 'By air', destination: 'scene3'},
                {text: 'Overland', destination: 'scene3'}

            ]

        }
    },


    scene21: {
        title: 'Asylum',
        contentFile: 'asylum_2',
        choice: {
            text: 'You have only one choice now. You have to travel overland if you want to leave Syria.',
            options: [
                {text: 'Next', destination: 'scene2'}

            ]

        }
    },

    scene4: {
        title: 'Turkey',
        contentFile: 'turkey',
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
        contentFile: 'Resettlement',
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
        contentFile: 'stay_in_turkey',
        asset: 'start',
        success:false,
        end: true
    },

    scene6: {
        title: 'The Greek border',
        contentFile: 'greek_boarder',
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
        contentFile: 'into_greece',
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
        contentFile: 'greek_asylum_system',
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
        contentFile: 'bulgaria',
        asset: 'start',
        choice: {
            text: 'You have two options1 Stay in Turkey (Go to scene 5)2 Use the last of your savings to try to get into Bulgaria again. (Go to scene 11)',
            options: [
                { text: 'Stay in Turkey', destination: 'scene5'},
                { text: 'Try Bulgaria again', destination: 'scene111' }
            ]
        }
    },


    scene111: {
        title: 'Bulgaria again',
        contentFile: 'bulgaria_again',
        asset: 'start',
        success: false,
        end: true

    },



    scene10: {
        title: 'Life in Athens',
        contentFile: 'life_in_athens',
        success: false,
        end: true
    },


    scene13: {
        title: 'Through Italy to Sweden',
        contentFile: 'italy_to_sweden',
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
        contentFile: 'sweden_via_italy',
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
        contentFile: 'sweden_by_plane',
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
        contentFile: 'refugee_life_in_italy',
        success: false,
        end: true
    },



    scene16: {
        title: 'Overland to Sweden',
        contentFile: 'overland_to_sweden',
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
        contentFile: 'refugee_life_in_sweden',
        success: true,
        end: true
    }
};




