import {
  animate,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounce, fadeInUp } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('bounce', [
      transition(
        '* => *',
        useAnimation(bounce, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1 },
        })
      ),
    ]),
    trigger('fadeInUp', [
      transition(
        '* => *',
        useAnimation(fadeInUp, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 1 },
        })
      ),
    ]),
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          transform: '',
          opacity: 0,
          backgroundColor: '#c6ecff',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  // animations declarations
  bounce: any;
  fadeInUp: any;

  projects: {
    title: string;
    description: string;
    list: string[];
    button: {
      text: string;
      hoverText: string;
      color: 'white' | 'yellow';
      hoverColor: 'pink' | 'yellow';
    };
    image: string;
  }[] = [
    {
      title: 'Mobile-first INCLUSIVE PLATFORM',
      description:
        'Complete overhaul and ongoing optimisations for a multi-purpose checkout system from a user-centered design approach.',
      list: ['2021', 'UX & UI design'],
      button: {
        text: 'view case study',
        hoverText: 'view work',
        color: 'white',
        hoverColor: 'yellow',
      },
      image: 'project-no-1@2x.png',
    },
    {
      title: 'Mobile-first e-commerce',
      description:
        'Complete overhaul and ongoing optimisations for a multi-purpose checkout system from a user-centered design approach.',
      list: ['2021', 'UX & UI design'],
      button: {
        text: 'view case study',
        hoverText: 'view work',
        color: 'white',
        hoverColor: 'yellow',
      },
      image: 'project-no-2@2x.png',
    },
    {
      title: 'ADMIN DASHBOARD POLCO',
      description:
        'Complete overhaul and ongoing optimisations for a multi-purpose checkout system from a user-centered design approach.',
      list: ['2021', 'UX & UI design'],
      button: {
        text: 'view case study',
        hoverText: 'view work',
        color: 'white',
        hoverColor: 'yellow',
      },
      image: 'project-no-3@2x.png',
    },
    {
      title: 'SIGN UP FLOW PHONEBURNER',
      description:
        'From research to flow charts, and from high-fidelity designs to prototyping; the sales funnel of this SaaS product got a completel make-over.',
      list: ['2020', 'User Research, UX & UI'],
      button: {
        text: 'view case study',
        hoverText: 'view work',
        color: 'white',
        hoverColor: 'yellow',
      },
      image: 'project-no-4@2x.png',
    },
    {
      title: 'SEB BANK',
      description:
        'Crafting the next-level user experience of an internal web application for an international user group at one of Northern Europe’s largest banks.',
      list: ['2019', 'User Research, UX & UI'],
      button: {
        text: 'view case study',
        hoverText: 'view work',
        color: 'white',
        hoverColor: 'yellow',
      },
      image: 'project-no-5@2x.png',
    },
    {
      title: 'the architectural impact of WWII',
      description:
        'I created Blitz, a high-fidelity prototype to visualise the architectural impact of the bombing of my hometown, Rotterdam, during the Second World War.',
      list: ['2020', 'UX & UI'],
      button: {
        text: 'view case study',
        hoverText: 'view work',
        color: 'white',
        hoverColor: 'yellow',
      },
      image: 'project-no-6@2x.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
