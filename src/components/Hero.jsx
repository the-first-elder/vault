import { useGlobalState } from "./store";

const background = "./public/home.jpg";
const Hero = () => {
	const [connectedAccount] = useGlobalState("connectedAccount");

	return (
		<diV
			className=" p-60 md:px-40 "
			style={{ background: `url('${background}') fixed no-repeat top/cover ` }}
		>
			<div className="flex  items-center justify-between text-white py-5">
				<div>
					<h1 className="text-3xl font-bold">
						{" "}
						Streamline Token Distribution:{" "}
					</h1>
					<h2 className="text-3xl font-bold mt-1">
						Register Organizations and Tokens with Ease{" "}
					</h2>
					<h3 className="text-xl font-semibold mt-6">
						{" "}
						Tailor Vesting Periods for Success: Customize Rewards for
						Stakeholders
					</h3>
					<p className="mt-2">Granting Rewards After the Vesting Period</p>
				</div>
				<div className="hidden lg:flex items-center space-x-3 font-semibold opacity-50 "></div>
			</div>
			{connectedAccount ? (
				<div className="flex justify-between items-center ">
					<div className=" flex justify-start items-start pb-5">
						<a
							href={"/Admin"}
							className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl cursor-pointer uppercase shadow-md
              shadow-gray-600 font-bold p-3"
						>
							Organisation Login
						</a>
					</div>
					<div className=" flex pb-5 ">
						<a
							href={"/User"}
							className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl cursor-pointer uppercase shadow-md
              shadow-gray-600 font-bold p-3"
						>
							User Login
						</a>
					</div>
				</div>
			) : (
				<div className="flex justify-center items-center text-yellow-200 text-4xl font-semibold mt-6">
					Connect Your Wallet to Register or Claim Token
				</div>
			)}
		</diV>
	);
};

export default Hero;
