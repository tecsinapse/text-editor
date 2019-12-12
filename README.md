# Iniciando

[![Build Status](https://travis-ci.org/tecsinapse/text-editor.svg?branch=master)](https://travis-ci.org/tecsinapse/text-editor)



***@tecsinapse/text-editor*** é um componente React editor de texto WYSIWYG ;)

## Get Started

Para acessar os documentos acesse nosso [storybook](https://tecsinapse.github.io/text-editor)

É recomendável utilizar uma versão `"node": ">=12.0.0"` devido a performance de build superior

Para add em seu projeto:
```
    yarn add @tecsinapse/text-editor
```

E adicione o ThemeProvider em seu projeto como abaixo:

```
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@tecsinapse/ui-kit";
import { EditText } from "@tecsinapse/text-editor";

ReactDOM.render(
  <ThemeProvider variant="black">
    <EditText />
  </ThemeProvider>,

  document.getElementById("root")
);
```

É necessário especificar a propriedade `skinUrl` do componente para apontar o local da folha de estilos do editor.
Skins podem ser encontradas na pasta `node-modules/tinymce/skins/ui` e copiadas para a pasta de assets públicos de sua aplicação.

```
    <EditText skinUrl="/text-editor/oxide" />
```

### Desenvolvimento

Para rodar localmente
```
    yarn install && yarn start
```

Para buildar e publicar a lib:
```
    bumped release $VERSAO
```

Para rodar o app de exemplo, fazer o link da lib na pasta de exemplo após executar o build:
```
    yarn build && yarn link
    cd example/
    yarn link @tecsinapse/text-editor
    yarn install && yarn start
```

As modificações na lib serão refletidas após build da lib.
