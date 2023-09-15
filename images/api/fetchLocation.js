const LOCATION_ENDPOINT = "https://ttp.cbp.dhs.gov/schedulerapi/locations/?temporary=false&inviteOnly=false&operational=true&serviceName=Global+Entry"

export default function fetchLocations(){
    fetch(LOCATION_ENDPOINT)
    .then
}