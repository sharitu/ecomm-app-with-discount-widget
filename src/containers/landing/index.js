import Button from "../../components/button";
import ProductList from "../../components/product-list";

export default function Landing () {
  return (<>
    <section className="bg-[url('./static/images/keyboard-near-smartphone-plants-cup-drink_23-2148040523.jpeg')] w-full min-h-[calc(100vh-84px)] bg-fixed bg-center bg-cover bg-no-repeat flex justify-end items-center p-6">
      <div className="w-full text-center md:text-left md:w-3/6 md:pr-40">
        <h1 className="font-bold text-4xl md:text-6xl 2xl:text-8xl text-gray-800">Future Start From here</h1>
        <p className="font-light mt-8 2xl:mt-16 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat leo at ornare ornare. Aliquam ornare convallis fermentum.</p>
        <Button 
          className="mt-12"
          onClick={() => {alert("Let's go!!!")}}
        >Get Started</Button>
      </div>
    </section>
    <section className="w-full min-h-screen flex justify-end items-center p-6 md:pb-24 md:px-24">
      <div className="w-full text-center flex flex-col items-center">
        <h2 className="font-bold text-2xl md:text-4xl mt-16 text-gray-800">New Release</h2>
        <p className="font-light mt-8 text-gray-800 w-3/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat leo at ornare ornare. Aliquam ornare convallis fermentum.</p>
        <ProductList />
      </div>
    </section>
    <section className="w-full flex justify-end items-center p-6 md:pb-24 md:px-24">
      <div className="bg-[url('./static/images/laptop-camera-accessories-white-background-with-copy-space_23-2147924097.jpeg')] w-full h-72 md:h-96 bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl md:text-4xl mt-16 text-gray-800">Explore your Universe</h2>
        <Button 
          className="mt-8"
          onClick={() => {alert("Let's go!!!")}}
        >Explore</Button>
      </div>
    </section>
  </>)
}