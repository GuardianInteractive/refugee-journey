var JOURNEY = JOURNEY || {};
JOURNEY.data = {
    start: {
        title: 'Your story begins',
        text: 'Your name is Karima. Your are a 28-year-old Sunni woman from Aleppo, and you have two children. Your husband was killed in a mortar attack three months ago. You now realise you must, for your children’s sake, get out of Syria. Now your choices begin. If you are to leave Syria, you can choose to embark on an expensive and possibly difficult journey to seek asylum in the European Union - Sweden is a popular destination - or take the shorter journey to a refugee camp in a neighbouring country ',
        asset: 'start',
        choice: {
            text: 'Do you want to try to get to Sweden or take refuge across the border in Turkey?',
            options: [
                { text: 'Sweden', destination: 'gotoSweden'},
                { text: 'Turkey', destination: 'gotoTurkey' }
            ]
        }
    },

    gotoSweden: {
        title: 'Seeking refuge in Sweden',
        text: 'Great news! Sweden has said it will welcome any refugee from Syria. Unfortunately, it will only welcome them in Sweden, so first you have to cross the 3,000 miles between here and there. The intervening countries may not be as welcoming. How would you like to travel?',
        days: 33,
        choice: {
            text: 'By land or by air?',
            options: [
                { text: 'Land', destination: 'toSwedenbyland'},
                { text: 'Air', destination: 'toSwedenbyair' }
            ]
        }
    },


    gotoTurkey: {
        title: 'At a refugee camp in Turkey',
        text: 'Life isn’t great in a refugee camp. In particular, schooling is limited, so every day you spend here your children’s education is on hold. But at least the daily threat of death by mortar is now far away. Your choices from here are fairly limited: you can sit it out, and hope the war ends soon. You can apply for asylum directly through one of the European countries’ agents in the camp - Germany has said it will take 10,000 refugees. Or you can go back to Syria and try your luck with another way out.',
        days: 33,
        choice: {
            text: 'What now?',
            options: [
                { text: 'Apply to Germany', destination: 'GermanApplication'},
                { text: 'Sit it out', destination: 'sititout' },
                { text: 'Go back', destination: 'start' }
            ]
        }
    },

    GermanApplication: {
        title: 'At a refugee camp in Turkey',
        text: 'Life isn’t great in a refugee camp. In particular, schooling is limited, so every day you spend here your children’s education is on hold. But at least the daily threat of death by mortar is now far away. Your choices from here are fairly limited: you can sit it out, and hope the war ends soon. You can apply for asylum directly through one of the European countries’ agents in the camp - Germany has said it will take 10,000 refugees. Or you can go back to Syria and try your luck with another way out.',
        days: 33,
        choice: {
            text: 'What now?',
            options: [
                { text: 'Apply to Germany', destination: 'GermanApplication'},
                { text: 'Sit it out', destination: 'sititout' },
                { text: 'Go back', destination: 'start' }
            ]
        }
    },


 sititout: {
        title: 'Day after day in a Turkish refugee camp',
        text: 'You start to feel at home in the camp eventually. You meet your neighbours. One of them has a Palestinian grandfather who knows people from his childhood who went to a refugee camp in Lebanon in 1948 and are still there. You wonder if your children will spend their entire lives in this camp. Your story is not over, but nor is it continuing.',
        success: false,
        end: true
            },






    toSwedenbyland: {
        title: 'Overland out of Syria',
        text: 'Your first step is to find a people smuggler who’s willing to get you out of Syria. With your resources, and contacts, the best you can do is find someone who’ll get you as far as Istanbul. The good news is that, although the journey is long and hard, in an airless container, you do finally arrive on the outskirts of Istanbul. Your next challenge is how to continue. In the Turkish capital you find people who will offer to get you into Greece or into Bulgaria. From there you’ll be inside the EU and able to travel relatively freely all the way to Sweden. Which to choose?',
        days: 33,
        choice: {
            text: 'Bulgaria or Greece',
            options: [
                { text: 'Bulgaria', destination: 'toBulgaria'},
                { text: 'Greece', destination: 'toGreece' }
            ]
        }
    },

 toBulgaria: {
        title: 'title',
        text: 'A policeman boards your minibus as you cross into Bulgaria near Lesovo. He drags you and others off the bus. After a long wait, immigration officials take your fingerprints and name. Then another minibus arrives and you find yourself bundled onboard. When the doors open again your find yourself in the Turkish city of Edirne. This is illegal, but you have limited recourse to challenge it: you’re unlikely now ever to get into Europe as an official asylum seeker. ',
        success: false,
        end: true
            },


 toGreece: {
        title: 'title',
        text: 'You make it into Greece, and bypass Thessaloniki on your way to Athens, from where you hope it will be easier to join an international bus service to  Poland. Unfortunately, Athens is also the heartland of Golden Dawn, the far right party linked to ugly attacks on migrants.',

        success: false,
        end:true
    },



    toSwedenbyair: {
        title: 'Need a passport',
        text: 'The first problem you’ll encounter is that it is now impossible to get a visa, for pretty much anywhere, from Syria. So you’ll need a false passport, ideally for a country which doesn’t require a visa to enter Sweden. Assuming you lack the scruples and posess the means for this approach, and get onto a plane, you face a choice at the airport in Sweden. Do you approach the first official you see, before leaving the airport, and admit that your papers are invalid, or do you try to get out into the city before continuing your quest for asylum?',
        asset: 'passport',
        days: 33,
        choice: {
            text: 'Come clean or keep quiet?',
            options: [
                { text: 'Come clean', destination: 'comeclean'},
                { text: 'Keep quiet', destination: 'keepquiet' }
            ]
        }
    },


    comeclean: {
        title: 'Owning up to false documents in Stockholm Airport',
        text: 'Safe at last! International treaties guarantee you asylum if you approach the receiving authority at the earliest opportunity. What you had to do to get here is irrelevant. Enjoy your new life in Sweden.',
        success: true,
        end: true

    },

    keepquiet: {
        title: 'Through passport control in Stockholm',
        text: 'After a couple of days finding your feet in Sweden you decide to seek asylum officially. The bad news is that by knowingly entering the country using false documents you have committed a crime. The good news is that the Swedes are willing to overlook it, and grant you asylum. Who knows if a change in the political weather will mean that the next Syrian to make this mistake won’t be repatriated. ',
        success: true,
        end: true

    },


    cheapPassport: {
        title: 'Buy cheap passport',
        text: 'You purchase a cheap passport.',
        days: 6,
        cost: 300,
        item: 'cheapPassport',
        choice: {
            options: [
                { text: 'Continue on', destination: 'arriveInGreece'}
            ]
        }
    },

    expensivePassport: {
        title: 'Buy expensive passport',
        text: 'You purchase an expensive passport.',
        days: 9,
        cost: 800,
        item: 'expensivePassport',
        choice: {
            options: [
                { text: 'Continue on', destination: 'arriveInGreece'}
            ]
        }
    },

    travelByAir: {
        title: 'Travelling by air',
        text: 'You need a false passport.',
        asset: 'airport',
        days: 8,
        cost: 500,
        choice: {
            text: 'Do you buy a false passort?',
            options: [
                { text: 'Buy a false passport', destination: 'buyPassport' },
                { text: 'Try without a passport', destination: 'arriveInGreece' }
            ]
        }
    },

    arriveInGreece: {
        title: 'Arrive in Greece',
        text: 'You arrive in a Greece airport.',
        days: 33,
        choice: {
            text: 'Airport security want to see your passport.',
            options: [
                { text: 'Show passport', destination: 'showPassport' },
                { text: 'Fess up', destination: 'noPassport' }
            ]
        }
    },

    showPassport: {
        title: 'Show passport',
        text: 'You show security your passport',
        choice: {
            options: [
                { text: 'Hand over passport', destination: 'logic_passport' }
            ]
        }
    },

    logic_passport: {
        title: 'passport logic check',
        logic: true,
        requireItem: 'passport',
        outcomes: {
            good: { destination: 'allowedIn' },
            bad: { destination: 'turnedAway' }
        }
    },

    turnedAway: {
        title: 'Beaten up',
        text: 'You get beaten up',
        success: false,
        end: true
    },

    allowedIn: {
        title: 'You get in',
        text: 'Great! Welcome to your new life',
        success: true,
        end: true
    },

    scene4: {
        title: 'Into Greece',
        text: 'You get beaten up',
        success: false,
        end: true
    },
    scene5: {
        title: 'Into Bulgaria',
        text: 'You get turned back',
        end: true
    },
    scene6: {
        title: 'You fess up',
        text: 'Great! Welcome to your new life',
        success: true,
        end: true
    },
    scene7: {
        title: 'You keep schtum',
        text: 'Sorry. Back you go',
        success: false,
        choice: {
            options: [
                { text: 'Next', destination: 'scene3'}
            ]
        }
    }
};
