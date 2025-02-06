let pizzi = [
    {
      name: "Margherita",
      preis: 10.99,
      ingredients: ["Tomatensauce", "Mozzarella", "Basilikum", "Olivenöl"],
      info: "Ein zeitloser Klassiker mit knusprigem Teig, reichhaltiger Tomatensauce, frischem Mozzarella und duftendem Basilikum. Diese Pizza verkörpert Einfachheit und Authentizität, bietet eine perfekte Geschmacksbalance und ist ideal für Liebhaber der traditionellen italienischen Küche.",
      picture: "margherita.jpg"
    },
    {
      name: "Pepperoni",
      preis: 12.99,
      ingredients: ["Tomatensauce", "Mozzarella", "Pepperoni"],
      info: "Eine beliebte Pizza mit großzügigen, würzigen Pepperoni-Scheiben, die im Ofen knusprig werden. Zusammen mit einer reichhaltigen Tomatensauce und geschmolzenem Mozzarella ist jeder Bissen voller Geschmack.",
      picture: "pepperoni.jpg"
    },
    {
      name: "BBQ-Hähnchen",
      preis: 13.99,
      ingredients: ["BBQ-Sauce", "Gegrilltes Hähnchen", "Rote Zwiebeln", "Mozzarella", "Koriander"],
      info: "Diese rauchige und süße Pizza enthält zartes gegrilltes Hähnchen in würziger Barbecue-Sauce, ergänzt durch karamellisierte rote Zwiebeln und geschmolzenen Mozzarella. Ein Hauch von frischem Koriander sorgt für eine erfrischende Note.",
      picture: "bbq-haehnchen.jpg"
    },
    {
      name: "Vegetariana",
      preis: 11.99,
      ingredients: ["Tomatensauce", "Mozzarella", "Paprika", "Champignons", "Schwarze Oliven", "Rote Zwiebeln"],
      info: "Eine bunte, gemüsereiche Pizza voller frischer Aromen. Knackige Paprika, herzhafte Champignons, schwarze Oliven und rote Zwiebeln bilden eine perfekte Kombination, verstärkt durch klassische Tomatensauce und geschmolzenen Mozzarella.",
      picture: "vegetariana.jpg"
    },
    {
      name: "Hüttenzauber",
      preis: 14.99,
      ingredients: ["Tomatensauce", "Mozzarella", "Pepperoni", "Wurst", "Speck", "Schinken"],
      info: "Ein herzhaftes Fest voller kräftiger Aromen: Diese Pizza ist reichlich belegt mit rauchigem Speck, würziger Wurst, pikanter Pepperoni und saftigem Schinken. Die Kombination dieser Fleischsorten harmoniert perfekt mit einer reichhaltigen Tomatensauce und geschmolzenem Mozzarella.",
      picture: "huettenzauber.jpg"
    },
    {
      name: "Trüffel-Champignon",
      preis: 15.99,
      ingredients: ["Weiße Sauce", "Mozzarella", "Champignons", "Trüffelöl", "Parmesan"],
      info: "Eine edle Pizza mit cremiger weißer Sauce, erdigen Champignons und aromatischem Trüffelöl. Belegt mit einer Mischung aus Mozzarella und Parmesan bietet jeder Bissen ein reichhaltiges, luxuriöses Geschmackserlebnis.",
      picture: "trueffel-champignon.jpg"
    }
  ];

  let allCartPizzi = [
    {
      name: "Margherita",
      preis: 1099,
      ingredients: ["Tomatensauce", "Mozzarella", "Basilikum", "Olivenöl"],
      info: "Ein zeitloser Klassiker mit knusprigem Teig, reichhaltiger Tomatensauce, frischem Mozzarella und duftendem Basilikum. Diese Pizza verkörpert Einfachheit und Authentizität, bietet eine perfekte Geschmacksbalance und ist ideal für Liebhaber der traditionellen italienischen Küche.",
      picture: "margherita.jpg",
      amount: 0,
      totalPreis: function(amount, preis){
        return this.amount * this.preis;
      }
    },
    {
      name: "Pepperoni",
      preis: 1299,
      ingredients: ["Tomatensauce", "Mozzarella", "Pepperoni"],
      info: "Eine beliebte Pizza mit großzügigen, würzigen Pepperoni-Scheiben, die im Ofen knusprig werden. Zusammen mit einer reichhaltigen Tomatensauce und geschmolzenem Mozzarella ist jeder Bissen voller Geschmack.",
      picture: "pepperoni.jpg",
      amount: 0,
      totalPreis: function(){
        return this.amount * this.preis;
      }
    },
    {
      name: "BBQ-Hähnchen",
      preis: 1399,
      ingredients: ["BBQ-Sauce", "Gegrilltes Hähnchen", "Rote Zwiebeln", "Mozzarella", "Koriander"],
      info: "Diese rauchige und süße Pizza enthält zartes gegrilltes Hähnchen in würziger Barbecue-Sauce, ergänzt durch karamellisierte rote Zwiebeln und geschmolzenen Mozzarella. Ein Hauch von frischem Koriander sorgt für eine erfrischende Note.",
      picture: "bbq-haehnchen.jpg",
      amount: 0,
      totalPreis: function(amount, preis){
        return this.amount * this.preis;
      }
    },
    {
      name: "Vegetariana",
      preis: 1199,
      ingredients: ["Tomatensauce", "Mozzarella", "Paprika", "Champignons", "Schwarze Oliven", "Rote Zwiebeln"],
      info: "Eine bunte, gemüsereiche Pizza voller frischer Aromen. Knackige Paprika, herzhafte Champignons, schwarze Oliven und rote Zwiebeln bilden eine perfekte Kombination, verstärkt durch klassische Tomatensauce und geschmolzenen Mozzarella.",
      picture: "vegetariana.jpg",
      amount: 0,
      totalPreis: function(amount, preis){
        return this.amount * this.preis;
      }
    },
    {
      name: "Hüttenzauber",
      preis: 1499,
      ingredients: ["Tomatensauce", "Mozzarella", "Pepperoni", "Wurst", "Speck", "Schinken"],
      info: "Ein herzhaftes Fest voller kräftiger Aromen: Diese Pizza ist reichlich belegt mit rauchigem Speck, würziger Wurst, pikanter Pepperoni und saftigem Schinken. Die Kombination dieser Fleischsorten harmoniert perfekt mit einer reichhaltigen Tomatensauce und geschmolzenem Mozzarella.",
      picture: "huettenzauber.jpg",
      amount: 0,
      totalPreis: function(amount, preis){
        return this.amount * this.preis;
      }
    },
    {
      name: "Trüffel-Champignon",
      preis: 1599,
      ingredients: ["Weiße Sauce", "Mozzarella", "Champignons", "Trüffelöl", "Parmesan"],
      info: "Eine edle Pizza mit cremiger weißer Sauce, erdigen Champignons und aromatischem Trüffelöl. Belegt mit einer Mischung aus Mozzarella und Parmesan bietet jeder Bissen ein reichhaltiges, luxuriöses Geschmackserlebnis.",
      picture: "trueffel-champignon.jpg",
      amount: 0,
      totalPreis: function(amount, preis){
        return this.amount * this.preis;
      }
    }
  ];
