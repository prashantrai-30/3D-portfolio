import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
    const formRef = useRef();
    const { alert, showAlert, hideAlert} = useAlert();
    const [loading,setLoading] = useState(false)
    const [form,setForm] = useState({
        name:"",
        email:"",
        message:""
    })
    const handleChange = ({target:{name,value}}) => {
        setForm({...form,[name]:value})
    }

    // service_mowyokw
    const handleSubmit =async (e) => {
      e.preventDefault();
      setLoading(true)
        emailjs.send('service_mowyokw','template_f174aio',
        {
          from_name: form.name,
          to_name:'Prashant',
          from_email: form.email,
          to_email:'prashantkumar2488@gmail.com',
          message:form.message
        },
        'uD_3wjKCDNfysKZW3')
        .then(
          () => {
          setLoading(false);
          showAlert({
            show: true,
            text:'Thank you for your message 😃',
            type: 'success'  
          });
          setTimeout(() => {
            hideAlert(false);
            setForm({
              name:'',
              email:'',
              message:''
            });
          },[3000]);
       }, (error) => {
        setLoading(false);
        console.log(error);
        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: 'danger',
        });
      },
    );
  }
  return (
    <section className='c-space mb-0 md:mb-60' id='contact'>
    {alert.show && <Alert {...alert}/>}
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
      <img src='/assets/terminal.png' alt='terminal background' className='absolute inset-0 min-h-screen'/>
      <div className='contact-container'>
      <h3 className='head-text'>
        Let's Talk
      </h3>
      <p className='text-lg text-white-600 mt-3'>
        Whether you're are looking to build a new website improve your existing platform ,or bring a unique project to life,I'm here to help. 
      </p>
      <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col space-y-7'>
        <label className='space-y-3'>
            <span className='field-label'>Full Name</span>
            <textarea 
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            required
            className="field-input"
            placeholder="ex., John Doe"
            />
        </label>
        <label className='space-y-3'>
            <span className='field-label'>Email address</span>
            <input 
            type='text'
            name='email'
            value={form.email}
            onChange={handleChange}
            required
            className="field-input"
            placeholder="ex., johnDoe@gamil.com"
            />
        </label>
        <label className='space-y-3'>
            <span className='field-label'>Your Message</span>
            <input 
            type='text'
            name='message'
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="field-input"
            placeholder="Hii I'm Interested in..."
            />
        </label>
        <button className='field-btn' type='submit' disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
            <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow'/>
        </button>
      </form>
      </div>
      </div>
    </section>
  )
}

export default Contact
