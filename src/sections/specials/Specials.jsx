import React from 'react'
import FoodCard  from '../../components/food-card/FoodCard'
import './Specials.css'

const Specials = () => {
  const specials = [
    {
      name: "Greek Salad",
      price: "$7.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
      image: require('../../img/greek salad.jpg')
    },
    {
      name: "Bruchetta",
      price: "$6.99",
      description: "Our Bruschetta is made from grilled bread that has been smearede with garlic and seasonede with salt and olive oil",
      image: require('../../img/bruchetta.jpg')
    },
    {
      name: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
      image: require('../../img/lemon dessert.jpg')
    },
    {
      name: "Bolognese",
      price: "$10.40",
      description: "spaghetti with an Italian ragù (meat sauce) made with minced beef, bacon and tomatoes, served with Parmesan cheese",
      image: require('../../img/bolognese.jpg')
    },
    {
      name: "Mushroom Risotto",
      price: "$12.99",
      description: "Indulge in our creamy Arborio rice, slow-cooked to perfection. This luxurious risotto is complemented by a medley of wild mushrooms",
      image:  require('../../img/risotto.jpg')
    },
    {
      name: "Herb Chicken",
      price: "$14.05",
      description: "Savor the flavors of our marinated chicken breast, grilled to juicy perfection and served with a zesty lemon-herb sauce",
      image:  require('../../img/chiken.jpg')
    },
    {
      name: "Spicy Tuna Tartare",
      price: "$9.50",
      description: "Experience a burst of flavor with our Spicy Tuna Tartare, featuring sushi-grade tuna diced and tossed in a spicy sesame-soy dressing",
      image:  require('../../img/tuna.jpg')
    },
    {
      name: "Lava Cake",
      price: "$6.40",
      description: "End your meal on a sweet note with our decadent Chocolate Lava Cake. This warm, rich chocolate cake features a gooey molten center",
      image:  require('../../img/cake.jpg')
    },
  ]

  return (
    <section className='specials-box'>
        <div className='specials-title-box'>
            <div className='title-wrapper-box'>
                <p className='specials-title'>This weeks specials!</p>
            </div>
            <button className='reserve-btn'>Online Menu</button>
        </div>
        <div className='food-card-box'>
          {specials.map((food, index) => {
            return <FoodCard key={index} food={food} />
          })}
        </div>
    </section>
  )
}

export default Specials