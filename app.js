/**
 * Applikasyonun amaci Manav osmaninin ürünlerini online olarak satmak !
 * 
 * Akis
 * ====
 *  - kullanici html de ki (sol tarafta) istedigi ürnleri üzerine tiklayarak seçer her ürünün yanida fiyati yazacak
 *  - seçtigi ürünler sag tarafa alisveris sepetine ekler 
 *         - (seçilen ürünler==> silme, miktar, tutar, teslimat tarihi bilgilerni) yer alir
 *         - solda ürüne her tiklayista sepette miktarini artirir
 *  - sepetteki miktar ve soldaki ürün fiyati ile carpilir sepetteki tutara ulasilacak (her ürünün toplam fiyati hesaplanacak)
 *  - teslimat tarihini ve saatini secebilecek 
 *  - altta alisveris sepetnin tamamini tutarini hesaplayacak
 * 
 * Program Analiz:
 * =================
 *  - ekran 3 kisim olmali (1. ürün seçenegi Meyve 2. ürün seçenegi sebze 3. kisim da alisveris sepeti)
 *  - her ürün tiklanabilir olmali
 *  - tiklanan ürünler sepete eklenmeli
 *  - sepetteki ürün : bir x isareti ile silinebilir, ürün ismi, ürün miktari + ve - olmali, 
 *          hemen yaninda O ürünün miktari nekadarsa fiyati hesaplanmali,
 *          ve nakliyat tarihi secilebilmeli saati ile
 *  - son olarak sepetin tutari bir alanda yazmali (örnek :input olabilir)
 **/

let dataObj, selectedData, fruitTemplate = "",
    vegetableTemplate = "";
let vegetableBox = document.querySelector("#manavOsmanVegetable");
let fruitBox = document.querySelector("#manavOsmanFruit");
let shoppingListContainer = document.querySelector(".shopping-list-box");
let totalAmountElement = document.querySelector(".total-amount");

dataObj = [{
        itemType: "Sebze",
        products: [{
                name: "Domates",
                icon: "https://image.flaticon.com/icons/svg/135/135702.svg",
                price: 12
            },
            {
                name: "Patlıcan",
                icon: "https://image.flaticon.com/icons/svg/590/590780.svg",
                price: 18
            },
            {
                name: "Soğan",
                icon: "https://image.flaticon.com/icons/svg/680/680940.svg",
                price: 6
            },
            {
                name: "Salatalik",
                icon: "https://image.flaticon.com/icons/svg/765/765528.svg",
                price: 7
            },
            {
                name: "Brokoli",
                icon: "https://image.flaticon.com/icons/svg/2224/2224188.svg",
                price: 16
            },
            {
                name: "Biber",
                icon: "https://image.flaticon.com/icons/svg/766/766024.svg",
                price: 9
            },
            {
                name: "Sarimsak",
                icon: "https://www.flaticon.com/premium-icon/icons/svg/2769/2769690.svg",
                price: 8
            },
            {
                name: "Patates",
                icon: "https://image.flaticon.com/icons/svg/1652/1652077.svg",
                price: 6
            }

        ]
    },
    {
        itemType: "Meyve",
        products: [{
                name: "Elma",
                icon: "https://image.flaticon.com/icons/svg/415/415733.svg",
                price: "13"
            },
            {
                name: "Muz",
                icon: "https://image.flaticon.com/icons/svg/1135/1135549.svg",
                price: 35
            },
            {
                name: "Karpuz",
                icon: "https://image.flaticon.com/icons/svg/135/135739.svg",
                price: 38
            },
            {
                name: "Armut",
                icon: "https://image.flaticon.com/icons/svg/415/415767.svg",
                price: 16
            },
            {
                name: "Kivi",
                icon: "https://image.flaticon.com/icons/svg/765/765538.svg",
                price: 9
            },
            {
                name: "Çilek",
                icon: "https://image.flaticon.com/icons/svg/590/590772.svg",
                price: 11
            },
            {
                name: "Limon",
                icon: "https://image.flaticon.com/icons/svg/1998/1998112.svg",
                price: 14
            },
            {
                name: "Kiraz",
                icon: "https://image.flaticon.com/icons/svg/766/766023.svg",
                price: 34
            }
        ]
    }
]

selectedData = []