const challenges = [
  // {
  //   name: "qr-code-component",
  //   link: "https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H",
  //   youtube: "https://www.youtube.com",
  // },
  {
    name: "3-column-preview-card-component",
    link: "https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-",
    youtube: "https://www.youtube.com/watch?v=QhZUUM8DcCo",
  },
  {
    name: "single-price-grid-component",
    link: "https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc",
    youtube: "https://www.youtube.com",
  },
  // {
  //   name: "3-column-preview-card-component",
  //   link: "https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-",
  //   youtube: "https://www.youtube.com",
  // },
  // {
  //   name: "3-column-preview-card-component",
  //   link: "https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-",
  //   youtube: "https://www.youtube.com",
  // },
  // {
  //   name: "3-column-preview-card-component",
  //   link: "https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-",
  //   youtube: "https://www.youtube.com",
  // },
];

const gridContainer = document.querySelector(".grid");

const createGrid = () => {
  challenges.map(({ name, link, youtube }) => {
    const cardElement = document.createElement("li");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
      <a class="card__link" href="/${name}/index.html">
        <img class="card__img" src="/${name}/design/desktop-design.jpg" alt="${name}"/>
      </a>
      
      <p>
        ${name
          .split("-")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")
        }
      </p>

      <div class="links-container">
        <a href="/${name}/index.html" class="blue">
          <i class="fas fa-eye"></i>
        </a>
        <a href="${youtube}" class="youtube">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    `;

    gridContainer.appendChild(cardElement);
  });
};

createGrid();
