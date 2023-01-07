//import { violatorList } from 'Frontend/views/violator/violatorList.css'
import type Violator from 'Frontend/generated/com/birdnest/application/Data/Violator';
import { ViolatorEndpoint } from 'Frontend/generated/endpoints';
import { EndpointValidationError } from '@hilla/frontend';
import { useEffect, useState } from 'react';
import { Grid } from '@hilla/react-components/Grid.js'
import { Avatar } from '@hilla/react-components/Avatar.js'
import { GridSortColumn } from '@hilla/react-components/GridSortColumn.js'
import { GridColumn } from '@hilla/react-components/GridColumn.js'
import { VerticalLayout } from '@hilla/react-components/VerticalLayout.js'
import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js'

export default function Violators(){
  const [violators, setViolators] = useState(Array<Violator | any>);
  useEffect(() => {
    (async () => {
        let initial = await ViolatorEndpoint.getViolators();
        setViolators(initial);

        setInterval(async () => {
            setViolators(await ViolatorEndpoint.getViolators());
        }, 20000);
    })();
    return () => { };
  }, []);
  return (
  <Grid items={violators} theme='wrap-cell-content row-stripes'>
    <GridSortColumn path = 'name'
        flex-grow="1.5"
        auto-width
       renderer={
            ({ item }) => <HorizontalLayout theme="spacing">
                <Avatar name={item.name} colorIndex={item.phone.slice(-1) % 6}></Avatar>
                <VerticalLayout>
                    <span className={'name'}>{item.name}</span>
                    <span className={'email'}>
                        {item.email}
                    </span>
                </VerticalLayout>
            </HorizontalLayout>
       }
    />
    <GridSortColumn path = 'phone'
        flex-grow="0.5"
    />
    <GridSortColumn path = 'distance'
       flex-grow="0.5"
       renderer={
       ({ item }) =>
            <span>
                {item.distance.toFixed(2)}
            </span>
       }
    />
    <GridSortColumn path = 'time'
        header="Last violated"
        renderer={
        ({ item }) =>
        <span>
            {getLocalDate(item.time)}
        </span>
        }
    />
  </Grid>
  );
  }

  function getLocalDate(dateStr: string) {
    let d = new Date(dateStr);
    return d.toLocaleString(navigator.language);
  }
  /*
  private nameRenderer
    <GridSortColumn path = 'ago'/>
            <>
                <ul>
                    {violators.map(violator => (
                        <li>{violator.email}</li>
                    ))}
                </ul>
            </>
      <div className={css.navlink}>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Distance</th>
                <th>Time</th>
                <th>Ago</th>
             </tr>
            </thead>
        <tbody>
            {violators.map((violator, index) => (
            <tr key={index}>
                <td　className="name">{violator.name}</td>
                <td>{violator.email}</td>
                <td>{violator.phone}</td>
                <td>{violator.distance}</td>
                <td>{violator.time}</td>
                <td>{violator.ago} minutes</td>
            </tr>
            ))}
        </tbody>
        </table>
  </div>
  */
