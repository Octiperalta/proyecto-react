const products = [
  {
    productName: {
      longName: "Icon Airflite Peacekeeper Rubatone Helmet",
      shortName: "Peacekeeper Rubatone",
    },
    productID: 1,
    category: {
      categoryName: "Helmet",
      categoryID: 1,
    },
    productPrice: "500",
    imageUrl:
      "https://www.revzilla.com/product_images/1444/0231/icon_hlmt_aflt_pckeepr_rubatone_white_750x750.jpg",
    description: {
      shortDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea commodi aut odio cumque repellat. Recusandae, quia assumenda! Quidem, quas cumque!",
      longDescription: "",
    },
    freeShipping: true,
    stock: {
      stockAvailable: 5,
      sizes: ["Small", "Medium"],
    },
  },
  {
    productName: {
      longName: "Icon Airflite Helmet",
      shortName: "Icon Airflite Helmet",
    },
    productID: 2,
    category: {
      categoryName: "Helmet",
      categoryID: 1,
    },
    productPrice: "250",
    imageUrl:
      "https://www.revzilla.com/product_images/0356/8841/icon_airflite_helmet_black_750x750.jpg",
    description: {
      shortDescription:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi qui minima provident voluptatem nostrum, similique, ex perferendis blanditiis sit vero magni, error totam deleniti molestias voluptatibus veniam nihil cum. Eius.",
      longDescription: "",
    },
    freeShipping: true,
    stock: {
      stockAvailable: 4,
      sizes: ["Extra Small", "Small", "Large"],
    },
  },
  {
    productName: {
      longName: "Scorpion EXO-R420 Helmet",
      shortName: "Scorpion EXO-R420",
    },
    productID: 3,
    category: {
      categoryName: "Helmet",
      categoryID: 1,
    },
    productPrice: "150",
    imageUrl:
      "https://www.revzilla.com/product_images/0331/1266/scorpion_exo_r420_black_750x750.jpg",
    description: {
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquam at modi maxime quas doloremque distinctio possimus, beatae, quasi officia fugiat laborum repellendus voluptatum debitis.",
      longDescription: "",
    },
    freeShipping: false,
    stock: {
      stockAvailable: 0,
      sizes: ["Small", "Medium", "Large", "Extra Large"],
    },
  },
  {
    productName: {
      longName: "Shoei GT-Air II Helmet",
      shortName: "Shoei GT-Air II",
    },
    productID: 4,
    category: {
      categoryName: "Helmet",
      categoryID: 1,
    },
    productPrice: "600",
    imageUrl:
      "https://www.revzilla.com/product_images/0833/9349/shoei_gt_air_ii_750x750.jpg",
    description: {
      shortDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam id repudiandae vel veritatis cumque sequi aspernatur tempore molestiae amet inventore.",
      longDescription: "",
    },
    freeShipping: false,
    stock: {
      stockAvailable: 6,
      sizes: ["Small", "Extra Large"],
    },
  },
  {
    productName: {
      longName: "Bell Bullitt Helmet",
      shortName: "Bell Bullitt",
    },
    productID: 5,
    category: {
      categoryName: "Helmet",
      categoryID: 1,
    },
    productPrice: "400",
    imageUrl:
      "https://www.revzilla.com/product_images/1215/0274/bell_bullitt_helmet_750x750.jpg",
    description: {
      shortDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti natus repellendus quia enim? Animi, soluta.",
      longDescription: "",
    },
    freeShipping: true,
    stock: {
      stockAvailable: 2,
      sizes: ["Small"],
    },
  },
  {
    productName: {
      longName: "HJC RPHA 11 Pro Venom 2 Helmet",
      shortName: "HJC RPHA 11 Pro ",
    },
    productID: 6,
    category: {
      categoryName: "Helmet",
      categoryID: 1,
    },
    productPrice: "400",
    imageUrl:
      "https://www.revzilla.com/product_images/0906/6476/hjcrpha11_pro_venom2_helmet_black_red_white_750x750.jpg",
    description: {
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis debitis est enim aliquid! Numquam esse voluptates dolor incidunt adipisci sequi?",
      longDescription: "",
    },
    freeShipping: false,
    stock: {
      stockAvailable: 7,
      sizes: ["Small", "Medium", "Large"],
    },
  },
  {
    productName: {
      longName: "Klim Latitude Jacket",
      shortName: "Klim Latitude ",
    },
    productID: 7,
    category: {
      categoryName: "Jacket",
      categoryID: 2,
    },
    productPrice: "650",
    imageUrl:
      "https://www.revzilla.com/product_images/0348/4876/klim_latitude_jacket_750x750.jpg",
    description: {
      shortDescription:
        "The Klim Latitude Jacket has features that any touring rider would covet for their next motorcycle expedition",
      longDescription:
        "The Klim Latitude Jacket is ready to take on the world right out of the box. The versatile Gore-Tex 2-Layer Performance shell is waterproof and breathable. Run your own base layers and mid layers in the Klim Latitude Jacket's technical shell to meet the requirements dictated by the day's weather. Goat leather trim provides an aesthetic pop and functional abrasion resistance. Heavy duty 840D Cordura bolster high abrasion and wear zones to help the jacket last multiple seasons. The Klim Latitude Jacket comes equipped with CE level 1 D3O armor at the elbows, shoulders and back from the factory. Strategically placed vents flow air direct to the body to help keep cool as temperatures rise.",
    },
    freeShipping: false,
    stock: {
      stockAvailable: 4,
      sizes: ["Small", "Medium", "Large", "Extra Large"],
    },
  },
  {
    productName: {
      longName: "REAX Alta Mesh Jacket",
      shortName: "REAX Alta Mesh",
    },
    productID: 8,
    category: {
      categoryName: "Jacket",
      categoryID: 2,
    },
    productPrice: "219",
    imageUrl:
      "https://www.revzilla.com/product_images/0371/3411/reax_alta_mesh_jacket_750x750.jpg",
    description: {
      shortDescription:
        "Remarkably adaptable to unpredictable conditions, the easygoing Alta really shines when the sun beats down and the ride heats up.",
      longDescription:
        "Airflow and protection, the Reax Alta Jacket is a titan in its class. Where mesh jackets can be tempted to compromise on abrasion-resistance to retain affordability, the Alta refuses concession. Lightweight poly mesh combines with a 600D chassis and 980D ballistic reinforcements, and CE Level 2 limb armor comes standard. A removable 100% waterproof liner adds versatility to the unimpeachable style and simplicity of the Alta Mesh Jacket.",
    },
    freeShipping: true,
    stock: {
      stockAvailable: 2,
      sizes: ["Small", "Medium"],
    },
  },
  {
    productName: {
      longName: "REV'IT! Sand 4 H2O Jacket",
      shortName: "REV'IT! Sand 4 H2O",
    },
    productID: 9,
    category: {
      categoryName: "Jacket",
      categoryID: 2,
    },
    productPrice: "500",
    imageUrl:
      "https://www.revzilla.com/product_images/1505/7195/revit_sand4_h2_o_jacket_750x750.jpg",
    description: {
      shortDescription:
        "Remarkably adaptable to unpredictable conditions, the easygoing Alta really shines when the sun beats down and the ride heats up.",
      longDescription:
        "The Sand series has always been a line of gear capable of taking the rider around the world. This fourth iteration now does the job even better. Engineered with weight savings in mind and featuring a curated series of liners, the Sand 4 H2O Jacket wears easy without the fatigue of typically heavy ADV jackets. The foundation of the Sand 4 is its abrasion-resistant polyester ripstop shell. Close your eyes, and one would imagine this shell were designed solely for hot weather exploration. Three ventilation panels cover the front, twin zippered ports ventilate each arms, and the exhaust vent count at the rear is two",
    },
    freeShipping: true,
    stock: {
      stockAvailable: 0,
      sizes: ["Small", "Medium"],
    },
  },
  {
    productName: {
      longName: "Dainese Super Speed Textile Jacket",
      shortName: "Dainese Super Speed",
    },
    productID: 10,
    category: {
      categoryName: "Jacket",
      categoryID: 2,
    },
    productPrice: "370",
    imageUrl:
      "https://www.revzilla.com/product_images/0043/1948/dainese_super_speed_textile_jacket_750x750.jpg",
    description: {
      shortDescription:
        "Super aggressive. Super breathable. For summer sport riding performance, it doesn’t get any better than the Dainese Super Speed Textile Jacket",
      longDescription:
        "The Dainese Super Speed Textile Jacket combines the technical and ergonomic features found in Dainese's pro-level race suits with textile and mesh to create a summer riding jacket that affords CE level protection while providing a dynamic fit and sporty looks. Key features like aluminum shoulder sliders, elasticated inserts, large mesh panels, a zipper to connect trousers, CE rated shoulder and elbow armor, as well as pockets for Dainese's back and chest protectors, give you comprehensive protection with a comfortable yet snug fit. When the heat is on the Super Speed Textile Jacket helps keep your cool without sacrificing comfort or protection. ",
    },
    freeShipping: false,
    stock: {
      stockAvailable: 4,
      sizes: ["Extra Small", "Small", "Medium", "Large", "Extra Large"],
    },
  },
  {
    productName: {
      longName: "Alpinestars GP Plus R V3 Rideknit Leather Jacket",
      shortName: "Alpinestars GP Plus R",
    },
    productID: 11,
    category: {
      categoryName: "Jacket",
      categoryID: 2,
    },
    productPrice: "600",
    imageUrl:
      "https://www.revzilla.com/product_images/1517/4768/alpinestars_gp_plus_rv3_rideknit_leather_jacket_750x750.jpg",
    description: {
      shortDescription:
        "With a highly durable and abrasion resistant leather main shell and subtly incorporated class-leading Nucleon Flex Plus protection, the GP Plus Ridekn",
      longDescription:
        "With a highly durable and abrasion resistant leather main shell and subtly incorporated class-leading Nucleon Flex Plus protection, the GP Plus Rideknit Leather Jacket is designed for the optimum blend of safety and comfort. Fully optimized for use with or without Tech-Air5®, this jacket is equipped with knitted technology fabric on the seam area for maximum stretch for optimizing fit and comfort, while zippered air intakes provide crucial ventilation.",
    },
    freeShipping: false,
    stock: {
      stockAvailable: 4,
      sizes: ["Extra Small", "Small", "Medium", "Large", "Extra Large"],
    },
  },
  {
    productName: {
      longName: "Alpinestars Megawatt Gloves",
      shortName: "Alpinestars Megawatt",
    },
    productID: 12,
    category: {
      categoryName: "Gloves",
      categoryID: 3,
    },
    productPrice: "60",
    imageUrl:
      "https://www.revzilla.com/product_images/0309/5189/alpinestars_gloves_s8_megawatt_750x750.jpg",
    description: {
      shortDescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae porro a id iure cumque animi quia voluptate similique expedita voluptatem.",
      longDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum corrupti reiciendis sequi pariatur accusamus aut, nostrum, atque dolor animi facere inventore minima possimus optio. Dolor repellendus unde repudiandae libero saepe enim, temporibus consequuntur ipsam sint nisi molestias ut? Dolorum rerum consequatur eum in nihil, sint perspiciatis at obcaecati error!",
    },
    freeShipping: true,
    stock: {
      stockAvailable: 10,
      sizes: ["Small", "Medium", "Large", "Extra Large"],
    },
  },
  {
    productName: {
      longName: "Fox Racing Bomber Light Gloves",
      shortName: "Fox Racing Bomber",
    },
    productID: 13,
    category: {
      categoryName: "Gloves",
      categoryID: 3,
    },
    productPrice: "30",
    imageUrl:
      "https://www.revzilla.com/product_images/0308/8371/fox_racing_bomber_light_gloves_orange_750x750.jpg",
    description: {
      shortDescription:
        "The Bomber Light Gloves feature the trusted protection of D30 - the world leader in impact protecting foam",
      longDescription:
        "The Bomber Light Gloves feature the trusted protection of D30 - the world leader in impact protecting foam. The D3O padding allows the gloves to stay flexible until impacted, where it instantly hardens to provide protection on the knuckles. The palm is a single layer Clarino for maximum bar feel. The inside of the fingers feature exclusive TruFeel technology. This delivers increased sensitivity by placing direct injected internal TPR knobbies at your fingertips. The result is increased precision while grabbing levers, tearoffs, and zippers.",
    },
    freeShipping: true,
    stock: {
      stockAvailable: 2,
      sizes: ["Medium", "Large"],
    },
  },
  {
    productName: {
      longName: "Alpinestars SMX-1 Air v2 Gloves",
      shortName: "Alpinestars SMX-1 Air",
    },
    productID: 14,
    category: {
      categoryName: "Gloves",
      categoryID: 3,
    },
    productPrice: "60",
    imageUrl:
      "https://www.revzilla.com/product_images/0406/3049/alpinestars_smx_air_v2_gloves_750x750.jpg",
    description: {
      shortDescription:
        "The Alpinestars SMX-1 Air V2 Gloves provide basic motorcycle protection in a leather and mesh chassis.",
      longDescription:
        "The Alpinestars SMX-1 Air V2 Gloves continue in the tradition of protective short cuff gloves that flow tons of air for hot weather riding. The latest version uses a new chassis with a redesigned cuff closure, padded fingers and strategically placed stretch material. The V2 glove combines perforated leather and heavy duty mesh to create a glove that breathes well during hot weather while still providing basic motorcycle protection. Synthetic suede  at the palm and sides of the glove provide reinforcement against abrasion as well as regular wear and tear. ",
    },
    freeShipping: true,
    stock: {
      stockAvailable: 2,
      sizes: ["Large"],
    },
  },
  {
    productName: {
      longName: "Alpinestars SMX-2 Air Carbon v2 Gloves",
      shortName: "Alpinestars SMX-2 Air",
    },
    productID: 15,
    category: {
      categoryName: "Gloves",
      categoryID: 3,
    },
    productPrice: "90",
    imageUrl:
      "https://www.revzilla.com/product_images/0268/2882/alpinestars_smx2_acv2_glove_black_red_white_750x750.jpg",
    description: {
      shortDescription:
        "The SMX 2 Air Carbon Gloves are a happy marriage of stretch, leather, suede and 3D mesh, all to keep your digits cool and safe in the summer heat",
      longDescription:
        "The Alpinestars SMX 2 Air Carbon Gloves have returned in a refined second iteration with a sleeker aesthetic and streamlined carbon knuckle. The protection has been increased with the addition of various highly-vented TPR inserts including a TPR reinforcement at the wrist closure.\nThe construction is as formidable as ever with full grain leather, suede reinforcements and 3D mesh panels on the backhand. Flexibility and comfort has been improved, however, with the incorporation of ergonomic stretch inserts between the thumb and palm and accordion stretch at the fingers. Finished off with touchscreen compatible fingers, the Alpinestars SMX 2 Air Carbon V2 Gloves are the ultimate lightweight summer street riding gloves.",
    },
    freeShipping: false,
    stock: {
      stockAvailable: 1,
      sizes: ["Small"],
    },
  },
  {
    productName: {
      longName: "Alpinestars GP Plus R Gloves",
      shortName: "Alpinestars GP Plus R",
    },
    productID: 16,
    category: {
      categoryName: "Gloves",
      categoryID: 3,
    },
    productPrice: "160",
    imageUrl:
      "https://www.revzilla.com/product_images/0218/5985/alpinestars_gp_plus_r_gloves_black_white_red_750x750.jpg",
    description: {
      shortDescription:
        "The Alpinestars GP Plus R Gloves are constructed from bovine and goat leather with precurved fingers and both palm and finger sliders",
      longDescription:
        "Benefitting from the research invested in the flagship Supertech Gloves, the Alpinestars GP Plus R Gloves offer many of the same protective features at half the cost. Incorporating the same Dynamic Friction Shield knuckle protection system and patented third and fourth finger bridge, the Alpinestars GP Plus R Gloves use traditional cowhide and goat leather construction rather than exotic leather and synthetic materials that drive up the build cost. For the track day enthusiast or aggressive sport rider looking for a high level of race technology and protection and an incredible value, the Alpinestars GP Plus R Gloves are the perfect choice.",
    },
    freeShipping: true,
    stock: {
      stockAvailable: 8,
      sizes: ["Small", "Medium", "Large", "Extra Large"],
    },
  },
  {
    productName: {
      longName: "Biltwell Moto Gloves",
      shortName: "Biltwell Moto Gloves",
    },
    productID: 17,
    category: {
      categoryName: "Gloves",
      categoryID: 3,
    },
    productPrice: "30",
    imageUrl:
      "https://www.revzilla.com/product_images/0364/7428/biltwell_moto_gloves_750x750.jpg",
    description: {
      shortDescription:
        "Biltwell Moto Gloves add some protection and style to your mitts without drawing unnecessary attention. Finally, comfortable gloves without gimmicks",
      longDescription:
        "The Biltwell Moto Gloves are designed for riding and working on motorcycles—no carbon fiber, no fringes, and no compromises. ",
    },
    freeShipping: true,
    stock: {
      stockAvailable: 12,
      sizes: ["Small", "Medium", "Large"],
    },
  },
];

export default products;
