import {useFormik,Field} from "formik";
import React from "react";
import Select from "react-select";
import CustomSelect from "./CustomSelect";
export default function AddWardrobeLeft(props){
    const options = [
        { value: 'Casual', label: 'Casual' },
        { value: 'Sport', label: 'Sport' },
        { value: 'Chic', label: 'Chic' },

    ]
    const validate = values => {
        const errors = {}

        if (!values.image) {
            errors.image = 'Please Choose Your Clothes Pictures'
        }
        if (!values.style) {
            errors.style = 'Please Choose Your Clothes style'
        }
        return errors
    }
    const formik = useFormik({

        initialValues: {
            image: '',
            style: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            //history.replace('/home')
        }
})




    return(
        <>
            <div className="soon-content-wrapper">
                <h1 className="soon-title">Add Clothes To Your Wardrobe</h1>
                <div className="coming-countdown countdown-separator"></div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="input-group mb-5">





                        <div className="input-group-append">


                        </div>
                    </div>

                        <CustomSelect
                            className='form-control bg-transparent'
                            onChange={value=>formik.setFieldValue('style',value.value)}
                            value={formik.values.style}
                            name="style"
                            options={options}
                        />

                    <p>  {formik.touched.style && formik.errors.style ? <div className='error'>{formik.errors.style}</div> : null}
                    </p>
                    <br/><br/>
                        <div className="input-group mb-5">

                        <input type="date" className="form-control bg-transparent"
                               placeholder="Date of Purchase"/>


                        <div className="input-group-append">


                        </div>
                    </div>
                    <div className="input-group mb-5">
                        <input type="file"
                               className="form-control bg-transparent"
                               placeholder="App you clothes Pictures"
                               name="image"
                               id="image"
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}

                               onChange={(event) => {
                                   formik.
                                   setFieldValue("image", event.target.files[0]);
                               }}
                        />
                        {formik.touched.image && formik.errors.image ? <div className='error'>{formik.errors.image}</div> : null}


                    </div>

                    <div className="input-group mb-5">
                        <div className="input-group-append">
                            <button className="btn btn-primary btn-rounded" type="submit"disabled={!(formik.isValid && formik.dirty)}><span>Subscribe</span><i
                                className="icon-long-arrow-right"></i></button>
                        </div>
                    </div>
                </form>

            </div>
            </>
    )
}