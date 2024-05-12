import stETH from "./stETH.svg";
import ankrEth from "./ankrEth.webp";
import cbEth from "./cbETH.svg";
import binance from "./binance.webp";
import liguidStakedEth from "./liguidStakedEth.webp";
import mantle from "./mantle.webp";
import osEth from "./osETH.webp";
import rEth from "./rETH.svg";
import stakeWiseEth from "./stakeWiseEth.webp"


function createData(
    name: string,
    staked: number,
    available: number,
    image: any,
    shortName: string
) {
    return { name, staked, available, image, shortName};
}

export const data = [
    createData("Lido Staked Ether", 159, 6, stETH, "stETH"),
    createData("Coinbase Staked Ether", 237, 9, cbEth, "cbETH"),
    createData("Rocket Pool Ether", 0, 16, rEth, "rETH"),
    createData("Liquid Staked Ether", 15, 3.7, liguidStakedEth, "lsETH"),
    createData("Origin Staked Ether", 78, 0, osEth, "osETH"),
    createData("StakeWise Staked Ehter", 0, 16, stakeWiseEth, "swETH"),
    createData("Mantle Staked Ether", 356, 16, mantle, "msETH"),
    createData("Ankr Staked Ether", 23, 0, ankrEth, "ankrETH"),
    createData("Binance Staked Ether", 0, 13, binance, "bEth"),
];