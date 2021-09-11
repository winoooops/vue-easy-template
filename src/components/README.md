# Components 

## Add by script 
Generate API by running `yarn gen` and select *api*.

## Add manually 
1. Create a [SFC](https://v3.vuejs.org/guide/single-file-component.html#single-file-components) first.
2. Create a `index.ts` file 
```Typescript
import { createApp } from 'vue'
import myComponent from './myComponent.vue'

createApp({})
  .component('myComponent', myComponent)
```