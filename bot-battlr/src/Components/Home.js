import React from 'react';

function Home() {
  return (
    <div className="container bg-dark text-light py-5"> 
      <div className="d-flex flex-row align-items-center">
        <div className="p-4">
          <h3 className="font-weight-bold mb-4">Galactic</h3>
          <p className="lead">
            Introducing the Galactic Bot Army, a revolutionary force poised to redefine the landscape of interstellar operations. Crafted with cutting-edge artificial intelligence and state-of-the-art robotics, the Galactic Bot Army represents the pinnacle of technological advancement in the cosmos. These sentient automatons are meticulously designed to execute a myriad of tasks, ranging from planetary exploration and colonization to defensive operations against extraterrestrial threats. Engineered with unparalleled efficiency and adaptability, each bot within the army boasts a unique set of capabilities tailored to meet the diverse challenges of spacefaring civilizations. Whether charting uncharted territories on distant celestial bodies or safeguarding the interests of humanity across the vast expanse of the universe, the Galactic Bot Army stands as a testament to the ingenuity and innovation of sentient beings across galaxies. Join us as we embark on a journey into the cosmos, guided by the relentless determination and unwavering resolve of the Galactic Bot Army.
          </p>
        </div>
        <div className="p-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8eQ3xNKKE7ny_91iuw77MoAS-ZRICi6ibg&usqp=CAU" alt="Galactic Bot Army" style={{ width: "300px", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
