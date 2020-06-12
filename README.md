# Widget Commons

## Dependencias

+ Node
+ Modyo Cli
+ Vue Cli

## Modyo Cli

Instalar Modyo Cli de forma global en el equipo. <br>
[Documentación](https://www.npmjs.com/package/@modyo/cli)

+ npm
```
    $ npm i -g @modyo/cli #via npm 
```

+ yarn 
```
    $ yarn global add @modyo/cli #via yarn 
```

## Crear proyecto commons

Comando para crear un proyecto commons para funcionar en un widget Modyo. <br>
Reemplazar **test-commons** por nombre personalizado

```
    $ modyo-cli get modyo-widgets-project-vue test-commons
```

### ===> Agregar la configuración del proyecto <===
### ===> Agregar la creación del releases <===

## Widget

### Crear Modyo Widget

Comando para crear un prpyecto con la configuración para funcionar en un widget de Modyo <br>
Reemplazar **test-widget** por nombre personalizado

```
    $ modyo-cli get modyo-widgets-template-vue test-widget
```

### Github

Necesitas obtener un token con el scope read:packages <br>
[Documentación](https://help.github.com/en/packages/publishing-and-managing-packages/about-github-packages#about-tokens)

### Agregar el token

- Agregar Archivo **.npmrc** en la para leer el token creado en el item anterior 

- El archivo debe contener lo siguiente (reemplazar **TOKEN** por token creado en github): 

- ```
      //npm.pkg.github.com/:_authToken=TOKEN
      @modyo:registry=https://npm.pkg.github.com
  ```

- [Más información](https://develop.docs.modyo.com/platform/content/public-api-reference.html#sdk-de-javascript)

### package

package.json

```
    "dependencies": {
      "@modyo/modyo-news-test": "^0.1",
    }
```
