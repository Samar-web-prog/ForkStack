import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import {useFormik} from "formik";
import CustomSelect from "../Components/CustomSelect";
import queryApi from "../utils/queryApi";
export default function Informations(props){
    const [showLoader, setShowLoader] = useState(false);

    const [error, setError] = useState({ visible: false, message: "" });
    const history=useHistory();
    const sex = [
        { value: 'women', label: 'Women' },
        { value: 'men', label: 'Men' },

    ]
    const status = [
        { value: 'engagged', label: 'Engagged' },
        { value: 'single', label: 'Single' },
        { value: 'married', label: 'Married' },


    ]
    const validate = values => {
        const errors = {}
        if (!values.FirstName) {
            errors.FirstName = 'Please Set Your First '
        }
        if (!values.LastName) {
            errors.LastName = 'Please Set Your Last Name'
        }
        if (!values.sex) {
            errors.sex = 'Please Choose your sex '
        }
        if (!values.birthDate) {
            errors.birthDate = 'Please Choose your birthDate '
        }

        else if (values.birthDate.year >=new Date().getFullYear()) {
            errors.birthDate = 'This date is not valid '
        }
        if (!values.height) {
            errors.height = 'Please Choose your birthDate '
        }

    }
//To set Configure

    const formik = useFormik({
        initialValues: {
            sex: '',
            status: '',
            birthDate:Date,
            height:1,
            weight:0,
            FirstName: '',
            LastName: '',
        },
        validate,
        onSubmit: async(values )=> {
            console.log(values);
            const [res, err] = await queryApi("updateUser/",{
                sex:values.sex,
                image:values.image,
                height:values.height,
                weight:values.weight,
                status:values.status,
            }, "PUT", true);
            console.log(values);

            if (err) {
                console.log(err);
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            }
            else {
                history.push("/preferences");

            }
        }
    })
    return (
        <>
            <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
                 style={{backgroundImage:'url(https://portotheme.com/html/molla/assets/images/backgrounds/login-bg.jpg)'}}>
                <div className="container">
                    <div className="form-box">
                        <div className="form-tab">
                            <ul className="nav nav-pills nav-fill" role="tablist">

                                <li className="nav-item">
                                    <a className="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2"
                                       role="tab" aria-controls="register-2" aria-selected="true">Other Informations</a>
                                </li>

                            </ul>





                            <div className="tab-pane fade show active" id="register-2" role="tabpanel"
                                 aria-labelledby="register-tab-2">
                                <form action="#" className="contact-form mb-3" onSubmit={formik.handleSubmit}>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input type="text"
                                                   className="form-control"
                                                   id="firstName"
                                                   name="FirstName"
                                                   placeholder="First Name *"
                                                   onChange={formik.handleChange}
                                                   onBlur={formik.handleBlur}
                                                   value={formik.values.FirstName}
                                            />
                                            <p className="text-danger">{formik.touched.FirstName && formik.errors.FirstName ? <div className='error'>{formik.errors.FirstName}</div> : null}
                                            </p>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="cname" className="sr-only">Last Name</label>
                                            <input type="text"
                                                   className="form-control"
                                                   id="lastName"
                                                   name="LastName"
                                                   placeholder="Last Name *"
                                                   onChange={formik.handleChange}
                                                   onBlur={formik.handleBlur}
                                                   value={formik.values.LastName}
                                            />
                                            <p className="text-danger">  {formik.touched.LastName && formik.errors.LastName ? <div className='error'>{formik.errors.LastName}</div> : null}
                                            </p>
                                        </div>
                                    </div>




                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a >Birth Date</a>
                                            <input type="date"
                                                   className="form-control"
                                                   id="cname"
                                                   placeholder="Birth Date"
                                                   name="birthDate"
                                                   onChange={formik.handleChange}
                                                   onBlur={formik.handleBlur}
                                                   value={formik.values.birthDate}
                                                   required/>
                                            <p className="text-danger">{formik.touched.birthDate && formik.errors.birthDate ?
                                                <div className='error'>{formik.errors.birthDate}</div> : null}
                                            </p>
                                        </div>
                                        <div className="col-sm-6">
                                            <a >Sex</a>
                                            <CustomSelect
                                                className='form-control bg-transparent'
                                                onChange={value=>formik.setFieldValue('sex',value.value)}
                                                value={formik.values.sex}
                                                name="sex"
                                                options={sex}
                                            />
                                            <br/>
                                            <p className="text-danger">{formik.touched.sex && formik.errors.sex ?
                                                <div className='error'>{formik.errors.sex}</div> : null}
                                            </p>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a >Height</a>
                                            <input type="number"
                                                   className="form-control"
                                                   id="cname"
                                                   name="height"
                                                   onChange={formik.handleChange}
                                                   onBlur={formik.handleBlur}
                                                   value={formik.values.height}/>
                                            <p className="text-danger">{formik.touched.height && formik.errors.height ?
                                                <div className='error'>{formik.errors.height}</div> : null}
                                            </p>
                                        </div>
                                        <div className="col-sm-6">
                                            <a>Weight</a>

                                            <input type="number"
                                                   className="form-control"
                                                   id="cname"
                                                   name="weight"
                                                   onChange={formik.handleChange}
                                                   onBlur={formik.handleBlur}
                                                   value={formik.values.weight}/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a>Relationship Status</a>

                                            <CustomSelect
                                                className='form-control bg-transparent'
                                                onChange={value=>formik.setFieldValue('status',value.value)}
                                                value={formik.values.status}
                                                name="style"
                                                options={status}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <a>Pictures</a>

                                            <input type="file" className="form-control"
                                                   name="image"
                                                   onChange={(event) => {
                                                       formik.setFieldValue("image", event.target.files[0]);
                                                   }}
                                            />
                                        </div>
                                    </div>



                                    <div className="form-footer">


                                        <button type="submit" className="btn btn-outline-primary-2" disabled={!(formik.isValid && formik.dirty)} >
                                            <span>Next</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </button>
                                        <label className="custom-control-label" htmlFor="signin-remember-2">
                                        </label>
                                        <a href={"/home"}>
                                            <label className="custom-control-label" htmlFor="signin-remember-2">
                                                Cancel</label>
                                        </a>
                                    </div>

                                </form>





                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}