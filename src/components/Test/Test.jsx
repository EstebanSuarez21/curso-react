import React from 'react'
import { getFirestore } from '../../firebase'

const products = [
    {
        "name": "Mother Asus Prime A320M-K AM4",
        "description": [
            "5X Protection II – Avanzadas salvaguardas de hardware para protección general",
            "Iluminación LED: Efectos de iluminación en la línea de canal de audio",
            "M.2 nativo: Velocidades de almacenamiento ultra rápidas",
            "Controles one-stop: Aclamado UEFI BIOS con EZ Flash 3"
        ],
        "price": 8120,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2020/10/mother-amd-am4-asus-prime-a320m-k.jpg",
        "category":"MyP",
        "category2": "motAmd"
    },{
        "name": "Vga Asus Strix OC RX6600XT 8GB GDDR6",
        "description": [
            "Hasta 2607 MHz / 16 Gbps",
            "GDDR6 de 8 GB",
            "DisplayPort x 3 (v1.4) HDMI x 1",
            "Diseño térmico TWIN FROZR 8",
            "TORX Fan 4.0",
            "Mystic Light le brinda un control completo de la iluminación RGB"
        ],
        "price": 133400,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2022/01/90YV0GN0-MTAA00b.jpg",
        "category":"Vga",
        "category2":"VgaAmd"
    },{
        "name": "Vga Asus Dual OC RX6700XT 12GB GDDR6",
        "description": [
            "Graphic Engine AMD Radeon RX 6700 XT",
            "Bus Standard PCI Express 4.0",
            "OpenGL 4.6",
            "Video Memory 12GB GDDR6",
            "Engine Clock OC mode : up to 2622 MHz",
            "Stream Processors 2560",
            "Memory Speed 16 Gbps",
            "Memory Interface 192-bit"
        ],
        "price": 208800,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2022/01/6700XTDUALOC.jpeg",
        "category":"Vga",
        "category2": "VgaAmd"
    },{
        "name": "Vga Gigabyte Eagle OC RTX3060 12GB LHR",
        "description": [
            "NVIDIA Ampere Streaming Multiprocessors",
            "Integrated with 12GB GDDR6 192-bit memory interface",
            "RGB Fusion 2.0",
            "CORE CLOCK 1807 MHz"
        ],
        "price": 156600,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2021/04/5751-gigabyte-geforce-rtx-3060-eagle-oc-12gb-gddr6c.jpg",
        "category":"Vga",
        "category2": "VgaNvidia"
    },{
        "name": "Vga Gigabyte Vision OC RTX3060 12GB LHR",
        "description": [
            "Graphics Processing GeForce RTX™ 3060",
            "Core Clock 1837 MHz (Reference Card: 1777 MHz)",
            "CUDA® Cores 3584",
            "Memory Clock 15000 MHz",
            "Memory Size 12 GB",
            "Memory Type GDDR6",
            "Memory Bus 192 bit"
        ],
        "price": 162400,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2022/02/N3060VISION-OC-12GDC.jpg",
        "category":"Vga",
        "category2": "VgaNvidia"
    },{
        "name": "Vga Asus TUF OC V2 RTX3060 12GB LHR",
        "description": [
            "Graphic Engine NVIDIA® GeForce RTX™ 3060",
            "Bus Standard PCI Express 4.0",
            "OpenGL OpenGL®4.6",
            "Video Memory 12GB GDDR6",
            "Engine Clock OC Mode – 1882 MHz",
            "CUDA Core 3584",
            "Memory Speed 15 Gbps",
            "Memory Interface 192-bit"
        ],
        "price": 168200,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2021/11/90YV0G1A-M0AA002.jpg",
        "category":"Vga",
        "category2": "VgaNvidia"
        
    },{
        "name": "Vga Asus Strix LC RTX3080TI 12GB GDDR6X",
        "description": [
            "Graphic Engine NVIDIA® GeForce RTX™ 3080 Ti",
            "Bus Standard PCI Express 4.0",
            "OpenGL OpenGL®4.6",
            "Video Memory 12GB GDDR6X",
            "Engine Clock OC mode : 1695 MHz (Boost Clock) Gaming mode : 1665 MHz (Boost Clock)",
            "CUDA Core 10240",
            "Memory Speed 19 Gbps",
            "Memory Interface 384-bit"
        ],
        "price": 440800,
        "picture":"https://hardcorecomputacion.com.ar/wp-content/uploads/2021/11/RTX3080TILC.jpg",
        "category":"Vga",
        "category2":"VgaNvidia"
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