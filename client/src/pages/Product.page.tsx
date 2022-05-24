import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Import config
import config from '../config';

// Import interfaces
import { IProduct, IProductResponse } from '../interfaces/store';

// Import components
import ProductImage from '../components/store/ProductImage.comp';
import ProductInfo from '../components/store/ProductInfo.comp';

// Product page
const ProductPage: FC = () => {
    // Initial state of component
    const initialState: IProduct = {
        productId: '',
        name: '',
        description: '',
        imageLink: '',
        price: 0,
        stock: 0
    };
    // Get parameters in route
    const { productId } = useParams<{ productId: string }>();
    // Use useState to store component's state
    const [product, setProduct] = useState<IProduct>(initialState);

    // Interact with server api without infinite loop
    useEffect(() => {
        // Fetch data
        axios.get(`${config.api}/product/get?productId=${productId}`)
            .then((res) => {
                const { id, name, description, image, price, stock } = res.data as IProductResponse;

                // Set product as recieved data
                setProduct({
                    productId: id,
                    name,
                    description,
                    imageLink: image,
                    price,
                    stock
                });
            });
    }, []);

    return (
        <div className="container-fluid" style={{ backgroundColor: '#fff' }}>
            <div className="row" style={{ padding: '11px' }}>
                <ProductImage imageLink={product.imageLink} />
                <ProductInfo
                    productId={product.productId}
                    name={product.name}
                    description={product.description}
                    imageLink={product.imageLink}
                    price={product.price}
                    stock={product.stock}
                />
            </div>
        </div>
    );
}

// Export component
export default ProductPage;
