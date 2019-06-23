/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { parcelComponent } from './parcel/parcel.component';
import { offerComponent } from './offer/offer.component';

import { LANDSYSPersonnelComponent } from './LANDSYSPersonnel/LANDSYSPersonnel.component';
import { LANDSYSClientComponent } from './LANDSYSClient/LANDSYSClient.component';

import { openBidComponent } from './openBid/openBid.component';
import { closeBidComponent } from './closeBid/closeBid.component';
import { transferLandComponent } from './transferLand/transferLand.component';
import { createLandComponent } from './createLand/createLand.component';
import { makeOfferComponent } from './makeOffer/makeOffer.component';
import { rejectOfferComponent } from './rejectOffer/rejectOffer.component';
import { createParticipantComponent } from './createParticipant/createParticipant.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    parcelComponent,
    offerComponent,
    LANDSYSPersonnelComponent,
    LANDSYSClientComponent,
    openBidComponent,
    closeBidComponent,
    transferLandComponent,
    createLandComponent,
    makeOfferComponent,
    rejectOfferComponent,
    createParticipantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
