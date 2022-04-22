import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="grid place-content-center text-center">
			<div className="bg-[#EEE] w-screen inline-block align-middle py-4 mb-10">
				<h1 className="text-4xl text-[#21216d] font-extrabold	">
					How is James Superior to Phurup Mabo (2nd CatMan)
				</h1>
			</div>
			<div className="">
				<ul>
					<li>James is be bisexual</li>
				</ul>
			</div>
			<div className="absolute bottom-0 left-0 flex flex-row">
				<img className=" h-[90vh]" src="/catman.png" alt="Catman" />
				<p className="relative top-[70vh] text-4xl">
					← This man however, is not
				</p>
			</div>
		</div>
	);
}
