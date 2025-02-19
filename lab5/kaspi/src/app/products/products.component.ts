import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category, Product } from '../../models/product.model';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  selectedCategory: number = 1;

  categories: Category[] = [
    {
      id: 1,
      name: 'Телефоны и гаджеты',
      products: [
        {
          id: 1,
          name: 'Apple iPhone 15 Pro Max 256Gb',
          description: "Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.",
          price: 612113,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h81/had/86319870181406.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h3b/hd4/86319870279710.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h91/h9f/86319870378014.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000',
          likes: 8965,
          category: 'Телефоны и гаджеты'
        },
        {
          id: 2,
          name: 'Samsung Galaxy S24 Ultra 5G 12/256Gb',
          description: 'Смартфон Samsung Galaxy S24 Ultra 5G 12/256Gb серый титан',
          price: 476811,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
          likes: 67789,
          category: 'Телефоны и гаджеты'
        },
        {
          id: 3,
          name: 'Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый',
          description: 'Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.',
          price: 8310,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h93/h72/64377059409950.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h16/h93/64377062064158.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
          likes: 432,
          category: 'Телефоны и гаджеты'
        },
        {
          id: 4,
          name: 'Кабель Apple Lightning (M), USB TypeC (M) белый',
          description: 'Кабель Apple USB Type-C - Lightning длиной 1 м удобен для подключения iPhone, iPad или iPod с разъёмом Lightning к устройствам с портом USB Type-C или Thunderbolt 3 для синхронизации и подзарядки, либо к сетевому адаптеру питания Apple USB Type-C мощностью 18 Вт, 20 Вт, 29 Вт, 30 Вт, 61 Вт, 87 Вт или 96 Вт.',
          price: 1499,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h4b/hd8/87059455311902.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h8d/h64/87059455344670.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h0a/hf3/87059455410206.png?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000',
          likes: 543543,
          category: 'Телефоны и гаджеты'
        },
        {
          id: 5,
          name: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
          description: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
          price: 55607,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h6b/h15/84957845585950.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
          likes: 453543,
          category: 'Телефоны и гаджеты'
        },
      ]
    },
    {
      id: 2,
      name: 'Бытовая техника',
      products: [
        {
          id: 6,
          name: 'Пылесос Deerma DX115C черный',
          description: 'Вертикальный пылесос Deerma DX115C способен в корне изменить ваше представление о сухой уборке и поможет домочадцам полюбить этот процесс.',
          price: 10135,
          rating: 4,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h93/hcf/63791470936094.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h76/h26/80498861146142.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h72/h2c/86525741137950.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/deerma-dx115c-chernyi-3701430/?c=750000000',
          likes: 432432,
          category: 'Бытовая техника'
        },
        {
          id: 7,
          name: 'Стиральная машина LG F2J3NS0W белый',
          description: 'Глубина стиральной машины LG F2J3NS0W всего 44 см, благодаря чему она поместится даже в небольшую ванную комнату. Барабан вмещает 6 кг сухого белья, чего вполне достаточно для семьи из трёх-четырёх человек. Эта модель снабжена инверторным двигателем с прямым приводом, он отличается более длительным сроком службы, чем обычный, так как в его конструкции нет щёток и ремня.',
          price: 161000,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
          likes: 432456,
          category: 'Бытовая техника'
        },
        {
          id: 8,
          name: 'Блендер Slaouwo HB-2075 черный',
          description: 'Блендер Slaouwo HB-2075 черный',
          price: 9954,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000',
          likes: 136634,
          category: 'Бытовая техника'
        },
        {
          id: 9,
          name: 'Пылесос Samsung VCC4520S36/XEV синий',
          description: 'Samsung SC4520 — компактный и удобный пылесос для сухой уборки. Небольшие размеры и малый вес позволяют легко передвигать прибор в процессе наведения порядка в доме. Мощный мотор обеспечивает высокую производительность устройства. Для сбора пыли используется контейнер Twin Chamber ёмкостью 1.3 л, разделённый на две камеры. В процессе работы сильный воздушный вихрь образуется во внутреннем отсеке, создавая эффект циклона. Благодаря специальному наклону контейнера центробежная сила отделяет пыль. Она оседает во внешнем отсеке, а очищенный воздух проходит через систему фильтров. Это конструктивное решение позволяет увеличить полезный объём контейнера и надолго сохранить высокую мощность всасывания. Фильтр HEPA эффективно задерживает частицы пыли, обеспечивая свежесть воздуха. Аллергены, запахи, бактерии — всё это остаётся внутри. Система очистки контейнера очень проста: достаточно вынуть его и высыпать накопившийся мусор. Это займёт немного времени, и вы не запачкаете ни рук, ни одежды. Радиус действия равен 9.2 м, так что при работе вам не придётся постоянно ходить от розетки к розетке. Samsung SC4520 можно хранить и в горизонтальном, и в вертикальном положении, что значительно экономит полезное пространство в помещении.',
          price: 35690,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h92/h53/63761733746718.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/ha5/haf/63761734205470.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h00/h25/63761734795294.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hc0/h18/63761735221278.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000',
          likes: 342,
          category: 'Бытовая техника'
        },
        {
          id: 10,
          name: 'Пароочиститель Smayda WH-QX001 белый',
          description: 'Профессиональный пароочиститель высокого давления для дома и дачи. Ручной пароочиститель имеет компактные габариты, его можно брать с собой в автомобиль для уборки. Пароочиститель высокого давления идеально убирает любые загрязнения. Эффективная очистка грязи, жира, масла под воздействием высокотемпературного пара. Пароочиститель имеет 6 ступеней подачи пара и мощность 3500 Вт, что позволяет ему нагреваться до рабочего состояния за 10 секунд. Его шнур питания имеет длину 1.5 метра, паровой шланг - 2.2 метра. Пароочиститель оснащен эргономичной ручкой, которая не нагревается и удобна в использовании. Он имеет стандартную Евро-вилку, рабочее давление 3 бар, объем резервуара для воды 1200 мл и температуру пара более 105 градусов.',
          price: 15995,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pd9/p85/19829459.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p45/p88/19829460.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pc6/p83/19829461.jpeg?format=gallery-medium',
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/smayda-wh-qx001-belyi-121366248/?c=750000000',
          likes: 321334,
          category: 'Бытовая техника'
        },
      ]
    },
    {
      id: 3,
      name: 'ТВ, Аудио, Видео',
      products: [
        {
          id: 11,
          name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
          description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.',
          price: 66253,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h30/ha4/64362737860638.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
          likes: 31,
          category: 'ТВ, Аудио, Видео'
        },
        {
          id: 12,
          name: 'Наушники HYDRA Minor бежевый',
          description: 'Наушники HYDRA Minor бежевый',
          price: 4990,
          rating: 3,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hf1/ha5/86475584110622.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h9d/h71/86475584176158.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hfe/hef/86475584241694.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/hydra-minor-bezhevyi-120724130/?c=750000000',
          likes: 312321,
          category: 'ТВ, Аудио, Видео'
        },
        {
          id: 13,
          name: 'Умная колонка Яндекс Станция Лайт 2 фиолетовый',
          description: 'Умная колонка Яндекс Станция Лайт 2 фиолетовый',
          price: 30360,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/he2/h2d/86887758069790.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h60/hbc/86887758135326.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
          likes: 312,
          category: 'ТВ, Аудио, Видео'
        },
        {
          id: 14,
          name: 'Наушники OEM P9 серебристый',
          description: 'Наушники OEM P9 серебристый',
          price: 1199,
          rating: 4,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h1f/hb2/84985846661150.jpg?format=gallery-medium',
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000',
          likes: 400,
          category: 'ТВ, Аудио, Видео'
        },
        {
          id: 15,
          name: 'Батарейка AA VARTA 4 шт',
          description: 'VARTA Longlife долговечные батарейки для устройств с постоянным и низким энергопотреблением, таких как пульты дистанционного управления, настенные часы или радиоприемники.',
          price: 1244,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h64/h48/67983672442910.jpg?format=gallery-medium',
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/batareika-aa-varta-4-sht-101171922/?c=750000000',
          likes: 109,
          category: 'ТВ, Аудио, Видео'
        },
      ]
    },
    {
      id: 4,
      name: 'Мебель',
      products: [
        {
          id: 16,
          name: 'Вешалка напольная, izox, металл, 110x150 см, черный',
          description: 'Напольная металлическая вешалка представляет собой прочную и надёжную конструкцию, способную выдерживать значительный вес одежды. Изготовленная из высококачественного металла, стойка для одежды обеспечивает долговечность и стабильность. Благодаря своему дизайну, рейл не только функционален, но и гармонично вписывается в интерьер любого помещения.',
          price: 4289,
          rating: 3,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h4d/h90/83825340743710.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hbf/hd4/83825340940318.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=750000000',
          likes: 31432,
          category: 'Мебель'
        },
        {
          id: 17,
          name: 'Стул C06, 80x46x40 см, белый',
          description: 'Благодаря сочетанию пластика с металлом и деревом изделие органично вписывается практически в любую среду, делая обстановку более естественной и «живой». Еще одно достоинство модели – удобная для обеденного стола высота',
          price: 4992,
          rating: 4,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p6c/p2b/3187775.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p50/p2b/3187776.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
          likes: 312321,
          category: 'Мебель'
        },
        {
          id: 18,
          name: 'Morbido диван прямой Комфорт, обивка микровелюр, 80х210х80 см, серый',
          description: 'Практичный  диван-кровать с легкой системой трансформации. Каркас изготовлен из ДСП, деревянный брус. Мягкие элементы выполнены из пенополиуретана. Диван оснащен механизмом трансформации еврокнижка (поднять сидение в верх, подтянуть на себя, спинка подает вперед) такой механизм позволяет легко раскладывать и складывать диван без особых усилий. Благодаря своей универсальности и функциональности, он является идеальным решением для тех, кто ищет удобную и практичную мебель для своего дома.',
          price: 54726,
          rating: 4,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/ha6/h5b/86777038307358.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/he2/h45/86777038340126.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000',
          likes: 312,
          category: 'Мебель'
        },
        {
          id: 19,
          name: 'Стул Чили, 86x45x37 см, обивка серый велюр',
          description: 'Стул Чили, 86x45x37 см, обивка серый велюр',
          price: 11870,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/hcf/h3b/85982139088926.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h22/h5d/85982139121694.jpg?format=gallery-medium',
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/stul-chili-86x45x37-sm-obivka-seryi-veljur-109319431/?c=750000000',
          likes: 403,
          category: 'Мебель'
        },
        {
          id: 20,
          name: 'Стол письменный с надстройкой 40x114x140 см, stolpis002',
          description: 'Идеальный вариант для организации рабочего или учебного места – это компьютерный стол стеллаж из гладкого белого ЛДСП. Стол имеет компактные размеры и не занимает много места в пространстве. Но при этом выдерживает большую нагрузку. Стол компьютерный белый имеет открытые полки, на которых можно разместить офисные принадлежности, книги, канцелярию, папки с документами, рамки для фото. Допустимая нагрузка на полки до 15 кг. Главным преимуществом стола является его универсальный белый цвет. Благодаря белому цвету компьютерный стол стеллаж можно разместить в любой комнате: гостиной, детской комнате, на балконе, в спальне. По ширине компьютерный стол стеллаж не занимает много места. Поэтому его смело можно использовать для организации рабочего пространства на балконе или в маленьких комнатах. Изготовлен стол для компьютера из безопасного ЛДСП толщиной 16 мм, класс безопасности Е1.',
          price: 14438,
          rating: 5,
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h82/h95/85993320710174.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h74/h38/85993320742942.jpg?format=gallery-medium'
          ],
          kaspiLink: 'https://kaspi.kz/shop/p/stol-pis-mennyi-s-nadstroikoi-40x114x140-sm-stolpis002-106541589/?c=750000000',
          likes: 109,
          category: 'Мебель'
        },
      ]
    },
  ]

  selectCategory(categoryId: number) {
    this.selectedCategory = categoryId;
  }

  getSelectedCategoryProducts(): Product[] {
    const category = this.categories.find(c => c.id === this.selectedCategory);
    return category ? category.products : [];
  }

  onLike(productId: number) {
    this.categories.forEach(category => {
      const product = category.products.find(p => p.id === productId);
      if (product) {
        product.likes++;
      }
    });
  }

  onRemove(productId: number) {
    this.categories.forEach(category => {
      category.products = category.products.filter(p => p.id !== productId);
    });
  }
}
