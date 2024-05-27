import React from "react";

interface ThreeLabelsProps {
	customStyle: string;
	firstLineText: string;
	secondLineText: string;
	thirdLineText: string;
	firstLineStyle: string;
	secondLineStyle: string;
	thirdLineStyle: string;
}

const ThreeLabels: React.FC<ThreeLabelsProps> = ({customStyle, firstLineText, secondLineText, thirdLineText, 
	firstLineStyle, secondLineStyle, thirdLineStyle}) => {

	return (
		<div className={`${customStyle} inline-grid`}>
			<label className={firstLineStyle}>{firstLineText}</label>
			<label className={secondLineStyle}>{secondLineText}</label>
			<label className={thirdLineStyle}>{thirdLineText}</label>
		</div>
	);
}

export default ThreeLabels;
