
import React, { ReactNode } from "react";

const HomepageCard: React.FC<{customStyle: string, children: ReactNode}> = ({ customStyle, children }) => {

  return (

    <div className={`${customStyle} rounded-lg shadow-md`}>
      {children}
    </div>
  );

} 

export default HomepageCard;

