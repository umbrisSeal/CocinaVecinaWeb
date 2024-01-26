
<?php

class Critica {

    public $id, $autor, $opinion, $imagenUrl;

    public function __construct($id, $autor, $opinion, $imagenUrl)
    {
        $this-> id = $id;
        $this-> autor = $autor;
        $this-> opinion = $opinion;
        $this-> imagenUrl = $imagenUrl;
    }
}


class ModeloCritica {
    public function obtenerCriticas() {
        // Consultar criticas de la base de datos. Fetch.

        $criticas = array(
            new Critica(104420, 'Carlos Ruíz', "Todo bien por parte del personal, el servicio bueno ✅ me toco ir un día donde había musha gente", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwsfMEiewyZzhMKLSbM2V-GtGDpkXOsDKgMp_z4YpKx8XQrAdfdYVe8gz-rt_QCvmpls&usqp=CAU'),
            new Critica(590819, 'Sebastián Vasquez', "Buen sabor. No falla en eso, me pedí los huevos con jocoque y estaban muy ricos", 'https://media.licdn.com/dms/image/C4D03AQGzYQXuK1Yclg/profile-displayphoto-shrink_400_400/0/1595348462916?e=2147483647&v=beta&t=092R_hvxlKOYH_DS6BWlzS4sOvGfiFIO5rpVSkn81VA'),
            new Critica(958860, 'Rubén Rivera', "Un poco lenta la producción del producto final, y no era como lo esperábamos, aún que estuvo rico eso no lo niego", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBYzFigFe5T0_GZo_5l9-nXpMFq0wZWSKVQ&usqp=CAU'),
            new Critica(177501, 'Claudia Torres', "Todo está a excelente precio, las tostadas son grandes, la comida es muy rica", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR73Ojkz7fevlhO57VUX1OYZf3BI92SiFwtg&usqp=CAU'),
            new Critica(783514, 'Francisco Cortez', "Mucha variedad de antojitos mexicanos , muy ricos a un precio razonable", 'https://media.licdn.com/dms/image/D4E03AQFchvtjj4EwHA/profile-displayphoto-shrink_200_200/0/1665497748636?e=2147483647&v=beta&t=zopdk0-V1BU29l79A6yPxsNX-674TFzoRk0NDPvA2Ew'),
            new Critica(274718, 'Lorena Álvarez', "Buen sabor, amplia variedad, servicio rápido y precios accesibles", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqASCtbthLjMZGnhH2hzBAFg4gqGTD1cmoDw&usqp=CAU')
        );

        return $criticas;
    }
}

?>