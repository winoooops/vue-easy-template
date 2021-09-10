# Vue-Easy-template
A easy way to generate Vue project

## Table of Content
- [Features](#Features)
- [Plop Generator](#Plop)
- [Permissions](#Permissions)
- [Todos](#Todos)

## Features 
- Basic Webpack Config
- Vue 3 support with composition Api
- Command-Line Tool for Easy Vue Code Generation
- Permission Contorl(ongoing)
<!-- - Command-Line Tool for Router Generation  -->

## Plop
The template Engine uses *plop* to generate business related files.
See [plop configurations](https://github.com/winoooops/vue-easy-template/tree/main/settings/plop) for configuration details.

#### Generate a **Component** 
![Image Text](https://github.com/winoooops/vue-easy-template/blob/main/instructions/assets/component.gif)
#### Generate an **API**
![Image Text](https://github.com/winoooops/vue-easy-template/blob/main/instructions/assets/api.gif)
#### Generate a **View**
![Image Text](https://github.com/winoooops/vue-easy-template/blob/main/instructions/assets/view.gif)
#### Generate a **Store module**
![Image Text](https://github.com/winoooops/vue-easy-template/blob/main/instructions/assets/store.gif)


## Permissions
### Typical Process

1. **constantRoutes**: After `createApp()`, *Vue Router* gets loading with pages/components that don't require user info.

2. **asyncRoutes**: Upon Login, compared user's role with each route's meta ([vue-router](https://router.vuejs.org/guide/advanced/meta.html)'s recommandation) and generate a routeMap a given user can login.

3. **addRoutes**: Use `router.addRoutes(store.getters.addRouts)` to dynamically add user's routes

4. Use Vuex to manage the routerMap 

### Router
```javascript
/* /src/router/index.js */
import VueRouter from "vue-router";
import Vue from 'vue'

Vue.use(VueRouter)

export const constantRoutes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: () => import('@/views/Login')
    }
]

// upon login, get the routes from api's response
export const asyncRoutes = [
    // routes return from api based user's permission 
]

// after createApp(), only load the constantRoutes
const router = new VueRouter({
    routes: constantRoutes,
})
```


### Login 

### UserInfo

### Permission


## Todos
- [ ] Custom File Generator using *inquery.js*
- [ ] Custom Command-line Tool 
- [ ] Add *Jenkins* for Auto-Deployment
- [ ] Full *TypeScript* Support
