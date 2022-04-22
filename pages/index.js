import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="grid place-content-center text-center">
			<div className="bg-[#EEE] lg:w-screen lg:inline-block lg:align-middle lg:py-4 lg:mb-10">
				<h1 className="lg:text-4xl lg:text-[#21216d] lg:font-extrabold lg:block hidden	">
					How is James Superior to Phurup Mabo (2nd CatMan)
				</h1>
			</div>
			<div className="lg:block hidden">
				<ul>
					<li>James is bisexual</li>
					<p className="lg:mx-[33%] lg:w-[33%] lg:block hidden">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
						laudantium, esse temporibus minima architecto perferendis numquam
						pariatur molestias sed cupiditate odio hic, quos ut consequatur
						animi ullam porro est. Vel ab veritatis ipsum nihil error, iusto sed
						tempora, doloribus excepturi unde quam magnam voluptatum natus
						veniam quasi temporibus velit quas sequi rem tempore quidem
						quibusdam. Quasi necessitatibus suscipit assumenda error sint labore
						quaerat odio adipisci, aspernatur nulla cupiditate aliquid enim quo
						cum vero explicabo, in beatae harum vel veritatis voluptas. Laborum
						ipsa eum ab officiis blanditiis ea corporis, Ashish amores homines
						asperiores hic harum corrupti mollitia deserunt et, iusto autem
						tempore repellat magni nostrum numquam. Sapiente, incidunt dolorum.
						Inventore nostrum quisquam fuga fugit assumenda hic nisi voluptates
						id labore obcaecati ipsam quos quam recusandae alias modi, sapiente
						debitis? Alias, enim officiis unde esse sit autem corrupti corporis
						cum cupiditate aperiam, maiores magni eveniet facilis voluptatibus
						totam omnis dolorum nostrum possimus accusantium illo nulla sint.
						Tempore at recusandae impedit quis quas excepturi debitis vero
						consequatur obcaecati reiciendis. Nesciunt quasi aperiam praesentium
						quaerat vel corrupti doloremque, numquam atque reprehenderit vero
						repellat cupiditate sapiente alias id voluptate quisquam, est
						consequatur! Suscipit magnam eaque cum quod facere minima saepe!
						Velit deleniti nesciunt sunt expedita, quod quisquam iure? William
						es melior quam caetera!!
					</p>
				</ul>
			</div>
			<div className="absolute bottom-0 left-0 flex flex-row">
				<img
					className="lg:h-[90vh] h-screen w-auto"
					src="/catman.png"
					alt="Catman"
				/>
				<p className="relative top-[70vh] text-4xl lg:block hidden">
					← This man however, is not
				</p>
			</div>
		</div>
	);
}
