# Instructions - estructura de carpetas de `king-store`

## Objetivo

Definir una estructura de carpetas clara, escalable y consistente con la arquitectura actual del proyecto.

Este proyecto usa:

- Angular 20
- Componentes `standalone`
- `SCSS`
- `SSR`
- organización por capas y por feature

La estructura debe respetar las carpetas ya existentes: `core`, `domain`, `data`, `presentation`, `routes`, `shared` y `base`.

---

## Estructura base recomendada

```text
src/
  app/
    app.component.ts
    app.config.ts
    app.config.server.ts
    app.routes.ts
    app.routes.server.ts

    base/
      mapper.ts

    core/
      providers/
      config/
      constants/
      interceptors/
      tokens/

    domain/
      base/
      filters/
      models/
      services/
      usecases/

    data/
      entities/
      mappers/
      mocks/
      repositories/
      services/
      paths.ts

    presentation/
      common/
      components/
      layouts/
      pages/
      pipes/
      styles/

    routes/
      landing/
      catalog/
      pages/
      users/

    shared/
      components/
      directives/
      guards/
      pipes/
      utils/

  assets/
    fonts/
    icons/
    images/
    mocks/

  environments/
    environment.ts
    environment.development.ts
    environment.production.ts

  styles.scss
  main.ts
  main.server.ts
  server.ts
  index.html
```

---

## Responsabilidad de cada carpeta

### `src/app/base`

Contiene contratos o clases base reutilizables entre capas.

Ejemplo:

- `mapper.ts`

Usar esta carpeta para abstracciones pequeñas y compartidas que no pertenezcan a una feature concreta.

### `src/app/core`

Contiene configuración global de la aplicación.

Aquí deben vivir:

- providers globales
- tokens de inyección
- interceptors HTTP
- configuración transversal
- constantes globales

No debe contener lógica de negocio de una feature.

### `src/app/domain`

Representa la lógica del dominio.

Aquí deben ir:

- `models`: modelos de negocio
- `filters`: objetos de filtro y criterios de búsqueda
- `services`: contratos o lógica de dominio desacoplada de Angular HTTP
- `usecases`: casos de uso de negocio
- `base`: tipos o clases base del dominio

La carpeta `domain` no debe depender de componentes visuales.

### `src/app/data`

Implementa acceso a datos y adaptación entre APIs y dominio.

Aquí deben ir:

- `services`: servicios HTTP o integraciones externas
- `entities`: DTOs o estructuras crudas de backend
- `mappers`: transformación entre entities y models
- `repositories`: fachada para consumo desde casos de uso
- `mocks`: datos simulados
- `paths.ts`: endpoints o rutas de API

La carpeta `data` traduce datos externos al lenguaje del dominio.

### `src/app/presentation`

Contiene todo lo relacionado con UI.

Aquí deben ir:

- `components`: componentes de interfaz reutilizables
- `layouts`: estructuras de página
- `pages`: pantallas si se desea centralizar vistas
- `pipes`: pipes orientados a presentación
- `styles`: estilos compartidos de UI
- `common`: utilidades visuales o piezas comunes de presentación

Debe depender de `domain` y `shared`, pero no contener acceso directo innecesario a infraestructura.

### `src/app/routes`

Contiene la definición de rutas por feature.

Ejemplos actuales:

- `landing`
- `catalog`
- `pages`
- `users`

Cada feature debe tener su archivo de rutas propio, por ejemplo:

- `catalog.routes.ts`
- `users.routes.ts`

Desde `app.routes.ts` se deben cargar con `loadChildren`.

### `src/app/shared`

Contiene piezas reutilizables entre features.

Aquí deben ir:

- componentes compartidos
- guards
- pipes compartidos
- directivas
- helpers o utilidades puras

Evitar meter aquí lógica específica de una sola feature.

### `src/assets`

Solo recursos estáticos.

Separar por tipo:

- `images`
- `icons`
- `fonts`
- `mocks`

### `src/environments`

Configuraciones por entorno:

- local/base
- development
- production

Mantener los nombres alineados con `angular.json`.

---

## Regla principal de organización

La arquitectura debe seguir esta dirección:

