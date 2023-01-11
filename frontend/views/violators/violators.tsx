import type Violator from 'Frontend/generated/com/birdnest/application/data/Violator';
import type ViolatorReport from 'Frontend/generated/com/birdnest/application/data/ViolatorReport';
import { ViolatorEndpoint } from 'Frontend/generated/endpoints';
import { EndpointValidationError } from '@hilla/frontend';
import { useEffect, useState } from 'react';
import { Grid } from '@hilla/react-components/Grid.js'
import { Avatar } from '@hilla/react-components/Avatar.js'
import { GridSortColumn } from '@hilla/react-components/GridSortColumn.js'
import { GridColumn } from '@hilla/react-components/GridColumn.js'
import { VerticalLayout } from '@hilla/react-components/VerticalLayout.js'
import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js'
import { TextField } from '@hilla/react-components/TextField.js'

export default function Violators(){
  const [violators, setViolators] = useState(Array<Violator | any>);
  const [violatorReport, setViolatorReport] = useState<ViolatorReport>({ violators: [], lastUpdated: '1970-1-1', monitoringStartDate: '1970-1-1'});
  const [detailsOpenedItem, setDetailsOpenedItem] = useState(Array<Violator | any>);
  useEffect(() =>
  {
    (async () =>{
        let initial = await ViolatorEndpoint.getViolatorReport();
        setViolatorReport(initial);
        setInterval(async () => {
            setDetailsOpenedItem([]);
            setViolatorReport(await ViolatorEndpoint.getViolatorReport());
        }, 60000);
    })();
return () => { };
  }, []);
  return (
    <VerticalLayout className={'violatorList'}>
         <Grid  items={violatorReport.violators} theme='wrap-cell-content row-stripes'
          //all-rows-visible
          detailsOpenedItems={detailsOpenedItem}
          onActiveItemChanged={({ detail: { value } }) => setDetailsOpenedItem([value])}
              rowDetailsRenderer={({ item } ) =>
                  <VerticalLayout theme="spacing">
                    <h4>Drone details:</h4>
                    <HorizontalLayout theme="spacing">
                      <TextField label='SerialNumber' value={item.drone.serialNumber} readonly/>
                      <TextField label='Model' value={item.drone.model} readonly/>
                      <TextField label='Manufacturer' value={item.drone.manufacturer} readonly/>
                      <TextField label='Mac' value={item.drone.mac} readonly/>
                    </HorizontalLayout>
                    <HorizontalLayout theme="spacing">
                      <TextField label='ipv4' value={item.drone.ipv4} readonly/>
                      <TextField label='ipv6' value={item.drone.ipv6} readonly/>
                      <TextField label='firmware' value={item.drone.firmware} readonly/>
                    </HorizontalLayout>
                    <HorizontalLayout theme="spacing">
                      <TextField label='PositionX' value={item.drone.positionX} readonly/>
                      <TextField label='PositionY' value={item.drone.positionY} readonly/>
                      <TextField label='Altitude' value={item.drone.altitude} readonly/>
                    </HorizontalLayout>
                    <p>Last seen: {(item.interval / 60000).toFixed(0)} minutes ago</p>
                  </VerticalLayout>
              }
         >
           <GridSortColumn path = 'name' flex-grow="1.5" auto-width
              renderer={
                   ({ item }) => <HorizontalLayout theme="spacing">
                       <Avatar name={item.name} colorIndex={item.phone.slice(-1) % 6}></Avatar>
                       <VerticalLayout>
                           <span className={'bold'}>{item.name}</span>
                           <span className={'email'}>{item.email}</span>
                       </VerticalLayout>
                   </HorizontalLayout>
              }
           />
           <GridSortColumn path = 'phone' flex-grow="0.5" />
           <GridSortColumn path = 'distance' flex-grow="0.5"
              header="Closest confirmed distance"
              renderer={
              ({ item }) =>
                   <span>
                       {(item.distance / 1000).toFixed(2)} m
                   </span>
              }
           />
           <GridSortColumn path = 'time' header="Last seen"
               renderer={
               ({ item }) =>
               <span>
                   {getLocaleDate(item.time)}
               </span>
               }
           />
        </Grid>
        <div className={'violatorFooter'}>
            <small className={'time'}>Monitoring stated date: {getLocaleDate(violatorReport.monitoringStartDate)}</small>
            <small className={'time'}>Last updated: {getLocaleDate(violatorReport.lastUpdated)}</small>
            <p><small>*The list will be automatically renewed every one minute. Please click to see violator details in the list. Time zone is UTC.</small></p>
        </div>
    </VerticalLayout>
    );
  }

  function getLocaleDate(dateStr: string) {
    let d = new Date(dateStr);
    return d.toLocaleString(navigator.language);
  }
