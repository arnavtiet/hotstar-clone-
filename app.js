const movies = [
  {
    title: "falcon and the winter soldier",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo aperiam velit recusandae accusantium voluptate quibusdam harum debitis et corrupti aspernatur explicabo, quae modi doloribus corporis. Quaerat quibusdam laudantium eius!",
    image: "images/slider 1.PNG",
  },
  {
    title: "LOKI",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo aperiam velit recusandae accusantium voluptate quibusdam harum debitis et corrupti aspernatur explicabo, quae modi doloribus corporis. Quaerat quibusdam laudantium eius!",
    image: "images/slider 2.PNG",
  },
  {
    title: "wanda vision",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo aperiam velit recusandae accusantium voluptate quibusdam harum debitis et corrupti aspernatur explicabo, quae modi doloribus corporis. Quaerat quibusdam laudantium eius!",
    image: "images/slider 3.PNG",
  },
  {
    title: "raya and the last dragon",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo aperiam velit recusandae accusantium voluptate quibusdam harum debitis et corrupti aspernatur explicabo, quae modi doloribus corporis. Quaerat quibusdam laudantium eius!",
    image: "images/slider 4.PNG",
  },
  {
    title: "LUCA",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo aperiam velit recusandae accusantium voluptate quibusdam harum debitis et corrupti aspernatur explicabo, quae modi doloribus corporis. Quaerat quibusdam laudantium eius!",
    image: "images/slider 5.PNG",
  },
];

let carousel = document.querySelector(".carousel");
let slider = [];

let sliderindex = 0;

const createSlider = () => {
  if (sliderindex >= movies.length) {
    sliderindex = 0;
  }

  var slide = document.createElement("div");
  var imgElem = document.createElement("img");
  var content = document.createElement("div");
  var h1 = document.createElement("h1");
  var p = document.createElement("p");

  imgElem.appendChild(document.createTextNode(" "));
  h1.appendChild(document.createTextNode(movies[sliderindex].title));
  p.appendChild(document.createTextNode(movies[sliderindex].des));

  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElem);
  carousel.appendChild(slide);
  console.log(
    movies[sliderindex].title,
    movies[sliderindex].des,
    movies[sliderindex].image
  );
  t.innerHTML = movies[sliderindex].title;
  d.innerHTML = movies[sliderindex].des;
  imgElem.src = movies[sliderindex].image;
  sliderindex++;

  slide.className = "slider";
  content.className = "slider-content";
  h1.className = "movie-title";
  p.className = "movie-desc";

  slider.push(slide);
  if (slider.length) {
    slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${
      30 * (slider.length - 2)
    }px)`;
    //carousel.style.transform = `translateX(${-index * 300}px)`;
    console.log(slider[0].style.marginLeft);
  }
};

for (let i = 0; i < 3; i++) {
  createSlider();
}

setInterval(() => {
  createSlider();
}, 3000);

let Cardcontainer = [...document.querySelectorAll(".card-container")];
let Prebtn = [...document.querySelectorAll(".pre-btn")];
let Nextbtn = [...document.querySelectorAll(".nxt-btn")];

Cardcontainer.forEach((items, i) => {
  let dimensions = items.getBoundingClientRect();
  let width = dimensions.width;

  Nextbtn[i].addEventListener("click", () => {
    items.scrollLeft += width - 200;
  });

  Prebtn[i].addEventListener("click", () => {
    items.scrollLeft -= width + 200;
  });
});
