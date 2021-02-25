'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = (module.exports = require('@frctl/fractal').create());
//
// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');

// Create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
  information: [
    {
      label: 'Version',
      value: require('./package.json').version
    },
    {
      label: 'Built on',
      value: new Date(),
      type: 'time', // Outputs a <time /> HTML tag
      format: value => {
        return value.toLocaleString('CH-fr');
      }
    },
    {
      label: 'Changelog',
      value: '<a href="https://github.com/DSI-VD/joran-design-system/blob/master/CHANGELOG.md">Voir les changements</a>'
    }
  ]
  // Any other theme configuration values here
});

/* Set the title of the project */
fractal.set('project.title', 'Joran design system');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');
fractal.components.engine('@frctl/nunjucks'); // Register the Nunjucks adapter for your components
fractal.components.set('ext', '.nunj'); // Look for files with a .nunj file extension
fractal.components.set('default.status', 'wip');
fractal.components.set('statuses', {
  prototype: {
    label: 'Prototype',
    description: 'Do not implement.',
    color: '#FF3333'
  },
  wip: {
    label: 'WIP',
    description: 'Work in progress. Implement with caution.',
    color: '#FF9233'
  },
  review: {
    label: 'Waiting for review',
    description: 'Waiting for BIC review',
    color: '#a544ea'
  },
  ready: {
    label: 'Ready',
    description: 'Ready to implement.',
    color: '#29CC29'
  }
});
/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

fractal.web.set('static.path', __dirname + '/public');
fractal.web.set('builder.dest', __dirname + '/build');

// Tell Fractal to use the configured theme by default
fractal.web.theme(myCustomisedTheme);
