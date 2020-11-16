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

  flightInfo;

  segment;

  itinerarie;

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket() {
    this.ticketService.getTicket().subscribe((result) => {
      this.tickets = result;
      this.flightInfo = result.flightGet.data.flightOffers[0];
      this.itinerarie = this.flightInfo.itineraries[0];
      this.segment = this.itinerarie.segments[0];
      console.log(this.tickets);
    });
    // this.ticketService.getTicket().subscribe(
    //   (result: Array<Ticket>) => {
    //     this.tickets = result.map((ticket) => {
    //       const newObject = { ...ticket };
    //       newObject.flightGet = JSON.parse(ticket.flightGet);
    //       return newObject;
    //     });
    //     console.log(this.tickets);
    //   },
    //   (erro) => console.log(erro)
    // );
  }
}
