# 📚 Manual de Instalación de FacturaloPeru en Linux con Valet

FacturaloPeru es una solución integral de facturación electrónica diseñada para facilitar el proceso de emisión de comprobantes de pago en el Perú. Este manual te guiará a través de los pasos necesarios para implementar FacturaloPeru en un servidor local Linux utilizando la herramienta Valet.

# Requisitos previos 🔴

**Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:**

- Acceso root al servidor Linux
- PHP 7.2 y todas las librerías requeridas por FacturaloPeru y Laravel
- MySQL o MariaDB instalado (opcionalmente, puedes instalar PhpMyAdmin para realizar pruebas iniciales de base de datos)
- Git, Curl y Composer instalados

# Instalación de PHP 7.2 en Ubuntu 🐧

Ubuntu no incluye la versión 7.2 de PHP de manera nativa, por lo que debes seguir estos pasos para agregar un repositorio y proceder con la instalación. Ejecuta los siguientes comandos como usuario root:

1. Actualiza los paquetes:
```bash
apt-get update
```

2. Instala las herramientas necesarias para agregar un PPA (Personal Package Archive):
```bash
apt-get install software-properties-common python-software-properties
```

3. Agrega el PPA de Ondřej Surý para PHP:
```bash
add-apt-repository ppa:ondrej/php
```

4. Actualiza los paquetes nuevamente:
```bash
apt-get update
```

5. Instala PHP 7.2 y las librerías requeridas:
```bash
apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt
```

# Instalación de MySQL, Curl y Git 🛢️

1. Instala MySQL (o MariaDB) y PhpMyAdmin (opcional):
```bash
apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin
```

2. Instala Curl y Git:
```bash
apt-get install git curl
```

# Instalación de Composer 🎻

1. Instala Composer:
```bash
apt-get install composer
```

2. Otorga permisos de lectura y escritura a la carpeta de Composer:
```bash
chmod --R 777 ~/.composer
```

# Instalación de Valet 🚀

1. Instala las librerías requeridas por Valet:
```bash
composer global require cpriego/valet-linux
```

2. Agrega la ruta de Composer al PATH en el archivo `~/.profile`:
```bash
nano ~/.profile
```
**Agrega la siguiente línea al final del archivo:**
```bash
PATH="$HOME/.composer/vendor/bin:$PATH"
```
Guarda los cambios y sal del editor.

3. Aplica los cambios en el PATH:
```bash
source ~/.profile
```

4. Instala las librerías adicionales requeridas por Valet:
```bash
apt install network-manager libnss3-tools jq xsel
```

5. Asegúrate de que el puerto 80 esté libre. Si tienes Apache instalado, detenlo:
```bash
service apache2 stop
```

6. Instala Nginx, que es el servidor web utilizado por Valet:
```bash
apt install nginx
```

7. Verifica que Nginx se esté ejecutando correctamente:
```bash
systemctl status nginx
```

8. Instala Valet:
```bash
valet install
```

9. Crea una carpeta para tu código y registra la carpeta con Valet:
```bash
mkdir ~/code
cd ~/code
valet park
```

# Instalación de FacturaloPeru 💻

1. Clona el repositorio de FacturaloPeru en la carpeta `~/code`:
```bash
git clone https://gitlab.com/b.mendoza/facturadorpro3.git
```

2. Accede a la carpeta del proyecto:
```bash
cd facturadorpro3
```

3. Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

4. Abre el archivo `.env` y configura los siguientes parámetros:
   - `APP_URL_BASE`: tu dominio local (por ejemplo, `facturadorpro3.test`)
   - `DB_DATABASE`: nombre de la base de datos principal
   - `DB_USERNAME` y `DB_PASSWORD`: credenciales de usuario de MySQL

5. Genera la clave de aplicación:
```bash
php artisan key:generate
```

6. Optimiza el autoloader de Composer:
```bash
composer dump-autoload
```

7. **Registra la base de datos mediante PhpMyAdmin accediendo a `tudomnio.com/phpmyadmin` con el usuario root y la contraseña configurada durante la instalación de MySQL.**

8. Instala las dependencias del proyecto:
```bash
composer install
```

9. Ejecuta las migraciones y siembra los datos iniciales:
```bash
php artisan migrate --seed
```

10. **Verifica en PhpMyAdmin que la base de datos y las tablas se hayan creado correctamente.**

11. Asigna los permisos adecuados a las carpetas `storage` y `bootstrap/cache`:
```bash
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

12. Establece la ruta de los archivos cargados de la empresa:
```bash
php artisan storage:link
```

**¡Listo! 🎉 Si todo se realizó correctamente, podrás acceder a FacturaloPeru a través de tu dominio local (`facturadorpro3.test`). Las credenciales de acceso inicial son:**

- Usuario: `admin@gmail.com`
- Contraseña: `123456`

**¡Disfruta de FacturaloPeru y comienza a emitir comprobantes de pago electrónicos de manera eficiente! 📄💸**