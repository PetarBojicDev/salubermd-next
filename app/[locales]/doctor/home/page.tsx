import "server-only";
import React from "react";
import styles from "./home.module.css";
import VisitsClient from "./components/VisitsClient";
import Visits from "./components/visits/Visits";

export default function Home() {

  return (
    <div className="mx-auto w-full h-full bg-background inline-flex p-5">
      <div className={`h-full block ${styles.width67}`}>
        <VisitsClient>
          <Visits/>
        </VisitsClient>
        <div className={`w-full ${styles.height5}`}></div>
      </div>
    </div>
  );
}
