var JOURNEY = JOURNEY || {};
JOURNEY.data = {
    start: {
        title: 'Your story begins',
        text: 'You are a Syrian refugee',
        asset: 'start',
        choice: {
            text: 'Land or air?',
            options: [
                { text: 'Land', destination: 'travelByLand'},
                { text: 'Air', destination: 'travelByAir' }
            ]
        }
    },

    travelByLand: {
        title: 'Travelling by land',
        text: 'You get to Istanbul. Choose where to go next',
        days: 33,
        choice: {
            text: 'Greece or Bulgaria?',
            options: [
                { text: 'Greece', destination: 'scene4'},
                { text: 'Bulgaria', destination: 'scene5' }
            ]
        }
    },

    buyPassport: {
        title: 'Need a passport',
        text: 'You need a passport. ',
        asset: 'passport',
        days: 33,
        choice: {
            text: 'Buy a cheap low quality or an expensive high quality passport?',
            options: [
                { text: 'Cheap and low quality', destination: 'cheapPassport'},
                { text: 'Expensive and high quality', destination: 'expensivePassport' }
            ]
        }
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
