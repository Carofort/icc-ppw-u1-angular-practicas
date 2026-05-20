# Práctica Angular 04 - Layouts con Tailwind

### Carolina Fortmann

-----------------

Realizar cuatro distribuciones adicionales en ```layouts-page.html``` tomadas de la documentación oficial de Tailwind:

#### 1. Layout con ```flex-col-reverse```:
![Ejemplo de layout con flex-col-reverse en el localhost](assets/01-flex-col.png)

**Descripción:** Se implementa un contenedor flexible que organiza sus elementos en una columna vertical, pero invirtiendo el orden del flujo de los elementos (`flex-direction: column-reverse`). Esto hace que el primer elemento del código se renderice en la parte inferior y el último en la parte superior, ideal para secciones de chats, feeds de actividad o componentes que requieran un orden invertido en dispositivos móviles.


#### 2. Layout con ```grid gap-4```:
![Ejemplo de layout con grid gap-4 en el localhost](assets/02-grid-gap-4.png)

**Descripción:** Se utiliza un Grid para alinear elementos en filas y columnas estructuradas de forma simétrica. La propiedad `gap-4` aplica una separación uniforme de `1rem` (16px) tanto horizontal como verticalmente entre las celdas de la rejilla.

#### 3. Layout con ```row-span``` y ```col-span```:
![Ejemplo de layout con row-span y col-span en el localhost](assets/03-grid-row.png)

**Descripción:** Permite que ciertos elementos utilicen múltiples celdas. Utilizando clases como `row-span` y `col-span`, define cuántas filas y columnas debe ocupar un elemento específico respectivamente. Esto facilita el diseño de distribuciones asimétricas complejas, como galerías de imágenes o layouts de periódicos.

#### 4. Layout con ```flex-wrap justify-center-safe```:
![Ejemplo de layout con flex-wrap justify-center-safe en el localhost](assets/04-flex-justify.png)

**Descripción:** Es un layout dinámico y adaptable. La clase `flex-wrap` permite que las tarjetas o elementos pasen automáticamente a la siguiente línea si se quedan sin espacio en la fila actual, evitando el desbordamiento horizontal. Por otra parte, la variable `justify-center-safe` alinea los elementos al centro del contenedor y activa un mecanismo de seguridad para que en caso de usar pantallas pequeñas, el contenido mantenga sus márgenes izquierdos legibles en lugar de recortarse fuera de los límites de esta.

------
# Práctica Angular 05 - Formularios Reactivos

Capturas de las prácticas:

#### Práctica A: Formularios simples ```sign-up```
![Ejemplo de layout con flex-col-reverse en el localhost](assets/practica5/05-a-errores.png)

![Ejemplo de layout con flex-col-reverse en el localhost](assets/practica5/05-a-validado.png)


#### Práctica B: Rutilización de código ```FormUtils```
![Ejemplo de layout con flex-col-reverse en el localhost](assets/practica5/05-b-errores.png)

![Ejemplo de layout con flex-col-reverse en el localhost](assets/practica5/05-b-validado.png)



#### Práctica C: Formularios complejos ```dinámicos + especiales```
![Ejemplo de layout con flex-col-reverse en el localhost](assets/practica5/05-c-errores.png)

![Ejemplo de layout con flex-col-reverse en el localhost](assets/practica5/05-c-validado.png)

