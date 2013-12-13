var JOURNEY = JOURNEY || {};
JOURNEY.Game = function(el) {
    'use strict';

    var container = el;
    var scenes = JOURNEY.data;
    var sceneContainerEl;
    var sceneContentEl;
    var textboxEl;
    var choiceEl;
    var choiceTextEl;
    var outcomesEl;
    var costEl;
    var costValueEl;
    var gameWrapperEl;
    var daysEl;
    var daysValueEl;
    var testimonyEl;
    var testimoniesWrapperEl;

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
        gameWrapperEl = $('.game_wrapper', container);
        sceneContainerEl = $('.scene_container', container);
        sceneContentEl = $('.scene_content', container);
        textboxEl = $('.scene_text', container);
        choiceTextEl = $('.choice_text', container);
        costValueEl = $('.cost_value', container);
        daysValueEl = $('.days_value', container);
        buttonContainer = $('.button_container', container);
        outcomesEl = $('.debug_output', container);
        testimoniesWrapperEl = $('.testimonies', container);
        testimonyEl = $('.testimony_steps');

        $('.testimonies_restart_btn').on('click', newGame);

        choiceEl = document.createElement('button');
        choiceEl.classList.add('choice_btn');
    }

    function newGame() {
        player = new Player();
        currentScene = 'start';
        gameWrapperEl.show();
        testimoniesWrapperEl.hide();
        render();
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
        }

        if (scene.cost && scene.cost > 0) {
            player.finance += scene.cost;
            costValueEl.text(player.finance);
            costValueEl.addClass('updated');
        }

        updatePlayer();
    }

    function testimonies() {
        testimonyEl.empty();
        gameWrapperEl.hide();
        testimoniesWrapperEl.show();

        player.scenes.forEach(function(sceneName) {
            var viewData = {
                heading: JOURNEY.data[sceneName].title,
                html: ''
            };

            if (JOURNEY.testimonies.hasOwnProperty(sceneName)) {
                JOURNEY.testimonies[sceneName].map(function(html) {
                    viewData.html += html;
                });
            }

            var output = Mustache.render(JOURNEY.html.view_testimony, viewData);
            testimonyEl.append(output);
        });
    }

    function isPassportValid() {
        if (-1 !== player.items.indexOf('cheepPassport'))
            return Math.random() < 0.5;

        if (-1 !== player.items.indexOf('expensivePassport'))
            return Math.random() < 0.90;

        return false;
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
        setupDOM();
        newGame();
    }

    init();

    return this;
};
