"use client";

interface NavigateLabelProps {
	style: string;
	text: string;
	route: string;
}

export default function NavigateLabel({style, text, route} : NavigateLabelProps) {

	const navigate = () => {
		console.log(route);
	}

  return (
		<>
			<label onClick={() => navigate()} className={style}>{text}</label>
		</>
  );
}
