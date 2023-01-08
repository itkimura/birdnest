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
  const [violatorReport, setViolatorReport] = useState<ViolatorReport>({ violators: [], lastUpdated: '1970-1-1'});
  useEffect(() =>
  {
    (async () =>{
        let initial = await ViolatorEndpoint.getViolatorReport();
        setViolatorReport(initial);
        setInterval(async () => {
            setViolatorReport(await ViolatorEndpoint.getViolatorReport());
        }, 20000);
    })();
return () => { };
  }, []);
  const [detailsOpenedItem, setDetailsOpenedItem] = useState(Array<Violator | any>);
  return (
    <VerticalLayout>
        <div className={'lastUpdated'}>
            <span>Last updated: {getLocalDate(violatorReport.lastUpdated)}</span><br />
            <small>*The list will be automatically renewed every one minute. Please click to see violator details in the list.</small>
        </div>

         <Grid items={violatorReport.violators} theme='wrap-cell-content row-stripes'
          all-rows-visible
          detailsOpenedItems={detailsOpenedItem}
          onActiveItemChanged={({ detail: { value } }) => setDetailsOpenedItem([value])}
              rowDetailsRenderer={({ item } ) =>
                  <VerticalLayout theme="spacing">
                    <h4>Drone details:</h4>
                    <HorizontalLayout theme="spacing">
                      <TextField label='PositionX' value={item.drone.positionX} readonly/>
                      <TextField label='PositionY' value={item.drone.positionY} readonly/>
                      <TextField label='Altitude' value={item.drone.altitude} readonly/>
                    </HorizontalLayout>
                    <HorizontalLayout theme="spacing">
                      <TextField label='Model' value={item.drone.model} readonly/>
                      <TextField label='Manufacturer' value={item.drone.manufacturer} readonly/>
                      <TextField label='Mac' value={item.drone.mac} readonly/>
                    </HorizontalLayout>
                    <p>Last violated: {item.ago} minutes ago</p>
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
              renderer={
              ({ item }) =>
                   <span>
                       {(item.distance / 1000).toFixed(2)} m
                   </span>
              }
           />
           <GridSortColumn path = 'time' header="Last violated"
               renderer={
               ({ item }) =>
               <span>
                   {getLocalDate(item.time)}
               </span>
               }
           />
        </Grid>
    </VerticalLayout>
    );
  }

  function getLocalDate(dateStr: string) {
    let d = new Date(dateStr);
    return d.toLocaleString(navigator.language);
  }
