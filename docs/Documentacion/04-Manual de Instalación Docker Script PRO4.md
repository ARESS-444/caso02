# 🐳 Manual de Instalación de FacturaloPeru con Docker (Script PRO4)

# Descripción 📄

Este manual te guiará a través del proceso de instalación de FacturaloPeru utilizando un script especialmente diseñado para instancias Linux con Ubuntu 18 o superior. El script actualiza el sistema, instala las herramientas necesarias, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya esté configurado apuntando a la instancia).

# Requisitos previos 📋

1. **Acceso SSH**: Debes tener acceso a tu servidor, VPS, máquina virtual o local mediante SSH. Si has contratado un servicio con AWS o Google Cloud, se te proporcionará el usuario, la IP del servidor y la clave SSH (archivo .ppk o .pem). Recuerda almacenar estos datos en tu equipo local.

2. **Cliente SSH**: Necesitarás tener instalado un cliente SSH en tu máquina, como PuTTY, FileZilla o una consola terminal. Para obtener más información sobre el acceso SSH, consulta los siguientes manuales:
   - [Guía para acceder con PuTTY (gestión de servidor)](https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#)
   - [Guía para acceder con WinSCP (gestión de archivos con aplicación de escritorio)](https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit#)

3. **Configuración del dominio (opcional)**: Si es posible, configura tu dominio apuntando a tu instancia para que al finalizar la instalación, el aplicativo esté disponible. Edita los registros A y CNAME: el registro A debe contener tu IP, y el registro CNAME debe tener el valor `*` (asterisco) para que se tomen los subdominios registrados por la herramienta.

4. **Detener servicios existentes**: En caso de contar con servicios instalados en tu instancia, como MySQL, Apache o Nginx, debes detenerlos, ya que ocupan los puertos que utilizará el aplicativo con los contenedores de Docker.

## Pasos de instalación 🚀

1. Accede a tu instancia mediante SSH.
2. Inicia sesión como superusuario ejecutando `sudo su`.
3. Clona el snippet de GitLab que contiene el script:
```bash
git clone https://gitlab.com/snippets/2079063.git script
```
4. Ingresa a la carpeta clonada: `cd script`.
5. Otorga permisos de ejecución al script: `chmod +x install.sh`.
6. Ejecuta el script con el parámetro de tu dominio:
```bash
./install.sh [dominio]
```
   Por ejemplo: `./install.sh facturador.pro`.
7. Una vez ejecutado el comando, iniciará el proceso de actualización del sistema, y se te solicitará:
   a. El usuario y contraseña de GitLab para descargar el proyecto en tu instancia.
   b. Si deseas instalar un SSL gratuito (debe actualizarse cada 90 días). El mensaje será: `instalar con SSL? (debe tener acceso al panel de su dominio para editar/agregar records TXT). si[s] no[n]`.
      - Si seleccionas "s" (sí), deberás responder "y" a dos preguntas adicionales. Luego, se te proporcionará un código que debes agregar como un registro TXT en tu dominio, como `_acme-challenge.example.com` o simplemente `_acme-challenge`, dependiendo de tu proveedor.
      - Para continuar, presiona Enter y repite las acciones para agregar un segundo código. Si el proceso es exitoso, la ejecución del script continuará.
   c. Si deseas obtener y gestionar actualizaciones automáticas, deberás disponer de tu sesión de GitLab al momento: `configurar clave SSH para actualización automática? (requiere acceso a https://gitlab.com/profile/keys). si[s] no[n]`.
      - Si seleccionas "s" (sí), al final del despliegue se te dará un extracto de texto que debes añadir a tu configuración de GitLab.

8. Una vez finalizado el script, dependiendo de tus selecciones anteriores, se te proporcionarán varios datos que debes guardar, como:
   a. Usuario administrador
   b. Contraseña para el usuario administrador
   c. URL del proyecto
   d. Ubicación del proyecto dentro del servidor
   e. Clave SSH para añadir a GitLab (obligatorio para quienes seleccionan la instalación de SSH)

¡Listo! 🎉 Ahora puedes acceder a FacturaloPeru y comenzar a emitir comprobantes de pago electrónicos de manera eficiente.

## Enlaces de interés 🔗

- [Actualización de SSL](https://gitlab.com/b.mendoza/facturadorpro3/snippets/1955372)
- [Actualización mediante ejecución Script para instalaciones Docker](https://gitlab.com/b.mendoza/facturadorpro3/-/wikis/Script-Update-Docker)
- [Gestión de SSL independiente, no el que incorpora el Script](https://docs.google.com/document/d/1D87YJ9fq9yHiAauu6SGVugiC3m_i42DrFUt6VKYXuDI/edit?usp=sharing)
- [Guía GitLab para la instalación, contiene el script usado en el presente manual](https://gitlab.com/b.mendoza/facturadorpro3/snippets/1971490), además posee los parámetros extras que pueden usarse en la ejecución del paso 6.