import emailjs from 'emailjs-com';

export const sendEmail = async (email, message, name) => {
    emailjs.init({ publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY });
    await emailjs.send('service_pt51jzx', 'template_zik730f', {
        email: email,
        message: message,
        name: name
    })
        .then((result) => {
            console.log('Email successfully sent!', result.text);
        }, (error) => {
            console.error('Failed to send email. Error:', error);
        });
};