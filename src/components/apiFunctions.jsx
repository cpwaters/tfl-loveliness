import React,{ useEffect, useState } from 'react'

const AllApiCalls = () => {

    /*
    CONTEXT Ref
    ------------------------------------
    A 'mode' is a transport type 'tube','bus' etc
    A 'line' is a specific line or route 'Victoria', '1'(bus number)
    A 'stopPoint' is a place that other stops converge:
       stopPoint - 'Victoria Station' where these include a tube station, bus station, coach station
    A 'stopPointId' is the ID given to a particular stopPoint
    */

    const slowAPI = `https://api.digital.tfl.gov.uk/` //don't use

    // Tfl Api url
    const url = 'https://api.tfl.gov.uk';

    // test variables
    const mode = 'tube'; 
    const modes = ['tube','dlr','bus']
    const lineId = 'victoria';
    const stopPointId = '940GZZLUVIC';
    const stopPointIds = [];
    const fromstopPointId = '';
    const tostopPointId = ''; 
    const id = 0;
    const route = 0;
    const placeTypes = 'boroughs'; // see reference -> place types
    const type = 0;
    const boolean = true;
    const page = 1;
    const bikePointId = 'BikePoints_303';
    const zoom = '0'; //zoom for TRAVEL TIME overlay maps
    const mapCenterLat = 00000000;
    const mapCenterLon = -00000000;
    const pinLat = 00000000;
    const pinLon = -00000000;
    const vehicleIds = 'LX58CFV'; // can be multiple comma separated
    const roadIds = 'A406'; 
    const disruptionIds = '?' // 404 on api call
 
    // MODES
    //Returns the service type active for a mode. Currently only supports tube
    const activeServiceType = `/Mode/ActiveServiceTypes` // returns 'regular service'
    //Gets the next arrival predictions for all stops of a given mode
    const allStopArrivalByMode = `/Mode/{mode}/Arrivals`
        `?count=int` //A number of arrivals to return for each stop, -1 to return all available.
    

    // LINES
    const line = `https://api.tfl.gov.uk/line/${lineId}`;
    const lineModes = 'https://api.tfl.gov.uk/line/meta/modes';
    const lineRoute = `https://api.tfl.gov.uk/line/${lineId}/${route}`;
    const lineRouteModeSelect = `https://api.tfl.gov.uk/Line/Mode/${modes}/${route}`;
    const stopsOnLine = `https://api.tfl.gov.uk/Line/${lineId}/StopPoints`;

    // STOPPOINTS
    //Gets the list of available StopPoint additional information categories
    const stopPointCats = `${url}`+`/StopPoint/Meta/Categories`
    //
    const stopPointTypes = `${url}`+`/StopPoint/Meta/stopTypes`
    //
    const stopPointModes = `${url}`+`/StopPoint/Meta/modes`
    //Gets a list of StopPoints corresponding to the given list of stop ids. can be a single id or a comma separated list (max 20) 
    const stopPointsById = `${url}`+`/StopPoint/${stopPointId}`
    //Get a list of places corresponding to a given id and place types.
    const stopPointsPlaceTypesById = `${url}`+`/StopPoint/${stopPointId}/${placeTypes}` // throws 404
    //Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
    const stopPointsCrowdingDataByIdAndLine = `${url}`+`/StopPoint/${stopPointId}/crowding/${line}` // throws 404
    //Gets all stop points of a given type
    const stopPointsByType = `/StopPoint/Type/{types}`
    //Gets all the stop points of given type(s) with a page number
    const stopPointByTypeWithPagination = `/StopPoint/Type/{types}/page/{page}`
    //Gets the service types for a given stoppoint
    const serviceTypePerStopPoint = `/StopPoint/ServiceTypes`
    //Gets the list of arrival predictions for the given stop point id
    const arrivalsByStopPointId = `/StopPoint/{stopPointId}/Arrivals`
    //Gets the list of arrival and departure predictions for the given stop point id (overground, tfl rail and thameslink only)
    const arrivalsDeparturesByStopPointId = `/StopPoint/{stopPointId}/ArrivalDepartures`
    //Gets Stopoints that are reachable from a station/line combination.
    const stationLineReachableStopPoints = `/StopPoint/{stopPointId}/CanReachOnLine/{lineId}`
    //Returns the route sections for all the lines that service the given stop point ids
    const stopPointIdRouteSection = `/StopPoint/{stopPointId}/Route`
    //Gets a distinct list of disrupted stop points for the given modes
    const disruptedStopPointsByMode = `/StopPoint/Mode/{modes}/Disruption` `?includerouteblockedstops=boolean`
    //Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
    const stopPointDisruptionsPlusChildren = `/StopPoint/{stopPointIds}/Disruption` `?getfamily=boolean` `?includerouteblockedstops=boolean` `?flattenresponse=boolean`
    //Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
    const getDirectionFromStopPointIdToStopPointId = `/StopPoint/{fromStopPointid}/DirectionTo/{toStopPointId}` `?lineid=victoria`
    //Gets a list of StopPoints within {radius} by the specified criteria // see reference -> stop point stop types //radius in metres  // see reference -> stop point stop cats
    const stopPointRadius = `/StopPoint` 
        `?stoptype=NaptanMetroStation` 
        `?radius=200` 
        `?usestoppointhierarchy=boolean` 
        `?modes=tube` 
        `?categories=address` 
        `?returnlines=boolean` 
        `?location.lat=0000000` 
        `?location.lon=-0000000`
    //Gets a list of StopPoints filtered by the modes available at that StopPoint. //1000 stop points per page
    const stopPointsByMode = `/StopPoint/Mode/{modes}` `?page=1`
    //Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
    const stopPointsByCommonName = `/StopPoint/Search/{query}` // query is common name or 5-digit countdown bus stop code
        `?modes=tube`
        `?faresonly=boolean`
        `?maxresults=int` //max 50
        `?lines=victoria`
        `?includehubs=boolean` //returns HUB(s)
        `?tfloperatednationalrailstationsonly=boolean` // if ?mode=national-rail
    //Gets a StopPoint for a given sms code.
    const stopPointsFromSMSCode = `/StopPoint/Sms/{id}` // id = 5 digit countdown bus stop code
        `?output=web`
    //Gets a list of taxi ranks corresponding to the given stop point id.
    const taxiRanksAtStopPoint = `/StopPoint/{stopPointId}/TaxiRanks`
    //Get car parks corresponding to the given stop point id.
    const carParksAtStopPoint = `/StopPoint/{stopPointId}/CarParks`


    // BIKEPOINTS
    //Gets all bike point locations. 
    /*
    The Place object has an addtionalProperties array which contains the 
    nbBikes, nbDocks and nbSpaces numbers which give the status of the BikePoint. 
    A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
    */
   const bikePoints = `/BikePoint`
   //Gets the bike point with the given id.
   const bikePointsById = `/BikePoint/{bikePointId}`
   /*
    Search for bike stations by their name, a bike point's name often contains information about the name of the street or nearby landmarks, 
    for example. Note that the search result does not contain the PlaceProperties i.e. the status or occupancy of the BikePoint, 
    to get that information you should retrieve the BikePoint by its id on /BikePoint/id.
   */
    const bikePointSearch = `/BikePoint/Search` // don't know how this search works??


    // ROAD
    //Gets all roads managed by TfL
    const roadsManaged = `/road`
    //Gets the road with the specified id (e.g. A1)
    const roadsById = `/Road/{roadIds}` // search above for all road ids.
    //Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
    const roadStatusByDateRange = `/Road/{roadIds}/Status`
        `?daterangenullable.startdate=` //String, ?
        `?daterangenullable.enddate=` //String, ?
    //Get active disruptions, filtered by road ids
    const roadDisruptionsById = `/Road/{roadIds}/Disruption`
        `?stripcontent=` //Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location, comments and streets
        `?severities=` //an optional list of Severity names to filter on (a valid list of severities can be obtained from the /Road/Meta/severities endpoint)
        `?categories=` //an optional list of category names to filter on (a valid list of categories can be obtained from the /Road/Meta/categories endpoint)
        `?closures=` //Optional, defaults to true. When true, always includes disruptions that have road closures, regardless of the severity filter. When false, the severity filter works as normal.
    //Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
    const streetDisruptions = `/Road/all/Street/Disruption` // 404
        `?startdate=` //String, REQ, Optional, the start time to filter on.
        `?enddate=` //String, REQ, Optional, the end time to filter on.
    //Gets a list of active disruptions filtered by disruption Ids.
    const roadDisruptionsByDisruptionId = `/Road/all/Disruption/{disruptionIds}` // ?



    // CABWISE
    //Gets taxis and minicabs contact information
    const taxiInfo = `/Cabwise/search`
        `?lat=lat`
        `?lon=lon`
        `?optype=minicab`
        `?wc=wheelchair accessible` // string ?
        `?radius=10` // metres
        `?name=` // string - Trading name of operating company
        `?maxresults=20` // max 20
        `?legacyformat=boolean` 
        `?forcexml=boolean`
        `?twentyfoursevenonly` // that are 24/7


    // JOURNEY
    //Gets a list of all of the available journey planner modes
    const journeyPlannerModes = `/Journey/Meta/Modes`

    /*
    //Perform a Journey Planner search from the parameters specified in simple types
    This could be a separate App entity completely, very large
    */
    const journeyPlanner = `/Journey/JourneyResults/{from}/to/{to}`
    [
        `?from=` //Origin of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
        `?to=` //Destination of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
        `?via=` //Travel through point on the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
        `?nationalsearch=boolean` //Does the journey cover stops outside London? eg. "nationalSearch=true"
        `?date=` //The date must be in yyyyMMdd format
        `?time=` //The time must be in HHmm format
        `?timels=` //Does the time given relate to arrival or leaving time? Possible options: "departing" | "arriving"
        `?journeypreference=` //The journey preference eg possible options: "leastinterchange" | "leasttime" | "leastwalking"
        `?mode=` //The mode must be a comma separated list of modes. eg possible options: "public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle"
        `?accessibilitypreference=` //The accessibility preference must be a comma separated list eg. "noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform"
        `?fromname=` //An optional name to associate with the origin of the journey in the results.
        `?toname=` //An optional name to associate with the destination of the journey in the results.
        `?vianame=` //An optional name to associate with the via point of the journey in the results.
        `?maxtransferminutes=` //The max walking time in minutes for transfer eg. "120"
        `?maxwalkingminutes=` //The max walking time in minutes for journeys eg. "120"
        `?walkingspeed=` //The walking speed. eg possible options: "slow" | "average" | "fast".
        `?cyclepreference=` //The cycle preference. eg possible options: "allTheWay" | "leaveAtStation" | "takeOnTransport" | "cycleHire"
        `?adjustments=` //Time adjustment command. eg possible options: "TripFirst" | "TripLast"
        `?bikeproficiency=` //A comma separated list of cycling proficiency levels. eg possible options: "easy,moderate,fast"
        `?alternativecycle=` //Option to determine whether to return alternative cycling journey
        `?alternativewalking=` //Option to determine whether to return alternative walking journey
        `?applyhtmlmarkup=` //Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not.
        `?usemultimodalcall=` //A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey
        `?walkingoptimization=` //A boolean to indicate whether to optimize journeys using walking
        `?taxitriponly=` //A boolean to indicate whether to return one or more taxi journeys. Note, setting this to true will override "useMultiModalCall".
        `?routebetweenentrances=` //A boolean to indicate whether public transport routes should include directions between platforms and station entrances.
        `?userealtimelivearrivals=` //A boolean to indicate if we want to receive real time live arrivals data where available.
    ]

    // SEARCH

    //Search the site for occurrences of the query string. 
    //The maximum number of results returned is equal to the maximum page size of 100. To return subsequent pages, use the paginated overload.
    const search = `/search` `?{query}` //REQ, Not sure how this works yet
    //Searches the bus schedules folder on S3 for a given bus number. oooh AWS!!
    const searchBusSheduleNumber = `/Search/BusSchedules` `?{query}` //REQ, Not sure how this works yet
    //Gets the available searchProvider names.
    const searchProviderNames = `/Search/Meta/SearchProviders`
    //Gets the available search categories.
    const searchCategories = `/Search/Meta/Categories` //returns 'pages', 'news', 'docs'.
    //Gets the available sorting options.
    const searchSortOptions = `/Search/Meta/Sorts` 

    // TRAVEL TIME
    //Gets the TravelTime overlay.
    const travelTimeOverlay = `/TravelTimes/overlay/{zoom}/mapcenter/{mapCenterLat}/{mapCenterLon}/pinlocation/{pinLat}/{pinLon}/dimensions/{width}/{height}`
        // Thnk all these should be added to the string as params rather than options
        `?senariotitle=` //The title of the scenario. REQ
        `?timeofdayid=` //The id for the time of day (AM/INTER/PM), REQ
        `?modeid=` //The id of the mode. REQ
        `?direction=` //The direction of travel. 'Average', 'From', 'To'.
        `?traveltimeinterval=` //The total minutes between the travel time bands, REQ

    const travelTimeCompareOverlay = `/TravelTimes/compareOverlay/{z}/mapcenter/{mapCenterLat}/{mapCenterLon}/pinlocation/{pinLat}/{pinLon}/dimensions/{width}/{height}`
        //same params as above but with 2 extra
        `?comparetype=` //String, REQ, ?
        `?comparevalue=` //String, REQ, ?

    // VEHICLE
    //Gets the predictions for a given list of vehicle Id's.
    const vehicleArrivalById = `/Vehicle/{vehicleIds}/Arrivals` //Reg plates etc, Max 25, REQ











    return(
        <p>{mode}</p>
    );



}

export default AllApiCalls