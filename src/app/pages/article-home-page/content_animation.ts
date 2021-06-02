import {
    trigger,
    state,
    style,
    animate,
    transition,query,group,animateChild
  } from '@angular/animations';

export const slideUpAnimation =
  trigger('slideAnimation', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ top: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('10000ms ease-out', style({ top: '100%' }))
        ]),
        query(':enter', [
          animate('10000ms ease-out', style({ top: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
   
  ]);