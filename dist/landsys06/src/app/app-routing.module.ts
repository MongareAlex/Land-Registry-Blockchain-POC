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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parcel', component: parcelComponent },
  { path: 'offer', component: offerComponent },
  { path: 'LANDSYSPersonnel', component: LANDSYSPersonnelComponent },
  { path: 'LANDSYSClient', component: LANDSYSClientComponent },
  { path: 'openBid', component: openBidComponent },
  { path: 'closeBid', component: closeBidComponent },
  { path: 'transferLand', component: transferLandComponent },
  { path: 'createLand', component: createLandComponent },
  { path: 'makeOffer', component: makeOfferComponent },
  { path: 'rejectOffer', component: rejectOfferComponent },
  { path: 'createParticipant', component: createParticipantComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
