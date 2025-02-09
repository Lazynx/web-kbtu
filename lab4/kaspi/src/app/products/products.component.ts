import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Корм Darling кусочки в соусе говядина 75 г 1 шт',
      description: 'Корм Дарлинг для кошек - это сбалансированное питание, в котором содержится на 100% всё, что нужно кошке каждый день. Он сделан с любовью из качественных ингредиентов, а также содержит витамины и минералы, необходимые Вашей кошке, чтобы быть здоровой, активной и дарить радость Вашей семье. Без красителей и без добавления искусственных ароматизаторов и консервантов.Состав: мясо и мясные ингредиенты (включая говядину), злаки, аминокислоты, загустители, минеральные вещества, сахара, витамины.',
      price: 130,
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h18/84798257594398.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa2/p43/18569902.PNG?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/p43/18569900.PNG?format=gallery-medium'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/darling-kusochki-v-souse-govjadina-75-g-1-sht-110583732/?c=750000000'
    },
    {
      id: 2,
      name: 'Набережные челны туалетная бумага 2-слойный 1 шт, полиэстер',
      description: 'Туалетная бумага однослойная без втулки. Бумага серого цвета, плотная, мягкая. Используется в гигиенических целях. Состав: 100% целлюлоза.',
      price: 146,
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/h75/64532316323870.jpg?format=gallery-medium',
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/naberezhnye-chelny-tualetnaja-bumaga-2-sloinyi-1-sht-poliester-104923161/?c=750000000'
    },
    {
      id: 3, 
      name: 'Той Дәмі cендвич-круассан с курицей 190 г',
      description: 'Описание Той Дәмі cендвич-круассан с курицей 190 г',
      price: 650,
      rating: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1f/pda/19269239.png?format=gallery-medium',
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/toi-d-m-cendvich-kruassan-s-kuritsei-190-g-133160919/?c=750000000'
    },
    {
      id: 4,
      name: 'Apple iPhone 15 Pro Max 256Gb',
      description: "Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.",
      price: 612113,
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h81/had/86319870181406.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/hd4/86319870279710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h9f/86319870378014.jpg?format=gallery-medium'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000'
    },
    {
      id: 5,
      name: 'Samsung Galaxy S24 Ultra 5G 12/256Gb',
      description: 'Смартфон Samsung Galaxy S24 Ultra 5G 12/256Gb серый титан',
      price: 476811,
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
    },
    {
      id: 6,
      name: 'Трусики Мама Знает XL, 44 шт',
      description: 'Инновационные решения в области детской гигиены. Воздушные каналы материала улучшают его воздухопроницаемость, препятствую появлению опрелостей. Ультра тонкие и дышащие. Тончайшие нановолокна не вызывают покраснений и раздражений, за счёт отсутствия трения о кожу малыша. 12 часов сухости. Малыш не беспокоиться о влажности. Отлично подходят для активных детей, не препятствуют их передвижению. Впитывание 40 секунд. Быстрое впитывание влаги за счет технологического решение. Тончайший слой из нановолокон поглощает влагу и равномерно распределяет ее по всей поверхности, не образовывая гелевые комки. За счёт чего, впитывающая способность подгузников увеличивается.',
      price: 6599,
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h47/64350059528222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h80/64350062870558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h07/h68/64350064214046.jpg?format=gallery-medium'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/trusiki-mama-znaet-xl-44-sht-102501636/?c=750000000'
    },
    {
      id: 7,
      name: 'Пылесос Deerma DX115C черный',
      description: 'Вертикальный пылесос Deerma DX115C способен в корне изменить ваше представление о сухой уборке и поможет домочадцам полюбить этот процесс.',
      price: 10135,
      rating: 4,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h93/hcf/63791470936094.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h26/80498861146142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h72/h2c/86525741137950.jpg?format=gallery-medium'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/deerma-dx115c-chernyi-3701430/?c=750000000'
    },
    {
      id: 8,
      name: 'Увлажнитель воздуха Maxmoll H2O Humid-300 белый',
      description: 'Ультразвуковой настольный увлажнитель воздуха с заправочной емкостью для воды в объеме 300 мл. Корпус прибора выполнен из ABS пластика черного цвета. Корпус прибора и внутренняя емкость легко моются и дезинфицируются с помощью бытовых моющих средств. Увлажнитель питается от порта USB, номинальный потребляемый ток 250 – 350 мА. Прибор оборудован таймером на 4 или 6 часов работы.',
      price: 1197,
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/hc4/64156819783710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h79/64156855107614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/h4e/64156857008158.jpg?format=gallery-medium'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-humid-300-belyi-102027263/?c=750000000'
    },
    {
      id: 9,
      name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
      description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.',
      price: 66253,
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h30/ha4/64362737860638.jpg?format=gallery-medium'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'
    },
    {
      id: 10,
      name: 'Стул C06, 80x46x40 см, белый',
      description: 'Благодаря сочетанию пластика с металлом и деревом изделие органично вписывается практически в любую среду, делая обстановку более естественной и «живой». Еще одно достоинство модели – удобная для обеденного стола высота.',
      price: 4999,
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/p2b/3187773.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6c/p2b/3187775.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/p2b/3187776.jpg?format=gallery-medium'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000'
    },
    {
      id: 11,
      name: 'Игровой контроллер Sony Dualshock 4 v2 черный',
      description: 'Новый беспроводной контроллер DUALSHOCK 4 для Playstation 4. Благодаря измененной сенсорной панели с индикатором цвета вашей световой панели, этот стильный матовый контроллер подарит вам самые удобные и интуитивно понятные способы игры. Насладитесь еще более точным управлением благодаря встроенной сенсорной панели, на которой отображается цвет вашей световой панели.',
      price: 4782,
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h18/63780476616734.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h16/hd5/63780476977182.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h83/63780477272094.jpg?format=gallery-medium'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/sony-dualshock-4-v2-chernyi-13000002/?c=750000000'
    },
    {
      id: 12,
      name: 'Майка Elitex белый',
      description: 'Майка Elitex белый',
      price: 1111111,
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p83/p78/21434176.png?format=gallery-medium',
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/maika-elitex-750073-belyi-s-133763105/?c=750000000'
    }
  ];

  shareOnWhatsapp(product: Product) {
    const text = `Check out this product: ${product.name} - ${product.kaspiLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareOnTelegram(product: Product) {
    const text = `Check out this product: ${product.name} - ${product.kaspiLink}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(product.kaspiLink)}&text=${encodeURIComponent(text)}`, '_blank');
  }
}
