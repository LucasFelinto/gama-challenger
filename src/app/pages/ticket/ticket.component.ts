import { Component, OnInit } from '@angular/core';
import { TicketService } from './ticket.service';

interface Ticket {
  id: number;
  flightGet: string;
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  constructor(private ticketService: TicketService) {}

  tickets;
  
  ngOnInit(): void {
    this.getTicket();
  }

  getTicket() {
    this.ticketService.getTicket().subscribe(
      (result: Array<Ticket>) => {
        this.tickets = result.map((ticket) => {
          const newObject = { ...ticket };
          newObject.flightGet = JSON.parse(ticket.flightGet);
          return newObject;
        });
        console.log(this.tickets);
      },
      (erro) => console.log(erro)
    );
  }
}
