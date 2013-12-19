var JOURNEY = JOURNEY || {};
JOURNEY.Game = function(el) {
    'use strict';

    var container = el;
    var sceneContainerEl;
    var sceneContentEl;
    var choiceEl;
    var choiceTextEl;
    var gameWrapperEl;
    var currentScene;
    var buttonContainer;

    function Player() {
        return {
            scenes: [],
            success: null
        };
    }
    var player = new Player();

    function setupDOM() {
        container.innerHTML = JOURNEY.html.base_layout;
        gameWrapperEl = $('.game_wrapper', container);
        sceneContainerEl = $('.scene_container', container);
        sceneContentEl = $('.scene_content', container);
        choiceTextEl = $('.choice_text', container);
        buttonContainer = $('.button_container', container);

        choiceEl = document.createElement('button');
        choiceEl.classList.add('choice_btn');

        sceneContainerEl.on('click', '.restart', newGame);
        sceneContainerEl.on('click', '.share-facebook', shareFacebook);
        sceneContainerEl.on('click', '.share-twitter', shareTwitter);
    }

    function newGame() {
        player = new Player();
        sceneContainerEl.empty();
        currentScene = 'start';
        render();
    }

    function render() {
        var scene = JOURNEY.data[currentScene];

        if (typeof scene === 'undefined') {
            console.log('Missing scene: %s', currentScene);
            return;
        }

        var sceneHTML = Mustache.render(JOURNEY.html.view_scene, {
            title: (scene.title) ? scene.title : '',
            sceneContent: JOURNEY.content[scene.contentFile],
            choiceText: (scene.choice) ? scene.choice.text : ''
        });
        var sceneEl = $(sceneHTML);
        sceneEl.css('background-image', (scene.img) ? 'url(' + scene.img + ')' : '');
        sceneContainerEl.append(sceneEl);
        sceneEl.get()[0].scrollIntoView();

        buttonContainer = $('.button-container', sceneEl);

        $('.choice-btn', sceneContainerEl).off().attr('disabled', true).addClass('disabled');

        if (scene.choice) {
            addChoiceBtns(scene.choice.options);
        }

        if (scene.end === true) {
            // TODO: Show share and replay options
            player.success = scene.success;
            $('.scene-inner', sceneEl).append($(JOURNEY.content.share_and_replay));
        }

        updatePlayer();
    }

    function loadScenes(scenes) {
        sceneContainerEl.empty();

        scenes.forEach(function(sceneName) {
            if (!JOURNEY.data.hasOwnProperty(sceneName))
                return;
            currentScene = sceneName;
            render();
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
        var btnEL = $('<button class="choice-btn"></button>').text(text);
        btnEL.on('click',function() {
            $(this).addClass('picked');
            clickedChoice(destination);
        });
        buttonContainer.append(btnEL);
    }

    function clickedChoice(dest) {
        currentScene = dest;
        render();
    }

    // http://stackoverflow.com/a/901144
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]"); // jshint ignore:line
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); // jshint ignore:line
    }

    function areValidScenes(scenes) {
        return scenes.every(function(sceneName) {
            return JOURNEY.data.hasOwnProperty(sceneName);
        });
    }

    function getShareURL() {
        var shareURL = 'http://example.com/share/example/';
        if (player.scenes.length > 0) {
            shareURL += '?journey=' + encodeURIComponent(player.scenes.join(','));
        }
        return shareURL;
    }

    function openShareWindow(url, options) {
        var targetUrl = url;
        for (var k in options) {
            if (options.hasOwnProperty(k))
                targetUrl += k + '=' + options[k] + '&';
        }

        window.open(
            targetUrl,
            'Share',
            'width=640,height=500,resizable,scrollbars=yes,status=1'
        );
    }

    function shareTwitter(event) {
        event.preventDefault();
        var options = {
            related: 'guardian',
            text: 'Refugee journey tweet text',
            via: 'guardian',
            url: getShareURL(),
            hashtags: 'TEST,HASH,TAGS'
        };

        openShareWindow('https://twitter.com/share?', options);
    }


    function shareFacebook(event) {
        event.preventDefault();
        var options = {
            'p[title]': 'PAGE TITLE',
            'p[summary]': 'Refugee journey SUMMARY TEXT',
            'p[url]': getShareURL(),
            'p[images][0]': 'http://placehold.it/960x500'
        };

        openShareWindow('http://www.facebook.com/sharer.php?s=100&', options);
    }

    function init() {
        setupDOM();

        var userProvidedScenes = getParameterByName('journey').split(',');

        if (userProvidedScenes.length > 0 && areValidScenes(userProvidedScenes)) {
            loadScenes(userProvidedScenes);
        } else {
            newGame();
        }
    }



    init();
    return this;
};
