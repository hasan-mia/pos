import React from "react";

interface BtnProps {
	icon?: React.ReactNode;
	name?: string;
	className?: string;
	color?: string;
	onClick?: () => void;
}

const Button: React.FC<BtnProps> = ({
	icon,
	name,
	className,
	color,
	onClick,
}) => {
	return (
		<button
			className={`flex items-center ${className || ""}`}
			onClick={onClick}
		>
			{icon || null}
			<span style={{ color: color || "" }}>{name}</span>
		</button>
	);
};

export default Button;
