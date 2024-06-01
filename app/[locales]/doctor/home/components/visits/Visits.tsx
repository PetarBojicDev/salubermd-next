  import React from "react";
  import styles from '../../home.module.css';
  import "server-only";
  import { cookies, headers } from 'next/headers';

  const Visits: React.FC<{pathname: string}> = ({pathname}) => {

    const cookieStore = cookies();
    const tokenCookie = cookieStore.get("token");
    console.log(tokenCookie?.value);

    return (
      <div>
        <p>{tokenCookie?.value}</p>
      </div>
    );
  }

  export default Visits;
