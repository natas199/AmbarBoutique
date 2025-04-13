# Ambar Boutique

Sistema de gestión para Ambar Boutique.

## Estructura del Proyecto

```
ambar-boutique/
├── apps/
│   └── frontend/           # Aplicación frontend
│       ├── src/           # Código fuente
│       │   ├── css/      # Estilos
│       │   ├── js/       # JavaScript
│       │   └── assets/   # Recursos estáticos
│       ├── public/       # Archivos públicos
│       └── dist/         # Build de producción
└── package.json          # Configuración del proyecto
```

## Tecnologías

- HTML5
- Tailwind CSS
- JavaScript (ES6+)
- Vite
- Yarn Workspaces

## Requisitos

- Node.js >= 18
- Yarn >= 1.22

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/ambar-boutique.git
cd ambar-boutique
```

2. Instala las dependencias:
```bash
yarn install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`

## Build

Para crear una versión de producción:

```bash
yarn build
```

Los archivos generados estarán en `apps/frontend/dist`

## Scripts Disponibles

- `yarn dev`: Inicia el servidor de desarrollo
- `yarn build`: Crea la versión de producción
- `yarn start`: Inicia el servidor de preview de producción

## Licencia

MIT
