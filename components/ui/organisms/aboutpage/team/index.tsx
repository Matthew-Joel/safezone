import React from "react";
import Headings from "../../../common/heading";
import { LogoLinkedin } from "react-ionicons";
import Link from "next/link";

const MeetTeam = () => {
	const teamData = [
		{
			name: "Darey Oloye",
			position: "Founder and CEO",
			linkedinUrl: "#",
			imgUrl: "/images/team/ceo.png",
		},
		{
			name: "Ayo Jerry",
			position: "Technical Lead",
			linkedinUrl: "#",
			imgUrl: "/images/team/tech_lead.png",
		},
		{
			name: "Damilola Onoshi",
			position: "Creative Designer",
			linkedinUrl: "#",
			imgUrl: "/images/team/creative_designer.png",
		},
		{ name: "", position: "", linkedinUrl: "", imgUrl: "" },
	];

	const TeamMemberComponent = ({
		name,
		position,
		linkedinUrl,
		imgUrl,
	}: {
		name: string;
		position: string;
		linkedinUrl?: string;
		imgUrl: string;
	}) => {
		return name && imgUrl ? (
			<div className="text-[#fff] grid gap-2">
				<img src={imgUrl} alt={name} className="gradient-bg border-bg pb-2 pl-2" />
				<h2 className="font-bold text-xl mt-5">{name}</h2>
				<p className="text-sm">{position}</p>
				<div className="flex justify-center items-center">
					<Link href={linkedinUrl || "#"}>
						<LogoLinkedin color="skyblue" height="20px" width="20px" />
					</Link>
				</div>
			</div>
		) : (
			<></>
		);
	};
	return (
		<div className="bg-[#030F35] mt-10">
			<div className="md:mx-14 mx-8 py-14 md:flex md:flex-col-2 justify-center items-center text-center text-white">
				<div className="justify-center my-5">
					<div className="mb-10">
						<Headings title="Meet The Team" />
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 items-center text-center rounded">
						{teamData.map((person, i) => {
							return (
								<TeamMemberComponent
									key={i}
									name={person.name}
									position={person.position}
									linkedinUrl={person.linkedinUrl}
									imgUrl={person.imgUrl}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default MeetTeam;
