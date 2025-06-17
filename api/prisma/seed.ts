import prisma from "./prisma-client";

async function main() {
    await prisma.category.deleteMany();
    await prisma.category.create({
        data: {
            nameEN: 'Computer Parts',
            nameRU: 'Комплектующие',
            subcategories: {
                create: [
                    {
                        nameEN: "CPU",
                        nameRU: "Процессоры"
                    },
                    {
                        nameEN: "GPU",
                        nameRU: "Видеокарты"
                    },
                    {
                        nameEN: "RAM",
                        nameRU: "ОЗУ"
                    },
                    {
                        nameEN: "HDD/SSD",
                        nameRU: "Жёсткие диски/Твердотельные накопители"
                    }
                ]
            }
        },
    });

    await prisma.category.create({
        data: {
            nameEN: 'Personal computers',
            nameRU: 'Компьюьтеры',
            subcategories: {
                create: [
                    {
                        nameEN: "Laptops",
                        nameRU: "Ноутбуки"
                    },
                    {
                        nameEN: "Desktops",
                        nameRU: "Настольные компьютеры"
                    },
                ]
            }
        },
    });

    await prisma.category.create({
        data: {
            nameEN: 'Mobile devices',
            nameRU: 'Мобильные устройства',
            subcategories: {
                create: [
                    {
                        nameEN: "Smartphones",
                        nameRU: "Смартфоны"
                    },
                    {
                        nameEN: "Push-button phones",
                        nameRU: "Кнопочные телефоны"
                    },
                    {
                        nameEN: "Tablets",
                        nameRU: "Планшеты"
                    },
                ]
            }
        },
    });

    await prisma.category.create({
        data: {
            nameEN: 'Miscellaneous',
            nameRU: 'Другие',
        },
    });

    await prisma.item.deleteMany();
    await prisma.item.create({
        data: {
            modelEN: 'Smartphone X',
            modelRU: 'Smartphone X',
            image_path: '/iphone-x.jpg',
            manufacturer: 'ABC Electronics',
            unit_price: 599.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 100,
            faulty_units: 2,
            category: {
                connect: {
                    nameEN: "Smartphones"
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Latest smartphone from your favourite company</p>",
                    descriptionRU: "<p>Новинка от компании ABC</p>",
                    specsEN: "<p>CPU: Mediatek helio P10</p>",
                    specsRU: "<p>Процессор: Mediatek helio P10</p>"
                }
            }
        }
    });

    await prisma.item.create({
        data: {
            modelEN: 'Nokia 3310',
            modelRU: 'Nokia 3310',
            image_path: '/1667.jpg',
            manufacturer: 'Nokia',
            unit_price: 5.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 10,
            faulty_units: 2,
            category: {
                connect: {
                    nameEN: "Push-button phones"
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Timeless classic</p>",
                    descriptionRU: "<p>Легендарный телефон от Nokia</p>",
                    specsEN: "<p>It should work</p>",
                    specsRU: "<p>Оно должно работать</p>"
                }
            }
        }
    });

    await prisma.item.create({
        data: {
            modelEN: 'Laptop 10',
            modelRU: 'Ноутбук 10',
            image_path: '/cheap-laptop.jpg',
            manufacturer: 'Laptops inc.',
            unit_price: 19.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 50,
            faulty_units: 0,
            category: {
                connect: {
                    nameEN: "Laptops",
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Placeholder</p>",
                    descriptionRU: "<p>Placeholder</p>",
                    specsEN: "<p>Placeholder</p>",
                    specsRU: "<p>Placeholder</p>"
                }
            }
        }
    });

    await prisma.item.create({
        data: {
            modelEN: 'New Expensive Laptop 17',
            modelRU: 'Новый дорогой ноутбук 17',
            image_path: '/expensive-laptop.jpg',
            manufacturer: 'Laptops inc.',
            unit_price: 5999.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 500,
            faulty_units: 0,
            category: {
                connect: {
                    nameEN: "Laptops",
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Placeholder</p>",
                    descriptionRU: "<p>Placeholder</p>",
                    specsEN: "<p>Placeholder</p>",
                    specsRU: "<p>Placeholder</p>"
                }
            }
        }
    });

    await prisma.item.create({
        data: {
            modelEN: 'Intel Core 2 Duo E6300',
            modelRU: 'Intel Core 2 Duo E6300',
            image_path: '/core2duo.jpg',
            manufacturer: 'Intel',
            unit_price: 4.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 500,
            faulty_units: 0,
            category: {
                connect: {
                    nameEN: "CPU",
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Placeholder</p>",
                    descriptionRU: "<p>Placeholder</p>",
                    specsEN: "<p>Placeholder</p>",
                    specsRU: "<p>Placeholder</p>"
                }
            }
        }
    });

    await prisma.item.create({
        data: {
            modelEN: 'Baikal-T1',
            modelRU: 'Baikal-T1',
            image_path: null,
            manufacturer: 'Baikal',
            unit_price: 4999.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 500,
            faulty_units: 0,
            category: {
                connect: {
                    nameEN: "CPU",
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Placeholder</p>",
                    descriptionRU: "<p>Placeholder</p>",
                    specsEN: "<p>Placeholder</p>",
                    specsRU: "<p>Placeholder</p>"
                }
            }
        }
    });

    await prisma.item.create({
        data: {
            modelEN: 'Geforce 210',
            modelRU: 'Geforce 210',
            image_path: '/gf210.jpg',
            manufacturer: 'Nvidia corp.',
            unit_price: 19.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 500,
            faulty_units: 0,
            category: {
                connect: {
                    nameEN: "GPU",
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Placeholder</p>",
                    descriptionRU: "<p>Placeholder</p>",
                    specsEN: "<h1>NVIDIA GeForce 210 - Specifications</h1>\n" +
                        "\n" +
                        "    <h2>General Information</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Release Date: October 2009</li>\n" +
                        "        <li>GPU Architecture: Tesla</li>\n" +
                        "        <li>Process Size: 40 nm</li>\n" +
                        "        <li>Transistors: 260 million</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>GPU</h2>\n" +
                        "    <ul>\n" +
                        "        <li>CUDA Cores: 16</li>\n" +
                        "        <li>Core Clock: ~589 MHz</li>\n" +
                        "        <li>Shader Clock: ~1402 MHz</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Memory</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Memory Size: 512 MB – 1 GB</li>\n" +
                        "        <li>Memory Type: DDR2 / DDR3</li>\n" +
                        "        <li>Memory Clock: ~500 MHz (DDR2) / ~800 MHz (DDR3)</li>\n" +
                        "        <li>Memory Bus Width: 64-bit</li>\n" +
                        "        <li>Bandwidth: ~8 GB/s</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Display Support</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Max Resolution: 2560x1600 (Digital)</li>\n" +
                        "        <li>Outputs: VGA, DVI, HDMI (varies by model)</li>\n" +
                        "        <li>Multi-Monitor Support: Yes</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Features</h2>\n" +
                        "    <ul>\n" +
                        "        <li>DirectX: 10.1</li>\n" +
                        "        <li>OpenGL: 3.1</li>\n" +
                        "        <li>PureVideo HD: Yes</li>\n" +
                        "        <li>PhysX: No</li>\n" +
                        "        <li>SLI Support: No</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Power & Thermal</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Power Consumption: ~30 Watts</li>\n" +
                        "        <li>Recommended PSU: 300 Watts</li>\n" +
                        "        <li>Cooling: Passive or Single-fan (varies by model)</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Bus Interface</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Interface: PCI Express 2.0 x16</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Target Market</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Entry-level Desktop Graphics</li>\n" +
                        "        <li>Basic HD Video Playback</li>\n" +
                        "        <li>Low Power & Silent PCs</li>\n" +
                        "    </ul>",
                    specsRU: "<h1>NVIDIA GeForce 210 — Характеристики</h1>\n" +
                        "\n" +
                        "    <h2>Общая информация</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Дата выхода: Октябрь 2009</li>\n" +
                        "        <li>Архитектура GPU: Tesla</li>\n" +
                        "        <li>Техпроцесс: 40 нм</li>\n" +
                        "        <li>Количество транзисторов: 260 миллионов</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Графический процессор</h2>\n" +
                        "    <ul>\n" +
                        "        <li>CUDA-ядер: 16</li>\n" +
                        "        <li>Частота ядра: ~589 МГц</li>\n" +
                        "        <li>Частота шейдеров: ~1402 МГц</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Память</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Объём памяти: 512 МБ – 1 ГБ</li>\n" +
                        "        <li>Тип памяти: DDR2 / DDR3</li>\n" +
                        "        <li>Частота памяти: ~500 МГц (DDR2) / ~800 МГц (DDR3)</li>\n" +
                        "        <li>Разрядность шины памяти: 64-бит</li>\n" +
                        "        <li>Пропускная способность: ~8 ГБ/с</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Поддержка дисплеев</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Максимальное разрешение: 2560x1600 (цифровое)</li>\n" +
                        "        <li>Выходы: VGA, DVI, HDMI (зависит от модели)</li>\n" +
                        "        <li>Поддержка нескольких мониторов: Да</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Функции</h2>\n" +
                        "    <ul>\n" +
                        "        <li>DirectX: 10.1</li>\n" +
                        "        <li>OpenGL: 3.1</li>\n" +
                        "        <li>PureVideo HD: Да</li>\n" +
                        "        <li>PhysX: Нет</li>\n" +
                        "        <li>Поддержка SLI: Нет</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Питание и охлаждение</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Потребляемая мощность: ~30 Вт</li>\n" +
                        "        <li>Рекомендуемый блок питания: 300 Вт</li>\n" +
                        "        <li>Охлаждение: Пассивное или с одним вентилятором (в зависимости от модели)</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Интерфейс</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Интерфейс подключения: PCI Express 2.0 x16</li>\n" +
                        "    </ul>\n" +
                        "\n" +
                        "    <h2>Назначение</h2>\n" +
                        "    <ul>\n" +
                        "        <li>Бюджетная графика для настольных ПК</li>\n" +
                        "        <li>Воспроизведение HD-видео</li>\n" +
                        "        <li>Малошумящие и энергосберегающие сборки</li>\n" +
                        "    </ul>"
                }
            }
        }
    });

    await prisma.item.create({
        data: {
            modelEN: 'Radeon HD 5450',
            modelRU: 'Radeon HD 5450',
            image_path: '/radeon-5450.jpg',
            manufacturer: 'AMD',
            unit_price: 15.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 100,
            faulty_units: 0,
            category: {
                connect: {
                    nameEN: "GPU",
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Placeholder</p>",
                    descriptionRU: "<p>Placeholder</p>",
                    specsEN: "<p>Placeholder</p>",
                    specsRU: "<p>Placeholder</p>"
                }
            }
        }
    });

    await prisma.item.create({
        data: {
            modelEN: 'Geforce 6200',
            modelRU: 'Geforce 6200',
            image_path: '/geforce-6200.jpg',
            manufacturer: 'Nvidia corp.',
            unit_price: 4.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 50,
            faulty_units: 0,
            category: {
                connect: {
                    nameEN: "GPU",
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Placeholder</p>",
                    descriptionRU: "<p>Placeholder</p>",
                    specsEN: "<p>Placeholder</p>",
                    specsRU: "<p>Placeholder</p>"
                }
            }
        }
    });

    await prisma.item.create({
        data: {
            modelEN: 'Old Decrepit PC',
            modelRU: 'Старый дохлый комп',
            image_path: '/old-pc.jpg',
            manufacturer: 'Evil Computers corp.',
            unit_price: 4.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 5000,
            faulty_units: 0,
            category: {
                connect: {
                    nameEN: "Desktops",
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Placeholder</p>",
                    descriptionRU: "<p>Placeholder</p>",
                    specsEN: "<p>Placeholder</p>",
                    specsRU: "<p>Placeholder</p>"
                }
            }
        }
    });

    await prisma.item.create({
        data: {
            modelEN: 'New Expensive PC',
            modelRU: 'Новый дорогой ПК',
            image_path: '/expensive-pc.jpg',
            manufacturer: 'Evil Computers corp.',
            unit_price: 9999.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 10,
            faulty_units: 0,
            category: {
                connect: {
                    nameEN: "Desktops",
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Placeholder</p>",
                    descriptionRU: "<p>Placeholder</p>",
                    specsEN: "<p>Placeholder</p>",
                    specsRU: "<p>Placeholder</p>"
                }
            }
        }
    });

    await prisma.item.create({
        data: {
            modelEN: '20Mb Hard Drive',
            modelRU: 'Жесткий диск объёмом на 20мб',
            image_path: '/Old_wd_hard_disk_03.jpg',
            manufacturer: 'Western Digital',
            unit_price: 2.99,
            date_of_arrival: new Date('2022-01-20'),
            units_in_stock: 10,
            faulty_units: 0,
            category: {
                connect: {
                    nameEN: "HDD/SSD",
                }
            },
            details: {
                create: {
                    descriptionEN: "<p>Placeholder</p>",
                    descriptionRU: "<p>Placeholder</p>",
                    specsEN: "<p>Placeholder</p>",
                    specsRU: "<p>Placeholder</p>"
                }
            }
        }
    });

    await prisma.role.deleteMany();
    await prisma.role.createMany({
        data: [
            {
                name: "Admin",
                description: "Administrator role with full access'",
            },
            {
                name: 'Employee',
                description: 'Has access to the information about available items'
            },
            {
                name:'Client',
                description: 'Standard user role with limited access'
            },
        ]
    });

    await prisma.userProfile.deleteMany();
    await prisma.userProfile.create({
        data: {
            login: 'admin',
            password: 'admin',
            full_name: 'Admin User',
            email: 'admin@example.com',
            phone_number: '+7978440304',
            passport: 978440307,
            role: {
                connect: {
                    name: 'Admin',
                }
            }
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })