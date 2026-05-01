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
    },
    {
        id: 21,
        titulo: "iPhone 15",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=21",
        descripcion: "iPhone 15 con chip A16 Bionic, cámara mejorada de 48MP y puerto USB-C.",
        precio: 52990,
        stock: 20
    },
    {
        id: 22,
        titulo: "iPhone 15 Pro",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=22",
        descripcion: "iPhone 15 Pro con chip A17 Pro, titanio, cámaras avanzadas y alto rendimiento.",
        precio: 69990,
        stock: 20
    },
    {
        id: 23,
        titulo: "iPhone 15 Pro Max",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=23",
        descripcion: "Versión Pro Max con zoom periscópico, batería superior y máxima potencia.",
        precio: 79990,
        stock: 20
    },
    {
        id: 24,
        titulo: "Samsung Galaxy Z Flip 5",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=24",
        descripcion: "Smartphone plegable compacto con pantalla externa mejorada y diseño premium.",
        precio: 64990,
        stock: 20
    },
    {
        id: 25,
        titulo: "Samsung Galaxy Z Fold 5",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=25",
        descripcion: "Teléfono plegable tipo tablet con multitarea avanzada y pantalla gigante.",
        precio: 89990,
        stock: 20
    },

    {
        id: 26,
        titulo: "Notebook Dell Inspiron 15",
        categoria: "computadoras",
        imagen: "https://picsum.photos/300/200?random=26",
        descripcion: "Laptop Dell con Intel i7, 16GB RAM y SSD de alto rendimiento.",
        precio: 45990,
        stock: 20
    },
    {
        id: 27,
        titulo: "Notebook Acer Aspire 5",
        categoria: "computadoras",
        imagen: "https://picsum.photos/300/200?random=27",
        descripcion: "Equipo equilibrado con Ryzen 7, ideal para multitarea y estudio.",
        precio: 37990,
        stock: 20
    },
    {
        id: 28,
        titulo: "MacBook Pro M3",
        categoria: "computadoras",
        imagen: "https://picsum.photos/300/200?random=28",
        descripcion: "Potente MacBook Pro con chip M3, ideal para desarrollo y diseño.",
        precio: 89990,
        stock: 20
    },
    {
        id: 29,
        titulo: "PC Gamer Intel i9",
        categoria: "computadoras",
        imagen: "https://picsum.photos/300/200?random=29",
        descripcion: "PC de alto rendimiento con Intel i9 y RTX 4070 para gaming extremo.",
        precio: 84990,
        stock: 20
    },
    {
        id: 30,
        titulo: "Mini PC Intel NUC",
        categoria: "computadoras",
        imagen: "https://picsum.photos/300/200?random=30",
        descripcion: "Mini PC compacta ideal para oficina o multimedia.",
        precio: 24990,
        stock: 20
    },

    {
        id: 31,
        titulo: "Mouse Logitech MX Master 3",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=31",
        descripcion: "Mouse premium para productividad con scroll magnético y alta precisión.",
        precio: 6990,
        stock: 20
    },
    {
        id: 32,
        titulo: "Teclado Logitech G Pro",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=32",
        descripcion: "Teclado mecánico gamer compacto con switches profesionales.",
        precio: 7990,
        stock: 20
    },
    {
        id: 33,
        titulo: "Auriculares Sony WH-1000XM5",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=33",
        descripcion: "Auriculares con cancelación de ruido líder en el mercado.",
        precio: 14990,
        stock: 20
    },
    {
        id: 34,
        titulo: "Parlante JBL Flip 6",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=34",
        descripcion: "Parlante portátil resistente al agua con gran potencia.",
        precio: 6990,
        stock: 20
    },
    {
        id: 35,
        titulo: "Smartwatch Samsung Galaxy Watch 6",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=35",
        descripcion: "Reloj inteligente con monitoreo de salud y excelente integración.",
        precio: 12990,
        stock: 20
    },

    {
        id: 36,
        titulo: "Tablet iPad 10ª Gen",
        categoria: "celulares",
        imagen: "https://picsum.photos/300/200?random=36",
        descripcion: "iPad versátil con chip A14, ideal para estudio y entretenimiento.",
        precio: 29990,
        stock: 20
    },
    {
        id: 37,
        titulo: "Cámara GoPro Hero 12",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=37",
        descripcion: "Cámara de acción con grabación 5.3K y estabilización avanzada.",
        precio: 19990,
        stock: 20
    },
    {
        id: 38,
        titulo: "Router TP-Link AX3000",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=38",
        descripcion: "Router WiFi 6 de alta velocidad para hogares conectados.",
        precio: 4990,
        stock: 20
    },
    {
        id: 39,
        titulo: "Silla Gamer Redragon",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=39",
        descripcion: "Silla ergonómica gamer con soporte lumbar y gran comodidad.",
        precio: 11990,
        stock: 20
    },
    {
        id: 40,
        titulo: "Hub USB-C 7 en 1",
        categoria: "accesorios",
        imagen: "https://picsum.photos/300/200?random=40",
        descripcion: "Adaptador multipuerto con HDMI, USB y lector de tarjetas.",
        precio: 2990,
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