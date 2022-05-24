import { FC } from 'react';

// Footer function component
const Footer: FC = () => {
    return (
        <div className='row'>
            <footer id='footer' className='text-center text-lg-start'>
                <section
                className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'
                >
                <div className='me-5 d-none d-lg-block fw-bold'>
                    <span>Follow us on social media:</span>
                </div>
                <div>
                    <a href='' className='me-4 text-reset'>
                    <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                    <i className='fab fa-twitter'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                    <i className='fab fa-google'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                    <i className='fab fa-instagram'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                    <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                    <i className='fab fa-github'></i>
                    </a>
                </div>
                </section>

                <section>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                    <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>
                        <i className='fas fa-gem me-3'></i>Yangon Animal Shelter
                        </h6>
                        <p className='text-fotr-s'>
                            The Yangon Animal Shelter is a non-profit organization dedicated to the rescue and care of stray animals.
                        </p>
                    </div>
                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>
                        Useful links
                        </h6>
                        <p>
                        <a href='#!' className='text-fotr-s'>Home</a>
                        </p>
                        <p>
                        <a href='#!' className='text-fotr-s'>Donate</a>
                        </p>
                        <p>
                        <a href='#!' className='text-fotr-s'>ISY</a>
                        </p>
                    </div>
                    <div className='col-md-6 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>
                        Contact
                        </h6>
                        <p className='text-fotr-s'><i className='fas fa-home me-3'></i> KM 7.4 Naypyidaw Highway, Yangon</p>
                        <p className='text-fotr-s'>
                        <i className='fas fa-envelope me-3'></i>yangonanimalshelter@isyedu.org</p>
                    </div>
                    </div>
                </div>
                </section>
                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='#'>International School Yangon</a>
                </div>
            </footer>
        </div>
    )
}

// Export component
export default Footer;
