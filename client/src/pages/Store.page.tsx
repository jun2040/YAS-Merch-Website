import axios from 'axios';
import { FC, useEffect, useState } from 'react';

// Import config
import config from '../config';

// Import interfaces
import { IProduct, IProductResponse } from '../interfaces/store';

// Import components
import Footer from '../components/global/Footer.comp';
import Sidebar from '../components/store/Sidebar.comp';
import ProductCard from '../components/store/ProductCard.comp';

// Store page function componennt
const StorePage: FC = () => {
    const [ products, setProducts ] = useState<IProduct[]>([]);
    
    useEffect(() => {
        axios.get(`${config.api}/product/get`)
            .then((res) => {
                setProducts(res.data.map((product: IProductResponse) => {
                    const { id, name, image, price, stock } = product;
                    
                    return {
                        productId: id,
                        name,
                        imageLink: image,
                        price,
                        stock
                    }
                }));
            });
    }, []);
    
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="main col">
                        {
                            products && (
                                products.map(product => (
                                    <ProductCard
                                        key={product.productId}
                                        productId={ product.productId }
                                        name={ product.name }
                                        description={ product.description }
                                        imageLink={ product.imageLink }
                                        price={ product.price }
                                        stock={ product.stock }
                                    />
                                ))
                            )
                        }
                        
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

//Export component
export default StorePage;
