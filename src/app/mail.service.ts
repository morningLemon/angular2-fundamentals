import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    `Your now friends with John`,
    `John liked your tweet`,
    `You'll never believe waht John said ...`,
  ];

  constructor() { }

}
