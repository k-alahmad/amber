import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTiktok,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
const Footer = () => {
	return (
		<div className='w-full bg-lightBlack h-auto px-44'>
			<div className='flex flex-col px-2 py-4 mx-auto justify-between sm:flex-row text-center text-offWhite'>
				<p className='py-4'>2023 AVA REAL ESTATE, LLC. All rights reserved</p>
				<div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
					<a
						href='https://www.facebook.com/avarealestate.ae'
						aria-label='Visit Our Facebook Page'
						target='_blank'
					>
						<FaFacebook cursor={"pointer"} />
					</a>
					<a
						href='https://www.instagram.com/ava.realestate/'
						aria-label='Visit Our Instegram Page'
						target='_blank'
					>
						<FaInstagram />
					</a>
					<a
						href='https://www.linkedin.com/company/ava-realestate/'
						aria-label='Visit Our Linkedin Page'
						target='_blank'
					>
						<FaLinkedinIn />
					</a>
					<a
						href='https://www.tiktok.com/@avarealestate'
						aria-label='Visit Our tiktok Page'
						target='_blank'
					>
						<FaTiktok />
					</a>
					<a
						href='https://www.youtube.com/@avarealestate'
						aria-label='Visit Our Youtube Channel'
						target='_blank'
					>
						<FaYoutube />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
