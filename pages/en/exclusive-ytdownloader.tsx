import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/app/mainPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper";
import axios from "axios";
import Loader from "../../components/loader";
const ExclusiveYTDownloader: NextPage = () => {
	const [currentLink, setCurrentLink] = useState<string>("");
	const [loader, setLoader] = useState<string>("");
	useEffect(() => {
		axios
			.get("/api/link")
			.then(function (response) {
				const { data } = response;
				setCurrentLink(data.link);
				setTimeout(()=>{setLoader("none")},1000)
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Exclusive YTDownloader</title>
				<meta name="description" content="Exclusive YTDownloader" />
				<link rel="icon" href="/app.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
			</Head>

			<main className={styles.main}>
				<Loader display ={loader}/>
				<section className={styles.wrapper_app}>
					<div className={styles.up_block}>
						<div className={styles.poster}>
							<Image src="/exclusive-ytdownloader/main.jpg" alt="poster_app" width={450} height={400} />
						</div>
						<div className={styles.data}>
							<h2 className={styles.title_app}>
								<span className={styles.name_app}>Exclusive YTDownloader</span> <span className={styles.free_version}>FREE</span>
							</h2>
							<div className={styles.systemReq}>SYSTEM REQUIREMENTS (Recommended) :</div>
							<div className={styles.os_app}>
								OS: <span className={styles.marked}>Windows 10</span>
							</div>
							<div className={styles.dev_app}>
								Developer: <span className={styles.marked}>Exclusive_Developer</span>{" "}
							</div>
							<div className={styles.release_date_app}>
								Release Date: <span className={styles.marked}> 6 Oct,2022</span>
							</div>
							<div className={styles.storage}>
								Storage: <span className={styles.marked}> 200 MB available space</span>
							</div>
							<div className={styles.minScreenSize}>
								Minimum screen size : <span className={styles.marked}>1000x800</span>
							</div>
							<div className={styles.supportedLan}>
								Supported languages : <span className={styles.marked}>English , Ukrainian (soon)</span>
							</div>
							<div className={styles.downloadBtn}>
								<span>
									<a className={styles.download_link} href={currentLink}>
										<FontAwesomeIcon icon={faCloudArrowDown} /> Download
									</a>
								</span>
							</div>
						</div>
					</div>
					<div className={styles.down_block}>
						<h3 className={styles.hdApp}>Preview App</h3>
						<Swiper
							className={styles.sliderMain}
							// install Swiper modules
							modules={[Navigation, Pagination]}
							spaceBetween={10}
							slidesPerView={1}
							navigation
							pagination={{ clickable: true }}
						>
							<SwiperSlide className={styles.slideItem}>
								<video src="/exclusive-ytdownloader/preview.mp4" autoPlay muted disablePictureInPicture controls></video>
							</SwiperSlide>
							<SwiperSlide className={styles.slideItem}>
								<img src="/exclusive-ytdownloader/main_screen_app.jpg" alt="poster_app" />
							</SwiperSlide>
							<SwiperSlide className={styles.slideItem}>
								<img src="/exclusive-ytdownloader/middle_screen.jpg" alt="poster_app" />
							</SwiperSlide>
							<SwiperSlide className={styles.slideItem}>
								<img src="/exclusive-ytdownloader/data.jpg" alt="poster_app" />
							</SwiperSlide>
						</Swiper>
					</div>
					<div className={styles.block_about}>
						<h3 className={styles.hdApp}>About App</h3>
						<div className={styles.wrapper_text}>
							<p>
								Exclusive-YTDownloader (BETA) a special program for downloading content from YouTube to your computer, and also includes data analytics, history, quick settings,
								easy and modern user interface, convenient control of playlists on your PC .
							</p>
							<h4>For supporters :</h4>
							<ul className={styles.list_features}>
								<li>Auto updating app</li>
								<li>Early access for new release version app</li>
							</ul>
						</div>
					</div>
				</section>

				<div className={styles.support_btn}>
					<a href="https://www.buymeacoffee.com/exclusiveDev">
						<img src="https://img.buymeacoffee.com/button-api/?text=Upgrade to Pro Version&slug=exclusiveDev&button_colour=f34336&font_colour=fff&font_family=Poppins&outline_colour=fff&coffee_colour=FFDD00" />
					</a>
				</div>
				<div className={styles.change_lang_btn}>
					<Link href={"/ua/exclusive-ytdownloader"}>
						<div className={styles.wrapper_change_lang_btn}>
							UA
							<img src="https://img.icons8.com/office/40/000000/ukraine.png" />
						</div>
					</Link>
				</div>
			</main>
		</div>
	);
};
export default ExclusiveYTDownloader;
