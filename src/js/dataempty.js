var JOURNEY = JOURNEY || {};
JOURNEY.data = {
    start: {
        title: 'Your story begins',
        text: '',
        asset: 'start',
        choice: {
            text: 'Do you want to try to get to Sweden or take refuge across the border in Turkey?',
            options: [
                { text: 'Sweden', destination: 'gotoSweden'},
                { text: 'Turkey', destination: 'gotoTurkey' }
            ]
        }
    },

 

 sititout: {
        title: 'Day after day in a Turkish refugee camp',
        text: 'You start to feel at home in the camp eventually. You meet your neighbours. One of them has a Palestinian grandfather who knows people from his childhood who went to a refugee camp in Lebanon in 1948 and are still there. You wonder if your children will spend their entire lives in this camp. Your story is not over, but nor is it continuing.',
        success: false,
        end: true
            },




};
