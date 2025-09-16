const brandMenuData = {
    baskinrobbins: {
    logo: require('../assets/baskinrobbins.png'),
    items: [
        { name: 'Cotton Candy', price: 80}
        ],
    },

londondairy: {
    logo: require('../assets/Londondairy.png'),
    items: [
        { name: 'Blueberry Sorbet', price: 60},
        { name: 'Pink Guava Sorbet', price: 60},
        { name: 'Pina Colada Sorbet', price: 60},
        { name: 'Peach Apricot Sorbet', price: 60},
        { name: 'Raspberry Sorbet', price: 150},
        { name: 'Mango Sorbet', price: 150},
        { name: 'Berries N Cream', price: 150},
        { name: 'Belgian Chocolate', price: 150},
        { name: 'Hazelnut', price: 150},
        { name: 'Almond', price: 150}
        ],
    },
    havmor: {
        logo: require('../assets/Havmor.png'),
        items: [
            { name: 'Chocobar', price: 20},
            { name: 'Mango Dolly', price: 20},
            { name: 'Raspberry Dolly', price: 20},
            { name: 'Shahi Pista Kulfi', price: 25},
            { name: 'Bombay Kulfi (Mawa Malai)', price: 25},
            { name: 'Crunchy Chocobar', price: 30},
            { name: 'Rajbhog', price: 30},
            { name: 'Chowpati Kulfi (Mawa Kulfi)', price:40},
            { name: 'Zulubar', price: 50},
            { name: 'Zulubar Dark Chocolate', price: 50},
            { name: 'Mango Magic', price: 60},
            { name: 'Almond Mocha', price: 60},
            { name: 'Wild Berries', price: 60},
            { name: 'Orange Bar', price: 10}
        ],
    },
    hajoori: {
        logo: require('../assets/HajooriKulfi.png'),
        categories: {
            "Fruit klufi": [
                { name: 'Fresh Jamun Shoot (Hajoori)', price:50}
            ],
            "DryFruit kulfi": [
                { name: 'Shahi Dryfruit (Hajooru)', price: 50},
                { name: 'Kesar Pista (Hajoori)', price: 50}
            ],
        },
    },
    vadilal: {
        logo: require('../assets/Vadilal.png'),
        items: [
            { name: 'Mango (Badabite)', price: 50}, 
            { name: 'Dark Truffle (Badabite)', price: 50},
            { name: 'Red Velvet (Badabite)', price: 50},
            { name: 'Choco Almond (Badabite)', price: 50},
            { name: 'Cookie N Cream (Badabite)', price: 50}
        ],
    },
    lottegroup: {
        logo: require('../assets/Lottegroup.png'),
        items: [
            { name: 'Yoghurt Krunch Berry (Lotte)', price: 60},
            { name: 'Choco Krunch Vanilla (Lotte)', price: 60}
        ],
    },
    kwalitywalls: {
        logo: require('../assets/Kwalitywalls.png'),
        items: [
            { name: 'Feast', price: 70}
        ],
    },


};

export default brandMenuData;