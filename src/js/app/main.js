var JOURNEY = JOURNEY || {};
JOURNEY.Game = function(el) {
    'use strict';

    var container = el;
    var scenes = JOURNEY.data;
    var initialStory;

    var sceneContainerEl;
    var sceneContentEl;
    var textboxEl;
    var choiceEl;
    var choiceTextEl;
    var outcomesEl;
    var gameWrapperEl;
    var testimonyEl;
    var testimoniesWrapperEl;


    var currentScene = 'start';
    var buttonContainer;
    var player;

    var previousPlaythroughs = [];

    function Player() {
        return {
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

        if (currentScene === 'start')
            player = new Player();

        if (scene.logic) {
            if ('passport' === scene.requireItem) {
                if (true === isPassportValid()) currentScene = scene.outcomes.good.destination;
                else currentScene = scene.outcomes.bad.destination;
            }
            return render();
        }

        gameWrapperEl.css('background-image', (scene.img) ? 'url(' + scene.img + ')' : '');
        buttonContainer.empty();

        sceneContainerEl.html(Mustache.render(JOURNEY.html.view_scene, {
            title: scene.title,
            testimony: JOURNEY.testimonies[scene.testimony],
            sceneText: scene.text,
            choiceText: (scene.choice) ? scene.choice.text : ''
        }));

        buttonContainer = $('.button_container', sceneContainerEl);

        if (scene.choice) {
            if (scene.choice.text)
                choiceTextEl.text('> ' + scene.choice.text);

            addChoiceBtns(scene.choice.options);
        } else if (scene.end === true) {
            player.success = scene.success;
            previousPlaythroughs.push(player);
            addChoiceBtn('Start again', 'start');
            testimonies(player.scenes);
        }

        if (scene.item)
            player.items.push(scene.item);

        updatePlayer();
    }

    function testimonies(scenes) {
        testimonyEl.empty();
        gameWrapperEl.hide();
        testimoniesWrapperEl.show();

        scenes.forEach(function(sceneName) {
            if (!JOURNEY.data.hasOwnProperty(sceneName))
                return;

            var viewData = {
                heading: JOURNEY.data[sceneName].title,
                html: ''
            };

            if (JOURNEY.data[sceneName].hasOwnProperty('testimony'))
                viewData.html += JOURNEY.testimonies[JOURNEY.data[sceneName].testimony];

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


    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]"); // jshint ignore:line
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); // jshint ignore:line
    }


    function init() {
        setupDOM();

        initialStory = getParameterByName('journey');
        if (initialStory === "") {
            newGame();
        } else {
            testimonies(initialStory.split(','));
        }
    }

    init();
    return this;
};
