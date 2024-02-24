# 🐳 Manual de Instalación de FacturaloPeru con Docker y SSL

FacturaloPeru es una solución de facturación electrónica que facilita la emisión de comprobantes de pago en el Perú. Este manual te guiará a través del proceso de instalación utilizando Docker y configurando un certificado SSL renovable cada 90 días.

# Requisitos previos 📋

1. **Acceso a tu servidor mediante SSH**: Debes tener acceso a tu servidor, VPS, máquina virtual o local a través de SSH. Si has contratado un servicio con AWS o Google Cloud, se te proporcionará el usuario, la IP del servidor y la clave SSH (archivo .ppk o .pem).

2. **Cliente SSH**: Necesitarás tener instalado un cliente SSH en tu máquina, como PuTTY, FileZilla o una consola terminal.

3. **Configuración del dominio**: Es importante configurar tu dominio apuntando a la IP de tu instancia. Edita los registros A y CNAME: el registro A debe contener tu IP, y el registro CNAME debe tener el valor `*` (asterisco) para que se tomen los subdominios registrados por la herramienta.

4. **Registros TXT**: Durante la ejecución del script, deberás almacenar dos registros TXT con valores específicos en tu dominio. Estos registros se validarán en directo y no pueden tardar más de 2 minutos en validarse.

5. **Detener servicios existentes**: Si tienes instalados servicios como MySQL, Apache o Nginx en tu instancia, debes detenerlos, ya que ocupan los puertos que se utilizarán con el aplicativo y los contenedores de Docker.

# Pasos de instalación 🚀

1. Accede a tu instancia mediante SSH.
2. Inicia sesión como superusuario ejecutando 
`sudo su`.
3. Ubícate en la carpeta del usuario, por ejemplo: 
`cd /home/ubuntu/`.
4. Crea el archivo de instalación: 
`touch install.sh`.
5. Edita el archivo con tu editor de texto preferido: 
`nano install.sh`.
6. Copia el contenido del script desde el siguiente enlace: [https://gitlab.com/snippets/1852652](https://gitlab.com/snippets/1852652) y pégalo en el archivo `install.sh`. Mantén la estructura del script.
7. Guarda los cambios y sal del editor (`Ctrl + X`, `Y`, `Enter`).
8. Otorga permisos de ejecución al archivo: `chmod +x install.sh`.
9. Ejecuta el script con los siguientes parámetros: `./install.sh [repositorio] [dominio]`. Por ejemplo: `./install.sh https://gitlab.com/rash07/facturadorpro2 elfacturador.com`.
10. Durante la ejecución, acepta las preguntas y sigue las instrucciones para agregar los registros TXT en tu dominio.
11. Una vez editados los registros TXT en tu dominio, acepta para continuar y permitir que el proceso verifique que sea exitoso.
12. El proceso continuará con la actualización del sistema, la clonación del proyecto desde GitLab (se te solicitarán tus credenciales de GitLab) y la finalización de la instalación.

Una vez finalizada la instalación, podrás acceder a FacturaloPeru en tu dominio con las siguientes credenciales:

- Correo electrónico: `admin@gmail.com`
- Contraseña: `123456`

¡Listo! 🎉 Ahora puedes proceder con las pruebas y la documentación adicional de cada proyecto.

# Recomendaciones 💡

- Después de instalar FacturaloPeru, puedes cambiar algunos parámetros en el archivo `.env`, como la dirección de envío de correos electrónicos, las configuraciones de plantillas PDF, entre otros.
- Recuerda que cada vez que edites el archivo `.env`, debes ejecutar el comando `php artisan config:cache` dentro del contenedor `fpm1` para que los cambios surtan efecto.
- La ruta donde ejecutes el script será donde se clone el repositorio. Verifica que los usuarios del servidor tengan permisos en dicha ruta si deseas acceder mediante FTP o SCP.

¡Disfruta de FacturaloPeru y comienza a emitir comprobantes de pago electrónicos de manera eficiente! 📄💸