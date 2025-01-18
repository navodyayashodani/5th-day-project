import ProductCards from "./ProductCards";
import { Separator } from "@/components/ui/separator";
import Tab from "./Tab";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { getProducts } from "./lib/api";


function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({isError: false, message: ""});

  const categories = [
    { _id: "ALL", name: "All" },
    { _id: "1", name: "Headphones" },
    { _id: "2", name: "Earbuds" },
    { _id: "3", name: "Speakers" },
    { _id: "4", name: "Mobile Phones" },
    { _id: "5", name: "Smart Watches" },
  ];

  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");
  const filteredProducts =
    selectedCategoryId === "ALL"
      ? products
      : products.filter((product) => product.categoryId === selectedCategoryId);

    const handleTabClick = (_id) => {
        setSelectedCategoryId(_id)
    }

    useEffect(()=> {
      //console.log("useEffect")
      getProducts().then((data) => {
        setProducts(data);
      }).catch((error) => {
        //console.log(error);
        setError({isError:true, message: error.message});
      }).finally(()=> isLoading(false));
    }, []);

    if(isLoading){
      return (
        <section className="px-8 py-8">
          <h2 className="text-4xl font-bold">Our Top Products</h2>
          <div>
            <Button onClick={() => getProducts()}>GET Products</Button>
          </div>
          <Separator className="mt-2" />
          <div className="mt-4 flex items-center gap-4">
            {categories.map((category) => (
              <Tab
                key={category._id}  
                _id={category._id}
                selectedCategoryId={selectedCategoryId}
                name={category.name}
                onTabClick={handleTabClick}
              />
            ))}
          </div>
          <div>
            <p>Loading...</p>
          </div>
        </section>
      );
    }

    

  return (
    <section className="px-8 py-8">
      <h2 className="text-4xl font-bold">Our Top Products</h2>
      <div>
        <Button onClick={() => getProducts()}>GET Products</Button>
      </div>
      <Separator className="mt-2" />
      <div className="mt-4 flex items-center gap-4">
        {categories.map((category) => (
          <Tab
            key={category._id}  
            _id={category._id}
            selectedCategoryId={selectedCategoryId}
            name={category.name}
            onTabClick={handleTabClick}
          />
        ))}
      </div>
      <ProductCards products={filteredProducts} />
    </section>
  );
}

export default Products;