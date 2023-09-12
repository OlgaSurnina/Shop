let product = {
  nameProduct: `Apple iPhone 13`,
  imageProduct: ["./images/image-1.webp", "./images/image-2.webp", "./images/image-3.webp", "./images/image-4.webp", "./images/image-5.webp"],
  colorProductSelect: `синий`,
  colorProduct: [`red`, `green`, `pink`, `blue`, `white`, `black`],
  memoryGbSelect: 128,
  memoryGb: [`128 Гб`, `256 Гб`, `512 Гб`],
  charDisplay: 6.1,
  charMemoryGb: 128,
  charSistem: `iOS 15`,
  charWiretech: [NFC, Bluetooth, WI - FI],
  charCPU: `Apple A15 Bionic`,
  charHeftGr: 173,
  specification: `Наша самая совершенная система двух камер.
    Особый взгляд на прочность дисплея.
    Чип, с которым всё супербыстро.
    Аккумулятор держится заметно дольше.
    iPhone 13-сильный мира сего.
    
    Мы разработали совершенно новую схему расположения и развернули объективы на 45 градусов. 
    Благодаря этому внутри корпуса поместилась наша лучшая система двух камер с увеличенной матрицей широкоугольной камеры. 
    Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы. 
    И повысили скорость работы матрицы на сверхширокоугольной камере.
    
    Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. 
    Новая широкоугольная камера улавливает на 47% больше света для более качественных фотографий и видео. 
    Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении.
    
    Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещени яфокуса и изменения резкости. 
    Просто начните запись видео. 
    Режим «Киноэффект»будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг него. 
    Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в капоявился в кадре. 
    Теперь ваши видео будут смотреться как настоящее кино.`,
  priceRu: 67990,
  oldpriceRu: 75990,
  discountPerzent: 8,
};

let review1 = {
  name: `Марк Г.`,
  avatar: `./frontendsurnina/images/review-1.jpeg`,
  rating: 5,
  textReview: {
    userExp: `менее месяца`,
    worth: `это мой первый айфон после после огромного количества телефонов на андроиде. 
        всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, 
        ширик тоже на высоте.`,
    fault: `к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) 
        а если нужно переносить фото с компа, то это только через itunes, 
        который урезает качество отографий исходное`,
  },
};
let review2 = {
  name: `Валерий Коваленко`,
  avatar: `./frontendsurnina/images/review-2.jpeg`,
  rating: 4,
  textReview: {
    userExp: `менее месяца`,
    worth: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
    fault: `Плохая ремонтопригодность`,
  },
};
let delivery = [
  {
    name: 'Самовывоз',
    date: 'четверг, 1 сентября',
    cost: 0
  },
  {
    name: 'Курьером',
    date: 'четверг, 1 сентября',
    cost: 0
  }
]
{
  "page": 1,
    "per_page": 6,
      "total": 12,
        "total_pages": 2,
          "data": [
            {
              "id": 1,
              "email": "george.bluth@reqres.in",
              "first_name": "George",
              "last_name": "Bluth",
              "avatar": "https://reqres.in/img/faces/1-image.jpg"
            },
            {
              "id": 2,
              "email": "janet.weaver@reqres.in",
              "first_name": "Janet",
              "last_name": "Weaver",
              "avatar": "https://reqres.in/img/faces/2-image.jpg"
            },
            {
              "id": 3,
              "email": "emma.wong@reqres.in",
              "first_name": "Emma",
              "last_name": "Wong",
              "avatar": "https://reqres.in/img/faces/3-image.jpg"
            },
            {
              "id": 4,
              "email": "eve.holt@reqres.in",
              "first_name": "Eve",
              "last_name": "Holt",
              "avatar": "https://reqres.in/img/faces/4-image.jpg"
            },
            {
              "id": 5,
              "email": "charles.morris@reqres.in",
              "first_name": "Charles",
              "last_name": "Morris",
              "avatar": "https://reqres.in/img/faces/5-image.jpg"
            },
            {
              "id": 6,
              "email": "tracey.ramos@reqres.in",
              "first_name": "Tracey",
              "last_name": "Ramos",
              "avatar": "https://reqres.in/img/faces/6-image.jpg"
            }
          ],
            "support": {
    "url": "https://reqres.in/#support-heading",
      "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
}