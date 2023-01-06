//import { violatorList } from 'Frontend/views/violator/violatorList.css'
import css from './violators.css';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export default function Violators() {
  return (
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
            <tr>
            </tr>
        </tbody>
        </table>
  </div>
  );
}