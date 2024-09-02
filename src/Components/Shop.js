import React, { useEffect ,useState} from 'react'

export const Shop = ({cart,setCart}) => {
    const [products,setProducts] = useState([]);
    useEffect((e) =>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=>setProducts(res))
        
    },[]);
    const truncateTitle = (title, maxLength) => {
        const ti = title.length>25? title.slice(0,25):title; 
        const words = ti.split(/\s+/).filter((word) =>word.length>0);
        return words.length  > maxLength ? words.slice(0, maxLength).join(' ') : title;
    };

    function cartBtn(data){
        setCart(prev => [...prev,data]);

    }

  
  return (
    <>
            
                <div className='col-12 main '>
                    <div className='row'>
                         {products && products.map((product) => (
                            <div className='col-sm-6 col-xs-12 col-md-4 col-lg-4 col-xl-4' key={product.id}>
                                <div class="card" >
                                    <img src={product.image} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text" max-character = "10"> {truncateTitle(product.title, 2)}</p>
                                        <span className='rate'>
                                            <p>${product.price}</p>
                                            <p><button className="btn btn-primary" onClick={() =>cartBtn(product)}>Add to Cart</button></p>    
                                        </span>
                                    </div>
                               
                                    </div>
                            </div>
                        
                            ))}

                    </div>
                </div>
        </>
  );

}

