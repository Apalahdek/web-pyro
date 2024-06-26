import Link from "next/link";

import { ArrowRightIcon } from "@radix-ui/react-icons";

const StayInTheLoop = () => {
	return (
		<section className="container relative z-10 flex flex-col items-center gap-8 px-8 py-32 text-center">
			<h1 className="max-w-3xl py-4 pt-5 pb-3 font-extrabold text-[max(48px,min(5vw,90px))] leading-[1.09] tracking-tighter lg:pb-5">Stay in the loop</h1>
			<div className="flex w-full flex-col gap-8 text-left md:flex-row">
				<Link className="contents" href="https://pyro.host/discord">
					<div className="flex w-full flex-col gap-4 rounded-2xl bg-[#ffffff14] p-8">
						<div className="flex flex-row items-center gap-6 font-bold text-3xl">
							<svg viewBox="0 0 16 16" className="h-12 w-12">
								<path
									fill="currentColor"
									d="M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z"
								/>
							</svg>
							<h2>Discord</h2>
						</div>
						<p className="text-lg">Join our Discord server to chat with fellow Pyro users, get support, and stay up to date with the latest news.</p>
						<div className="flex flex-row items-center gap-4 font-bold text-brand">
							Join
							<ArrowRightIcon className="h-6 w-6" />
						</div>
					</div>
				</Link>
				<Link className="contents" href="https://x.com/withpyro">
					<div className="flex w-full flex-col gap-4 rounded-2xl bg-[#ffffff14] p-8">
						<div className="flex flex-row items-center gap-6 font-bold text-3xl">
							<svg className="h-12 w-12" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
									fill="currentColor"
								/>
							</svg>
							<h2>X / Twitter</h2>
						</div>
						<p className="text-lg">Follow us on Twitter to stay up to date with the latest news, updates, and announcements.</p>
						<div className="flex flex-row items-center gap-4 font-bold text-brand">
							Follow
							<ArrowRightIcon className="h-6 w-6" />
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default StayInTheLoop;
