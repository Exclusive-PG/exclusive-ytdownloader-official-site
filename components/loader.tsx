import { NextPage } from "next";
import s from "../styles/app/loader.module.scss"
import {useState,useEffect} from "react"
type Props = {
    display:string;
};

const Loader: NextPage<Props> = (props) => {
    useEffect(()=>{
        setStatus(props!.display)
    },[props])

    const [status,setStatus] = useState<string>(" ");
	return (
		<section className={s.loaderPage} style = {{display:status}}>
			<h2 className={s.hd_loader_page}>Exclusive-YTDownloader</h2>

			<svg className={s.pl} viewBox="0 0 64 64" width="64px" height="64px">
				<defs>
					<linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#000" />
						<stop offset="100%" stopColor="#fff" />
					</linearGradient>
					<mask id="grad-mask">
						<rect x="0" y="0" width="64" height="64" fill="url(#grad)" />
					</mask>
				</defs>
				<circle
					className={s.pl__ring}
					cx="32"
					cy="32"
					r="26"
					fill="none"
					stroke="hsl(223,90%,55%)"
					strokeWidth="12"
					strokeDasharray="169.65 169.65"
					strokeDashoffset="-127.24"
					strokeLinecap="round"
					transform="rotate(135)"
				/>
				<g fill="hsl(223,90%,55%)">
					<circle className={s.pl__ball1} cx="32" cy="45" r="6" transform="rotate(14)" />
					<circle className={s.pl__ball2} cx="32" cy="48" r="3" transform="rotate(-21)" />
				</g>
				<g mask="url(#grad-mask)">
					<circle
						className={s.pl__ring}
						cx="32"
						cy="32"
						r="26"
						fill="none"
						stroke="hsl(283,90%,55%)"
						strokeWidth="12"
						strokeDasharray="169.65 169.65"
						strokeDashoffset="-127.24"
						strokeLinecap="round"
						transform="rotate(135)"
					/>
					<g fill="hsl(283,90%,55%)">
						<circle className={s.pl__ball1} cx="32" cy="45" r="6" transform="rotate(14)" />
						<circle className={s.pl__ball2} cx="32" cy="48" r="3" transform="rotate(-21)" />
					</g>
				</g>
			</svg>
		</section>
	);
};
export default Loader;
