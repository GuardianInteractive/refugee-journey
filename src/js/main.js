var JOURNEY = JOURNEY || {};
JOURNEY.Game = function(el) {
    'use strict';

    var container = el;
    var scenes = JOURNEY.data;
    var debug = true;
    var textboxEl;
    var choiceEl;
    var choiceTextEl;
    var outcomesEl;
    var costEl;
    var costValueEl;
    var daysEl;
    var daysValueEl;
    var player;

    var currentScene = 'start';
    var buttonContainer;
    var buttons = [];

    var previousPlaythroughs = [];

    function Player() {
        return {
            dayCount: 0,
            finance: 0,
            childAlive: true,
            scenes: [],
            items: [],
            success: null
        };
    }

    function setupDOM() {
        container.classList.add('gi_container');

        textboxEl = document.createElement('p');
        textboxEl.classList.add('scene_text');
        container.appendChild(textboxEl);

        choiceEl = document.createElement('button');
        choiceEl.classList.add('choice_btn');
        choiceEl.innerHTML  = 'choice button';

        choiceTextEl = document.createElement('p');
        choiceTextEl.classList.add('choice_text');
        container.appendChild(choiceTextEl);

        costEl = document.createElement('p');
        costEl.classList.add('cost');
        costEl.innerHTML = 'Cost: ';
        costValueEl = document.createElement('span');
        costEl.appendChild(costValueEl);
        container.appendChild(costEl);

        daysEl = document.createElement('p');
        daysEl.classList.add('days');
        daysEl.innerHTML = 'Days: ';
        daysValueEl = document.createElement('span');
        daysEl.appendChild(daysValueEl);
        container.appendChild(daysEl);


        buttonContainer = document.createElement('div');
        buttonContainer.classList.add('choice_container');
        container.appendChild(buttonContainer);


        outcomesEl = document.createElement('div');
        outcomesEl.classList.add('outcomes');
        container.appendChild(outcomesEl);
    }

    function render() {
        var scene = scenes[currentScene];
        console.log(scene);

        if (scene.logic) {
            if (scene.requireItem === 'passport') {
                currentScene = (isPassportValid()) ? scene.outcomes.good.destination : scene.outcomes.bad.destination;
            }
            return render();
        }


        textboxEl.innerHTML = scene.text;
        buttons.map(removeElement);
        buttons = [];
        choiceTextEl.innerHTML = '';

        if (scene.choice) {
            if (scene.choice.text) {
                choiceTextEl.innerHTML = '> ' + scene.choice.text;
            }
            scene.choice.options.forEach(addChoiceBtn);
        } else if (scene.end === true) {
            player.success = scene.success;
            addEndButton();
        }

        if (scene.item) {
            player.items.push(scene.item);
        }

        player.dayCount += (scene.days) ? scene.days : 0;
        player.finance += (scene.cost) ? scene.cost : 0;

        daysValueEl.innerHTML = player.dayCount;
        costValueEl.innerHTML = player.finance;

        updatePlayer();

        if (debug) console.log(player);
    }

    function isPassportValid() {
        if (-1 !== player.items.indexOf('cheepPassport')) {
            return Math.random() < 0.5;
        }

        if (-1 !== player.items.indexOf('expensivePassport')) {
            return Math.random() < 0.90;
        }

        return false;
    }

    function addEndButton() {
        var btnEL = choiceEl.cloneNode(false);
        btnEL.innerHTML = 'Start again';
        btnEL.addEventListener('click', newGame, false);
        buttonContainer.appendChild(btnEL);
        buttons.push(btnEL);
    }

    function removeElement(el) {
        el.parentNode.removeChild(el);
    }

    function newGame() {
        previousPlaythroughs.push(player);
        player = new Player();
        currentScene = 'start';
        costValueEl.innerHTML = 0;
        daysValueEl.innerHTML = 0;
        outputOutcomes();
        render();
    }

    function outputOutcomes() {
        outcomesEl.innerHTML = '';
        previousPlaythroughs.forEach(function(playthough, index) {
            var count = document.createElement('p');
            count.innerHTML += 'Play count: ' + (index + 1);

            var cost = document.createElement('p');
            cost.innerHTML += 'Cost count: ' + playthough.finance;

            var days = document.createElement('p');
            days.innerHTML += 'Day count: ' + playthough.dayCount;

            var scenelist = document.createElement('ol');
            playthough.scenes.forEach(function(scene) {
                if (scenes[scene].title) {
                    var itemEl = document.createElement('li');
                    itemEl.innerHTML = scenes[scene].title;
                    scenelist.appendChild(itemEl);
                }
            });

            var items = document.createElement('p');
            items.innerHTML = 'Items:';
            var itemlist = document.createElement('ul');
            playthough.items.forEach(function(item) {
                var itemEl = document.createElement('li');
                itemEl.innerHTML = item;
                itemlist.appendChild(itemEl);
            });

            var success = document.createElement('p');
            success.innerHTML += 'success: ' + playthough.success;

            outcomesEl.appendChild(count);
            outcomesEl.appendChild(success);
            outcomesEl.appendChild(cost);
            outcomesEl.appendChild(days);
            outcomesEl.appendChild(items);
            outcomesEl.appendChild(itemlist);
            outcomesEl.appendChild(scenelist);
        });
    }

    function updatePlayer() {
        player.scenes.push(currentScene);
    }

    function addChoiceBtn(choiceData) {
        var btnEL = choiceEl.cloneNode(false);
        btnEL.innerHTML = choiceData.text;
        btnEL.addEventListener('click', function() {
            clickedChoice(choiceData.destination);
        }, false);
        buttonContainer.appendChild(btnEL);
        buttons.push(btnEL);
    }

    function clickedChoice(dest) {
        currentScene = dest;
        render();
    }


    function init() {
        player = new Player();
        setupDOM();
        render();
    }

    init();

    return this;
};
