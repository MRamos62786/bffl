import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countdown: string;

  constructor() { }

  ngOnInit() {
    // Set the date we're counting down to
    const countDownDate = new Date('Aug 28, 2017 18:00:00').getTime();

    // Update the count down every 1 second
    const x = setInterval(() => {

      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now an the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      this.countdown = days + 'd ' + hours + 'h '
        + minutes + 'm ' + seconds + 's ';

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        this.countdown = 'DRAFT TIME!';
      }
    }, 1000);
  }

}
