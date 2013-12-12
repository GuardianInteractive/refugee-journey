var JOURNEY = JOURNEY || {};
JOURNEY.data = {
    scene1: {
        title: 'Your story begins',
        text: 'You are a Syrian refugee',
        color: '#39C',
        choice: {
            text: 'Land or air?',
            options: [
                { text: 'Land', destination: 'scene2'},
                { text: 'Sea', destination: 'scene3' }
            ]
        }
    },
    scene2: {
        title: 'Travelling by land',
        text: 'You get to Istanbul. Choose where to go next',
        days: 33,
        color: '#093',
        choice: {
            text: 'Greece or Bulgaria?',
            options: [
                { text: 'Greece', destination: 'scene4'},
                { text: 'Bulgaria', destination: 'scene5' }
            ]
        }
    },
    scene3: {
        title: 'Travelling by air',
        text: 'You need a false passport. Now you have a dilemma at the airport?',
        color: '#995',
        choice: {
            text: 'Fess up?',
            options: [
                { text: 'Yes', destination: 'scene6'},
                { text: 'No', destination: 'scene7' }
            ]
        }
    },
    scene4: {
        title: 'Into Greece',
        text: 'You get beaten up',
        color: '#278',
        end: true
    },
    scene5: {
        title: 'Into Bulgaria',
        text: 'You get turned back',
        color: '#278',
        end: true
    },
    scene6: {
        title: 'You fess up',
        text: 'Great! Welcome to your new life',
        color: '#278',
        end: true
    },
    scene7: {
        title: 'You keep schtum',
        text: 'Sorry. Back you go',
        color: '#278',
        choice: {
            options: [
                { text: 'Next', destination: 'scene3'}
            ]
        }
    }
};
