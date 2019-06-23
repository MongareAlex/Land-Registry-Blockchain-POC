
/** 
import { DEFAULT_ENDIAN } from "bytebuffer";


 * Create land Transaction
 *  @param {org.land.landsys.landparcel.openBid} bidData
 * @transaction
 * 
 * 
 * 1. Create the landParcel asset
 * 2. 1 Set the bidstatus
 * 3. update the landParcel asset to the registry
 */

function    openBid(bidData) {
    // 1. Get the asset registry
    return getAssetRegistry('org.land.landsys.landparcel.parcel')
        .then(function(parcelRegistry){
            var id=bidData.deedno;
            let currentParticipant = getCurrentParticipant();                
    
                return parcelRegistry.get(id)
                .then(function(parcel) {
                    if(currentParticipant.participantkey===parcel.owner.participantkey){
                    parcel.bidstatus="OPEN";
                    return assetRegistry.update(parcel);
                    }else{
                        console.log("Operation Not Authorised");

                

            }
            });
        });
}
