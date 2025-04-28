# LUCKASARQ

LUCKASARQ es un proyecto de arquitectura que presenta una galería de proyectos y servicios ofrecidos. Este proyecto está desarrollado utilizando Django como framework web y está diseñado para ser responsivo y fácil de navegar.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- Navegación intuitiva con enlaces a diferentes secciones.
- Soporte para múltiples idiomas (ES/EN).
- Sección de servicios con un diseño atractivo.
- Diseño responsivo que se adapta a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- **Django**: Framework web para el desarrollo del backend.
- **HTML/CSS**: Para la estructura y el diseño de la interfaz de usuario.
- **JavaScript**: Para interactividad (si se utiliza).
- **SQLite**: Base de datos para el almacenamiento de datos.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/luckasarq.git
   cd luckasarq
   ```

2. Crea un entorno virtual:
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
   ```

3. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

4. Realiza las migraciones de la base de datos:
   ```bash
   python manage.py migrate
   ```

5. Ejecuta el servidor de desarrollo:
   ```bash
   python manage.py runserver
   ```

6. Abre tu navegador y visita `http://127.0.0.1:8000/`.

## Uso

- Navega por las diferentes secciones del sitio utilizando el menú de navegación.
- Cambia entre idiomas utilizando los enlaces de idioma en la parte superior derecha.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-característica`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva característica'`).
4. Envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).