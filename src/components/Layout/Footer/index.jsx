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
		<div className='grid md:grid-cols-3 gap-x-0 bg-[#101314] w-full  px-[3%] py-[3%] items-center justify-center justify-items-center  '>
			<div className='text-sm text-offWhite items-center justify-center'>
				<p className='py-2'>
					2023 AVA REAL ESTATE, LLC.<br></br> All rights reserved
				</p>
			</div>
			<div className='text-sm'>
				<p className='py-2'>
					<a href='https://avarealestate.ae/privacy-policy/'>
						Privacy & Policy
					</a>
				</p>
			</div>
			<div className='text-base w-[80%] md:w-[50%] text-offWhite '>
				<div className='flex justify-between px-4 text-2xl '>
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
