export const getProducts = async () => {
    const res = await fetch("http://localhost:8000/api/products", {
      method: "GET",
      headers: {
        "content-Type": "application.json",
      },
    });
    const data = await res.json();
    return data;

    /*data
      .then((res)=>{
        return res.json();
      })
      .then((res) => console.log(res))
      .catch((err)=> console.log(err));*/

      
      /*try {
        const res = await fetch ("http://localhost:3000/api/products", {
          method: "GET",
          headers: {
            "content-Type": "application.json",
          },
        });
        const data = await res.json();
        //console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }*/
  };

  [
    {
      categoryId: "1",
      image: "/assets/products/airpods-max.png",
      _id: "1",
      name: "AirPods Max",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/products/echo-dot.png",
      _id: "2",
      name: "Echo Dot",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "2",
      image: "/assets/products/pixel-buds.png",
      _id: "3",
      name: "Galaxy Pixel Buds",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "1",
      image: "/assets/products/quietcomfort.png",
      _id: "4",
      name: "QuiteComfort",
      price: "249.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/products/soundlink.png",
      _id: "5",
      name: "Bose SoundLink",
      price: "119.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "5",
      image: "/assets/products/apple-watch.png",
      _id: "6",
      name: "Apple Watch 9",
      price: "699.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/products/iphone-15.png",
      _id: "7",
      name: "Apple Iphone 15",
      price: "1299.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/products/pixel-8.png",
      _id: "8",
      name: "Galaxy Pixel 8",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
  ];