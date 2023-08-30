import React from 'react';

const products = [
  {
    name: 'Push',
    image: '../public/Images/pushvideogame.jpg', // Add your image filenames and place them in the public folder
    price: 2000,
    description: 'Description for Game 1',
  },
  {
    name: 'Fortnite',
    image: '../public/Images/fortnite.jpg',
    price: 3000,
    description: 'Description for Game 2',
  },
  {
    name: 'Grand Theft Auto',
    image: '../public/Images/gtaimages.jpg',
    price: 4000,
    description: 'Description for Fan Gear 1',
  },
  {
    name: 'Minecraft',
    image: '../public/Images/minecraft.jpg',
    price: 2500,
    description: 'Description for Fan Gear 2',
  },
  {
    name: 'Skyrim',
    image: '../public/Images/skyrim.jpg',
    price: 3000,
    description: 'Description for Fan Gear 2',
  },
];

function Main() {
  return (
    <main>
      <section>
        <h2>Grand Theft Auto</h2>
        <div className="product-list">
          {products
            .filter((product) => product.name.startsWith('Game'))
            .map((product, index) => (
              <div key={index} className="product">
                <img src="/Images/gtaimages.jpg" alt="Grand theft auto" />
                <h3>Grand Theft Auto</h3>
                <p>Drive dozens of varied vehicles around three of America's toughest cities.Only the best will be able to tame the fastest cars. Only the smartest will know all the shortcuts and the whereabouts of the hottest wheels.</p>
                <p>Price: ${product.price.toFixed(2)}</p>
              </div>
            ))}
        </div>
      </section>

      <section>
        <h2>Push</h2>
        <div className="product-list">
          {products
            .filter((product) => product.name.startsWith('Videogame'))
            .map((product, index) => (
              <div key={index} className="product">
                <img src="Images/pushvideogame.jpg" alt="Push" />
                <h3>Push</h3>
                <p> In this one your job is to push all the buttons in each puzzle in a specific sequence on the 3D surface.</p>
                <p>Price: ${product.price.toFixed(2)}</p>
              </div>
            ))}
        </div>
      </section>
      <section>
        <h2>Skyrim</h2>
        <div className="product-list">
          {products
            .filter((product) => product.name.startsWith('Skyrim'))
            .map((product, index) => (
              <div key={index} className="product">
                <img src="/Images/skyrim.jpg" alt="Skyrim" />
                <h3>Skyrim</h3>
                <p>After escaping execution, the last living Dragonborn must grow in strength and power to defeat the dragons that have once again begun to plague the land of Skyrim.</p>
                <p>Price: ${product.price.toFixed(2)}</p>
              </div>
            ))}
        </div>
      </section>
      <section>
        <h2>Fortnite</h2>
        <div className="product-list">
          {products
            .filter((product) => product.name.startsWith('Fan Gear'))
            .map((product, index) => (
              <div key={index} className="product">
                <img src="/Images/fortnite.jpg" alt="Fortnite" />
                <h3>Fortnite</h3>
                <p>A free multiplayer game where you compete in Battle Royale, collaborate to create your private island in Creative, or quest in Save the World</p>
                <p>Price: ${product.price.toFixed(2)}</p>
              </div>
            ))}
        </div>
      </section>
      <section>
        <h2>Minecraft</h2>
        <div className="product-list">
          {products
            .filter((product) => product.name.startsWith('Fan Gear'))
            .map((product, index) => (
              <div key={index} className="product">
                <img src="/Images/minecraft.jpg" alt="minecraft" />
                <h3>Minecraft</h3>
                <p>Build anything you want with blocks.</p>
                <p>Price: ${product.price.toFixed(2)}</p>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Main;