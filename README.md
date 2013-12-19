# Refugee journey
Choose your own adventure.

## Editing content
All the content HTML is contained in `.mustache` files located in `/src/html/content/`.

The scenes are contained in `/src/js/app/data.js`

Each each has the following data structure:

```javascript
 sceneID: {
         title: 'Scene title',
         coverImg: 'Main scene image',
         insertImg: 'Image floating of the right', // Optional
         contentFile: 'Content html filename', // Located in /scr/html/content
         choice: {
             text: 'Question text',
             options: [
                 {text: 'Button text', destination: 'next sceneID'},
                 {text: 'button text', destination: 'next sceneID'}
             ]
         }
     }
```

## Requirements
* NodeJS


## Setup
* git clone
* npm install
* grunt


## Deploy
Test deploy `grunt deploy`
Real deploy `grunt deploy --prod`
