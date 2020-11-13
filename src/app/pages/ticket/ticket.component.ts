import { Component, OnInit } from '@angular/core';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})

export interface Ticket {

}


export class TicketComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket() {
    this.ticketService.getTicket().subscribe(result => {
      result.map(ticket => {
        const newObject = {...ticket}
        newObject.flightGet = JSON.parse(ticket.flightGet);
        return newObject; 
      });
    },
     erro => console.log(erro),
    );
  }

}
