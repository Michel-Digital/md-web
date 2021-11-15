import React, {useRef} from "react";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import AOS from "aos";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";


const Contact = () => {
  const locationObj = document.location.href;
    const form = useRef();
    const {register, formState: { errors }, handleSubmit, clearErrors} = useForm();  
    const clearTransition = () => {
      AOS.init({
          once:true,
          easing: 'ease-out',
          delay: 4000
        });
      clearErrors();
      document.getElementById("mainForm").classList.remove("aos-animate");
      setTimeout(function() {
        document.getElementById("mainForm").classList.add("hidden");
      }, 400);
      setTimeout(function() {
        document.getElementById("backForm").classList.remove("hidden");
        document.getElementById("contactIcon").classList.remove("fa-duotone","fa-mailbox");
        document.getElementById("contactIcon").classList.add("fa-duotone","fa-check");
        document.getElementById("backForm").classList.add("aos-animate");
      }, 500);
    }
    const onSubmit = (data,e) => {
      e.preventDefault();
      console.log(data);
      console.log("in here after submit");
    
      emailjs.sendForm('service_pf7q71m', 'template_contact', form.current, 'user_8nkph7FZ8E8AemHqJBD10')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
    };
  return (
    <section className="bg-light">
       <Helmet>
        <title>Michel Digital - Contact Us</title>
        <meta
          name="description"
          content="Contact Michel Digital. A Technical Consulting Company with specializations in App Development, Web Development, Digital Marketing, App & Web Design, Branding, Data Analytical Support, Product and Business Strategies. "
        />
        <meta
          name="keywords"
          content="Technology,Consulting,App,Web,Development,Digital,Marketing,Product,Business,Strategy,Blog,Technology Blog, Digital Marketing, Web Development, App Development, Technology Consulting Firm"
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
          <meta property="og:url" content={locationObj} />
          <meta property="og:title" content="Michel Digital" />
          <meta
            property="og:description"
            content="A Technical Consulting Company with specializations in App Development, Web Development, Digital Marketing, App & Web Design, Branding, Data Analytical Support, Product and Business Strategies. "
          />
          <meta property="og:image" content="./graph.jpg" />
          <meta property="og:site_name" content="Michel Digital" />

          {/* <!-- Twitter --> */}
          <meta name="twitter:image:alt" content="Michel Digital" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={locationObj}
          />
          <meta property="twitter:title" content="Michel Digital" />
          <meta
            property="twitter:description"
            content="A Technical Consulting Company with specializations in App Development, Web Development, Digital Marketing, App & Web Design, Branding, Data Analytical Support, Product and Business Strategies. "
          />
          <meta property="twitter:image" content="./graph.jpg" />
      </Helmet>
    {/* <!-- Intro --> */}
  <section className="text-center pt-6 fx-fade-up">
    <div className="container">
      <div className="svg-icon svg-icon-lg text-purple">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <path d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000"></path>
        <path d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3"></path>
    </g>
</svg>
      </div>
      <h1 className="text-dark font-weight-normal mt-3">
        We'd Love To Hear From You
      </h1>
      <p className="lead text-secondary w-lg-80 mx-auto mt-4">
        Build your brand <span style={{ color: "#35EEFE" }}>•</span> Get new business <span style={{ color: "#35EEFE" }}>•</span> Connect with your clients <br />
        Get started today and learn how we can help you grow and expand your business.
      </p>
    </div>
  </section>

  {/* <!-- Form --> */}
  <section className="bg-dark position-relative mt-7">
    {/* <!-- SVG divider --> */}
    <div className="bg-dark svg-divider svg-divider-top text-light">
    <svg preserveAspectRatio="none" viewBox="0 0 1990 350" xmlns="http://www.w3.org/2000/svg">
      <polygon fill="#f5f5ff" points="2000 0 2000 350 0 350"></polygon>
    </svg>
    </div>

    <div className="container position-relative fx-fade-up animation-delay-3 ">
      <div className="bg-white w-lg-60 rounded shadow-6 mx-auto py-5 px-4 px-md-6">
        <form className="mt-1" ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
          <label htmlFor="first_name">First name:</label>
              <input {...register("first_name", {required:true, maxLength: 50 , pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u} )} className="form-control form-control-bottom" type="text" name="first_name"/>
              <p className="text-muted mt-2">
                {errors.first_name?.type === 'required' && "Please input your first name so we can address you accordingly"}
                {errors.first_name?.type === 'pattern' && "Please input your first name so we can address you accordingly"}
                {errors.first_name?.type === 'maxLength' && "Please enter a valid name under 50 characters"}
              </p>
          </div>
          <div className="mb-3">
          <label htmlFor="last_name">Last name:</label>
              <input {...register("last_name", {required:true, maxLength: 50 , pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u} )} className="form-control form-control-bottom" type="text" name="last_name"/>
              <p className="text-muted mt-2">
                {errors.last_name?.type === 'required' && "Please input your last name"}
                {errors.last_name?.type === 'maxLength' && "Please enter a valid name under 50 characters"}
                {errors.last_name?.type === 'pattern' && "Please input a valid last name"}
              </p>
          </div>
          <div className="mb-3">
          <label htmlFor="company_name">Your company name:</label>
              <input {...register("company_name", {required:false, maxLength: 50})} className="form-control form-control-bottom" type="text" name="company_name"/>
              <p className="text-muted mt-2">
                {errors.company_name?.type === 'maxLength' && "If you company name is longer than 50 characters please abbreviate"}
              </p>
          </div>
          <div className="mb-3">
          <label htmlFor="user_phone">Phone number:</label>
              <input type="tel" {...register("user_phone", {required: false, maxLength: 20, pattern: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm })} className="form-control form-control-bottom" name="user_phone"/>
              <p className="text-muted mt-2">
                {errors.user_phone?.type === 'maxLength' && "Please input a valid phone number"}
              </p>
          </div>
          <div className="mb-3">
          <label htmlFor="user_email">Email:</label>
          <input {...register("user_email", {required: true, pattern: /^\S+@\S+$/i})} className="form-control form-control-bottom" type="email" name="user_email"/>
          <p className="text-muted mt-2">
            {errors.user_email?.type === 'required' && "Please input a valid email"}
            {errors.user_email?.type === 'patter' && "Please input a valid email"}
          </p>
          </div>
          <div className="mb-3">
          <label htmlFor="message">Do you have a specific interest or need?</label>
          <textarea {...register("message", {required: true, maxLength: 300})} className="form-control form-control-bottom" rows="3" name="message"></textarea>
          <p className="text-muted mt-2 ">
            {errors.message?.type === 'required' && "Please input a message so we understand how to address your inquiry"}
          </p>
          </div>
          <input  className="btn btn-lg btn-block btn-purple text-uppercase-bold-sm shadow-6 hover-lift mt-5" type="submit" value="Send Message" onClick={clearTransition}/>
        </form>
      </div>
    </div>
      <div
        data-aos="fade-in"
        data-aos-delay="4000"
        data-aos-duration="4000"
        id="backForm"
        className="back-form hidden"
      >
        <h3 className="text-center font-weight-normal mt-5">
          Thank you for contacting us!
        </h3>
        <div className="d-flex justify-content-center align-items-center">
          <div className=" text-center">
            <p className="mt-5">
              {" "}
              We look forward to having a conversations with you regarding your
              business needs.{" "}
            </p>
          </div>
        </div>
      </div>
  </section>
    </section>
  );
};
export default Contact;