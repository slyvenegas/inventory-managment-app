# Sistema de gestión de inventario Full-Stack con Next.js y Stack Auth


## 📋 Tabla de Contenidos

1. [Introducción](#-introducción)
2. [Tecnologías](#-tecnologías)
3. [Características](#-características)
4. [Inicio Rápido](#-inicio-rápido)
5. [Capturas de Pantalla](#-capturas-de-pantalla)
6. [Despliegue](#-despliegue)
7. [Curso y Canal](#-curso-y-canal)

---

## 🚀 Introducción

En este tutorial completo, aprenderás a construir un **sistema de gestión de inventario** usando **Next.js 15**, **Stack Auth**, **Prisma** y **PostgreSQL**. Desde la autenticación de usuarios hasta el panel de análisis, la gestión de productos y el seguimiento de inventario en tiempo real — este video te guiará paso a paso para crear una aplicación full-stack lista para producción.

Perfecto para desarrolladores que buscan dominar el desarrollo web moderno, aprender arquitectura full-stack o crear sus propias herramientas de gestión empresarial.

🎥 **Mira el tutorial completo**: [YouTube](https://youtu.be/YOUR_VIDEO_ID)

---

## ⚙️ Tecnologías

- **Next.js 15** – Framework de React con App Router y Server Components  
- **React 19** – Desarrollo de interfaces basado en componentes con las últimas funciones  
- **TailwindCSS** – CSS con utilidades para un estilo moderno  
- **Stack Auth** – Solución de autenticación moderna (reemplaza a NextAuth.js)  
- **Prisma** – ORM de base de datos tipado con migraciones  
- **PostgreSQL** – Base de datos relacional robusta  
- **Lucide Icons** – Paquete de íconos limpio y elegante  
- **Recharts** – Visualización de datos para análisis  
- **TypeScript** – Tipado estático y mejor experiencia para desarrolladores  
- **Vercel** – Plataforma para despliegue y hosting  

---

## ⚡️ Características

- 🔐 **Autenticación Moderna** - Registro e inicio de sesión seguro con Stack Auth  
- 📊 **Panel de Análisis** - Métricas en tiempo real, gráficos e información del inventario  
- 📦 **Gestión de Productos** - Operaciones CRUD completas para los artículos del inventario  
- 🔍 **Búsqueda y Filtros** - Encuentra productos rápidamente con funciones de búsqueda  
- 📄 **Paginación** - Carga eficiente de datos para inventarios grandes  
- ⚠️ **Alertas de Bajo Stock** - Notificaciones automáticas sobre niveles de inventario  
- 💰 **Seguimiento de Valor** - Monitorea el valor total del inventario y métricas financieras  
- 📈 **Análisis Visual** - Gráficos interactivos que muestran tendencias de inventario  
- 📱 **Diseño Responsivo** - Funciona perfectamente en computadoras y dispositivos móviles  
- 🎨 **Interfaz Moderna** - Diseño limpio y profesional con TailwindCSS  
- 🚀 **Server Actions** - Manejo de formularios con Server Actions de Next.js  
- 🔄 **Actualizaciones en Tiempo Real** - La interfaz se actualiza instantáneamente tras cambios en los datos  

---

## 👌 Inicio Rápido

### Requisitos Previos

- [Node.js](https://nodejs.org/) (v18 o superior)  
- [Git](https://git-scm.com/)  
- [Base de Datos PostgreSQL](https://www.postgresql.org/) (o usa Neon para hosting en la nube)  

### Clonar y Ejecutar

```bash
git clone https://github.com/yourusername/nextjs-fullstack-inventory.git
cd nextjs-fullstack-inventory
npm install
```

### Environment Setup

1. Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/inventory_db"
NEXT_PUBLIC_STACK_PROJECT_ID="your_stack_project_id"
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="your_publishable_key"
STACK_SECRET_SERVER_KEY="your_secret_key"
```

2. Configura tu base de datos:

```bash
npx prisma migrate dev
npx prisma generate
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

Tu aplicación estará disponible en: http://localhost:3000

---

## 🖼️ Capturas de Pantalla

> 📸 (Loading...)
---

## ☁️ Despliegue

### Deploy on Vercel

1. Sube tu código a GitHub
2. Ve a vercel.com
3. Importa tu repositorio
4. Agrega tus variables de entorno en el panel de Vercel
5. Haz clic en **Deploy**

Tu aplicación en vivo se alojará en un subdominio personalizado (por ejemplo: https://tu-inventario.vercel.app)

### Configuración de Base de Datos

Para producción, considera usar:

- [Neon](https://neon.tech/) - Serverless PostgreSQL
- [Supabase](https://supabase.com/) - Alternativa open source a Firebase
- [PlanetScale](https://planetscale.com/) - Base de datos compatible con MySQL

---

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Stack Auth Documentation](https://docs.stack-auth.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [Recharts Documentation](https://recharts.org/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT
.

---
