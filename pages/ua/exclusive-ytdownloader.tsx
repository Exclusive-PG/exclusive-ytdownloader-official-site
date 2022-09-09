import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/app/mainPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

const ExclusiveYTDownloader: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Exclusive YTDownloader</title>
				<meta name="description" content="Exclusive YTDownloader" />
				<link rel="icon" href="/app.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
			</Head>

			<main className={styles.main}>
				<section className={styles.wrapper_app}>
					<div className={styles.up_block}>
						<div className={styles.poster}>
							<Image src="/exclusive-ytdownloader/main.jpg" alt="poster_app" width={450} height={400} />
						</div>
						<div className={styles.data}>
							<h2 className={styles.title_app}>
								Exclusive YTDownloader <span className={styles.free_version}>FREE</span>
							</h2>
							<div className={styles.systemReq}>СИСТЕМНІ ВИМОГИ (рекомендовано) :</div>
							<div className={styles.os_app}>
								ОС: <span className={styles.marked}>Windows 10</span>
							</div>
							<div className={styles.dev_app}>
								Розробник: <span className={styles.marked}>Exclusive_Developer</span>{" "}
							</div>
							<div className={styles.release_date_app}>
								Дата випуску: <span className={styles.marked}> 6 Жовтня , 2022 р</span>
							</div>
							<div className={styles.storage}>
								Сховище: <span className={styles.marked}> 200 МБ доступного простору</span>
							</div>
							<div className={styles.minScreenSize}>
								Мінімальний розмір екрану : <span className={styles.marked}>1000x800</span>
							</div>
							<div className={styles.minScreenSize}>
								Підтримувані мови : <span className={styles.marked}>Англійська , Українська (скоро)</span>
							</div>
							<div className={styles.downloadBtn}>
								<span>
									<a className={styles.download_link} href="https://bit.ly/3eC7Obj">
										<FontAwesomeIcon icon={faCloudArrowDown} /> Завантажити
									</a>
								</span>
							</div>
						</div>
					</div>
					<div className={styles.down_block}>
                    <h3 className={styles.hdApp}>Попередній перегляд додатку</h3>
						<Swiper
                            className={styles.sliderMain}
							// install Swiper modules
							modules={[Navigation, Pagination]}
							spaceBetween={10}
							slidesPerView={1}
							navigation
							pagination={{ clickable: true }}
							
							onSwiper={(swiper) => console.log(swiper)}
							onSlideChange={() => console.log("slide change")}
						>
							<SwiperSlide className={styles.slideItem}><video src="/exclusive-ytdownloader/preview.mp4" autoPlay muted disablePictureInPicture controls></video></SwiperSlide>
							<SwiperSlide className={styles.slideItem}><img src="/exclusive-ytdownloader/main_screen_app.jpg" alt="poster_app" /></SwiperSlide>
							<SwiperSlide className={styles.slideItem}><img src="/exclusive-ytdownloader/middle_screen.jpg" alt="poster_app" /></SwiperSlide>
							<SwiperSlide className={styles.slideItem}><img src="/exclusive-ytdownloader/data.jpg" alt="poster_app" /></SwiperSlide>
						</Swiper>
					</div>
                    <div className={styles.block_about}>
                    <h3 className={styles.hdApp}>Про додаток</h3>
                        <div className={styles.wrapper_text}>
                            <p>Exclusive-YTDownloader (BETA) спеціальна програма для завантаження контенту з YouTube на ваш комп’ютер, а також включає аналіз даних, історію, швидкі налаштування, простий і сучасний інтерфейс користувача, зручне керування списками.</p>
							<h4>Для прихильників :</h4>
							<ul className={styles.list_features}>
								<li>Автоматичне оновлення</li>
								<li>Доступ до ранніх версій</li>
							</ul>
                        </div>
                    </div>
				</section>
				

                <div className={styles.support_btn}>
					<a href="https://www.buymeacoffee.com/exclusiveDev"><img style={{textAlign:"center"}} src="https://img.buymeacoffee.com/button-api/?text=Прокачай до Pro&slug=exclusiveDev&button_colour=f34336&font_colour=fff&font_family=Poppins&outline_colour=fff&coffee_colour=FFDD00" /></a>
					</div>
					<div className={styles.change_lang_btn}>
                    <Link  href={"/en/exclusive-ytdownloader"}><div className={styles.wrapper_change_lang_btn}>EN<img src="https://img.icons8.com/office/40/000000/usa.png"/></div></Link>
                    </div>
			</main>
		</div>
	);
};
export default ExclusiveYTDownloader;
