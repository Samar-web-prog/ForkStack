import SubHeader from "../Components/SubHeaser";
import Navigation from "../Components/Navigation";
export function ClothesUser(){
    return(
        <div>
            <SubHeader pagename={"All My Clothes"}></SubHeader>

            <div className="container">
                <ul className="nav nav-pills justify-content-center" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="trendy-all-link" data-toggle="tab" href="#trendy-all-tab"
                           role="tab" aria-controls="trendy-all-tab" aria-selected="true"><h3>All Clothes </h3></a>
                    </li>
                    <li>
                        <a href="#addToWardrobe" className="nav-link active">Add To Wardrobe</a>
                    </li>


                </ul>
                <div className="heading heading-center mb-3">
                    <h2 className="title">My wardrobe</h2>
                    <a href="#addToWardrobe">Add To Wardrobe</a>

                    <br/><br/>

                </div>


                <div className="tab-content tab-content-carousel">
                    <div className="tab-pane p-0 fade show active" id="trendy-all-tab" role="tabpanel"
                         aria-labelledby="trendy-all-link">
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                             data-toggle="owl"
                             data-owl-options='{
                                "nav": true,
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="/shop">
                                        <img src="assets/images/demos/demo-5/products/dress3.jpg"
                                             alt="Product image" className="product-image"/>

                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"
                                           title="Add to wishlist"><span>add to my Outfits</span></a>
                                    </div>



                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">

                                    </div>
                                    <h3 className="product-title"><a href="product.html">Dress</a>
                                    </h3>
                                    <div className="product-price">
                                        Casual
                                    </div>


                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-5/products/dress2.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"
                                           title="Add to wishlist"><span>add to My Outifts</span></a>
                                    </div>


                                </figure>
                                <div className="product-body">
                                    <div className="product-cat">

                                    </div>
                                    <h3 className="product-title"><a href="product.html">Dress</a>
                                    </h3>
                                    <div className="product-price">
                                        Sport
                                    </div>


                                </div>


                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-5/products/dress4.jpg"
                                             alt="Product image" className="product-image"/>

                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"
                                           title="Add to wishlist"><span>add to wishlist</span></a>
                                    </div>

                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Dress</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Casual</a>
                                    </h3>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-5/products/robeshop.jpg"
                                             alt="Product image" className="product-image"/>
                                        <img src="assets/images/demos/demo-5/products/dresss1.jpg"
                                             alt="Product image" className="product-image-hover"/>

                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"
                                           title="Add to wishlist"><span>add to wishlist</span></a>
                                    </div>

                                    <div className="product-action product-action-transparent">
                                        <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Handbags</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Bucket bag</a>
                                    </h3>
                                    <div className="product-price">
                                        <div className="product-price">
                                            $17.99
                                        </div>
                                    </div>
                                </div>
                                <div className="product product-2">
                                    <figure className="product-media">
                                        <a href="product.html">

                                            <img src="assets/images/demos/demo-5/products/product-1-2.jpg"
                                                 alt="Product image" className="product-image-hover"/>
                                        </a>



                                        <div className="product-action product-action-transparent">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">





                                    </div>
                                </div>
                            </div>

                        </div>
                        <Navigation></Navigation>

                        <div className="tab-pane p-0 fade" id="trendy-women-tab" role="tabpanel"
                             aria-labelledby="trendy-women-link">
                            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                                 data-toggle="owl"
                                 data-owl-options='{
                                "nav": false,
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'>
                            </div>
                        </div>
                        <div className="tab-pane p-0 fade" id="trendy-men-tab" role="tabpanel"
                             aria-labelledby="trendy-men-link">
                            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                                 data-toggle="owl"
                                 data-owl-options='{
                                "nav": false,
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'>
                            </div>
                        </div>
                        <div className="tab-pane p-0 fade" id="trendy-access-tab" role="tabpanel"
                             aria-labelledby="trendy-access-link">
                            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                                 data-toggle="owl"
                                 data-owl-options='{
                                "nav": false,
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-5"></div>

                <ul className="nav nav-pills justify-content-center" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="trendy-all-link" data-toggle="tab" href="#trendy-all-tab"
                           role="tab" aria-controls="trendy-all-tab" aria-selected="true">Shoes</a>
                    </li>

                </ul>
                <div className="tab-content tab-content-carousel">
                    <div className="tab-pane p-0 fade show active" id="trendy-all-tab" role="tabpanel"
                         aria-labelledby="trendy-all-link">
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                             data-toggle="owl"
                             data-owl-options='{
                                "nav": true,
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="/shop">
                                        <img src="assets/images/demos/demo-5/products/product-12-1.jpg"
                                             alt="Product image" className="product-image"/>

                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"
                                           title="Add to wishlist"><span>add to my Outfits</span></a>
                                    </div>



                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">

                                    </div>
                                    <h3 className="product-title"><a href="product.html">Dress</a>
                                    </h3>
                                    <div className="product-price">
                                        Casual
                                    </div>


                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-5/products/product-3-2.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"
                                           title="Add to wishlist"><span>add to My Outifts</span></a>
                                    </div>


                                </figure>
                                <div className="product-body">
                                    <div className="product-cat">

                                    </div>
                                    <h3 className="product-title"><a href="#">Shoes</a>
                                    </h3>
                                    <div className="product-price">
                                        Casual
                                    </div>


                                </div>


                            </div>



                        </div>

                        <div className="tab-pane p-0 fade" id="trendy-women-tab" role="tabpanel"
                             aria-labelledby="trendy-women-link">
                            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                                 data-toggle="owl"
                                 data-owl-options='{
                                "nav": false,
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'>
                            </div>
                        </div>
                        <div className="tab-pane p-0 fade" id="trendy-men-tab" role="tabpanel"
                             aria-labelledby="trendy-men-link">
                            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                                 data-toggle="owl"
                                 data-owl-options='{
                                "nav": false,
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'>
                            </div>
                        </div>
                        <div className="tab-pane p-0 fade" id="trendy-access-tab" role="tabpanel"
                             aria-labelledby="trendy-access-link">
                            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                                 data-toggle="owl"
                                 data-owl-options='{
                                "nav": false,
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'>
                            </div>
                        </div>
                    </div>
                </div>



















                <div className="mb-2"></div>
                <div className="heading heading-center mb-3">
                    <h2 className="title">Add To My Wordrobe</h2>

                </div>
                <div className="container" id="addToWardrobe">
                    <div className="cta cta-separator mb-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="cta-wrapper cta-text text-center">
                                    <h3 className="cta-title">Owr Suggestions</h3>
                                    <p className="cta-desc">You can choose clothes from owr shop  . </p>




                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-5/products/product-2-1.jpg"
                                                 alt="Product image" className="product-image"/>
                                            <img src="assets/images/demos/demo-5/products/product-2-2.jpg"
                                                 alt="Product image" className="product-image-hover"/>
                                        </a>
                                    </div>
                                </div>


                            <div className="col-lg-6">
                                <div className="cta-wrapper text-center">
                                    <h3 className="cta-title">Get the Latest Deals</h3>
                                    <p className="cta-desc">and <br/>receive <span
                                        className="text-primary">$20 coupon</span> for first shopping
                                    </p>

                                    <form action="#">
                                        <div className="input-group">
                                            <input type="email" className="form-control"
                                                   placeholder="Enter your Email Address" aria-label="Email Adress"
                                                   required/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary btn-rounded" type="submit"><i
                                                    className="icon-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}