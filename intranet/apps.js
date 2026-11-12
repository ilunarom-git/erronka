// Página de inicio del proxy: cambia los textos y pon una caja por servicio.
// Al añadir un servicio: su entrada aquí, su imagen en img/ y su bloque en nginx.conf.
// "ruta" es el enlace de la caja:
//   - servicio publicado por ruta:       ruta: '/code/'
//   - servicio publicado por subdominio: ruta: 'http://kuma.localhost/'  (la URL completa)
const PORTAL = {
  titulo: 'CodigoAgil',
  subtitulo: 'Reverse proxy con nginx y Docker',
  pie: 'Práctica de reverse proxy · Ioritz',
};

const APPS = [
  {
    nombre: 'CodigoAgil',
    ruta: 'https://localhost/codigo-agil/',
    imagen: 'img/code.svg',
    descripcion: 'Plataforma de desarrollo ágil',
  },
  {
    nombre: 'Code Server',
    ruta: '/code/',
    imagen: 'img/code.svg',
    descripcion: 'VS Code en el navegador',
  },
  {
    nombre: 'Portainer',
    ruta: '/portainer/',
    imagen: 'img/portainer.svg',
    descripcion: 'Gestión de contenedores Docker',
  },
  {
    nombre: 'Adminer',
    ruta: '/adminer/',
    imagen: 'img/generica.svg',
    descripcion: 'Gestor de bases de datos',
  },
  {
    nombre: 'Whoami',
    ruta: '/whoami/',
    imagen: 'img/generica.svg',
    descripcion: 'Muestra la petición que le llega',
  },
  {
    nombre: 'Uptime Kuma',
    ruta: '/kuma/',
    imagen: 'img/generica.svg',
    descripcion: 'Estado de los servicios',
  },
];
