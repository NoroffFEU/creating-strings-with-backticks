const name = "Mary";
const welcomeMessage = "Welcome to this place";
// const surname = 'Smith';

// const sentence = "Hello " + name + ".\n\n" +
//                  "Welcome to this place" + 
//                  "\n\nThings will be great.";

// console.log(sentence)

// template literals
// const sentence2 = `Hello ${name}

// Welcome to this place.

// Things will be great.
// `;

// console.log(sentence2);

// Hello Mary.

// Welcome to this place


const html = `
    <div>
        <p>Hello ${name}</p>
        <p>${welcomeMessage}</p>
        <p>Things will be great.</p>
    </div>
`;

console.log(html)

const container = document.querySelector(".content");

container.innerHTML = html;

console.log(container);

// <div>
//      <p>Hello Mary</p>
//      <p>Welcome to this place</p>
// </div>