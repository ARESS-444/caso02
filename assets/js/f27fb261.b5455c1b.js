"use strict";(self.webpackChunkcaso_02=self.webpackChunkcaso_02||[]).push([[899],{1378:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=n(8168),r=(n(6540),n(5680));const i={},o="\ud83d\udd10 Instalaci\xf3n de SSL Externo Independiente en FacturaloPeru \ud83c\uddf5\ud83c\uddea",c={unversionedId:"Documentacion/Instalaci\xf3n SSL externa independiente",id:"Documentacion/Instalaci\xf3n SSL externa independiente",isDocsHomePage:!1,title:"\ud83d\udd10 Instalaci\xf3n de SSL Externo Independiente en FacturaloPeru \ud83c\uddf5\ud83c\uddea",description:"En esta gu\xeda, aprender\xe1s c\xf3mo configurar un SSL (Secure Sockets Layer) externo e independiente para proteger la comunicaci\xf3n entre tu aplicaci\xf3n y los usuarios.",source:"@site/docs\\Documentacion\\01-Instalaci\xf3n SSL externa independiente.md",sourceDirName:"Documentacion",slug:"/Documentacion/Instalaci\xf3n SSL externa independiente",permalink:"/caso02/docs/Documentacion/Instalaci\xf3n SSL externa independiente",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Documentacion\\01-Instalaci\xf3n SSL externa independiente.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About \ud83d\udccb",permalink:"/caso02/docs/intro"},next:{title:"\ud83d\udcda Manual de Instalaci\xf3n de FacturaloPeru en Linux con Valet",permalink:"/caso02/docs/Documentacion/Manual de Instalaci\xf3n  Linux - Valet"}},s=[],l={toc:s},d="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(d,(0,t.A)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"-instalaci\xf3n-de-ssl-externo-independiente-en-facturaloperu-"},"\ud83d\udd10 Instalaci\xf3n de SSL Externo Independiente en FacturaloPeru \ud83c\uddf5\ud83c\uddea"),(0,r.yg)("p",null,"En esta gu\xeda, aprender\xe1s c\xf3mo configurar un SSL (Secure Sockets Layer) externo e independiente para proteger la comunicaci\xf3n entre tu aplicaci\xf3n y los usuarios."),(0,r.yg)("h1",{id:"pasos-a-seguir-"},"Pasos a seguir \ud83d\udcdd"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Instalaci\xf3n inicial:"),' Para iniciar, debes ejecutar el script de instalaci\xf3n , evitando instalar el SSL. Durante el proceso de instalaci\xf3n, se te consultar\xe1 si deseas instalar el SSL. En este caso, deber\xe1s ingresar "n" para omitir esta opci\xf3n.')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Acceder a la ruta de instalaci\xf3n:")," Una vez finalizada la instalaci\xf3n, dir\xedgete a la ruta de instalaci\xf3n ejecutando el siguiente comando: "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd /root/facturadorpro31/\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Editar el archivo .env"),"\nLuego, debes editar el archivo\ud83d\udcdd .env utilizando un editor de texto como nano:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"nano .env\n")),(0,r.yg)("p",{parentName:"li"}," Dentro del editor, ubica los siguientes par\xe1metros y c\xe1mbialos como se indica a continuaci\xf3n:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"}," Antes:\nAPP_URL=http://${APP_URL_BASE}\nFORCE_HTTPS=false\n\nDespu\xe9s:\nAPP_URL=https://${APP_URL_BASE}\nFORCE_HTTPS=true\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Guardar cambios y salir del editor"),"\nUna vez realizados los cambios, guarda el archivo y sal del editor.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Eliminar la cach\xe9 de la aplicaci\xf3n"),"\nEjecuta el siguiente comando para eliminar la cach\xe9 de la aplicaci\xf3n:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"php artisan config:Cache\n")),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Habilitar el puerto 443"),"\nRecuerda habilitar el puerto 443 en tu servidor para poder acceder a FacturaloPeru a trav\xe9s de HTTPS.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\xa1Listo! \ud83c\udf89 Con estos pasos, habr\xe1s completado la configuraci\xf3n del lado de la herramienta FacturaloPeru para utilizar un SSL externo e independiente. Sin embargo, hasta que no tengas un SSL configurado correctamente, no podr\xe1s acceder a la herramienta de manera segura.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Nota: Esta gu\xeda asume que ya tienes un certificado SSL v\xe1lido y listo para ser configurado en tu servidor web. Si necesitas ayuda con la obtenci\xf3n y configuraci\xf3n del certificado SSL, consulta la documentaci\xf3n oficial de tu proveedor de hosting o servidor web.")))}u.isMDXComponent=!0}}]);