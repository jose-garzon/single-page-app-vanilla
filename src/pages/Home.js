import { getData } from "@utils/getData";

export const Home = async () => {
  const characters = await getData();

  return `
  <div class='Characters'>
    ${characters
      .map(
        (char) =>
          `<article class="Characters-item">
        <a href="#/${char.id}">
          <img src=${char.image} alt="name" />
          <h2>${char.name}</h2>
        </a>
      </article>`
      )
      .join("")}
  </div>
  `;
};
