const productos = [
    {
        id: 1,
        titulo: "Samsung Galaxy A35",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=1",
        descripcion: "Smartphone Samsung con pantalla Super AMOLED de 6.6 pulgadas, 128GB de almacenamiento, 8GB RAM, cámara triple y batería de larga duración.",
        precio: 18990,
        stock: 20
    },
    {
        id: 2,
        titulo: "iPhone 13",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=2",
        descripcion: "Apple iPhone 13 con chip A15 Bionic, pantalla Super Retina XDR, 128GB de memoria interna y cámaras duales avanzadas.",
        precio: 42990,
        stock: 20
    },
    {
        id: 3,
        titulo: "Xiaomi Redmi Note 13",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=3",
        descripcion: "Equipo Xiaomi con 256GB de almacenamiento, pantalla AMOLED Full HD+ y gran autonomía para uso diario.",
        precio: 15990,
        stock: 20
    },
    {
        id: 4,
        titulo: "Motorola G84",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=4",
        descripcion: "Motorola con diseño premium, 256GB de memoria, sonido Dolby Atmos y batería de excelente rendimiento.",
        precio: 17990,
        stock: 20
    },
    {
        id: 5,
        titulo: "Samsung S24",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=5",
        descripcion: "Gama alta Samsung Galaxy S24 con IA integrada, cámara profesional y pantalla Dynamic AMOLED 2X.",
        precio: 46990,
        stock: 20
    },

    {
        id: 6,
        titulo: "Notebook HP 15",
        categoria: "computadoras",
        imagen: "https://picsum.photos/300/200?random=6",
        descripcion: "Notebook HP con procesador Ryzen 5, 8GB RAM, SSD rápido y pantalla de 15.6 pulgadas.",
        precio: 28990,
        stock: 20
    },
    {
        id: 7,
        titulo: "Lenovo IdeaPad 3",
        categoria: "computadoras",
        imagen: "https://picsum.photos/300/200?random=7",
        descripcion: "Portátil Lenovo con Intel Core i5, 16GB RAM y excelente rendimiento para estudio y trabajo.",
        precio: 33990,
        stock: 20
    },
    {
        id: 8,
        titulo: "ASUS TUF Gaming",
        categoria: "computadoras",
        imagen: "https://picsum.photos/300/200?random=8",
        descripcion: "Notebook gamer ASUS con RTX 4050, 16GB RAM y sistema térmico avanzado.",
        precio: 58990,
        stock: 20
    },
    {
        id: 9,
        titulo: "MacBook Air M2",
        categoria: "computadoras",
        imagen: "https://picsum.photos/300/200?random=9",
        descripcion: "Apple MacBook Air con chip M2, diseño ultraligero, batería extendida y SSD de alta velocidad.",
        precio: 69990,
        stock: 20
    },
    {
        id: 10,
        titulo: "PC Gamer Ryzen 7",
        categoria: "computadoras",
        imagen: "https://picsum.photos/300/200?random=10",
        descripcion: "PC gamer armada con Ryzen 7, RTX 4060 y alto rendimiento para gaming competitivo.",
        precio: 64990,
        stock: 20
    },

    {
        id: 11,
        titulo: "Mouse Logitech G203",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=11",
        descripcion: "Mouse gamer Logitech RGB con sensor preciso y diseño ergonómico.",
        precio: 1990,
        stock: 20
    },
    {
        id: 12,
        titulo: "Mouse Redragon Cobra",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=12",
        descripcion: "Mouse Redragon con 12400 DPI, iluminación RGB y switches duraderos.",
        precio: 2490,
        stock: 20
    },
    {
        id: 13,
        titulo: "Teclado Redragon Kumara",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=13",
        descripcion: "Teclado mecánico compacto con switches de respuesta rápida e iluminación RGB.",
        precio: 3990,
        stock: 20
    },
    {
        id: 14,
        titulo: "Teclado Logitech K380",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=14",
        descripcion: "Teclado Bluetooth multidispositivo ideal para notebook, tablet y celular.",
        precio: 3590,
        stock: 20
    },
    {
        id: 15,
        titulo: "Auriculares HyperX Cloud",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=15",
        descripcion: "Headset gamer con sonido envolvente, micrófono desmontable y gran comodidad.",
        precio: 5990,
        stock: 20
    },

    {
        id: 16,
        titulo: "Monitor Samsung 24",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=16",
        descripcion: "Monitor Full HD de 24 pulgadas con 75Hz y excelente calidad de imagen.",
        precio: 9990,
        stock: 20
    },
    {
        id: 17,
        titulo: "Monitor LG 27",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=17",
        descripcion: "Pantalla LG IPS de 27 pulgadas, 144Hz y gran fluidez para gaming.",
        precio: 16990,
        stock: 20
    },
    {
        id: 18,
        titulo: "Tablet Samsung A9",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=18",
        descripcion: "Tablet Samsung ideal para entretenimiento y productividad con 64GB.",
        precio: 12990,
        stock: 20
    },
    {
        id: 19,
        titulo: "Webcam Logitech C920",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=19",
        descripcion: "Webcam Full HD con micrófonos duales para videollamadas profesionales.",
        precio: 4990,
        stock: 20
    },
    {
        id: 20,
        titulo: "Disco SSD Kingston 1TB",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=20",
        descripcion: "SSD NVMe Kingston de 1TB con alta velocidad de lectura y escritura.",
        precio: 4590,
        stock: 20
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
};