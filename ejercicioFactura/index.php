<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factura</title>
    <script src="carrito.js"></script>
    <script src="factura.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
    include("funciones.php");
    ?>
    <h1>Factura</h1>
    <div class="cont-superior">
        <div class="formulario">
            <form action="" method="post" class="form_style">
                <label for="">Producto</label>
                <input type="text" name="producto" id="producto">
                <label for="">Cantidad</label>
                <input type="number" name="cantidad" id="cantidad">
                <input type="submit" value="Solicitar" id="submit">
            </form>
        </div>
        <div class="contenedor-tabla">
            <table class="tabla-articulos" id="tabla_articulos">
                <thead>
                    <th>Código</th>
                    <th>Descripción</th>
                    <th>Precio Unitario</th>
                </thead>
                <tbody>
                <?php
                queryTotal();
                ?>
                </tbody>
            </table>
        </div>
    </div>
    <table class="tabla-articulos" tabla_factura>
    </table>
</body>

</html>