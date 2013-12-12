var JOURNEY = JOURNEY || {};
JOURNEY.Game = function(el) {
    'use strict';

    var container = el;
    var scenes = JOURNEY.data;
    var debug = true;
    var sceneContainerEl;
    var sceneContentEl;
    var textboxEl;
    var choiceEl;
    var choiceTextEl;
    var outcomesEl;
    var costEl;
    var costValueEl;
    var daysEl;
    var daysValueEl;

    var currentScene = 'start';
    var buttonContainer;
    var player;

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
        container.innerHTML = JOURNEY.html.base_layout;
        sceneContainerEl = $('.scene_container', container);
        sceneContentEl = $('.scene_content', container);
        textboxEl = $('.scene_text', container);
        choiceTextEl = $('.choice_text', container);
        costValueEl = $('.cost_value', container);
        daysValueEl = $('.days_value', container);
        buttonContainer = $('.button_container', container);
        outcomesEl = $('.debug_output', container);

        choiceEl = document.createElement('button');
        choiceEl.classList.add('choice_btn');
    }

    function render() {
        var scene = scenes[currentScene];

        if (currentScene === 'start') {
            costValueEl.text(0);
            daysValueEl.text(0);
            player = new Player();
        }

        if (scene.logic) {
            if ('passport' === scene.requireItem) {
                if (true === isPassportValid()) currentScene = scene.outcomes.good.destination;
                else currentScene = scene.outcomes.bad.destination;
            }
            return render();
        }

        sceneContainerEl.css('background', 'none');
        sceneContentEl.empty();
        textboxEl.text(scene.text);
        choiceTextEl.text('');
        buttonContainer.empty();

        if (scene.asset) {
            sceneContentEl.html(JOURNEY.assets[scene.asset].html);
            sceneContainerEl.css('background-image', 'url(' + JOURNEY.assets[scene.asset].img + ')');
        }

        if (scene.choice) {
            if (scene.choice.text)
                choiceTextEl.text('> ' + scene.choice.text);

            addChoiceBtns(scene.choice.options);
        } else if (scene.end === true) {
            player.success = scene.success;
            previousPlaythroughs.push(player);
            addChoiceBtn('Start again', 'start');
            testimonies();
        }

        if (scene.item) {
            player.items.push(scene.item);
        }

        if (scene.days && scene.days > 0) {
            player.dayCount += scene.days;
            daysValueEl.text(player.dayCount);
            daysValueEl.addClass('updated');
            setTimeout(function() {
                daysValueEl.removeClass('updated');
            }, 700);
        }


        if (scene.cost && scene.cost > 0) {
            player.finance += scene.cost;
            costValueEl.text(player.finance);
            costValueEl.addClass('updated');
            setTimeout(function() {
                costValueEl.removeClass('updated');
            }, 700);

        }

        updatePlayer();
        //if (debug) console.log(player);
    }

    function testimonies() {
        console.log(player.scenes);
    }

    function isPassportValid() {
        if (-1 !== player.items.indexOf('cheepPassport'))
            return Math.random() < 0.5;

        if (-1 !== player.items.indexOf('expensivePassport'))
            return Math.random() < 0.90;

        return false;
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

    function addChoiceBtns(options) {
        options.map(function(option) {
            addChoiceBtn(option.text, option.destination);
        });
    }

    function addChoiceBtn(text, destination) {
        var btnEL = $('<button></button>').text(text);
        btnEL.on('click',function() {
            clickedChoice(destination);
        });
        buttonContainer.append(btnEL);
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
