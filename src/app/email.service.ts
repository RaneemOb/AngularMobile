import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
  async SentEmail(object: any) {
    debugger
        return new Promise<void>((resolve, reject) => {
          emailjs.send('service_1lpf30i', 'template_i1ninkj', object, '859jjiLNU-nMlzMT3')
            .then(
              (response: any) => {
    
                console.log("SUCCESS!", response.status, response.text);
                resolve();
    
              },
              (error: any) => {
                console.log("FAILED!", error);
    
              });
        })
      }
}
