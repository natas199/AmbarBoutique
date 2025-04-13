# ShipTrack - Dashboard de Clientes (Versión HTML)

Esta es una versión simplificada del dashboard de clientes utilizando HTML, Tailwind CSS y JavaScript vanilla.

## Características

- Interfaz de usuario moderna y responsive
- Gestión de clientes (agregar, editar, eliminar)
- Búsqueda de clientes en tiempo real
- Filtrado por estado (activo/inactivo)
- Generación de códigos QR
- Impresión de etiquetas
- Sidebar colapsable
- Modales para acciones importantes

## Tecnologías utilizadas

- HTML5
- Tailwind CSS (vía CDN)
- JavaScript (ES6+)
- Lucide Icons
- API de generación de códigos QR

## Estructura del proyecto

```
html-version/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos personalizados
├── js/
│   └── app.js          # Lógica de la aplicación
└── assets/            # Recursos estáticos
```

## Cómo usar

1. Abre el archivo `index.html` en tu navegador
2. La aplicación se cargará con datos de ejemplo
3. Puedes:
   - Agregar nuevos clientes
   - Editar clientes existentes
   - Eliminar clientes
   - Buscar clientes
   - Filtrar por estado
   - Generar códigos QR
   - Imprimir etiquetas

## Personalización

### Estilos

Los estilos se pueden personalizar en el archivo `css/styles.css`. La aplicación utiliza Tailwind CSS como base, por lo que puedes aprovechar sus clases de utilidad o agregar tus propios estilos personalizados.

### Datos

Por defecto, la aplicación utiliza datos de ejemplo. Para conectarla a una API real, modifica las funciones en `app.js`:

- `loadClients()`: Cargar clientes desde tu API
- `editClient()`: Actualizar cliente en tu API
- `deleteClient()`: Eliminar cliente en tu API

## Contribuir

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 