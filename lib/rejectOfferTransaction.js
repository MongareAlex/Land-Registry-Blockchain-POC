'use strict';
/**
 */



/** 
import { DEFAULT_ENDIAN } from "bytebuffer";


 * rejectOffer Transaction
 *  @param {org.land.landsys.offerAsset.rejectOffer} offerData
 * @transaction
*/

function    rejectOffer(offerData) {
    // 1. Get the asset registry
    var NS='org.land.landsys.offerAsset.offer';
    return getAssetRegistry(NS)
        .then(function(offerRegistry){
    
            var  offerID=offerData.offerID;
            currentParticipant=getCurrentParticipant();

            return offerRegistry.get(offerID).then(function(offer){
                if (currentParticipant.participantkey===offer.landparcel.owner.participantkey){
                    offer.offerstatus="REJECTED";
 
                    return offerRegistry.update(offer);
                }else{
                    console.log("Unauthorised Access");
                }
            });
        });
    
    }

            
            

         