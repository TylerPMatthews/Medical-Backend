exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("product_items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("product_items").insert([
        {
          item_id: 1,
          item_name: "Triple Chocolate Chip 2.83g",
          item_price: 38,
          item_type: "flower",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2905789/original-1618936326.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 22,
          item_cbd: 0,
          item_description: "Indica; Mint Chocolate Chip x Triple OG",
        },
        {
          item_id: 2,
          item_name: "Crushed Berries 2.83g",
          item_price: 38,
          item_type: "flower",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2906444/original-1619129235.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 19,
          item_cbd: 0,
          item_description: "Indica; Bordello x Purple Vapor.",
        },
        {
          item_id: 3,
          item_name: "OCM 0.5g Cart",
          item_price: 42,
          item_type: "cart",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2906443/original-1619137327.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 70,
          item_cbd: 37,
          item_description:
            "CO2 extracted. Intended for use with AVD Seed battery. Made from the Orange Cookie Mac strain",
        },
        {
          item_id: 4,
          item_name: "Honey 4oz Jar",
          item_price: 68,
          item_type: "edible",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2881522/original-1618078604.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 85,
          item_cbd: 0,
          item_description: "Honey infused with THC.",
        },
        {
          item_id: 5,
          item_name: "OG Kush Kief 1g ",
          item_price: 30,
          item_type: "concentrate",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2875730/original-1610644009.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 65,
          item_cbd: 0,
          item_description:
            "Also known as cannabis crystals or dry sift, Kief is a solventless extract made up of resinous trichomes from dried or flash frozen flower that accumulate during various processing operations. Kief is tasty and potent.",
        },
        {
          item_id: 6,
          item_name: "White Label 1:4 Massage Oil",
          item_price: 40,
          item_type: "topical",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2880561/original-1618610799.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 28,
          item_cbd: 60,
          item_description: "Black cammomile massage oil ",
        },
        {
          item_id: 7,
          item_name: "Super Sour Orange 14g",
          item_price: 158,
          item_type: "flower",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2906142/original-1619021521.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 27,
          item_cbd: 0,
          item_description:
            "Aroma: Citrus, Sweet Effects: Uplifting, Energetic Super Sour Diesel x African Orange Terpenes: Myrcene, Limonene, Pinene.",
        },
        {
          item_id: 8,
          item_name: "Pineapple Upside Down Cake 14g",
          item_price: 120,
          item_type: "flower",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2906149/original-1619022418.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 23,
          item_cbd: 0,
          item_description:
            "Pineapple Trainwreck x Cookie Monster Terpenes: Ocimene, Pinene, Caryophyllene, Limonene, Myrcene",
        },
        {
          item_id: 9,
          item_name: "Straight Sauce 0.84g Distillate Cart",
          item_price: 52,
          item_type: "cart",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2906132/original-1619020622.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 95,
          item_cbd: 0,
          item_description:
            "0.84g. 510-Thread cart with metal adapter included intended for use with AVD Seed battery.",
        },
        {
          item_id: 10,
          item_name: "Straight Sauce Diamonds n Sauce 2.6g",
          item_price: 240,
          item_type: "concentrate",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2906151/original-1619022422.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 92,
          item_cbd: 0,
          item_description: "SATIVA",
        },
        {
          item_id: 11,
          item_name: "Dosidos 8.49g",
          item_price: 106,
          item_type: "flower",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2902784/original-1617810399.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 18,
          item_cbd: 0,
          item_description:
            "Effects: Relaxing Aroma: Earthy, Sweet, Pungent Girl Scout Cookies x Face Off OG",
        },
        {
          item_id: 12,
          item_name: "DHLV 2.83g",
          item_price: 25,
          item_type: "flower",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2903410/original-1617997007.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 20,
          item_cbd: 0,
          item_description: "Deadhead OG x Las Vegas Kush",
        },
        {
          item_id: 13,
          item_name: "Wedding Cake 2.83g",
          item_price: 28,
          item_type: "flower",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2905383/original-1618848509.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 24,
          item_cbd: 0,
          item_description:
            "A highly potent hybrid that carries the best traits of Cookies and OG’s. Triangle Kush x Animals Mints",
        },
        {
          item_id: 14,
          item_name: "LMNDE Dream Live Badder 0.88g",
          item_price: 75,
          item_type: "concentrate",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2904484/original-1618518396.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 81,
          item_cbd: 0,
          item_description: "Made from the Blueberry Cookies strain",
        },
        {
          item_id: 15,
          item_name: "Wifi Alien Kush Diamonds & Sauce 5g",
          item_price: "400",
          item_type: "concentrate",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2899725/original-1616521306.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 85,
          item_cbd: 0,
          item_description: "5g Big Jar",
        },
        {
          item_id: 16,
          item_name: "Transdermal Patch 12 Hour ; #1 Patch",
          item_price: 20,
          item_type: "topical",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2899692/original-1616517097.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 35,
          item_cbd: 0,
          item_description:
            "Safe and Discreet; Delivers medicine into the bloodstream through the outer later of skin, into the dermis. Onset Time: 30-90 minutes. Duration: 8-12 hours",
        },
        {
          item_id: 17,
          item_name: "Orange 43",
          item_price: 43,
          item_type: "flower",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2906683/original-1619209327.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 28,
          item_cbd: 0,
          item_description:
            "Sativa; White Fire OG x Orange. Sweet, Orange, Gassy Aroma. Terpenes: Terpinolene, Myrcene, Limonene.",
        },
        {
          item_id: 18,
          item_name: "Dosiface 0.84g Cart Only",
          item_price: 75,
          item_type: "cart",
          item_img:
            "https://stickyguide.imgix.net/product_photos/2906688/original-1619210240.?auto=format&fm=jpg&q=60&dpr=2&w=504&h=504&fit=fill&fill=solid&fill-color=ffffff",
          item_thc: 85,
          item_cbd: 0,
          item_description:
            "0.84g; CO2 extracted. Intended for use with AVD Seed battery.",
        },
      ]);
    });
};
