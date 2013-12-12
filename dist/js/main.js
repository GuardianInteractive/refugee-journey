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
    var player = {
        currentPlaythough: [],
        playthoughs: []
    };
    var currentScene = 'scene1';
    var buttonContainer;
    var buttons = [];

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


        buttonContainer = document.createElement('div');
        buttonContainer.classList.add('choice_container');
        container.appendChild(buttonContainer);


        outcomesEl = document.createElement('div');
        outcomesEl.classList.add('outcomes');
        container.appendChild(outcomesEl);
    }

    function render() {
        textboxEl.style.backgroundColor = scenes[currentScene].color;
        textboxEl.innerHTML = scenes[currentScene].text;
        buttons.map(removeElement);
        buttons = [];
        choiceTextEl.innerHTML = '';

        if (scenes[currentScene].choice) {
            if (scenes[currentScene].choice.text) {
                choiceTextEl.innerHTML = '> ' + scenes[currentScene].choice.text;
            }
            scenes[currentScene].choice.options.forEach(addChoiceBtn);
        } else if (scenes[currentScene].end === true) {
            addEndButton();
        }

        if (debug) console.log(player);
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
        player.playthoughs.push(player.currentPlaythough);
        player.currentPlaythough = [];
        currentScene = 'scene1';
        outputOutcomes();
        render();
    }

    function outputOutcomes() {
        outcomesEl.innerHTML = '';
        player.playthoughs.forEach(function(playthough, index) {
            var count = document.createElement('p');
            count.innerHTML += 'Play count: ' + (index + 1);
            var list = document.createElement('ol');
            playthough.forEach(function(scene) {
                var item = document.createElement('li');
                item.innerHTML = scenes[scene].title;
                list.appendChild(item);
            });
            outcomesEl.appendChild(count);
            outcomesEl.appendChild(list);
        });
    }

    function updatePlayer() {
        player.currentPlaythough.push(currentScene);
    }

    function addChoiceBtn(choiceData) {
        var btnEL = choiceEl.cloneNode(false);
        btnEL.innerHTML = choiceData.text;
        btnEL.addEventListener('click', function() { clickedChoice(choiceData.destination);}, false);
        buttonContainer.appendChild(btnEL);
        buttons.push(btnEL);
    }

    function clickedChoice(dest) {
        currentScene = dest;
        updatePlayer();
        render();
    }


    function init() {
        setupDOM();
        render();
    }

    init();

    return this;
};
