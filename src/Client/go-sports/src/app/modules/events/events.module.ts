import { EventListComponent } from './components/event-list/event-list.component';
import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events.routing';

@NgModule({
  imports: [CommonModule, EventsRoutingModule, CoreModule],
  exports: [],
  declarations: [EventListComponent],
  providers: [],
})
export class EventsModule {}