import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../interfaces/store';

// Initialize form data interface
interface FormData {
    productId: string;
    color: string;
    size: string;
    quantity: number;
    email: string;
}

// Product info function component
const ProductInfo: FC<IProduct> = ({ productId, name, description, imageLink, price, stock }) => {
    // Initialize initial state
    const initialState: FormData = {
        productId: '',
        color: 'black',
        size: 'medium',
        quantity: 1,
        email: ''
    }
    // Use useState hook to store form data
    const [formData, setFormData] = useState<FormData>(initialState);

    // Title section
    const Title = (
        <>
            <div className='product_name'>{ name }</div>
            <div> <span className='product_price'>{price} Ks</span> <span className='product_status'>Status:</span></div>
        </>
    );

    // Description section
    const Description = (
        <p className='product_info'>{ description }</p>
    );

    // Color options section --> not implemented
    const ColorOptions = (
        <div className='col-xs-3' style={{ marginLeft: '15px' }}>
            <span className='product_options'>Color Options</span><br />
            <button className='btn-sm btn_circle'>X</button>
            <button className='btn-sm btn_circle'>X</button>
            <button className='btn-sm btn_circle'>X</button>
        </div>
    );

    // Size options section --> not implemented
    const SizeOptions = (
        <div className='col-xs-3' style={{ marginLeft: '15px' }}>
            <span className='product_options'>Size Options</span><br />
            <button className='btn btn-sm'>X</button>
            <button className='btn btn-sm'>X</button>
        </div>
    );

    // Form section --> not implemented
    const Form = (
        <div className='col-xs-3' style={{ marginLeft: '13px' }}>
            <div className='product_quantity'>
                <span>QTY: </span>
                <input
                    id='quantity_input'
                    type='text'
                    pattern='[0-9]*'
                    value='12'
                />
                <div className='quantity_buttons'>
                    <div id='quantity_inc_button' className='quantity_inc quantity_control'>
                        <i className='fas fa-chevron-up'></i>
                    </div>
                    <div id='quantity_dec_button' className='quantity_dec quantity_control'>
                        <i className='fas fa-chevron-down'></i>
                    </div>
                </div>
            </div>
            <div>
                <span>Email: </span>
                <input id='quantity_input' type='email' value='' />
            </div>
            <button type='button' className='btn shop-button'>Buy Now</button>
        </div>
    );

    // Return JSX
    return (
        <>
            <div className='col-lg-6 order-3' style={{ backgroundColor: '#f4eec2' }}>
                <div className='product_description'>
                    { Title }
                    <hr className='singleline' />
                    { Description }
                    <div>
                        {/* <div className='row'>
                            <div className='col-md-5'></div>
                            <div className='col-md-7'></div>
                        </div> */}
                        <div className='row' style={{ marginTop: '15px' }}>
                            { ColorOptions }
                            { SizeOptions }
                        </div>
                    </div>
                    <hr className='singleline' />
                    {/* <div className='order_info d-flex flex-row'>
                        <form action='#'>
                    </div> */}
                    <div className='row'>
                        { Form }
                    </div>
                </div>
            </div>
        </>
    );
}


// Export component
export default ProductInfo;
