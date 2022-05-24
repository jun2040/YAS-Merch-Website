import { FC } from 'react';

// Initialize interface for props
interface Props {
    imageLink: string;
}

// Product image function component
const ProductImage: FC<Props> = ({ imageLink }) => {
    return (
        <>
            <div className="col-lg-5 order-lg-2 order-1">
                <div className="image_selected"><img src={imageLink} alt="product image x" /></div>
            </div>
        </>
    );
}

// Export component
export default ProductImage;
