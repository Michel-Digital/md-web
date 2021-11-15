import React, {useRef} from "react";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";


const ContactForm = () => {
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
    <>
    <div className="text-center mt-n7">
          <div className="icon-circle icon-circle-lg bg-white text-white shadow">
          <i id="contactIcon" className="fa-duotone fa-mailbox"></i>
          </div>
        </div>
    <div data-aos="zoom-out" id="mainForm" className="front-form aos-animate">
    <h3 className="text-center font-weight-normal mt-5">
        Contact us for a consultation
    </h3>
    <form className="mt-5" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md">
            <div className="mb-4">
              <label htmlFor="first_name">First name:</label>
              <input {...register("first_name", {required:true, maxLength: 50 , pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u} )} className="form-control form-control-bottom" type="text" name="first_name"/>
              <p className="text-muted mt-2">
                {errors.first_name?.type === 'required' && "Please input your first name so we can address you accordingly"}
                {errors.first_name?.type === 'pattern' && "Please input your first name so we can address you accordingly"}
                {errors.first_name?.type === 'maxLength' && "Please enter a valid name under 50 characters"}
              </p>
            </div>
          </div>
          <div className="col-md">
            <div className="mb-4">
              <label htmlFor="last_name">Last name:</label>
              <input {...register("last_name", {required:true, maxLength: 50 , pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u} )} className="form-control form-control-bottom" type="text" name="last_name"/>
              <p className="text-muted mt-2">
                {errors.last_name?.type === 'required' && "Please input your last name"}
                {errors.last_name?.type === 'maxLength' && "Please enter a valid name under 50 characters"}
                {errors.last_name?.type === 'pattern' && "Please input a valid last name"}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <div className="mb-4">
              <label htmlFor="company_name">Your company name:</label>
              <input {...register("company_name", {required:false, maxLength: 50})} className="form-control form-control-bottom" type="text" name="company_name"/>
              <p className="text-muted mt-2">
                {errors.company_name?.type === 'maxLength' && "If you company name is longer than 50 characters please abbreviate"}
              </p>
            </div>
          </div>
          <div className="col-md">
            <div className="mb-4">
              <label htmlFor="user_phone">Phone number:</label>
              <input type="tel" {...register("user_phone", {required: false, maxLength: 20, pattern: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm })} className="form-control form-control-bottom" name="user_phone"/>
              <p className="text-muted mt-2">
                {errors.user_phone?.type === 'maxLength' && "Please input a valid phone number"}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4">
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
          <p className="text-muted mt-2">
            {errors.message?.type === 'required' && "Please input a message so we understand how to address your inquiry"}
          </p>
        </div>

        <div className="text-center mt-5">
          <input  className="btn btn-lg btn-purple w-lg-300 text-uppercase-bold-sm shadow-lg hover-lift" type="submit" onClick={clearTransition}/>
        </div>
      </form>
      </div>
      <div data-aos="fade-in" data-aos-delay="4000" data-aos-duration="4000" id="backForm" className="back-form hidden">
     <h3 className="text-center font-weight-normal mt-5">
        Thank you for contacting us!
    </h3>
    <div className="d-flex justify-content-center align-items-center">
        <div className=" text-center">
          <p className="mt-5"> We look forward to having a conversations with you regarding your business needs. </p>
        </div>
    </div>
    </div>
    </>
  );
};
export default ContactForm;

        
        
        
        
        