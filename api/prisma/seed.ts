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
                    specsEN: "<p>Placeholder</p>",
                    specsRU: "<p>Placeholder</p>"
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