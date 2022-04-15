import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../components/Card_asli";
import "../Styles/CardCarousel.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 700 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 965, min: 643 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  smalie: {
    breakpoint: { max: 643, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function CardCarousel(props) {
  return (
    <div className="parentcarouel">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition=""
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="cari"
      >

              <div>
                <Card 
                productimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUdFOw0abY4jgt6mF0EGQ_LlNtofJKFLqRA&usqp=CAU"
                rank = "1"
                name = "Iphone 12 Pro"
                buys = "34.5 m"
                review1img = "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                review2img = "https://images.unsplash.com/photo-1568707043650-eb03f2536825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                review3img = "https://images.unsplash.com/photo-1560856218-0da41ac7c66a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    
                reviewsnum = "880.5k"
                recommends = "456.5k"
                review1name = "Riya"
                review2name = "Harshit"
                review3name = "Aditya"
                review1rating = "9.8/10"
                review2rating = "6.5/10"
                review3rating = "9.7/10"
                />
              </div>
              <div>
                <Card 
                productimg = "https://i.guim.co.uk/img/media/5b139b57253fba220fe0f22a7d40e337011d9e38/385_389_4104_2463/master/4104.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d4cfd22b32acd683e38d5d8b6e158290"
                rank = "2"
                name = "One Plus 7 Pro"
                buys = "3.00 m"
                review1img = "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                review2img = "https://images.unsplash.com/photo-1568707043650-eb03f2536825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                review3img = "https://images.unsplash.com/photo-1560856218-0da41ac7c66a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                
                reviewsnum = "880.5k"
                recommends = "456.5k"
                review1name = "Riya"
                review2name = "Harshit"
                review3name = "Aditya"
                review1rating = "9.8/10"
                review2rating = "6.5/10"
                review3rating = "9.7/10"
                />
              </div>
              <div>
                <Card 
                productimg = "https://images.news18.com/ibnlive/uploads/2021/02/1613116333_featured-image-2021-02-12t132127.393.jpg?impolicy=website&width=534&height=356"
                rank = "3"
                name = "Mi 11 Pro"
                buys = "2.00 m"
                review1img = "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                review2img = "https://images.unsplash.com/photo-1568707043650-eb03f2536825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                review3img = "https://images.unsplash.com/photo-1560856218-0da41ac7c66a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                
                reviewsnum = "880.5k"
                recommends = "456.5k"
                review1name = "Riya"
                review2name = "Harshit"
                review3name = "Aditya"
                review1rating = "9.8/10"
                review2rating = "6.5/10"
                review3rating = "9.7/10"                  />
              </div>
              <div>
                <Card 
                productimg = "https://img.etimg.com/thumb/msid-74297179,width-650,imgsize-601513,,resizemode-4,quality-100/sony-xperia-1-ii-is-touted-as-the-worlds-first-smartphone-to-offer-up-to-20fps-af/ae-tracking-burst-shooting-.jpg"
                rank = "4"
                name = "Sony Xperia"
                buys = "1.43 m"
                review1img = "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                review2img = "https://images.unsplash.com/photo-1568707043650-eb03f2536825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                review3img = "https://images.unsplash.com/photo-1560856218-0da41ac7c66a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                
                reviewsnum = "880.5k"
                recommends = "456.5k"
                review1name = "Riya"
                review2name = "Harshit"
                review3name = "Aditya"
                review1rating = "9.8/10"
                review2rating = "6.5/10"
                review3rating = "9.7/10"
                      />
              </div>
              <div>
                <Card 
                productimg = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202101/Screenshot_2021-01-15_at_12.03_2_1200x768.png?_s3Tr6mAtMQqU7hLXzLxaJfuB3u6GHfE&size=770:433"
                rank = "5"
                name = "Samsung S21"
                buys = "54.3 m"
                review1img = "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                review2img = "https://images.unsplash.com/photo-1568707043650-eb03f2536825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                review3img = "https://images.unsplash.com/photo-1560856218-0da41ac7c66a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                reviewsnum = "880.5k"
                recommends = "456.5k"
                review1name = "Riya"
                review2name = "Harshit"
                review3name = "Aditya"
                review1rating = "9.8/10"
                review2rating = "6.5/10"
                review3rating = "9.7/10"
                    />
              </div>
              
            
      </Carousel>
    </div>
  );
}
export default CardCarousel;
