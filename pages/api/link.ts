import { NextApiRequest, NextApiResponse } from "next";

type Data = {
	link: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const urlLink = "https://github.com/Exclusive-PG/exclusive-ytdownloader-official-site/releases/download/release/link.txt";
	const response = await fetch(urlLink);
	const data = await response.text();
	console.log(data);
	res.status(200).json({ link: data });
}
