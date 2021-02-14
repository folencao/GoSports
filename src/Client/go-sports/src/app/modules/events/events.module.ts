import { EventFieldSelectComponent } from './components/event-field/event-field-select/event-field-select.component';
import { EventFieldTextComponent } from './components/event-field/event-field-text/event-field-text.component';
import { EventFieldComponent } from './components/event-field/event-field.component';
import { GamesModule } from './../games/games.module';
import { EventListComponent } from './components/event-list/event-list.component';
import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events.routing';
import { EventEditorComponent } from './components/event-editor/event-editor.component';
import { EventFieldRefereeComponent } from './components/event-field/event-field-referee/event-field-referee.component';
import { EventFieldPlayerComponent } from './components/event-field/event-field-player/event-field-player.component';
import { EventFieldNumberComponent } from './components/event-field/event-field-number/event-field-number.component';

@NgModule({
  imports: [CommonModule, EventsRoutingModule, CoreModule, GamesModule],
  exports: [],
  declarations: [
    EventListComponent,
    EventEditorComponent,
    EventFieldComponent,
    EventFieldTextComponent,
    EventFieldSelectComponent,
    EventFieldRefereeComponent,
    EventFieldPlayerComponent,
    EventFieldNumberComponent,
  ],
  providers: [],
})
export class EventsModule {}
