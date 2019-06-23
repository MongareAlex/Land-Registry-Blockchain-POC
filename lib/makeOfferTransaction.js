'use strict';
/**
 
 * Pre-Req
 * 1. Start the fabric
 * 2. Deploy & start land network
 * 3. Start the REST Server
 *     
 *    composer-rest-server -c admin@landsys01 -n never -u true -w true
 * 

 * 
 * Demo Steps
 * 1. Use the bn-connection-util to create the connection to landsys01
 * 2. Get the Busines Network Definition from Runtime
 * 3. Get the factory from the Business Network definition
 * 4. Create a new Transaction instance
 * 5. Set the property values in the transaction object
 * 6. Submit the transaction
 */



/** 
import { DEFAULT_ENDIAN } from "bytebuffer";


 * makeOffer  Transaction
 *  @param {org.land.landsys.offerAsset.makeOffer} offerData
 * @transaction
 * 
 * 
 * 1. Create the offer asset
 * 2. 1 Set the offerID
 * 3. Add the offer asset to the registry
 */

function    makeOffer(offerData) {
    // 1. Get the asset registry
    return getAssetRegistry('org.land.landsys.offerAsset.offer')
        .then(function(offerRegistry){
            // 2. Get resource factory
            var  factory = getFactory();
            var  NS ='org.land.landsys.offerAsset';
            var NS2='org.land.landsys.participant';
            var NS3='org.land.landsys.landparcel';
 
            let currentParticipant=getCurrentParticipant();

            var  buyerID=currentParticipant.participantkey;
            var  parcelID=offerData.parcelID;
            let parcelRegistry=getAssetRegistry('org.land.landsys.landparcel.parcel')
            if(parcelRegistry.exists(parcelID)){

            // 3. Create the Resource instance
            var  offerID = offerData.offerID; 
            var  offer = factory.newResource(NS,'offer',offerID);

            offer.bidstatus=parcelData.bidstatus;

            var buyerlshp=factory.newRelationship(NS2,'LANDSYSClient',buyerID);
            offer.client=buyerlshp;

            var parcelrlshp=factory.newRelationship(NS3,'parcel',parcelID);
            offer.parcel=parcelrlshp;

               // 4. Add to registry
               return offerRegistry.add(offer);
            // 5. Create a new concept using the factory & set the data in it

            // 6. Emit the event parcel created
            }else{console.log("Unauthorised Access");}
   
        });
}