```text
presentation -> domain -> data
```

Y además:

- `core` es transversal
- `shared` se reutiliza entre features
- `routes` organiza la navegación
- `base` contiene contratos comunes pequeños

---

## Regla por tipo de archivo

### Si agregas una nueva pantalla

1. Crear su definición de rutas en `src/app/routes`
2. Crear layout o página en `src/app/presentation`
3. Consumir casos de uso desde `domain`

### Si agregas un modelo de negocio

Crear el archivo en:

```text
src/app/domain/models
```

### Si agregas un servicio HTTP

Crear el archivo en:

```text
src/app/data/services
```

### Si agregas un mapper entre API y dominio

Crear el archivo en:

```text
src/app/data/mappers
```

### Si agregas un guard

Crear el archivo en:

```text
src/app/shared/guards
```

### Si agregas un provider global

Crear el archivo en:

```text
src/app/core/providers
```

---

## Estructura sugerida por feature

Cuando una feature crezca, usar esta organización:

```text
src/app/
  routes/
    catalog.routes.ts

  presentation/
    pages/
      catalog/
        catalog.page.ts
        catalog.page.html
        catalog.page.scss

    components/
      catalog/
        product-card/
          product-card.component.ts
          product-card.component.html
          product-card.component.scss
        filter-bar/
          filter-bar.component.ts
          filter-bar.component.html
          filter-bar.component.scss

  domain/
    models/
      product.model.ts
      category.model.ts
    usecases/
      get-products.usecase.ts

  data/
    services/
      product.service.ts
    mappers/
      product.mapper.ts
    entities/
      product.entity.ts
```

Esto permite mantener separada la vista, la lógica de negocio y el acceso a datos.

---

## Convenciones de nombres

- componentes: `feature-name.component.ts`
- páginas: `feature-name.page.ts`
- layouts: `feature-name.layout.ts`
- servicios HTTP: `feature-name.service.ts`
- casos de uso: `action-name.usecase.ts`
- modelos: `entity-name.model.ts`
- entidades API: `entity-name.entity.ts`
- mappers: `entity-name.mapper.ts`
- guards: `feature-name.guard.ts` o `auth.guard.ts`
- archivos de rutas: `feature-name.routes.ts`

Usar nombres en inglés en código si el resto del proyecto ya sigue esa convención.

---

## Reglas de crecimiento del proyecto

- No mezclar lógica HTTP dentro de componentes.
- No colocar modelos de dominio dentro de `presentation`.
- No colocar componentes visuales dentro de `data`.
- Cada feature nueva debe registrar sus rutas desde `app.routes.ts`.
- Priorizar componentes `standalone`.
- Mantener `shared` libre de dependencias innecesarias.
- Si una pieza solo pertenece a una feature, no debe ir en `shared`.

---

## Comandos PowerShell para crear la estructura

Si necesitas crear carpetas nuevas, usa:

```powershell
New-Item -ItemType Directory -Force src\app\core\config
New-Item -ItemType Directory -Force src\app\core\constants
New-Item -ItemType Directory -Force src\app\core\interceptors
New-Item -ItemType Directory -Force src\app\core\tokens
New-Item -ItemType Directory -Force src\app\data\repositories
New-Item -ItemType Directory -Force src\app\presentation\pages
New-Item -ItemType Directory -Force src\app\shared\directives
New-Item -ItemType Directory -Force src\app\shared\utils
New-Item -ItemType Directory -Force src\assets\fonts
New-Item -ItemType Directory -Force src\assets\icons
New-Item -ItemType Directory -Force src\assets\images
New-Item -ItemType Directory -Force src\assets\mocks
```

---

## Decisión arquitectónica para este proyecto

Para `king-store`, la recomendación es:

1. Mantener `routes` como punto de entrada por feature.
2. Mantener `presentation` para componentes, layouts y páginas.
3. Centralizar modelos y casos de uso en `domain`.
4. Dejar integración HTTP, DTOs y mappers en `data`.
5. Reservar `core` para configuración global.
6. Usar `shared` solo para reutilización real.

Esta guía debe tomarse como la referencia para futuras carpetas y archivos del proyecto.
