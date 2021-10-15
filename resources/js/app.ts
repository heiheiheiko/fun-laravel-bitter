import { createApp } from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import App from './App.vue';

const app = createApp(App);

const requireComponent = require.context(
  './components',
  false,
  /.(vue|js)$/,
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
  );

  app.component(componentName, componentConfig.default || componentConfig);
});

app.mount('#app');

require('./bootstrap');
