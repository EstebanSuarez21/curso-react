import React from 'react'
import { getFirestore } from '../../firebase'

const products = [
    {
        "name": "Mother Asus Strix B550-E Gaming AM4",
        "description": "Las tarjetas madre de la serie ROG Strix B550 Gaming ofrecen buena parte de las características que puedes encontrar en la serie de gama alta ROG Strix X570 Gaming, como por ejemplo PCIe® 4.0. Con un suministro de energía potente y una refrigeración eficaz, la serie ROG Strix B550 Gaming está optimizada para las CPU AMD Ryzen™ de 3, 4 y 5ª Gen.",
        "price": 38850,
        "chipset": "AM4",
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2022/01/asus-placa-base-rog-strix-b550-e-gaming.jpg",
        "category":"MyP"
    },{
        "name": "Asus Strix OC V2 RTX3060 12GB",
        "description": [
            "Graphic Engine NVIDIA® GeForce RTX™ 3060",
            "Bus Standard PCI Express 4.0",
            "OpenGL OpenGL®4.6",
            "Video Memory 12GB GDDR6",
            "Engine Clock OC Mode  1912 MHz (Boost Clock) Gaming Mode  1882  MHz (Boost Clock)",
            "CUDA Core 3584",
            "Memory Speed 15 Gbps", 
            "Memory Interface 192-bit"
        ],
        "TDP": 65,
        "price": 188700,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2021/11/asus_rtx3060ti_rog_strix_oc_rgb_lhr_-_2-500x500.jpg",
        "category":"Vga"
        
    },{
        "name": "Micro AMD Ryzen 5 5600X AM4",
        "description": [
            "núcleos de CPU 6",
            "de 12 hilos",
            "Reloj base 3.7GHz",
            "Reloj de aumento máx. Hasta 4.6GHz",
            "Caché L2 total 3MB"
        ],
        "chipset": "AM4",
        "TDP": 65,
        "price": 44400,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2020/11/5600x.jpg",
        "category":"MyP"
        
    },{
        "name": "Memoria Hp V8 RGB 8GB DDR4 3000Mhz",
        "description": [
            "Capacidad : 8GB",
            "Interfaz de memoria : DDR4",
            "Velocidad del Bus : 3000MHZ",
            "RGB"
        ],
        "price": 6549,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2021/03/hpv83000.jpg",
        "category":"AyR"
        
    },{
        "name": "Gabinete DeepCool Matrexx 70 RGB 3F",
        "description": [
            "3* Ventiladores CF 120 RGB y 1 tira LED RGB preinstalados y sincronizados",
            "El sistema ADD-RGB incluido se puede controlar con el botón del case o la placa base",
            "Case de torre mediana grande que permite hasta una placa base E-ATX (330 mm).",
            "Compartimento de torre de 228 mm de ancho con espacio libre de 30 mm para el manejo de cables.",
            "Paneles frontales y laterales de fácil instalación."
        ],
        "price": 19092,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2020/10/01-1.jpg",
        "category":"GyF"
        
    },{
        "name": "Fuente Gigabyte GP-P850GM 850W 80+Gold",
        "description": [
            "80 PLUS Gold certified",
            "Fully modular design",
            "120mm Smart Hydraulic Bearing (HYB) Fan",
            "Powerful single +12V rail",
            "OVP/OPP/SCP/UVP/OCP/OTP protection"
        ],
        "price": 23088,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2021/05/P850GM3.jpg",
        "category":"GyF"
        
    },{
        "name": "SSD W.D. Blue SN550 500GB M.2 Pcie",
        "description": [
            "Capacidad 500 GB",
            "Interfaz PCIe",
            "Dimensiones (largo, ancho y alto) 3.15″ x 0.87″ x 0.09″",
            "Rendimiento de lectura secuencial 2400MB/s",
            "Rendimiento de escritura secuencial 1750MB/s"
        ],
        "price": 7770,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2021/07/wd-blue-sn550-nvme-ssd-front-500gb.jpg",
        "category":"AyR"
    },{
        "name": "Vga Msi Gaming X RX6600XT 8GB GDDR6",
        "description": [
            "Hasta 2607 MHz / 16 Gbps",
            "GDDR6 de 8 GB",
            "DisplayPort x 3 (v1.4) HDMI x 1",
            "Diseño térmico TWIN FROZR 8",
            "TORX Fan 4.0",
            "Mystic Light le brinda un control completo de la iluminación RGB"
        ],
        "TDP": 160,
        "price": 144300,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2021/08/3426-msi-radeon-rx-6600-xt-gaming-x-8gb-gddr6-mejor-precio.jpg",
        "category":"Vga"
    }
]

function Test() {
    const db = getFirestore();
    const collection = db.collection('productos')
    const upProduct = () => {
        products.forEach((product) => {
            collection
            .add(product)
            .then((res) => console.log("ta vivo", res.id))
        })
    }
    return (
        <div>
            <h1>esta es la parte de test</h1>
            <button onClick={upProduct}>Agregar a firestore</button>
        </div>
    )
}

export default Test