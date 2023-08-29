import Header from "../components/Header";
import Footer from "../components/Footer";
import WebsiteBannerSection from "../components/WebsiteBannerSection";
import { Container, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
const ContactUs = () => {
    const initialValues = {
        name: "",
        email_address: "",
        contact_number: "",
        subject: "",
        message: ""
    }
    return (<section className="about-us-section">
        <Header />
        <WebsiteBannerSection backgroundImage='https://quantum4u.in/img/Img-02.jpg'
            heading='Contact Us'
            description='Our experienced team is waiting to answer your questions. Please fill
         out the contact form below and so that our experts can better understand your needs.'
        />
        <Container className="py-5">
            <div className="row d-flex gap-3">
                <div className="col-md-8 col-12">
                    <div className="shadow-box background-div p-3">
                        <h5>What can we build for you?</h5>
                        <p>Tell us about your app/website idea in brief. One of our dedicated consultants will contact
                            you in the next 2-3 business days with a detailed development plan.</p>
                        <Formik
                            initialValues={initialValues}
                        // onSubmit={handleImport}
                        >
                            {({ errors, setFieldValue }) => (
                                <Form className="contact-us-form py-3">
                                    <div className="d-flex flex-column">
                                        <Field id="name"
                                            type="text" placeholder="Enter your name"
                                            name="name"
                                            className="custom-form-input" />
                                        {errors.name && <div className="form-error">{errors.name}</div>}
                                    </div>
                                    <div className="d-flex flex-column">
                                        <Field id="email_address"
                                            type="text" placeholder="Enter email address"
                                            name="email_address"
                                            className="custom-form-input" />
                                        {errors.email_address && <div className="form-error">{errors.email_address}</div>}
                                    </div>
                                    <div className="d-flex flex-column">
                                        <Field id="contact_number"
                                            type="text" placeholder="Enter contact number"
                                            name="contact_number"
                                            className="custom-form-input" />
                                        {errors.contact_number && <div className="form-error">{errors.contact_number}</div>}
                                    </div>
                                    <div className="d-flex flex-column">
                                        <Field id="subject"
                                            type="text" placeholder="Enter subject"
                                            name="subject"
                                            className="custom-form-input" />
                                        {errors.subject && <div className="form-error">{errors.subject}</div>}
                                    </div>
                                    <div className="d-flex flex-column">
                                        <Field id="message"
                                            type="textarea" placeholder="Enter message"
                                            name="message"
                                            rows="4"
                                            className="custom-form-input" />
                                        {errors.message && <div className="form-error">{errors.message}</div>}
                                    </div>
                                    <Button type="submit" className="button-type5">Send Message</Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <h5>Quantum4U Lab Pvt. Ltd.</h5>
                    <p>423, Tower-B4, Spaze IT Park, Behind Omaxe City Center, Sector 49,
                        Gurugram, Haryana 122018</p>
                    <p><strong>Email</strong> info@gmail.com</p>
                    <p><strong>Landline</strong>  (+91) 124 484 2561</p>
                </div>
            </div>
        </Container>

        <Footer />
    </section >

    )
}

export default ContactUs;